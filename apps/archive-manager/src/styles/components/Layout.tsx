import styled from 'styled-components';

export const LayoutContentWrapper = styled.div`
  width: auto;
`;

export const LayoutContainer = styled.div`
  width: auto;
  margin-left: 18rem;
  padding: 2rem;
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

export const LayoutMenuItem = styled.div`
  font-size: 1.125rem;
  font-weight: 700;
  cursor: pointer;
`;

export const ItemList = styled.div`
  margin-top: 16px;
  font-size: 1rem;
  padding-left: 20px;
  & + & {
    margin-top: 8px;
  }
`;
