import styled from 'styled-components';

export const LayoutContentWrapper = styled.div`
  width: auto;
`;

export const LayoutContainer = styled.div`
  width: auto;
  margin-left: 18rem;
  padding: 3rem;
`;

export const LayoutContent = styled.div`
  width: auto;
`;

export const LayoutMenu = styled.div`
  margin-top: 2rem;
  & + & {
    margin-top: 30px;
  }
`;

export const LayoutMenuItem = styled.div`;
  cursor: pointer;
  font-weight: 600;
  font-size: 16px;
  color: #444444;
  opacity: 1;
  text-align: left;
  vertical-align: middle;
`;

export const ItemList = styled.div`
  margin-top: 16px;
  font-size: 14px;
  padding-left: 20px;
  & + & {
    margin-top: 8px;
  }
`;
