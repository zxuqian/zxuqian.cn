import styled, { css } from "styled-components";

const light = css`
  h2 {
    font-size: 1.6em;
    color: var(--ifm-link-color);
    /* border-bottom: 2px solid var(--ifm-link-color); */
    padding-top: 0.4em;
    padding-bottom: 0.3em;
  }

  h3 {
    font-size: 1em;
    color: var(--ifm-link-color);
  }

  p,
  li,
  a {
    font-size: 1em;
  }
`;

export const MarkdownSection = styled.section`
  ${({ isDark }) => (isDark ? `` : light)}
`;

export const StyledBlogItem = styled.div`
  > article {
    > header {
      > h1,
      > h2 {
        font-size: 2em;
      }

      > div > time {
        color: #8c8c8c;
      }
    }
  }
`;
