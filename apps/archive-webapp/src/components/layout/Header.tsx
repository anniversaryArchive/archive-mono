import { GlobalOutlined, UserOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useRouter } from "next/router";
import styled from "styled-components";

export default function Header() {
  const router = useRouter();

  return (
    <Wrapper>
      <Logo onClick={() => router.push("/")}>ARCHIVE</Logo>
      <ButtonWrapper>
        <Button
          type="text"
          size="large"
          shape="circle"
          icon={<GlobalOutlined style={{ fontSize: "22px" }} />}
        />
        <Button
          type="text"
          size="large"
          shape="circle"
          icon={<UserOutlined style={{ fontSize: "22px" }} />}
        />
      </ButtonWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 40px 0 24px;
`;

const Logo = styled.div`
  font-size: 28px;
  font-weight: bold;
  color: #006242;
  letter-spacing: 1.5px;
  cursor: pointer;
  user-select: none;
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: center;
`;
