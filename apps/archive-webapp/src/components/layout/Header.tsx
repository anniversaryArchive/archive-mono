import { GlobalOutlined, UserOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useRouter } from "next/router";
import styled from "styled-components";

// TODO: #1 PR 병합 후 ~/context/global로 변경
import { PRIMARY_COLOR } from "../../../../../contexts/global";
import { useState } from "react";
import LoginModal from "@/modals/LoginModal";

export default function Header() {
  const router = useRouter();
  const [showLoginModal, setShowLoginModal] = useState(false);

  const onClickUserIcon = () => {
    // TODO: 로그인 여부 체크
    setShowLoginModal(true);
  };

  return (
    <Wrapper>
      <Logo onClick={() => router.push("/")}>ARCHIVE</Logo>
      <Container>
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
          onClick={onClickUserIcon}
        />
      </Container>

      <LoginModal open={showLoginModal} />
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
  color: ${PRIMARY_COLOR};
  letter-spacing: 1.5px;
  cursor: pointer;
  user-select: none;
`;

const Container = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: center;
`;
