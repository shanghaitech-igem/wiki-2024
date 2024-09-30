// CustomCursor.tsx
import React from "react";
import parseRemoteURL from "src/utils/remote-url-parser";
interface CursorProps {
  svgURL?: string | null;
  children?: React.ReactNode;
}

const Cursor: React.FC<CursorProps> = ({ svgURL, children }) => {
  if (!svgURL) {
    return <>{children}</>;
  }
  svgURL = parseRemoteURL(svgURL);
  return (
    <div
      ref={(node) => {
        if (node) {
          node.style.setProperty(
            "cursor",
            `url('${svgURL}') 0 0, auto`,
            "important"
          );
        }
      }}
    >
      {children}
    </div>
  );
};

export default Cursor;
