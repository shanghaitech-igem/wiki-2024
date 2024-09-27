import React from "react";

interface SvgProps {
  Component: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  x: number;
  y: number;
  size?: number;
  rotate?: number;
  reverseX?: boolean;
  className?: string;
}

const SvgStatic: React.FC<SvgProps> = ({
  Component,
  x,
  y,
  size,
  rotate,
  reverseX,
  className,
}) => {
  return (
    <>
      <Component
        className={className}
        style={{
          width: size ? `${size}px` : "auto",
          position: "absolute",
          rotate: rotate ? `${rotate}deg` : "0deg",
          left: reverseX ? `calc(100% - ${x}px - ${size}px)` : `${x}px`,
          top: y,
        }}
      />
      <Component
        className={className}
        style={{
          width: size ? `${size}px` : "auto",
          position: "relative",
          visibility: "hidden",
        }}
      />
    </>
  );
};

export default SvgStatic;
