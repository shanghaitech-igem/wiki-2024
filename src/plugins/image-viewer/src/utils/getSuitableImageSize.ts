import { longModeRatio } from "../variables";
import getRotateSize from "./getRotateSize";

/**
 * Get the suitable size for the image
 */
export default function getSuitableImageSize(
  naturalWidth: number,
  naturalHeight: number,
  rotate: number
) {
  const [currentWidth, currentHeight, isVertical] = getRotateSize(
    rotate,
    innerWidth,
    innerHeight
  );

  let y = 0;
  let width = currentWidth;
  let height = currentHeight;

  // Adaptive width and height
  const autoWidth = (naturalWidth / naturalHeight) * currentHeight;
  const autoHeight = (naturalHeight / naturalWidth) * currentWidth;

  if (naturalWidth < currentWidth && naturalHeight < currentHeight) {
    width = naturalWidth;
    height = naturalHeight;
  } else if (naturalWidth < currentWidth && naturalHeight >= currentHeight) {
    width = autoWidth;
  } else if (naturalWidth >= currentWidth && naturalHeight < currentHeight) {
    height = autoHeight;
  } else if (naturalWidth / naturalHeight > currentWidth / currentHeight) {
    height = autoHeight;
  }
  // Long image mode
  else if (naturalHeight / naturalWidth >= longModeRatio && !isVertical) {
    height = autoHeight;
    y = (height - currentHeight) / 2;
  } else {
    width = autoWidth;
  }

  return {
    width,
    height,
    x: 0,
    y,
    pause: true,
  };
}
