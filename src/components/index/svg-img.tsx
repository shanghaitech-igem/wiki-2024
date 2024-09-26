import React from "react";

interface SvgProps {
  src: string;
  x: number;
  y: number;
  size?: number;
  rotate?: number;
  reverseX?: boolean;
}

const SvgImage: React.FC<SvgProps> = ({
  src,
  x,
  y,
  size,
  rotate,
  reverseX,
}) => {
  return (
    <>
      <img
        src={src}
        alt=""
        style={{
          width: size ? `${size}px` : "auto",
          position: "absolute",
          rotate: rotate ? `${rotate}deg` : "0deg",
          left: reverseX ? `calc(100% - ${x}px - ${size}px)` : `${x}px`,
          top: y,
        }}
      />
      <img
        src={src}
        alt=""
        style={{
          width: size ? `${size}px` : "auto",
          position: "relative",
          visibility: "hidden",            
        }}
      />
    </>
  );
};

export default SvgImage;
