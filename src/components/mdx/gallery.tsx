import React from "react";
import { PhotoProvider, PhotoView } from "src/plugins/image-viewer";
import * as styles from "src/styles/modules/gallery.module.scss";
import parseRemoteURL from "src/utils/remote-url-parser";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

interface GalleryProps {
  srcList: string[];
  title?: string;
  width?: string;
  height?: string;
}

const Gallery: React.FC<GalleryProps> = ({ srcList, title, width, height }) => {
  // Parse URLs
  const parsedUrls = srcList.map((url) => parseRemoteURL(url));

  return (
    <PhotoProvider maskOpacity={0.8}>
      <Tabs forceRenderTabPanel>
        {parsedUrls.map((url, index) => (
          <TabPanel
            key={`tabpanel-${index}`}
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
        <TabList className={styles.tabList}>
          {parsedUrls.map((url, index) => (
            <Tab className={styles.tab} key={`tab-${url}`}>
              <img src={url} alt={`Thumbnail ${index + 1}`} />
            </Tab>
          ))}
        </TabList>
      </Tabs>
    </PhotoProvider>
  );
};

export default Gallery;
