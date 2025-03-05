import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import AppMenu from './AppMenu';

const SidebarContainer = styled.div`
  position: fixed;
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
  }
`;

const LayoutMenuContainer = styled.div`
  padding: 0 50px;
`;

const Sidebar: React.FC = () => {
  const router = useRouter();
  const [sidebarActive, setSidebarActive] = useState(false);
  let timeout: NodeJS.Timeout | null = null;

  const handleMouseEnter = () => {
    if (timeout) {
      clearTimeout(timeout);
      timeout = null;
    }
    setSidebarActive(true);
  };

  const handleMouseLeave = () => {
    if (!timeout) {
      timeout = setTimeout(() => setSidebarActive(false), 300);
    }
  };

  useEffect(() => {
    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [timeout]);

  return (
    <SidebarContainer
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <SidebarHeader>
        <a onClick={() => router.push('/member-inquiry')} className="app-logo">
          ARCHIVE
          {/* 로고 자리 */}
        </a>
      </SidebarHeader>
      <LayoutMenuContainer>
        <AppMenu />
      </LayoutMenuContainer>
    </SidebarContainer>
  );
};

export default Sidebar;
