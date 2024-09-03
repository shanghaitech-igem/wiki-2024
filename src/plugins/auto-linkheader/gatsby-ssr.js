"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.onRenderBody = void 0;
const react_1 = __importDefault(require("react"));
const pluginDefaults = {
    className: "anchor",
    icon: true,
    offsetY: 0,
};
const onRenderBody = ({ setHeadComponents }, pluginOptions) => {
    const { className, icon, offsetY } = Object.assign(Object.assign({}, pluginDefaults), pluginOptions);
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
    const style = icon ? (react_1.default.createElement("style", { key: "gatsby-remark-autolink-headers-style", type: "text/css" }, styles)) : null;
    const components = [
        style,
        react_1.default.createElement("script", { key: "gatsby-remark-autolink-headers-script", dangerouslySetInnerHTML: { __html: script } }),
    ].filter(Boolean);
    setHeadComponents(components);
};
exports.onRenderBody = onRenderBody;
