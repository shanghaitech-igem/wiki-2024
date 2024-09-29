import React from "react";
import { PhotoProvider, PhotoView } from "src/plugins/image-viewer";
import * as styles from "src/styles/modules/gallery.module.scss";
import parseRemoteURL from "src/utils/remote-url-parser";
import { Tab, Tabs as ReactTabs, TabList, TabPanel } from "react-tabs";

interface TabsProps {
  srcList: string[];
  title?: string;
  width?: string;
  height?: string;
}

const Tabs: React.FC<TabsProps> = ({ srcList, title, width, height }) => {
  // Parse URLs
  const parsedUrls = srcList.map((url) => parseRemoteURL(url));

  return (
    <PhotoProvider>
      <ReactTabs>
        <TabList className={styles.tabList}>
          {parsedUrls.map((url, index) => (
            <Tab className={styles.tab} key={index}>{`Image ${index + 1}`}</Tab>
          ))}
        </TabList>
        {parsedUrls.map((url, index) => (
          <TabPanel
            key={index}
            style={{ width: `${width}px`, height: `${height}px` }}
            className={styles.tabPanel}
          >
            <PhotoView src={url}>
              <img
                src={url}
                alt={`Failed to load the picture: ${url}`}
                title={title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
              />
            </PhotoView>
          </TabPanel>
        ))}
      </ReactTabs>
    </PhotoProvider>
  );
};

export default Tabs;
