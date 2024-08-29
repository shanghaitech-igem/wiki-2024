import { computePositionEdge } from "../utils/edgeHandle";
import getPositionOnMoveOrScale from "../utils/getPositionOnMoveOrScale";
import getRotateSize from "../utils/getRotateSize";
import { defaultSpeed, maxTouchTime } from "../variables";
import useMethods from "./useMethods";

// Edge movement feedback
const rebound = (
  start: number,
  bound: number,
  callback: (spatial: number) => boolean
) =>
  easeOutMove(
    start,
    bound,
    callback,
    defaultSpeed / 4,
    (t) => t,
    () => easeOutMove(bound, start, callback)
  );

/**
 * Physically scroll to a specific position
 */
export default function useScrollPosition<
  C extends (spatial: number) => boolean
>(callbackX: C, callbackY: C, callbackS: C) {
  const callback = useMethods({
    X: (spatial: number) => callbackX(spatial),
    Y: (spatial: number) => callbackY(spatial),
    S: (spatial: number) => callbackS(spatial),
  });

  return (
    x: number,
    y: number,
    lastX: number,
    lastY: number,
    width: number,
    height: number,
    scale: number,
    safeScale: number,
    lastScale: number,
    rotate: number,
    touchedTime: number
  ) => {
    const [currentWidth, currentHeight] = getRotateSize(rotate, width, height);
    // Initial edge trigger state
    const [beginEdgeX, beginX] = computePositionEdge(
      x,
      safeScale,
      currentWidth,
      innerWidth
    );
    const [beginEdgeY, beginY] = computePositionEdge(
      y,
      safeScale,
      currentHeight,
      innerHeight
    );
    const moveTime = Date.now() - touchedTime;

    // If the time is too long or out of safe range, do not execute scroll logic, restore safe range
    if (
      moveTime >= maxTouchTime ||
      safeScale !== scale ||
      Math.abs(lastScale - scale) > 1
    ) {
      // Calculate the center scaling point
      const { x: nextX, y: nextY } = getPositionOnMoveOrScale(
        x,
        y,
        width,
        height,
        scale,
        safeScale
      );
      const targetX = beginEdgeX ? beginX : nextX !== x ? nextX : null;
      const targetY = beginEdgeY ? beginY : nextY !== y ? nextY : null;

      if (targetX !== null) {
        easeOutMove(x, targetX, callback.X);
      }
      if (targetY !== null) {
        easeOutMove(y, targetY, callback.Y);
      }
      if (safeScale !== scale) {
        easeOutMove(scale, safeScale, callback.S);
      }
      return;
    }

    // Initial speed
    const speedX = (x - lastX) / moveTime;
    const speedY = (y - lastY) / moveTime;
    const speedT = Math.sqrt(speedX ** 2 + speedY ** 2);
    // Check if touching the edge
    let edgeX = false;
    let edgeY = false;

    scrollMove(speedT, (spatial) => {
      const nextX = x + spatial * (speedX / speedT);
      const nextY = y + spatial * (speedY / speedT);

      const [isEdgeX, currentX] = computePositionEdge(
        nextX,
        scale,
        currentWidth,
        innerWidth
      );
      const [isEdgeY, currentY] = computePositionEdge(
        nextY,
        scale,
        currentHeight,
        innerHeight
      );

      if (isEdgeX && !edgeX) {
        edgeX = true;
        if (beginEdgeX) {
          easeOutMove(nextX, currentX, callback.X);
        } else {
          rebound(currentX, nextX + (nextX - currentX), callback.X);
        }
      }

      if (isEdgeY && !edgeY) {
        edgeY = true;
        if (beginEdgeY) {
          easeOutMove(nextY, currentY, callback.Y);
        } else {
          rebound(currentY, nextY + (nextY - currentY), callback.Y);
        }
      }
      // Stop scrolling if touching both edges
      if (edgeX && edgeY) {
        return false;
      }

      const resultX = edgeX || callback.X(currentX);
      const resultY = edgeY || callback.Y(currentY);
      return resultX && resultY;
    });
  };
}

// Acceleration
const acceleration = -0.001;
// Resistance
const resistance = 0.0002;

/**
 * Scroll to a stop using speed
 */
function scrollMove(
  initialSpeed: number,
  callback: (spatial: number) => boolean
) {
  let v = initialSpeed;
  let s = 0;
  let lastTime: number | undefined;
  let frameId = 0;

  const calcMove = (now: number) => {
    if (!lastTime) {
      lastTime = now;
    }
    const dt = now - lastTime;
    const direction = Math.sign(initialSpeed);
    const a = direction * acceleration;
    const f = Math.sign(-v) * v ** 2 * resistance;
    const ds = v * dt + ((a + f) * dt ** 2) / 2;
    v += (a + f) * dt;

    s += ds;
    // Move to s
    lastTime = now;

    if (direction * v <= 0) {
      caf();
      return;
    }

    if (callback(s)) {
      raf();
      return;
    }
    caf();
  };
  raf();

  function raf() {
    frameId = requestAnimationFrame(calcMove);
  }
  function caf() {
    cancelAnimationFrame(frameId);
  }
}

/**
 * Easing function
 */
const easeOutQuart = (x: number) => 1 - (1 - x) ** 4;

/**
 * Easing callback
 */
function easeOutMove(
  start: number,
  end: number,
  callback: (spatial: number) => boolean,
  speed = defaultSpeed,
  easing = easeOutQuart,
  complete?: () => void
) {
  const distance = end - start;
  if (distance === 0) {
    return;
  }

  const startTime = Date.now();
  let frameId = 0;

  const calcMove = () => {
    const time = Math.min(1, (Date.now() - startTime) / speed);
    const result = callback(start + easing(time) * distance);

    if (result && time < 1) {
      raf();
      return;
    }
    cancelAnimationFrame(frameId);
    if (time >= 1 && complete) {
      complete();
    }
  };
  raf();

  function raf() {
    frameId = requestAnimationFrame(calcMove);
  }
}
