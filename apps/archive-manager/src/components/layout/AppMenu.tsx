import React, { useEffect, useState } from 'react';
import {LayoutMenu, LayoutMenuItem, ItemList} from '@/styles/components/Layout';

interface MenuItem {
  label: string;
  items?: MenuItem[];
}

const AppMenu: React.FC = () => {
  const [model, setModel] = useState<MenuItem[]>([
    {
      label: '관리자',
      items: [
        {
          label: '대시보드',
        },
        {
          label: '관리자 목록',
        },
      ],
    },
    {
      label: '회원',
      items: [
        {
          label: '회원목록',
        },
      ],
    },
    {
      label: '데이터',
      items: [
        {
          label: '아티스트 목록',
        },
        {
          label: '아카이브 목록',
        },
        {
          label: '태그 목록',
        },
        {
          label: '기타 문의 조회',
        },
      ],
    },
  ]);

  const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({});

  const toggleItem = (label: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  useEffect(() => {
    const authModel = () => {
      // 메뉴 실제 코드 생성 및 업데이트
      // setModel();
    };

    authModel();
  }, []);

  return (
    <div>
      {model.map((item) => (
        <LayoutMenu key={item.label}>
          <LayoutMenuItem onClick={() => toggleItem(item.label)}>
            {item.label}
          </LayoutMenuItem>
          {openItems[item.label] && item.items && item.items.map((subItem) => (
            <ItemList key={subItem.label}>
              {subItem.label}
            </ItemList>
          ))}
        </LayoutMenu>
      ))}
    </div>
  );
};

export default AppMenu;
