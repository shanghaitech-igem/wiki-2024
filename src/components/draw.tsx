import React, { useRef, useEffect, useCallback } from "react";
import parseRemoteURL from "src/utils/remote-url-parser";

interface Object {
  src: string;
  x: number;
  y: number;
  size: number;
  reverseX?: boolean;
  reverseY?: boolean;
}

const Draw: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const scaleFactor = 0.95;

  const main = {
    src: "server/home/leaf-main.svg",
    x: 0,
    y: 0,
    size: 1200,
    reverseX: true,
  };

  const stems: Object[] = [
    {
      src: "server/home/stem-1.svg",
      x: 250,
      y: 930,
      size: 2800,
      reverseX: true,
    },
  ];

  const leaves: Object[] = [
    {
      src: "server/home/stem-1-leaf-1.svg",
      x: 30,
      y: 1500,
      size: 230,
      reverseX: true,
    },
    {
      src: "server/home/stem-1-leaf-2.svg",
      x: 490,
      y: 1500,
      size: 230,
      reverseX: true,
    },
    {
      src: "server/home/stem-1-leaf-3.svg",
      x: 1050,
      y: 2000,
      size: 230,
      reverseX: true,
    },
    {
      src: "server/home/stem-1-leaf-4.svg",
      x: 800,
      y: 2250,
      size: 230,
      reverseX: true,
    },
    {
      src: "server/home/stem-1-leaf-5.svg",
      x: 1550,
      y: 2600,
      size: 230,
      reverseX: true,
    },
    {
      src: "server/home/stem-1-leaf-6.svg",
      x: 1130,
      y: 2700,
      size: 230,
      reverseX: true,
    },
  ];

  main.src = parseRemoteURL(main.src);
  stems.forEach((stem) => {
    stem.src = parseRemoteURL(stem.src);
  });
  leaves.forEach((leaf) => {
    leaf.src = parseRemoteURL(leaf.src);
  });

  const loadImage = (src: string): Promise<HTMLImageElement> => {
    return new Promise((resolve) => {
      const img = new Image();
      img.src = src;
      img.onload = () => resolve(img);
    });
  };

  const draw = (
    ctx: CanvasRenderingContext2D,
    img: HTMLImageElement,
    leaf: Object,
    canvasWidth: number,
    canvasHeight: number,
    revealProgress: number = 1
  ) => {
    const aspectRatio = img.width / img.height;
    let width, height;

    if (aspectRatio > 1) {
      width = leaf.size * scaleFactor;
      height = (leaf.size / aspectRatio) * scaleFactor;
    } else {
      height = leaf.size * scaleFactor;
      width = leaf.size * aspectRatio * scaleFactor;
    }

    let x = leaf.x * scaleFactor;
    let y = leaf.y * scaleFactor;

    if (leaf.reverseX) {
      x = canvasWidth - x - width;
    }

    if (leaf.reverseY) {
      y = canvasHeight - y - height;
    }

    // Apply reveal effect and opacity
    if (revealProgress < 1) {
      ctx.save();
      ctx.rect(x, y, width, height * revealProgress);
      ctx.clip();
      ctx.drawImage(img, x, y, width, height);
      ctx.restore();
    } else {
      ctx.drawImage(img, x, y, width, height);
    }
  };

  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const drawAll = async (revealProgress: number) => {
      const mainImage = await loadImage(main.src);
      draw(ctx, mainImage, main, canvas.width, canvas.height);

      const leavesImg = await Promise.all(
        leaves.map((leaf) => loadImage(leaf.src))
      );

      const stemsImg = await Promise.all(
        stems.map((stem) => loadImage(stem.src))
      );

      stemsImg.forEach((img, index) => {
        draw(
          ctx,
          img,
          stems[index],
          canvas.width,
          canvas.height,
          revealProgress
        );
      });

      leavesImg.forEach((img, index) => {
        draw(ctx, img, leaves[index], canvas.width, canvas.height);
      });
    };

    const maxLeafY = Math.max(...leaves.map((leaf) => leaf.y + leaf.size));
    const maxStemY = Math.max(...stems.map((stem) => stem.y + stem.size));
    const requiredHeight = Math.max(maxLeafY, maxStemY);

    canvas.width = window.innerWidth;
    canvas.height = requiredHeight * scaleFactor;

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.body.scrollHeight;

      // Assuming you know the footer's height
      const footerHeight = document.querySelector("footer")?.offsetHeight || 0;
      const initialScreenHeight = windowHeight; // 100vh

      const adjustedDocumentHeight =
        documentHeight - footerHeight - initialScreenHeight;

      const revealProgress = Math.min(scrollTop / adjustedDocumentHeight, 1);

      drawAll(revealProgress);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [leaves, stems]);

  useEffect(() => {
    resizeCanvas();

    window.addEventListener("resize", resizeCanvas);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [resizeCanvas]);

  return <canvas ref={canvasRef} />;
};

export default Draw;
