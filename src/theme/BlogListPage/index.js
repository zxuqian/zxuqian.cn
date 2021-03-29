/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useState } from "react";

import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import BlogPostItem from "@theme/BlogPostItem";
import BlogListPaginator from "@theme/BlogListPaginator";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faWeixin,
} from "@fortawesome/free-brands-svg-icons";
import useBaseUrl from "@docusaurus/useBaseUrl";
// import bilibiliIcon from "@site/static/icons/bilibili.svg";

import useFollowers from "./useFollowers";
import useViews from "./useViews";
import { useTrail, animated } from "react-spring";
// import Fade from "react-reveal/Fade";

import BilibiliIcon from "@site/static/icons/bilibili.svg";
import CSDNIcon from "@site/static/icons/csdn.svg";
import Button from "../../components/Button";

import Translate, { translate } from "@docusaurus/Translate";
import Head from "@docusaurus/Head";

import HeroMain from "./img/hero_main.svg";
import ListFilter from "./img/list.svg";
import CardFilter from "./img/card.svg";

import Link from "@docusaurus/Link";
import { useViewType } from "./useViewType";
import { faTags } from "@fortawesome/free-solid-svg-icons";

function BlogListPage(props) {
  const { metadata, items } = props;

  const {
    siteConfig: { title: siteTitle },
    // 当前语言
    i18n: { currentLocale },
  } = useDocusaurusContext();
  const isBlogOnlyMode = metadata.permalink === "/";
  const isPaginated = metadata.page > 1;
  const title = isBlogOnlyMode ? siteTitle : "Blog";
  const description = `html, css, javascript, react, vue 前端教程，以及 B站视频教程合集和配套文本、系统教程、编程博客和前端资源导航。致力于帮助你以最直观、最快速的方式学会前端开发。`;

  // Get all post views
  const views = useViews(items);
  // Get followers
  const followers = useFollowers();

  // list or card view
  const { viewType, toggleViewType } = useViewType();

  const isCardView = viewType === "card";
  const isListView = viewType === "list";

  // animation
  const animatedTexts = useTrail(5, {
    from: { opacity: 0, transform: "translateY(3em)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: {
      mass: 3,
      friction: 45,
      tension: 460,
    },
    // delay: 300,
  });
  // const animatedHero = useSpring({
  //   opacity: 1,
  //   backgroundPositionX: "100%",
  //   from: { opacity: 0, backgroundPositionX: "200%" },
  //   config: { mass: 3, tension: 280, friction: 30 },
  //   // delay: 1200,
  // });

  // const animatedBackground = useSpring({
  //   background: "linear-gradient(25deg, #1081ff, #72e1f6, #b185ff)",
  //   to: {
  //     background: "linear-gradient(375deg, #1081ff, #72e1f6, #b185ff)",
  //   },
  // });

  return (
    <Layout
      title={title}
      description={description}
      wrapperClassName="blog-list__page"
    >
      <Head>
        <meta
          name="keywords"
          content="前端, html, css, js, javascript, react, vue, typescript, es6, html5, css3, 性能优化, 兼容性调整"
        />
        <title>{title} - 让你学会前端开发</title>
      </Head>
      {/* 个人简介 */}
      {!isPaginated && (
        <animated.div className="hero">
          <div className="bloghome__intro">
            <animated.div style={animatedTexts[0]} className="hero_text">
              <Translate description="hero greet">Hello! 我是</Translate>
              <span className="intro__name">
                <Translate description="my name">峰华</Translate>
              </span>
            </animated.div>
            <animated.p style={animatedTexts[1]}>
              <Translate id="homepage.hero.text" description="hero text">
                在这里，有
                B站视频教程合集和配套文本、系统教程、编程博客、前端资源导航、以及UP主的想法和生活点滴。致力于帮助你以最直观、最快速的方式学会前端开发，并希望我的个人经历对你有所启发。
              </Translate>
            </animated.p>
            {currentLocale === "zh-CN" && (
              <animated.p style={animatedTexts[3]}>
                <Translate id="homepage.qqgroup1" description="qq group1">
                  QQ 1 群：644722908
                </Translate>
                <br />
                <Translate id="homepage.qqgroup2" description="qq group2">
                  QQ 2 群：1004912565
                </Translate>
              </animated.p>
            )}
            <SocialLinks animatedProps={animatedTexts[4]} />
            <animated.div style={animatedTexts[2]}>
              <Button
                isLink
                href={translate({
                  id: "homepage.follow.link.href",
                  message:
                    "https://space.bilibili.com/302954484?from=search&seid=1788147379248960737",
                  description: "social link bilibili or twitter",
                })}
              >
                <Translate description="follow me btn text">
                  去B站关注
                </Translate>
                <Translate
                  id="homepage.followers"
                  description="followers"
                  values={{ count: (Math.round(followers) / 10000).toFixed(1) }}
                >
                  {" {count} 万"}
                </Translate>
              </Button>
            </animated.div>
          </div>

          <HeroMainImage />
          {/* <animated.div
          className="bloghome__scroll-down"
          style={animatedBackground}
        >
          <button>
            <ArrowDown />
          </button>
        </animated.div> */}
        </animated.div>
      )}
      <div className="container-wrapper">
        <div className="container padding-vert--sm">
          <div className="row">
            <div className="col col--12">
              {/* <div className="content__divider"></div> */}
              {!isPaginated && (
                <h1 className="blog__section_title">
                  <Translate description="latest blogs heading">
                    最新博客
                  </Translate>
                  &nbsp;
                  <svg
                    width="31"
                    height="31"
                    viewBox="0 0 31 31"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M25.8333 5.16666H5.16668C3.73293 5.16666 2.59626 6.31624 2.59626 7.74999L2.58334 23.25C2.58334 24.6837 3.73293 25.8333 5.16668 25.8333H25.8333C27.2671 25.8333 28.4167 24.6837 28.4167 23.25V7.74999C28.4167 6.31624 27.2671 5.16666 25.8333 5.16666ZM10.9792 19.375H9.42918L6.13543 14.8542V19.375H4.52084V11.625H6.13543L9.36459 16.1458V11.625H10.9792V19.375ZM17.4375 13.2525H14.2083V14.6992H17.4375V16.3267H14.2083V17.7604H17.4375V19.375H12.2708V11.625H17.4375V13.2525ZM26.4792 18.0833C26.4792 18.7937 25.8979 19.375 25.1875 19.375H20.0208C19.3104 19.375 18.7292 18.7937 18.7292 18.0833V11.625H20.3438V17.4504H21.8033V12.9037H23.4179V17.4375H24.8646V11.625H26.4792V18.0833Z"
                      fill="#4490D6"
                    />
                  </svg>
                </h1>
              )}
              {/* switch list and card */}
              <div className="bloghome__swith-view">
                <CardFilter
                  onClick={() => toggleViewType("card")}
                  fill={viewType === "card" ? "#006dfe" : "#CECECE"}
                />
                <ListFilter
                  onClick={() => toggleViewType("list")}
                  fill={viewType === "list" ? "#006dfe" : "#CECECE"}
                />
              </div>
              <div className="bloghome__posts">
                {isCardView && (
                  <div className="bloghome__posts-card">
                    {items.map(({ content: BlogPostContent }) => (
                      // <Fade key={BlogPostContent.metadata.permalink}>
                      <BlogPostItem
                        key={BlogPostContent.metadata.permalink}
                        frontMatter={BlogPostContent.frontMatter}
                        metadata={BlogPostContent.metadata}
                        truncated={BlogPostContent.metadata.truncated}
                        views={
                          views.find(
                            (v) => v.slug == BlogPostContent.frontMatter.slug
                          )?.views
                        }
                      >
                        <BlogPostContent />
                      </BlogPostItem>
                      // </Fade>
                    ))}
                  </div>
                )}

                {isListView && (
                  <div className="bloghome__posts-list">
                    {items.map(({ content: BlogPostContent }, index) => {
                      const {
                        metadata: blogMetaData,
                        frontMatter,
                      } = BlogPostContent;
                      const { title } = frontMatter;
                      const { permalink, date, tags } = blogMetaData;

                      const dateObj = new Date(date);

                      const year = dateObj.getFullYear();
                      let month = ("0" + (dateObj.getMonth() + 1)).slice(-2);
                      const day = ("0" + dateObj.getDate()).slice(-2);

                      return (
                        <div
                          className="post__list-item"
                          key={blogMetaData.permalink + index}
                        >
                          <Link to={permalink} className="post__list-title">
                            {title}
                          </Link>
                          <div className="post__list-tags">
                            {tags.length > 0 &&
                              tags
                                .slice(0, 2)
                                .map(
                                  (
                                    { label, permalink: tagPermalink },
                                    index
                                  ) => (
                                    <Link
                                      key={tagPermalink}
                                      className={`post__tags ${
                                        index < tags.length
                                          ? "margin-right--sm"
                                          : ""
                                      }`}
                                      to={tagPermalink}
                                      style={{
                                        fontSize: "0.75em",
                                        fontWeight: 500,
                                      }}
                                    >
                                      {label}
                                    </Link>
                                  )
                                )}
                          </div>
                          <div className="post__list-date">
                            {year}-{month}-{day}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
                <BlogListPaginator metadata={metadata} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

function SocialLinks({ animatedProps, ...props }) {
  // const { isDarkTheme } = useThemeContext();
  return (
    <animated.div className="social__links" style={animatedProps}>
      <a href="https://space.bilibili.com/302954484">
        <BilibiliIcon />
      </a>
      <a href="https://www.linkedin.com/in/zxuqian/">
        <FontAwesomeIcon icon={faLinkedin} size="lg" />
      </a>
      <a href="https://github.com/zxuqian">
        <FontAwesomeIcon icon={faGithub} size="lg" />
      </a>
      <a href="https://blog.csdn.net/fengqiuzhihua">
        <CSDNIcon />
      </a>
      <div className="dropdown dropdown--hoverable">
        <FontAwesomeIcon icon={faWeixin} size="lg" />
        <img
          width="50%"
          className="dropdown__menu"
          src={useBaseUrl("/img/publicQR.webp")}
        />
      </div>
    </animated.div>
  );
}

function HeroMainImage() {
  return (
    <div className="bloghome__image">
      <HeroMain />
    </div>
  );
}

export default BlogListPage;
