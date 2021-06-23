import React from "react";

import { useTrail, animated } from "react-spring";
import Translate, { translate } from "@docusaurus/Translate";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Link from "@docusaurus/Link";

import Button from "../Button";

import HeroMain from "./img/hero_main.svg";
import BilibiliIcon from "@site/static/icons/bilibili.svg";
import CSDNIcon from "@site/static/icons/csdn.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faWeixin,
} from "@fortawesome/free-brands-svg-icons";
import useBaseUrl from "@docusaurus/useBaseUrl";

import useFollowers from "./useFollowers";

import styles from "./styles.module.css";

function Hero() {
  const {
    // 当前语言
    i18n: { currentLocale },
  } = useDocusaurusContext();

  // Get followers
  const followers = useFollowers();

  // animation
  const animatedTexts = useTrail(5, {
    from: { opacity: 0, transform: "translateY(3em)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: {
      mass: 3,
      friction: 45,
      tension: 460,
    },
  });

  return (
    <animated.div className={styles.hero}>
      <div className={styles.bloghome__intro}>
        <animated.div style={animatedTexts[0]} className={styles.hero_text}>
          <Translate description="hero greet">Hello! 我是</Translate>
          <span className={styles.intro__name}>
            <Translate description="my name">峰华</Translate>
          </span>
        </animated.div>
        <animated.p style={animatedTexts[1]}>
          <Translate
            id="homepage.hero.text"
            description="hero text"
            values={{
              bilibiliText: (
                <Link to="/docs/videos">
                  <Translate
                    id="hompage.hero.text.bilibili"
                    description="Bilibili docs link label"
                  >
                    技术视频教程、
                  </Translate>
                </Link>
              ),
              courses: (
                <Link to="/docs/course/react-chat-ui">
                  <Translate
                    id="hompage.hero.text.course"
                    description="Course link label"
                  >
                    实战课程、
                  </Translate>
                </Link>
              ),
              blogs: (
                <Link to="#homepage_blogs">
                  <Translate
                    id="hompage.hero.text.blog"
                    description="Blog link label"
                  >
                    技术博客、
                  </Translate>
                </Link>
              ),
              links: (
                <Link to="/docs/resources">
                  <Translate
                    id="hompage.hero.text.link"
                    description="Link link label"
                  >
                    前端资源导航、
                  </Translate>
                </Link>
              ),
              ideas: (
                <Link to="/lifestyle">
                  <Translate
                    id="hompage.hero.text.idea"
                    description="Idea link label"
                  >
                    想法和生活点滴
                  </Translate>
                </Link>
              ),
            }}
          >
            {`点击查看最新{bilibiliText}{courses}{blogs}{links}以及UP主的{ideas}。致力于帮助你以最直观、最快速的方式学会前端开发，并希望我的个人经历对你有所启发。`}
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
            <Translate description="follow me btn text">去B站关注</Translate>
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
  );
}

function SocialLinks({ animatedProps, ...props }) {
  // const { isDarkTheme } = useThemeContext();
  return (
    <animated.div className={styles.social__links} style={animatedProps}>
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
      <div className={`dropdown ${styles.dropdown} dropdown--hoverable`}>
        <FontAwesomeIcon icon={faWeixin} size="lg" />
        <img
          width="50%"
          className={`dropdown__menu ${styles.dropdown__menu}`}
          src={useBaseUrl("/img/publicQR.webp")}
        />
      </div>
    </animated.div>
  );
}

function HeroMainImage() {
  return (
    <div className={styles.bloghome__image}>
      <HeroMain />
    </div>
  );
}

export default Hero;
