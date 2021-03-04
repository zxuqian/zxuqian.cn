import React from "react";

function Video({ src, ...rest }) {
  return <video autoPlay loop muted playsInline src={src} {...rest}></video>;
}

export default Video;
