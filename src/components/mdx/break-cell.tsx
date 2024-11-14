import React from "react";

interface BreakCellProps {
  children: React.ReactNode;
}

const BreakCell: React.FC<BreakCellProps> = ({ children }) => {
  return <div style={{ wordBreak: "break-all" }}>{children}</div>;
};

export default BreakCell;
