import { useRef, useMemo } from "react";

/**
 * Logic branching variable handling
 * This hook does not trigger additional renders
 */
export default function useForkedVariable<T>(
  initial: T,
  updater: (modify: (variable: T) => void) => void
) {
  // Initial forked variable
  const forkedRef = useRef(initial);

  function modify(next: T) {
    forkedRef.current = next;
  }

  useMemo(() => {
    // Synchronize the internal forked variable when parameters change
    updater(modify);
  }, [initial]);

  return [forkedRef.current, modify] as const;
}
