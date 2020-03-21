import React from "react";
import PropTypes from "prop-types";

function BVideo({ src, bsrc }) {
  return (
    <>
      <iframe
        src={src}
        scrolling="no"
        border={0}
        frameBorder="no"
        framespacing={0}
        allowFullScreen={true}
        style={{ width: "100%", height: "400px" }}
      ></iframe>
      <div>
        <a href={bsrc}>点击跳转到B站进行观看~记得给个三连哦！</a>
      </div>
    </>
  );
}

BVideo.propTypes = {
  src: PropTypes.string.isRequired,
  bsrc: PropTypes.string
};

export default BVideo;
