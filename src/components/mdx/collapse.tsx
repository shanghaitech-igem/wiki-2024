import React, { useRef } from "react";
import { useCollapse } from "react-collapsed";
import * as styles from "src/styles/modules/collapse.module.scss";

interface CollapseProps {
  children: React.ReactNode;
  title?: string; // Optional title prop
}

const Collapse: React.FC<CollapseProps> = ({ children, title }) => {
  const [isExpanded, setExpanded] = React.useState(false);
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });
  const expandButtonRef = useRef<HTMLButtonElement | null>(null);

  const handleCollapseClick = () => {
    setExpanded(false);
    if (expandButtonRef.current) {
      expandButtonRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={styles.collapse}>
      <button
        className={styles.mainButton}
        {...getToggleProps({
          onClick: () => setExpanded((prevExpanded) => !prevExpanded),
          ref: expandButtonRef,
        })}
      >
        {title
          ? isExpanded
            ? `Collapse: ${title}`
            : `Expand: ${title}`
          : isExpanded
          ? "Collapse"
          : "Expand"}
      </button>
      <div {...getCollapseProps()}>
        {children}
        <div className={styles.ending}>
          <hr />
          {isExpanded && (
            <button
              className={styles.collapseButton}
              onClick={handleCollapseClick}
            >
              Collapse
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Collapse;
