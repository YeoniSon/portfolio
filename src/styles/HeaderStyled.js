import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  padding: 16px 40px;
  background: #fff;
  border-bottom: 1px solid #d5cfcf;
`;

export const Logo = styled.button`
  border: 0;
  background: transparent;
  cursor: pointer;
  padding: 0;
  font-size: 34px;
  line-height: 1;
  color: #4c3f3f;
  font-family: "Dancing Script", cursive;
`;

export const MenuContainer = styled.nav`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const MenuButton = styled.button`
  border: none;
  border-radius: 40px;
  background: #fff;
  padding: 8px 10px;
  font-size: 14px;
  font-family: "Delius Unicase", cursive;
  color: #4c3f3f;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    color: #c6494b;
  }
`;
