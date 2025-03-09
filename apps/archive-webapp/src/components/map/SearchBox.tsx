import { Button as AntdButton, Input as AntdInput } from "antd";
import { useState } from "react";
import styled from "styled-components";

interface ISearchBox {
  handleSearch: (keyword: string) => void;
}
const SearchBox = ({ handleSearch }: ISearchBox) => {
  const [keyword, setKeyword] = useState("");

  return (
    <Wrapper>
      <Input
        allowClear
        placeholder="카페 테마명으로 검색해보세요!"
        onChange={(e) => setKeyword(e.target.value)}
        onPressEnter={() => {
          keyword && handleSearch(keyword);
        }}
      />
      {/* 선택한 아티스트 */}
      <Button type="primary" shape="circle" size="large">
        A
      </Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 2;
  display: flex;
  gap: 8px;
  width: calc(100% - 32px);
  padding: 16px 16px 0;
`;

const Input = styled(AntdInput)``;

const Button = styled(AntdButton)``;

export default SearchBox;
