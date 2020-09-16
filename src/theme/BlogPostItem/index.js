/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useContext, useEffect, useState } from "react";
import clsx from "clsx";
import { MDXProvider } from "@mdx-js/react";

import Head from "@docusaurus/Head";
import Link from "@docusaurus/Link";
import MDXComponents from "@theme/MDXComponents";
import useBaseUrl from "@docusaurus/useBaseUrl";

import ThemeContext from "@theme/ThemeContext";

import styles from "./styles.module.css";
import { MarkdownSection, StyledBlogItem } from "./style";
import { withTheme } from "styled-components";

const MONTHS = [
  "",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function BlogPostItem(props) {
  const {
    children,
    frontMatter,
    metadata,
    truncated,
    isBlogPostPage = false,
    views,
  } = props;
  const { date, permalink, tags, readingTime } = metadata;
  const { slug: postId, author, title, image } = frontMatter;

  const authorURL = frontMatter.author_url || frontMatter.authorURL;
  const authorTitle = frontMatter.author_title || frontMatter.authorTitle;
  const authorImageURL =
    frontMatter.author_image_url || frontMatter.authorImageURL;
  const imageUrl = useBaseUrl(image, { absolute: true });

  // 是否为黑暗主题：
  const theme = useContext(ThemeContext);
  const { isDarkTheme } = theme;

  const match = date.substring(0, 10).split("-");
  const year = match[0];
  const month = parseInt(match[1], 10);
  const day = parseInt(match[2], 10);

  const renderPostHeader = () => {
    const TitleHeading = isBlogPostPage ? "h1" : "h2";

    return (
      <header>
        <TitleHeading
          className={clsx(
            isBlogPostPage ? "margin-bottom--md" : "margin-vert--md",
            styles.blogPostTitle,
            isBlogPostPage ? "text--center" : ""
          )}
        >
          {isBlogPostPage ? title : <Link to={permalink}>{title}</Link>}
        </TitleHeading>
        {/* <div className="margin-vert--md">
          <time dateTime={date} className={styles.blogPostDate}>
            {month} {day}, {year}{" "}
            {readingTime && <> · {Math.ceil(readingTime)} min read</>}
          </time>
        </div> */}
      </header>
    );
  };

  const renderTags = () => {
    return (
      (tags.length > 0 || truncated) && (
        <p className="row margin-vert--sm">
          {tags.length > 0 && (
            <div className="col">
              {tags
                .slice(0, 4)
                .map(({ label, permalink: tagPermalink }, index) => (
                  <Link
                    key={tagPermalink}
                    className={
                      index > 0 ? "margin-horiz--md" : "margin-right--md"
                    }
                    to={tagPermalink}
                    style={{ fontSize: "0.875em" }}
                  >
                    #{label}
                  </Link>
                ))}
            </div>
          )}
        </p>
      )
    );
  };

  return (
    <StyledBlogItem
      isDark={isDarkTheme}
      className={isBlogPostPage ? "margin-top--xl" : ""}
    >
      <Head>
        {image && <meta property="og:image" content={imageUrl} />}
        {image && <meta property="twitter:image" content={imageUrl} />}
        {image && (
          <meta name="twitter:image:alt" content={`Image for ${title}`} />
        )}
      </Head>

      {/* 统计 */}
      {isBlogPostPage && <Count postId={postId} />}

      <div className="row">
        {/* 列表页日期 */}
        {!isBlogPostPage && (
          <div className="col col--2 padding-right--lg">
            <div class="post__date margin-top--lg">
              <div class="post__day">{day}</div>
              <div class="post__year_month">
                {year}年{month}月
              </div>
            </div>
          </div>
        )}
        <div className={`col ${isBlogPostPage ? `col--12` : `col--10`}`}>
          {/* 列表页标签 */}
          {!isBlogPostPage && renderTags()}
          {/* 博文部分 */}
          <article
            className={!isBlogPostPage ? "margin-bottom--md" : undefined}
          >
            {/* 标题 */}
            {renderPostHeader()}
            {/* 发布日期与阅读时间 */}
            {isBlogPostPage && (
              <p className={`single-post--date text--center`}>
                {year}年{month}月{day}日 · 预计阅读时间：
                {readingTime && <> {Math.ceil(readingTime)} 分钟</>}
              </p>
            )}
            {/* 标签 */}
            {isBlogPostPage && (
              <div className="text--center margin-bottom--lg padding-bottom--xs">
                {renderTags()}
              </div>
            )}

            {/* 正文 */}
            <MarkdownSection isDark={isDarkTheme} className="markdown">
              <MDXProvider components={MDXComponents}>{children}</MDXProvider>
            </MarkdownSection>
          </article>
          <footer className="article__footer">
            {truncated && (
              <Link to={metadata.permalink} aria-label={`阅读 ${title} 的全文`}>
                <strong className={styles.readMore}>阅读原文</strong>
              </Link>
            )}
            {!isBlogPostPage && (
              <span className="footer__read_count">阅读（{views}）</span>
            )}
          </footer>
        </div>
      </div>
    </StyledBlogItem>
  );
}

function Count({ postId, ...post }) {
  const addViewCount = async () => {
    await fetch("https://api.zxuqian.cn/post/increase_view", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ postId }),
    });
  };

  useEffect(() => {
    addViewCount();
  }, []);
  return null;
}

export default BlogPostItem;
