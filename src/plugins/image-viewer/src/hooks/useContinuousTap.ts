import { useRef } from "react";
import useDebounceCallback from "./useDebounceCallback";

export type TapFuncType<T> = (...args: T[]) => void;

/**
 * Single and double click event handling
 * @param singleTap - Single click event
 * @param doubleTap - Double click event
 * @return invokeTap
 */
export default function useContinuousTap<T>(
  singleTap: TapFuncType<T>,
  doubleTap: TapFuncType<T>
): TapFuncType<T> {
  // Current continuous click count
  const continuousClick = useRef(0);

  const debounceTap = useDebounceCallback(
    (...args) => {
      continuousClick.current = 0;
      singleTap(...args);
    },
    {
      wait: 300,
    }
  );

  return function invokeTap(...args) {
    continuousClick.current += 1;
    debounceTap(...args);
    // Double click
    if (continuousClick.current >= 2) {
      debounceTap.cancel();
      continuousClick.current = 0;
      doubleTap(...args);
    }
  };
}
