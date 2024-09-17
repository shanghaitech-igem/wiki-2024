import React, { useState, useEffect, useRef } from "react";

import * as styles from "src/styles/modules/tracer.module.scss";

const { tracer } = styles;

interface TracerProps extends React.ImgHTMLAttributes<HTMLImageElement> {}

const Tracer: React.FC<TracerProps> = ({ src, alt, ...props }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const targetPosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      targetPosition.current = { x: event.clientX, y: event.clientY };
    };

    const updatePosition = () => {
      setPosition((prevPosition) => {
        const dx = targetPosition.current.x - prevPosition.x;
        const dy = targetPosition.current.y - prevPosition.y;

        return {
          x: prevPosition.x + dx * 0.1, // Adjust the smoothing factor as needed
          y: prevPosition.y + dy * 0.1,
        };
      });
      requestAnimationFrame(updatePosition);
    };

    window.addEventListener("mousemove", handleMouseMove);
    updatePosition(); // Start the animation loop

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <img
      src={src}
      alt={alt ? alt : "Failed to load the picture: " + src}
      {...props}
      className={tracer}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    />
  );
};

export default Tracer;
