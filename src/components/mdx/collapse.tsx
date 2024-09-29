import React from "react";
import { useCollapse } from "react-collapsed";
import * as styles from "src/styles/modules/collapse.module.scss";

interface CollapseProps {
  children: React.ReactNode;
}

const Collapse: React.FC<CollapseProps> = ({ children }) => {
  const [isExpanded, setExpanded] = React.useState(false);
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });

  return (
    <div className={styles.collapse}>
      <button
        className={styles.mainButton}
        {...getToggleProps({
          onClick: () => setExpanded((prevExpanded) => !prevExpanded),
        })}
      >
        {isExpanded ? "Collapse" : "Expand"}
      </button>
      <div {...getCollapseProps()}>
        {children}
        <div className={styles.ending}>
          <hr></hr>
          {isExpanded && (
            <button
              className={styles.collapseButton}
              onClick={() => setExpanded(false)}
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
