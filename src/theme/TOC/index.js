import React from "react";
import OriginalTOC from "@theme-original/TOC";
import Ad from "../../components/Ad";
import adConfig from "../../components/Ad/config";
import styles from "./styles.module.css";

// import clsx from "clsx";

function TOC({ ...rest }) {
  const { sidebar } = adConfig;

  return (
    <div className={styles.sidebarContainer}>
      <OriginalTOC {...rest} />
      {/* <div className={styles.ads}>
        {sidebar.map(({ id, alt, imageSrc, link }) => (
          <Ad key={id} link={link} src={imageSrc} alt={alt} />
        ))}
      </div> */}
    </div>
  );
}

export default TOC;
