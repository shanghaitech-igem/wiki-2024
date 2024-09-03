let offsetY: number = 0;

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
        clientTop -
        offsetY
      );
    }
  }
  return null;
};

interface PluginOptions {
  offsetY?: number;
}

export const onInitialClientRender = (
  _: unknown,
  pluginOptions: PluginOptions
) => {
  if (pluginOptions.offsetY) {
    offsetY = pluginOptions.offsetY;
  }
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

interface RouterProps {
  location: {
    hash: string;
  };
}

export const shouldUpdateScroll = ({
  routerProps: { location },
}: {
  routerProps: RouterProps;
}): [number, number] | boolean => {
  const offset = getTargetOffset(location.hash);
  return offset !== null ? [0, offset] : true;
};
