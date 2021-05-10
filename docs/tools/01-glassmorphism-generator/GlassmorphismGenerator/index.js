import React, { useState } from "react";
import styles from "./style.module.css";
import background from "./background.png";
import CodeBlock from "@theme/CodeBlock";
import Link from "@docusaurus/Link";

function GlassmorphismGenerator() {
  const [opacity, setOpacity] = useState(0.2);
  const [blur, setBlur] = useState(2);
  const [radius, setRadius] = useState(4);
  const [color, setColor] = useState("#ffffff");

  return (
    <div>
      <div className={styles.backgroundContainer}>
        <img src={background} alt="" className={styles.background} />
        <div className={styles.bgRect}></div>
        <div className={styles.centerContainer}>
          <div className={styles.text}>GLASSMPORPHISM</div>
          <div
            className={styles.circleLeft}
            style={{
              background: getBackgroundString(color, opacity),
              backdropFilter: `blur(${blur}px)`,
            }}
          ></div>
          <div
            className={styles.circleRight}
            style={{
              background: getBackgroundString(color, opacity),
              backdropFilter: `blur(${blur}px)`,
            }}
          ></div>
          <div
            className={styles.rectCenter}
            style={{
              background: getBackgroundString(color, opacity),
              backdropFilter: `blur(${blur}px)`,
              borderRadius: `${radius}px`,
            }}
          ></div>
          <div
            className={styles.rectRight}
            style={{
              background: getBackgroundString(color, opacity),
              backdropFilter: `blur(${blur}px)`,
              borderRadius: `${radius}px`,
            }}
          ></div>
          <div
            className={styles.rectLeft}
            style={{
              background: getBackgroundString(color, opacity),
              backdropFilter: `blur(${blur}px)`,
              borderRadius: `${radius}px`,
            }}
          ></div>
        </div>
      </div>
      <div className={styles.toolsContainer}>
        <div className={styles.controls}>
          <ProgressBar
            label="透明度"
            name="opacity"
            id="opacity"
            min="0"
            max="1"
            step="0.01"
            current={opacity}
            onChange={(e) => setOpacity(e.target.value)}
          />
          <ProgressBar
            label="模糊度"
            name="blur"
            id="blur"
            min="0"
            max="100"
            step="1"
            current={blur}
            onChange={(e) => setBlur(e.target.value)}
          />
          <ProgressBar
            label="圆弧角度"
            name="radius"
            id="radius"
            min="0"
            max="100"
            step="1"
            current={radius}
            onChange={(e) => setRadius(e.target.value)}
          />
          <div className={styles.inputColor}>
            <label>玻璃颜色</label>
            <input
              type="color"
              name="color"
              id="color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
            />
          </div>
          <Link to="/docs/videos/effects/css-glassmorphism">查看教程</Link>{" "}
          <Link to="https://codesandbox.io/s/css-glassmorphism-49kn8">
            查看示例
          </Link>
        </div>
        <div className={styles.previews}>
          <div className={styles.html}>
            <CodeBlock
              className="html"
              metastring='title="HTML"'
            >{`<div class="container">
  <img src="https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
  <h1>GLASSMORPHISM</h1>
  <div class="glass" />
</div>`}</CodeBlock>
          </div>
          <div className={styles.css}>
            <CodeBlock className="css" metastring='title="CSS"'>{`.glass {
  background: ${getBackgroundString(color, opacity)};
  backdrop-filter: blur(${blur}px);
  border-radius: ${radius}px;
}`}</CodeBlock>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProgressBar({ label, current, ...rest }) {
  return (
    <div className={styles.progressBar}>
      <label>{label}</label>
      <div className={styles.slider}>
        <input type="range" value={current} {...rest} />
        <div className={styles.selected}>{current}</div>
      </div>
    </div>
  );
}

function convertToRGB(hex) {
  const numbers = hex.match(/[a-zA-Z0-9]{2}/g);
  return numbers.map((v) => parseInt(v, 16)).join(",");
}

function getBackgroundString(hex, opacity) {
  const rgb = convertToRGB(hex);
  return `rgba(${rgb}, ${opacity})`;
}

export default GlassmorphismGenerator;
