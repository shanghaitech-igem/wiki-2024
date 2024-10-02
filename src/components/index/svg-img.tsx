import React from "react";
import parseRemoteURL from "src/utils/remote-url-parser";

interface SvgProps {
  svg: string;
  x: number;
  y: number;
  size?: number;
  rotate?: number;
  reverseX?: boolean;
  className?: string;
}

const SvgImage: React.FC<SvgProps> = ({
  svg,
  x,
  y,
  size,
  rotate,
  reverseX,
  className,
}) => {
  svg = parseRemoteURL(svg);
  return (
    <>
      <img
        className={className}
        src={svg}
        alt=""
        style={{
          width: size ? `${size}px` : "auto",
          position: "absolute",
          rotate: rotate ? `${rotate}deg` : "0deg",
          left: reverseX ? `calc(100% - ${x}px - ${size}px)` : `${x}px`,
          top: y,
          overflow: "visible",
        }}
      />
    </>
  );
};

export default SvgImage;
