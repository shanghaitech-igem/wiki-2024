import type { GatsbyBrowser } from "gatsby";

export const onInitialClientRender: GatsbyBrowser["onInitialClientRender"] =
  () => {
    const getTargetOffset = (hash: string): number | null => {
      const id = window.decodeURI(hash.replace("#", ""));
      if (id !== "") {
        const element = document.getElementById(id);
        if (element) {
          const scrollTop =
            window.scrollY ||
            document.documentElement.scrollTop ||
            document.body.scrollTop;
          const clientTop =
            document.documentElement.clientTop || document.body.clientTop || 0;
          const computedStyles = window.getComputedStyle(element);
          const scrollMarginTop =
            computedStyles.getPropertyValue("scroll-margin-top") ||
            computedStyles.getPropertyValue("scroll-snap-margin-top") ||
            "0px";
          return (
            element.getBoundingClientRect().top +
            scrollTop -
            parseInt(scrollMarginTop, 10) -
            clientTop
          );
        }
      }
      return null;
    };

    requestAnimationFrame(() => {
      const offset = getTargetOffset(window.location.hash);
      if (offset !== null) {
        window.scrollTo({
          left: 0,
          top: offset,
          behavior: "instant", // Enable smooth scrolling
        });
      }
    });
  };

export const shouldUpdateScroll: GatsbyBrowser["shouldUpdateScroll"] = ({
  routerProps,
  getSavedScrollPosition,
}): [number, number] | boolean => {
  const { pathname, hash } = routerProps.location;

  // Always scroll to the top for the index page
  if (pathname === "/") {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // Instant scrolling
    });
    return false;
  }

  // Handle scrolling for other pages
  if (hash === "") {
    const currentPosition = getSavedScrollPosition(routerProps.location);
    window.scrollTo({
      top: (currentPosition && currentPosition[1]) || 0,
      left: (currentPosition && currentPosition[0]) || 0,
      behavior: "instant", // Instant scrolling
    });
    return false;
  }

  return true;
};
