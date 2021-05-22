const visit = require("unist-util-visit");
// const u = require("unist-builder");

// const adsense = u("element", { tagName: "div" }, [
//   u("element", {
//     tagName: "script",
//     properties: {
//       async: true,
//       src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",
//     },
//   }),
//   u("element", {
//     tagName: "ins",
//     properties: {
//       className: "adsbygoogle",
//       style: "display:block; text-align:center;",
//       "data-ad-layout": "in-article",
//       "data-ad-format": "fluid",
//       "data-ad-client": "ca-pub-3487507367729662",
//       "data-ad-slot": "3539166782",
//     },
//   }),
//   u(
//     "element",
//     { tagName: "script" },
//     "(adsbygoogle = window.adsbygoogle || []).push({});"
//   ),
// ]);

const adsense = (slot) => ({
  type: "html",
  value: `<span>
    <ins class="adsbygoogle"
      style="display:block; text-align:center;"
      data-ad-layout="in-article"
      data-ad-format="fluid"
      data-ad-client="ca-pub-3487507367729662"
      data-ad-slot="${slot}"></ins>
  <script>
     (adsbygoogle = window.adsbygoogle || []).push({});
  </script>
</span>`,
});

module.exports = () => (tree, file) => {
  visit(tree, "root", (node, index) => {
    if (node.children && node.children.length > 10) {
      node.children.splice(10, 0, adsense("3539166782"));
      node.children.splice(node.children.length - 1, 0, adsense("1964508460"));
      return visit.SKIP;
    } else if (node.children) {
      node.children.push(adsense("1964508460"));
      return visit.SKIP;
    }
    // if (index === 5) {
    //   if (Array.isArray(node.children)) {
    //     node.children.push(adsense);
    //   } else {
    //     node.children = [adsense];
    //   }
    //   return visit.SKIP;
    // }
  });
};
