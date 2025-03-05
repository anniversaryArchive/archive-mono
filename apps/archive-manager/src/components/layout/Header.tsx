import React from 'react';
import { useRouter } from 'next/router';
import { menuModel } from '@/data/MenuData';
import styled from 'styled-components';

const Title = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: #444444;
`;

export default function Header() {
  const router = useRouter(); // 현재 라우터 정보
  const currentPath = router.pathname; // 현재 경로

  // 현재 경로에 맞는 메뉴명을 찾는 함수
  const getCurrentMenuLabel = (path: string) => {
    for (const item of menuModel) {
      if (item.items) {
        const subItem = item.items.find(sub => sub.path === path);
        if (subItem) {
          return item.label + ' > ' + subItem.label; // 일치하는 하위 메뉴 있을 경우 반환
        }
      }
    }
    return ''; // 일치하는 메뉴가 없으면 빈 문자열 반환
  };

  const currentMenuLabel = getCurrentMenuLabel(currentPath); // 현재 메뉴명 가져오기

  return (
    <header>
      <Title>{currentMenuLabel}</Title>
    </header>
  );
}
