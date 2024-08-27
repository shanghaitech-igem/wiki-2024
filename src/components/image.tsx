import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";

import "react-photo-view/dist/react-photo-view.css";
import "../styles/image.global.scss";

interface ImageProps {
  url: string;
  alt?: string;
}

export default function Image({ url, alt }: ImageProps) {
  return (
    <PhotoProvider>
      <PhotoView src={url}>
        <img src={url} alt={alt ? alt : "Failed to load the picture: " + url} />
      </PhotoView>
    </PhotoProvider>
  );
}
