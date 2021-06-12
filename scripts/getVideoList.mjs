import fetch from "isomorphic-fetch";

(async () => {
  await getVideos();
})();

async function getVideos() {
  const res = await fetch(
    `https://api.bilibili.com/x/space/arc/search?mid=302954484&ps=100&tid=0&pn=2&keyword=&order=pubdate&jsonp=jsonp`
  );
  const resData = await res.json();
  const {
    data: {
      list: { vlist },
    },
  } = resData;
  console.log(vlist.map((v) => v.title));
  // https://api.bilibili.com/x/space/arc/search?mid=302954484&ps=30&tid=0&pn=1&keyword=&order=pubdate&jsonp=jsonp
}
