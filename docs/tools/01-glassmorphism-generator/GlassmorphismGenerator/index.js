import React from "react";
import styles from "./style.module.css";
import background from "./background.png";

function GlassmorphismGenerator() {
  return (
    <div>
      <div className={styles.backgroundContainer}>
        <img src={background} alt="" className={styles.background} />
        <div className={styles.bgRect}></div>
        <div className={styles.centerContainer}>
          <div className={styles.text}>GLASSMPORPHISM</div>
          <div className={styles.circleLeft}></div>
          <div className={styles.circleRight}></div>
          <div className={styles.rectCenter}></div>
          <div className={styles.rectRight}></div>
          <div className={styles.rectLeft}></div>
        </div>
      </div>
      <div className={styles.toolsContainer}>
        <div className={styles.controls}>
          <div className={styles.inputOpacity}>
            <label>透明度</label>
            <div className={styles.slider}>
              <input type="range" name="opacity" id="opacity" />
              <div className={styles.selected}>50</div>
            </div>
          </div>
          <div className={styles.inputBlur}>
            <label>模糊度</label>
            <div className={styles.slider}>
              <input type="range" name="blur" id="blur" />
              <div className={styles.selected}>50</div>
            </div>
          </div>
          <div className={styles.inputRadius}>
            <label>圆角弧度</label>
            <div className={styles.slider}>
              <input type="range" name="radius" id="radius" />
              <div className={styles.selected}>50</div>
            </div>
          </div>
          <div className={styles.inputColor}>
            <label>玻璃颜色</label>
            <input type="color" name="color" id="color" />
          </div>
        </div>
        <div className={styles.previews}>
          <div className={styles.html}>abc</div>
          <div className={styles.css}>abc</div>
        </div>
      </div>
    </div>
  );
}

export default GlassmorphismGenerator;
