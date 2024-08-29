import type { MutableRefObject } from "react";
import useAnimationOrigin from "./useAnimationOrigin";
import useTargetScale from "./useTargetScale";

export default function useAnimationPosition(
  visible: boolean | undefined,
  originRef: MutableRefObject<HTMLElement | null> | undefined,
  loaded: boolean,
  x: number,
  y: number,
  width: number,
  height: number,
  scale: number,
  speed: number,
  updateEasing: (pause: boolean) => void
) {
  // Delay updating width/height
  const [autoWidth, autoHeight, autoScale] = useTargetScale(
    width,
    height,
    scale,
    speed,
    updateEasing
  );
  // Animation source handling
  const [easingMode, originRect] = useAnimationOrigin(
    visible,
    originRef,
    loaded,
    speed,
    updateEasing
  );

  // Calculate animation position
  const { T, L, W, H, FIT } = originRect;
  // Offsets, x: 0, y: 0 is centered as the initial position
  const centerWidth = innerWidth / 2;
  const centerHeight = innerHeight / 2;
  const offsetX = centerWidth - (width * scale) / 2;
  const offsetY = centerHeight - (height * scale) / 2;
  // Thumbnail state
  const miniMode = easingMode < 3 || easingMode > 4;
  // If there is a thumbnail, use its position; otherwise, center it
  const translateX = miniMode ? (W ? L : centerWidth) : x + offsetX;
  const translateY = miniMode ? (W ? T : centerHeight) : y + offsetY;

  // Minimum scale value
  const minScale = W / (width * scale) || 0.01;

  // Adapt objectFit to maintain the aspect ratio of the thumbnail
  const currentHeight = miniMode && FIT ? autoWidth * (H / W) : autoHeight;
  // No scaling during initial load
  const currentScale =
    easingMode === 0 ? autoScale : miniMode ? minScale : autoScale;
  const opacity = miniMode ? (FIT ? 1 : 0) : 1;

  return [
    translateX,
    translateY,
    autoWidth,
    currentHeight,
    currentScale,
    opacity,
    easingMode,
    FIT,
  ] as const;
}
