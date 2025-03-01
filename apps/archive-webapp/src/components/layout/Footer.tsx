import {
  EnvironmentOutlined,
  HeartOutlined,
  HomeOutlined,
  RobotOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { Divider } from "antd";
import styled from "styled-components";

export default function Footer() {
  return (
    <Wrapper>
      <ButtonWrapper>
        <EnvironmentOutlined />
        <span>지도</span>
      </ButtonWrapper>
      <StyledDivider type="vertical" />
      <ButtonWrapper>
        <HeartOutlined />
        <span>마음함</span>
      </ButtonWrapper>
      <StyledDivider type="vertical" />
      <ButtonWrapper>
        <HomeOutlined />
        <span>홈</span>
      </ButtonWrapper>
      <StyledDivider type="vertical" />
      <ButtonWrapper>
        <SearchOutlined />
        <span>검색</span>
      </ButtonWrapper>
      <StyledDivider type="vertical" />
      <ButtonWrapper>
        <RobotOutlined />
        <span>소통창구</span>
      </ButtonWrapper>
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

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  cursor: pointer;

  & > span:first-child {
    font-size: 1.3rem;
  }

  & > span:last-child {
    user-select: none;
  }
`;

const StyledDivider = styled(Divider)`
  height: 2.3rem;
`;
