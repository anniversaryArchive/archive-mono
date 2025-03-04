import {
  EnvironmentOutlined,
  HeartOutlined,
  HomeOutlined,
  RobotOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { Menu as AntdMenu } from "antd";
import Link from "next/link";
import styled from "styled-components";

export default function Footer() {
  const menuList = [
    {
      label: (
        <MenuLabel href={"/map"}>
          <EnvironmentOutlined />
          <span>지도</span>
        </MenuLabel>
      ),
      key: "map",
    },
    {
      label: (
        <MenuLabel href={"/wish-list"}>
          <HeartOutlined />
          <span>마음함</span>
        </MenuLabel>
      ),
      key: "wish-list",
    },
    {
      label: (
        <MenuLabel href={"/"}>
          <HomeOutlined />
          <span>홈</span>
        </MenuLabel>
      ),
      key: "home",
    },
    {
      label: (
        <MenuLabel href={"/search"}>
          <SearchOutlined />
          <span>검색</span>
        </MenuLabel>
      ),
      key: "search",
    },
    {
      label: (
        <MenuLabel href={"/support"}>
          <RobotOutlined />
          <span>소통창구</span>
        </MenuLabel>
      ),
      key: "support",
    },
  ];

  return <Menu mode="horizontal" items={menuList} />;
}

const Menu = styled(AntdMenu)`
  height: 65px;
  & > li {
    padding-top: 10px;
    width: calc(100% / 5);

    &:after {
      border: 0 !important;
    }

    &:hover {
      color: #006242bb !important;
    }
  }
`;

const MenuLabel = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  cursor: pointer;

  & > span:last-child {
    user-select: none;
    margin: 0 !important;
    line-height: 1;
  }
`;
