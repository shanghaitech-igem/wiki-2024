import { useReducer, useRef } from "react";
import type { ActiveAnimationType } from "../types";
import useForkedVariable from "./useForkedVariable";

/**
 * Animation close handling for the actual close state
 * Implemented through the onAnimationEnd callback to achieve leaveCallback
 */
export default function useAnimationVisible(
  visible: boolean | undefined,
  afterClose?: () => void
): [
  realVisible: boolean | undefined,
  activeAnimation: ActiveAnimationType,
  onAnimationEnd: () => void
] {
  const [, handleRender] = useReducer((c) => !c, false);

  const activeAnimation = useRef<ActiveAnimationType>(0);

  // Visible state branch
  const [realVisible, modifyRealVisible] = useForkedVariable(
    visible,
    (modify) => {
      // Visible state: set enter animation
      if (visible) {
        modify(visible);
        activeAnimation.current = 1;
      } else {
        activeAnimation.current = 2;
      }
    }
  );

  function onAnimationEnd() {
    // Trigger rendering after the animation ends
    handleRender();
    // End of animation: set hidden state
    if (activeAnimation.current === 2) {
      modifyRealVisible(false);
      // Trigger hide callback
      if (afterClose) {
        afterClose();
      }
    }
    // Reset state
    activeAnimation.current = 0;
  }

  return [
    /**
     * Actual visible state
     */
    realVisible,
    /**
     * Active animation
     */
    activeAnimation.current,
    /**
     * Callback after animation ends
     */
    onAnimationEnd,
  ];
}
