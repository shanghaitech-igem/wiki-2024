import React, { useRef, useEffect, useCallback } from "react";


const SvgCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  let svgUrl = "home/leaf-main.svg";

  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = new Image();
    img.src = svgUrl;

    img.onload = () => {
      // Calculate aspect ratio
      const aspectRatio = img.height / img.width;

      // Set canvas width to window width and height according to aspect ratio
      canvas.width = window.innerWidth;
      canvas.height = window.innerWidth * aspectRatio;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    };
  }, [svgUrl]);

  useEffect(() => {
    resizeCanvas();

    window.addEventListener("resize", resizeCanvas);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [resizeCanvas]);

  return <canvas ref={canvasRef} />;
};

export default SvgCanvas;
