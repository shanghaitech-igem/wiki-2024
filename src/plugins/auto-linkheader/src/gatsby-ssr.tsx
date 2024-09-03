import React, { ReactElement } from "react";

interface PluginOptions {
  className?: string;
  icon?: boolean | string;
  offsetY?: number;
}

interface RenderBodyParams {
  setHeadComponents: (components: ReactElement[]) => void;
}

const pluginDefaults: Required<PluginOptions> = {
  className: "anchor",
  icon: true,
  offsetY: 0,
};

export const onRenderBody = (
  { setHeadComponents }: RenderBodyParams,
  pluginOptions: PluginOptions
): void => {
  const { className, icon, offsetY } = { ...pluginDefaults, ...pluginOptions };

  const styles = `
    .${className}.before {
      position: absolute;
      top: 0;
      left: 0;
      transform: translateX(-100%);
      padding-right: 4px;
    }
    .${className}.after {
      display: inline-block;
      padding-left: 4px;
    }
    h1 .${className} svg,
    h2 .${className} svg,
    h3 .${className} svg,
    h4 .${className} svg,
    h5 .${className} svg,
    h6 .${className} svg {
      visibility: hidden;
    }
    h1:hover .${className} svg,
    h2:hover .${className} svg,
    h3:hover .${className} svg,
    h4:hover .${className} svg,
    h5:hover .${className} svg,
    h6:hover .${className} svg,
    h1 .${className}:focus svg,
    h2 .${className}:focus svg,
    h3 .${className}:focus svg,
    h4 .${className}:focus svg,
    h5 .${className}:focus svg,
    h6 .${className}:focus svg {
      visibility: visible;
    }
  `;

  const script = `
    document.addEventListener("DOMContentLoaded", function(event) {
      var hash = window.decodeURI(location.hash.replace('#', ''))
      if (hash !== '') {
        var element = document.getElementById(hash)
        if (element) {
          var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
          var clientTop = document.documentElement.clientTop || document.body.clientTop || 0
          var offset = element.getBoundingClientRect().top + scrollTop - clientTop
          setTimeout((function() {
                  window.scrollTo({
                  left: 0,
                  top: offset - ${offsetY},
                  behavior: "instant",
                });
          }), 0)
        }
      }
    })
  `;

  const style = icon ? (
    <style key="gatsby-remark-autolink-headers-style" type="text/css">
      {styles}
    </style>
  ) : null;

  const components: ReactElement[] = [
    style,
    <script
      key="gatsby-remark-autolink-headers-script"
      dangerouslySetInnerHTML={{ __html: script }}
    />,
  ].filter(Boolean) as ReactElement[];

  setHeadComponents(components);
};
