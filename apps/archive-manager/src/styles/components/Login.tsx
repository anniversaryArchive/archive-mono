import styled from 'styled-components';

export const LoginBg = styled.div`
  min-height: 100vh; /* 화면 높이에 맞춤 */
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow-x: auto;
  background-size: cover;
  background: rgba(210, 235, 144, 0.1) fixed; /* 배경색에만 투명도 적용 */
`;

export const LoginDiv = styled.div`
  width: 464px;
  text-align: center;
  p.logo {
    text-align: center;
    font-size: 30px;
    font-weight: bold;
    color: #137157;
    line-height: 100%;
    text-shadow: 0 1px 4px 0 rgba(210, 235, 144, 1);
    padding-bottom: 10px;
  }
  p.title {
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    color: #444444;
  }
`;

export const LoginForm = styled.div`
  margin-top: 30px;
  display: grid;
  gap: 10px;
  justify-content: center;
`;

export const StyledInput = styled.input`
  padding: 18px;
  border: 1px solid #CCCCCC;
  border-radius: 4px;
  font-size: 14px;
  width: 300px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  &:focus {
    border-color: #137157;
    outline: none;
  }
  &::placeholder {
    color: #aaa;
  }
`;

export const Button = styled.button`
  border-radius: 4px;
  border: 0;
  height: 50px;
  background-color: #137157;
  color: #ffffff;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
`;
