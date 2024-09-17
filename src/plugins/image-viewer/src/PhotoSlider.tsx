import React, { useRef, useState } from "react";
import type {
  DataType,
  PhotoProviderBase,
  OverlayRenderProps,
  ReachType,
} from "./types";
import {
  defaultEasing,
  defaultSpeed,
  defaultOpacity,
  horizontalOffset,
  maxMoveOffset,
} from "./variables";
import isTouchDevice from "./utils/isTouchDevice";
import { limitNumber } from "./utils/limitTarget";
import useIsomorphicLayoutEffect from "./hooks/useIsomorphicLayoutEffect";
import useAdjacentImages from "./hooks/useAdjacentImages";
import useSetState from "./hooks/useSetState";
import useEventListener from "./hooks/useEventListener";
import useAnimationVisible from "./hooks/useAnimationVisible";
import useMethods from "./hooks/useMethods";
import SlidePortal from "./components/SlidePortal";
import CloseIcon from "./components/CloseIcon";
import ArrowLeft from "./components/ArrowLeft";
import ArrowRight from "./components/ArrowRight";
import PreventScroll from "./components/PreventScroll";
import PhotoBox from "./PhotoBox";
import "./styles/PhotoSlider.scss";

export interface IPhotoSliderProps extends PhotoProviderBase {
  // List of images
  images: DataType[];
  // Current index of the image
  index?: number;
  // Callback for index change
  onIndexChange?: (index: number) => void;
  // Visibility
  visible: boolean;
  // Close callback
  onClose: (evt?: React.MouseEvent | React.TouchEvent) => void;
  // Callback after close animation ends
  afterClose?: () => void;
}

type PhotoSliderState = {
  // Offset
  x: number;
  // Indicates if the image is being touched
  touched: boolean;
  // Whether to pause transition
  pause: boolean;
  // Starting x coordinate when touch begins
  lastCX: number | undefined;
  // Starting y coordinate when touch begins
  lastCY: number | undefined;
  // Background opacity
  bg: number | null | undefined;
  // Last background opacity when closed
  lastBg: number | null | undefined;
  // Whether to show overlay
  overlay: boolean;
  // Whether it is in minimal state, can be pulled down to close
  minimal: boolean;
  // Scale
  scale: number;
  // Rotation
  rotate: number;
  // Scale callback
  onScale?: (scale: number) => void;
  // Rotate callback
  onRotate?: (rotate: number) => void;
};

const initialState: PhotoSliderState = {
  x: 0,
  touched: false,
  pause: false,
  lastCX: undefined,
  lastCY: undefined,
  bg: undefined,
  lastBg: undefined,
  overlay: true,
  minimal: true,
  scale: 1,
  rotate: 0,
};

export default function PhotoSlider(props: IPhotoSliderProps) {
  const {
    loop = 3,
    speed: speedFn,
    easing: easingFn,
    photoClosable,
    maskClosable = true,
    maskOpacity = defaultOpacity,
    pullClosable = true,
    bannerVisible = true,
    overlayRender,
    toolbarRender,
    className,
    maskClassName,
    photoClassName,
    photoWrapClassName,
    loadingElement,
    brokenElement,
    images,
    index: controlledIndex = 0,
    onIndexChange: controlledIndexChange,
    visible,
    onClose,
    afterClose,
    portalContainer,
  } = props;

  const [state, updateState] = useSetState(initialState);
  const [innerIndex, updateInnerIndex] = useState(0);

  const {
    x,
    touched,
    pause,

    lastCX,
    lastCY,

    bg = maskOpacity,
    lastBg,
    overlay,
    minimal,

    scale,
    rotate,
    onScale,
    onRotate,
  } = state;

  // Controlled index
  const isControlled = props.hasOwnProperty("index");
  const index = isControlled ? controlledIndex : innerIndex;
  const onIndexChange = isControlled ? controlledIndexChange : updateInnerIndex;
  // Inner virtual index
  const virtualIndexRef = useRef(index);

  // Current image
  const imageLength = images.length;
  const currentImage: DataType | undefined = images[index];

  // check if enable loop
  // noinspection SuspiciousTypeOfGuard
  const enableLoop = typeof loop === "boolean" ? loop : imageLength > loop;

  // Display animation processing
  const [realVisible, activeAnimation, onAnimationEnd] = useAnimationVisible(
    visible,
    afterClose
  );

  useIsomorphicLayoutEffect(() => {
    // Show the popup layer and correct the pointer
    if (realVisible) {
      updateState({
        pause: true,
        x: index * -(innerWidth + horizontalOffset),
      });
      virtualIndexRef.current = index;
      return;
    }
    // Clear state after closing
    updateState(initialState);
  }, [realVisible]);

  const { close, changeIndex } = useMethods({
    close(evt?: React.MouseEvent | React.TouchEvent) {
      if (onRotate) {
        onRotate(0);
      }
      updateState({
        overlay: true,
        // Record the current opacity when closing
        lastBg: bg,
      });
      onClose(evt);
    },
    changeIndex(nextIndex: number, isPause: boolean = false) {
      // Current index
      const currentIndex = enableLoop
        ? virtualIndexRef.current + (nextIndex - index)
        : nextIndex;
      const max = imageLength - 1;
      // Virtual index
      // In non-loop mode, limit the range
      const limitIndex = limitNumber(currentIndex, 0, max);
      const nextVirtualIndex = enableLoop ? currentIndex : limitIndex;
      // Single screen width
      const singlePageWidth = innerWidth + horizontalOffset;

      updateState({
        touched: false,
        lastCX: undefined,
        lastCY: undefined,
        x: -singlePageWidth * nextVirtualIndex,
        pause: isPause,
      });

      virtualIndexRef.current = nextVirtualIndex;
      // Update the real index
      const realLoopIndex =
        nextIndex < 0 ? max : nextIndex > max ? 0 : nextIndex;
      if (onIndexChange) {
        onIndexChange(enableLoop ? realLoopIndex : limitIndex);
      }
    },
  });

  useEventListener("keydown", (evt: KeyboardEvent) => {
    if (visible) {
      switch (evt.key) {
        case "ArrowLeft":
          changeIndex(index - 1, true);
          break;
        case "ArrowRight":
          changeIndex(index + 1, true);
          break;
        case "Escape":
          close();
          break;
        default:
      }
    }
  });

  function handlePhotoTap(closeable: boolean | undefined) {
    return closeable ? close() : updateState({ overlay: !overlay });
  }

  function handleResize() {
    updateState({
      x: -(innerWidth + horizontalOffset) * index,
      lastCX: undefined,
      lastCY: undefined,
      pause: true,
    });
    virtualIndexRef.current = index;
  }

  function handleReachVerticalMove(clientY: number, nextScale?: number) {
    if (lastCY === undefined) {
      updateState({
        touched: true,
        lastCY: clientY,
        bg,
        minimal: true,
      });
      return;
    }
    const opacity =
      maskOpacity === null
        ? null
        : limitNumber(
            maskOpacity,
            0.01,
            maskOpacity - Math.abs(clientY - lastCY) / 100 / 4
          );

    updateState({
      touched: true,
      lastCY,
      bg: nextScale === 1 ? opacity : maskOpacity,
      minimal: nextScale === 1,
    });
  }

  function handleReachHorizontalMove(clientX: number) {
    if (lastCX === undefined) {
      updateState({
        touched: true,
        lastCX: clientX,
        x,
        pause: false,
      });
      return;
    }
    const originOffsetClientX = clientX - lastCX;
    let offsetClientX = originOffsetClientX;

    // The distance exceeds half for the first and last images
    if (
      !enableLoop &&
      ((index === 0 && originOffsetClientX > 0) ||
        (index === imageLength - 1 && originOffsetClientX < 0))
    ) {
      offsetClientX = originOffsetClientX / 2;
    }

    updateState({
      touched: true,
      lastCX,
      x:
        -(innerWidth + horizontalOffset) * virtualIndexRef.current +
        offsetClientX,
      pause: false,
    });
  }

  function handleReachMove(
    reachPosition: ReachType,
    clientX: number,
    clientY: number,
    nextScale?: number
  ) {
    if (reachPosition === "x") {
      handleReachHorizontalMove(clientX);
    } else if (reachPosition === "y") {
      handleReachVerticalMove(clientY, nextScale);
    }
  }

  function handleReachUp(clientX: number, clientY: number) {
    const offsetClientX = clientX - (lastCX ?? clientX);
    const offsetClientY = clientY - (lastCY ?? clientY);
    let willClose = false;
    // Next image
    if (offsetClientX < -maxMoveOffset) {
      changeIndex(index + 1);
      return;
    }
    // Previous image
    if (offsetClientX > maxMoveOffset) {
      changeIndex(index - 1);
      return;
    }
    const singlePageWidth = innerWidth + horizontalOffset;
    // Current offset
    const currentTranslateX = -singlePageWidth * virtualIndexRef.current;

    if (Math.abs(offsetClientY) > 100 && minimal && pullClosable) {
      willClose = true;
      close();
    }
    updateState({
      touched: false,
      x: currentTranslateX,
      lastCX: undefined,
      lastCY: undefined,
      bg: maskOpacity,
      overlay: willClose ? true : overlay,
    });
  }
  // Get adjacent images
  const adjacentImages = useAdjacentImages(images, index, enableLoop);

  if (!realVisible) {
    return null;
  }

  const currentOverlayVisible = overlay && !activeAnimation;
  // Use the opacity saved during the closing process
  const currentOpacity = visible ? bg : lastBg;
  // Overlay parameters
  const overlayParams: OverlayRenderProps | undefined = onScale &&
    onRotate && {
      images,
      index,
      visible,
      onClose: close,
      onIndexChange: changeIndex,
      overlayVisible: currentOverlayVisible,
      overlay: currentImage && currentImage.overlay,
      scale,
      rotate,
      onScale,
      onRotate,
    };
  // Animation duration
  const currentSpeed = speedFn ? speedFn(activeAnimation) : defaultSpeed;
  const currentEasing = easingFn ? easingFn(activeAnimation) : defaultEasing;
  const slideSpeed = speedFn ? speedFn(3) : defaultSpeed + 200;
  const slideEasing = easingFn ? easingFn(3) : defaultEasing;

  return (
    <SlidePortal
      className={`PhotoView-Portal${
        !currentOverlayVisible ? " PhotoView-Slider__clean" : ""
      }${!visible ? " PhotoView-Slider__willClose" : ""}${
        className ? ` ${className}` : ""
      }`}
      role="dialog"
      onClick={(e) => e.stopPropagation()}
      container={portalContainer}
    >
      {visible && <PreventScroll />}
      <div
        className={`PhotoView-Slider__Backdrop${
          maskClassName ? ` ${maskClassName}` : ""
        }${
          activeAnimation === 1
            ? " PhotoView-Slider__fadeIn"
            : activeAnimation === 2
            ? " PhotoView-Slider__fadeOut"
            : ""
        }`}
        style={{
          background: currentOpacity
            ? `rgba(15, 15, 15, ${currentOpacity})`
            : undefined,
          transitionTimingFunction: currentEasing,
          transitionDuration: `${touched ? 0 : currentSpeed}ms`,
          animationDuration: `${currentSpeed}ms`,
        }}
        onAnimationEnd={onAnimationEnd}
      />
      {bannerVisible && (
        <div className="PhotoView-Slider__BannerWrap">
          <div className="PhotoView-Slider__Counter">
            {index + 1} / {imageLength}
          </div>
          <div className="PhotoView-Slider__BannerRight">
            {toolbarRender && overlayParams && toolbarRender(overlayParams)}
            <CloseIcon
              className="PhotoView-Slider__toolbarIcon"
              onClick={close}
            />
          </div>
        </div>
      )}
      {adjacentImages.map((item: DataType, currentIndex) => {
        // The index position before interception
        const nextIndex =
          !enableLoop && index === 0
            ? index + currentIndex
            : virtualIndexRef.current - 1 + currentIndex;

        return (
          <PhotoBox
            key={enableLoop ? `${item.key}/${item.src}/${nextIndex}` : item.key}
            item={item}
            speed={currentSpeed}
            easing={currentEasing}
            visible={visible}
            onReachMove={handleReachMove}
            onReachUp={handleReachUp}
            onPhotoTap={() => handlePhotoTap(photoClosable)}
            onMaskTap={() => handlePhotoTap(maskClosable)}
            wrapClassName={photoWrapClassName}
            className={photoClassName}
            style={{
              left: `${(innerWidth + horizontalOffset) * nextIndex}px`,
              transform: `translate3d(${x}px, 0px, 0)`,
              transition:
                touched || pause
                  ? undefined
                  : `transform ${slideSpeed}ms ${slideEasing}`,
            }}
            loadingElement={loadingElement}
            brokenElement={brokenElement}
            onPhotoResize={handleResize}
            isActive={virtualIndexRef.current === nextIndex}
            expose={updateState}
          />
        );
      })}
      {!isTouchDevice && bannerVisible && (
        <>
          {(enableLoop || index !== 0) && (
            <div
              className="PhotoView-Slider__ArrowLeft"
              onClick={() => changeIndex(index - 1, true)}
            >
              <ArrowLeft />
            </div>
          )}
          {(enableLoop || index + 1 < imageLength) && (
            <div
              className="PhotoView-Slider__ArrowRight"
              onClick={() => changeIndex(index + 1, true)}
            >
              <ArrowRight />
            </div>
          )}
        </>
      )}
      {overlayRender && overlayParams && (
        <div className="PhotoView-Slider__Overlay">
          {overlayRender(overlayParams)}
        </div>
      )}
    </SlidePortal>
  );
}
