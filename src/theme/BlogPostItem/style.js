import styled, { css } from "styled-components";

const light = css`
  h2 {
    font-size: 1.6em;
    font-weight: 400;
  }

  h3 {
    font-size: 1.2em;
    font-weight: 400;
  }

  p,
  li,
  a {
    font-size: 1em;
    font-weight: 400;
    color: #5d5d5d;
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
        font-size: 2.2em;
      }

      > div > time {
        color: #8c8c8c;
      }
    }
  }
`;
