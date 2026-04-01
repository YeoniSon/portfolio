import styled from "styled-components";
import { sectionContentWidth } from "./sectionLayout";

export const ProfileContainer = styled.div`
  ${sectionContentWidth}
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  margin-bottom: 8rem;
  gap: 0;

  @media (max-width: 900px) {
    flex-direction: column;
    margin-bottom: 4rem;
    gap: 1.25rem;
  }
`;

export const Image = styled.div`
  margin-right: 2rem;
  flex-shrink: 0;

  img {
    display: block;
    width: 260px;
    height: 280px;
    max-width: 100%;
    object-fit: cover;
    object-position: center 30%;
    border-radius: 80%;
  }

  @media (max-width: 900px) {
    margin-right: 0;
  }

  @media (max-width: 480px) {
    width: 100%;
    display: flex;
    justify-content: center;

    img {
      width: min(240px, 78vw);
      height: auto;
      aspect-ratio: 260 / 280;
    }
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
  min-width: 0;
  box-sizing: border-box;
  max-width: min(560px, 100%);

  @media (max-width: 900px) {
    margin-left: 0;
    width: 100%;
    max-width: 100%;
    padding: 16px 14px;
  }

  @media (max-width: 480px) {
    padding: 14px 12px;
    border-radius: 16px;
  }
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

  @media (max-width: 900px) {
    font-size: clamp(1.125rem, 4.2vw, 1.5rem);
    margin-bottom: 14px;
  }
`;

export const SubContent = styled(Content)`
  font-size: 14px;
  font-weight: 400;

  @media (max-width: 900px) {
    font-size: clamp(0.8125rem, 2.8vw, 0.875rem);
  }
`;

export const Github = styled.a`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-top: 8px;
  text-decoration: none;
  color: inherit;
  cursor: pointer;
`;

export const Icon = styled.div`
  img {
    width: 40px;
  }
`;
