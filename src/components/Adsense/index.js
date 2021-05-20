import React, { useEffect } from "react";

function Adsense({
  className = "adsbygoogle",
  style = { display: "block" },
  client = "ca-pub-3487507367729662",
  slot,
  layout,
  layoutKey,
  format,
  responsive,
}) {
  useEffect(() => {
    if (window) (window.adsbygoogle = window.adsbygoogle || []).push({});
  }, []);

  return (
    <ins
      className={className}
      style={style}
      data-ad-client={client}
      data-ad-slot={slot}
      data-ad-layout={layout}
      data-ad-layout-key={layoutKey}
      data-ad-format={format}
      data-full-width-responsive={responsive}
    ></ins>
  );
}

export default Adsense;
