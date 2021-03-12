import React from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

function Ad({ src, link, alt, text, ...rest }) {
  return (
    <div {...rest}>
      <a href={link} title={alt}>
        <img
          src={src.startsWith("http:") ? src : useBaseUrl(src)}
          alt={alt}
          className={styles.adImage}
        />
      </a>
      {text && <p>{text}</p>}
    </div>
  );
}
export default Ad;
