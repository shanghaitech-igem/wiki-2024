import React from "react";
import SVG from "react-inlinesvg";

interface SvgProps {
  svg: string;
  x: number;
  y: number;
  size?: number;
  rotate?: number;
  reverseX?: boolean;
  className?: string;
}

const SvgStatic: React.FC<SvgProps> = ({
  svg,
  x,
  y,
  size,
  rotate,
  reverseX,
  className,
}) => {
  return (
    <>
      <div
        className={className}
        style={{
          width: size ? `${size}px` : "auto",
          position: "absolute",
          rotate: rotate ? `${rotate}deg` : "0deg",
          left: reverseX ? `calc(100% - ${x}px - ${size}px)` : `${x}px`,
          top: y,
          overflow: "visible",
        }}
      >
        <SVG src={svg} />
      </div>
    </>
  );
};

export default SvgStatic;
