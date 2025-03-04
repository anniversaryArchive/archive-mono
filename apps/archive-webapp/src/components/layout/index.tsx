import { ReactNode } from "react";
import styled from "styled-components";

import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <Wrapper>
      <Header />
      <Body>{children}</Body>
      <Footer />
    </Wrapper>
  );
}

const Wrapper = styled.main`
  height: 100vh;
  background: white;
  box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media only screen and (min-width: 1200px) {
    width: 540px;
    position: fixed;
    left: 50%;
  }
`;

const Body = styled.section`
  flex-grow: 1;
  margin: 0 24px;
`;
