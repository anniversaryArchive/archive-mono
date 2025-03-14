import React, { useEffect } from 'react';
import styled from 'styled-components';
import Link from 'next/link'; // Link 컴포넌트 임포트
import AppMenu from './AppMenu';

const SidebarContainer = styled.div`
  position: fixed;
  background: #ffffff;
  height: 100%;
  top: 0;
  left: 0;
  width: 18rem;
  display: flex;
  flex-direction: column;
  box-shadow: 5px 0 10px rgba(210, 235, 144, 0.5); /* 오른쪽 드롭 섀도우 */
`;

const SidebarHeader = styled.div`
  padding: 2.5rem 0 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    font-size: 30px;
    color: #137157;
    font-weight: 700;
    text-decoration: none;  /* 링크에 기본 스타일 제거 */
  }
`;

const LayoutMenuContainer = styled.div`
  padding: 0 50px;
`;

const Sidebar: React.FC = () => {
  return (
    <SidebarContainer>
      <SidebarHeader>
        <Link href="/" passHref>
          ARCHIVE
          {/* 로고 자리 */}
        </Link>
      </SidebarHeader>
      <LayoutMenuContainer>
        <AppMenu />
      </LayoutMenuContainer>
    </SidebarContainer>
  );
};

export default Sidebar;
