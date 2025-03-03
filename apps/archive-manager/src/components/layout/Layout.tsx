import { ReactNode } from "react";
import styled from "styled-components";

import Sidebar from "./Sidebar";
import Header from "./Header";
import {LayoutContainer, LayoutContentWrapper, LayoutContent} from '@/styles/components/Layout';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <LayoutContainer>
      <Sidebar />
      <LayoutContentWrapper>
        <Header />
        <LayoutContent>
          <Body>{children}</Body>
        </LayoutContent>
      </LayoutContentWrapper>
    </LayoutContainer>
  );
}

const Body = styled.section`
  //
`;
