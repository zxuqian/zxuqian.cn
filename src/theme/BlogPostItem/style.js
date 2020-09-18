import styled, { css } from "styled-components";

const light = css`
  h2 {
    font-size: 1.6em;

    /* border-bottom: 2px solid var(--ifm-link-color); */
    /* padding-top: 0.4em;
    padding-bottom: 0.3em; */
  }

  h3 {
    font-size: 1em;
    /* color: var(--ifm-link-color); */
  }

  h2,
  h3 {
    color: var(--post-title-color);
  }

  p,
  li,
  a {
    font-size: 1em;
    line-height: 1.8em;
    /* letter-spacing: 0.04em; */
  }

  p,
  li {
    color: #545a5f;
  }
`;

export const MarkdownSection = styled.section`
  ${({ isDark }) => (isDark ? `` : light)}
`;

export const StyledBlogItem = styled.div`
  margin-bottom: 5.25em;
  article {
    > header {
      > h1 {
        font-size: 2em;
      }

      > h2 {
        font-size: 1.5em;
        margin-bottom: 20px !important;
        a {
          color: var(--post-title-color);
        }
      }

      > div > time {
        color: var(--post-pub-date-color);
      }
    }

    .markdown > h1 {
      font-size: 2em;
    }
  }
`;
