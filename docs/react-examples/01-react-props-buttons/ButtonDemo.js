import React from "react";
import { ButtonDemo as Button } from "@zxuqian/react-examples";
import styled from "styled-components";

const StyledButtonDemo = styled(Button)`
  width: auto;
  height: auto;
  padding: 48px;
  @media (max-width: 1300px) {
    & > div {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: 535px) {
    & > div {
      grid-template-columns: 1fr;
    }
  }
`;

export default function ButtonDemo() {
  return <StyledButtonDemo />;
}
