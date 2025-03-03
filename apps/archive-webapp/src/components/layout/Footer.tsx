import {
  EnvironmentOutlined,
  HeartOutlined,
  HomeOutlined,
  RobotOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { Divider } from "antd";
import styled from "styled-components";
import { Text } from "@repo/ui/components";

export default function Footer() {
  return (
    <Wrapper>
      <Tab>
        <EnvironmentOutlined />
        <Text>지도</Text>
      </Tab>
      <StyledDivider type="vertical" />
      <Tab>
        <HeartOutlined />
        <Text>마음함</Text>
      </Tab>
      <StyledDivider type="vertical" />
      <Tab>
        <HomeOutlined />
        <Text>홈</Text>
      </Tab>
      <StyledDivider type="vertical" />
      <Tab>
        <SearchOutlined />
        <Text>검색</Text>
      </Tab>
      <StyledDivider type="vertical" />
      <Tab>
        <RobotOutlined />
        <Text>소통창구</Text>
      </Tab>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  height: 80px;
  margin: 0 36px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Tab = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  cursor: pointer;

  & > Text:first-child {
    font-size: 1.3rem;
  }

  & > Text:last-child {
    user-select: none;
  }
`;

const StyledDivider = styled(Divider)`
  height: 2.3rem;
`;
