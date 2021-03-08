import figlet from "figlet";
import chalk from "chalk";
import inquirer from "inquirer";
import fs from "fs";
import path from "path";
import shell from "shelljs";

const docTypeHandlers = {
  "video doc": askVideoDocInfo,
  doc: () => {},
  blog: () => {},
};

const videoDocCategoryToSidebar = {
  css: "CSS",
  js: "JavaScript",
  html: "HTML",
  effects: "特效",
  browser: "浏览器",
  web: "Web",
  network: "网络",
  react: "React",
  vue: "Vue",
  ts: "TypeScript",
};

(async () => {
  console.log(
    chalk.blue("======================================================")
  );
  console.log(chalk.blue(figlet.textSync("Feng Hua Front Dev")));
  console.log(
    chalk.blue("======================================================")
  );

  const docType = await askDocType();
  docTypeHandlers[docType]();
})();

async function askDocType() {
  const questions = [
    {
      type: "list",
      name: "docType",
      message: "请选择要创建的文章类型：",
      choices: ["video doc", "doc", "blog"],
    },
  ];
  const { docType } = await inquirer.prompt(questions);
  return docType;
}

async function askVideoDocInfo() {
  const questions = [
    {
      type: "list",
      name: "docCategory",
      message: "请选择类别：",
      choices: Object.keys(videoDocCategoryToSidebar),
    },
    {
      type: "input",
      name: "docName",
      message: "请输入文件名：",
    },
    {
      type: "input",
      name: "iframe",
      message: "请输入嵌入代码：",
    },
  ];

  const { docCategory, docName, iframe } = await inquirer.prompt(questions);

  console.log(docName, docCategory, iframe);

  // extract url part from iframecode
  const urlPattern = /\/\/player.*page=1/g;
  const url = iframe.match(urlPattern);

  const dirName = `docs/videos/${docCategory}`;
  // get number
  let count = getFileCount(dirName) + 1;
  count = count > 10 ? count : `0${count}`;

  // console.log(
  //   `hygen video-doc new ${docName} --category ${docCategory} --num ${count} --sidebar ${videoDocCategoryToSidebar[docCategory]} --url "${url}"`
  // );
  shell.exec(
    `hygen video-doc new ${docName} --category ${docCategory} --num ${count} --sidebar ${videoDocCategoryToSidebar[docCategory]} --url "${url}"`
  );
}

// hygen video-doc new css-test --category css --num 09 --sidebar CSS
// --url "//player.bilibili.com/player.html?aid=459257162&bvid=BV1i5411E7hk&cid=299756621&page=1"

/**
 * @param dir {string}
 * @return {number}
 */
function getFileCount(dir) {
  // "docs/videos/css"
  const files = fs.readdirSync(dir);
  const filesArr = files.filter((file) => !file.startsWith("."));
  return filesArr.length;
}
