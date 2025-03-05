import React, { useEffect, useState } from 'react'; // React와 상태 관리 및 효과를 위한 훅을 임포트
import Link from 'next/link'; // Next.js의 Link 컴포넌트를 임포트
import { useRouter } from 'next/router'; // 현재 라우터 정보를 가져오기 위한 훅을 임포트
import { LayoutMenu, LayoutMenuItem, ItemList } from '@/styles/components/Layout'; // 스타일 컴포넌트 임포트

// 메뉴 항목의 타입을 정의
interface MenuItem {
  label: string; // 메뉴 항목의 레이블
  items?: MenuItem[]; // 하위 메뉴 항목 (선택사항)
  path?: string; // 해당 메뉴 항목의 경로 (선택사항)
}

const AppMenu: React.FC = () => {
  const router = useRouter(); // 현재 라우터 정보를 가져옴
  const [model, setModel] = useState<MenuItem[]>([ // 메뉴 항목 모델
    {
      label: '관리자',
      items: [
        {
          label: '대시보드',
          path: '/admin/dashboard', // 대시보드 경로
        },
        {
          label: '관리자 목록',
          // path: '/admin/users', // 예시로 주석 처리된 관리자 목록 경로
        },
      ],
    },
    {
      label: '회원',
      items: [
        {
          label: '회원목록', // 하위 항목이 없는 회원 목록
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

  const [openItem, setOpenItem] = useState<string | null>(null); // 현재 열려 있는 메뉴 항목의 레이블을 저장

  const toggleItem = (label: string) => { // 메뉴 항목을 열거나 닫는 함수
    setOpenItem((prev) => (prev === label ? null : label)); // 클릭한 항목이 열려 있으면 닫고, 닫혀 있으면 연다
  };

  useEffect(() => {
    const activeMenu = model.find(item => // 현재 경로와 일치하는 하위 메뉴가 있는지 찾음
      item.items?.some(subItem => subItem.path === router.pathname) // 현재 경로와 일치하는 하위 메뉴가 있는지 확인
    );

    if (activeMenu) { // 일치하는 메뉴가 있으면
      setOpenItem(activeMenu.label); // 해당 메뉴를 열도록 상태를 업데이트
    }
  }, [router.pathname, model]); // 현재 경로 또는 모델이 변경될 때마다 실행

  return (
    <div>
      {model.map((item) => ( // 모델의 각 메뉴 항목을 순회
        <LayoutMenu key={item.label}>
          <LayoutMenuItem onClick={() => toggleItem(item.label)}>
            {item.label}
          </LayoutMenuItem>
          {openItem === item.label && item.items && item.items.map((subItem) => ( // 현재 열려 있는 메뉴 항목의 경우
            <ItemList key={subItem.label}>
              <Link href={subItem.path || '#'} passHref>
                <span style={{
                  fontWeight: router.pathname === subItem.path ? 600 : 'normal', // 현재 경로와 일치하면 굵게
                  color: router.pathname === subItem.path ? '#137157' : 'inherit', // 현재 경로와 일치하면 색상 변경
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
