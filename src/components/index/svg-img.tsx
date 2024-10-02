import React from "react";
import parseRemoteURL from "src/utils/remote-url-parser";

interface SvgProps {
  src: string;
  x: number;
  y: number;
  size?: number;
  rotate?: number;
  reverseX?: boolean;
  className?: string;
}

const SvgImage: React.FC<SvgProps> = ({
  src,
  x,
  y,
  size,
  rotate,
  reverseX,
  className,
}) => {
  src = parseRemoteURL(src);
  return (
    <>
      <img
        className={className}
        src={src}
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
