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
    <LayoutContentWrapper>
      <Sidebar />
      <LayoutContainer>
        <Header />
        <LayoutContent>
          <div>{children}</div>
        </LayoutContent>
      </LayoutContainer>
    </LayoutContentWrapper>
  );
}
