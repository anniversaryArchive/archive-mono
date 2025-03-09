import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { LayoutMenu, LayoutMenuItem, ItemList } from '@/styles/components/Layout';
import { menuModel, MenuItem } from '@/data/MenuData';

const AppMenu: React.FC = () => {
  const router = useRouter(); // 현재 라우터 정보를 가져옴
  const [model, setModel] = useState<MenuItem[]>(menuModel); // 메뉴 항목 모델

  // 현재 열려 있는 메뉴 항목의 레이블을 저장
  const [openItem, setOpenItem] = useState<string | null>(null);

  const toggleItem = (label: string) => {
    // 클릭한 항목만 열기
    setOpenItem((prev) => (prev === label ? null : label));
  };

  useEffect(() => {
    const activeMenu = model.find(item =>
      item.items?.some(subItem => subItem.path === router.pathname) // 현재 경로와 일치하는 하위 메뉴가 있는지 확인
    );

    if (activeMenu) { // 일치하는 메뉴가 있으면
      setOpenItem(activeMenu.label); // 해당 메뉴를 열도록 상태를 업데이트
    }
  }, [router.pathname, model]); // 현재 경로 또는 모델이 변경될 때마다 실행

  return (
    <div>
      {model.map((item) => (
        <LayoutMenu key={item.label}>
          <LayoutMenuItem onClick={() => toggleItem(item.label)}>
            {item.label}
          </LayoutMenuItem>
          {openItem === item.label && item.items && item.items.map((subItem) => ( // 현재 열려 있는 메뉴 항목의 경우
            <ItemList key={subItem.label}>
              <Link href={subItem.path || '#'} passHref>
                <span style={{
                  fontWeight: router.pathname === subItem.path ? 600 : 'normal',
                  color: router.pathname === subItem.path ? '#137157' : 'inherit',
                }}>
                  {subItem.label}
                </span>
              </Link>
            </ItemList>
          ))}
        </LayoutMenu>
      ))}
    </div>
  );
};

export default AppMenu;
