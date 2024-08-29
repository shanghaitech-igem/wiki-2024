import { longModeRatio } from "../variables";
import { computePositionEdge } from "./edgeHandle";

/**
 * Get the center point after moving or scaling
 */
export default function getPositionOnMoveOrScale(
  x: number,
  y: number,
  width: number,
  height: number,
  scale: number,
  toScale: number,
  clientX: number = innerWidth / 2,
  clientY: number = innerHeight / 2,
  offsetX: number = 0,
  offsetY: number = 0
) {
  // Check if the edge is reached
  const [closedEdgeX] = computePositionEdge(x, toScale, width, innerWidth);
  const [closedEdgeY] = computePositionEdge(y, toScale, height, innerHeight);

  const centerClientX = innerWidth / 2;
  const centerClientY = innerHeight / 2;

  // Coordinate offset
  const lastPositionX = centerClientX + x;
  const lastPositionY = centerClientY + y;

  // Adjusted position
  const originX =
    clientX - (clientX - lastPositionX) * (toScale / scale) - centerClientX;
  const originY =
    clientY - (clientY - lastPositionY) * (toScale / scale) - centerClientY;

  // Long image mode has no left/right feedback
  const longModeEdge =
    height / width >= longModeRatio && width * toScale === innerWidth;

  // Halve the distance exceeding the edge
  return {
    x: originX + (longModeEdge ? 0 : closedEdgeX ? offsetX / 2 : offsetX),
    y: originY + (closedEdgeY ? offsetY / 2 : offsetY),
    lastCX: clientX,
    lastCY: clientY,
  };
}
