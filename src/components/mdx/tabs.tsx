import React, { ReactElement } from "react";
import { Tab, Tabs as ReactTabs, TabList, TabPanel } from "react-tabs";
import * as styles from "src/styles/modules/tabs.module.scss";

interface TabProps {
  children: React.ReactNode;
  title?: string;
}

interface TabsProps {
  children: ReactElement<TabProps>[];
}

const Tabs: React.FC<TabsProps> = ({ children }) => {
  const hasTitles = children.some((child) => !!child.props.title);

  const renderTabList = () => (
    <TabList className={styles.tabList}>
      {children.map((child, index) => (
        <Tab className={styles.tab} key={index}>
          {child.props.title}
        </Tab>
      ))}
    </TabList>
  );

  const renderTabPanels = () => (
    <div className={styles.tabPanelContainer}>
      {children.map((child, index) => (
        <TabPanel key={index} className={styles.tabPanel}>
          {child.props.children}
        </TabPanel>
      ))}
    </div>
  );

  return (
    <ReactTabs className={styles.tabs}>
      {hasTitles && renderTabList()}
      {renderTabPanels()}
      {!hasTitles && renderTabList()}
    </ReactTabs>
  );
};

export const TabComponent: React.FC<TabProps> = ({ children }) => {
  return <>{children}</>;
};

export { TabComponent as Tab, Tabs };
