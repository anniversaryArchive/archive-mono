// src/data/menuData.ts

export interface MenuItem {
  label: string;
  items?: MenuItem[];
  path?: string;
}

export const menuModel: MenuItem[] = [
  {
    label: '관리자',
    items: [
      {
        label: '대시보드',
        path: '/admin/dashboard',
      },
      {
        label: '관리자 목록',
        // path: '/admin/users',
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
];
