/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react";
import Layout from "@theme/Layout";
import BlogPostItem from "@theme/BlogPostItem";
import Link from "@docusaurus/Link";
import BlogSidebar from "@theme/BlogSidebar";

function pluralize(count, word) {
  return count > 1 ? `${word}s` : word;
}

// 修改了英文为中文，隐藏最新文章侧边栏以防占位

function BlogTagsPostPage(props) {
  const { metadata, items, sidebar } = props;
  const { allTagsPath, name: tagName, count } = metadata;
  return (
    <Layout
      title={`"${tagName}" 下的博客`}
      description={`博客标签 - "${tagName}"`}
      wrapperClassName="blog-wrapper"
    >
      <div className="container margin-vert--lg">
        <div className="row">
          {/* <div className="col col--2">
            <BlogSidebar sidebar={sidebar} />
          </div> */}
          <main className="col col--12">
            <h1>
              {tagName}： {count} 篇
            </h1>
            <Link href={allTagsPath}>查看所有标签（分类）</Link>
            <div className="margin-vert--xl">
              {items.map(({ content: BlogPostContent }) => (
                <BlogPostItem
                  key={BlogPostContent.metadata.permalink}
                  frontMatter={BlogPostContent.frontMatter}
                  metadata={BlogPostContent.metadata}
                  truncated
                >
                  <BlogPostContent />
                </BlogPostItem>
              ))}
            </div>
          </main>
        </div>
      </div>
    </Layout>
  );
}

export default BlogTagsPostPage;
