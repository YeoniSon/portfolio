import styled from "styled-components";
import { sectionContentWidth } from "./sectionLayout";

export const ProfileContainer = styled.div`
  ${sectionContentWidth}
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  margin-bottom: 8rem;
`;

export const Image = styled.div`
  margin-right: 2rem;
  img {
    width: 260px;
    height: 280px;
    object-fit: cover;
    object-position: center 30%;
    border-radius: 80%;
  }
`;

export const AboutContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 8px;
  margin-left: 2rem;
  justify-content: center;
  background-color: #ece9e8;
  border-radius: 10%;
  padding: 20px;
`;

export const Content = styled.h1`
  margin: 0;
  font-size: 15px;
  white-space: pre-line;
`;

export const MainContent = styled(Content)`
  font-size: 26px;
  font-weight: 700;
  margin-bottom: 20px;
`;

export const SubContent = styled(Content)`
  font-size: 14px;
  font-weight: 400;
`;

export const Github = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-top: 8px;
`;

export const Icon = styled.div`
  img {
    width: 40px;
  }
`;
