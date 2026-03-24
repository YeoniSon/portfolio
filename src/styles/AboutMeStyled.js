import styled from "styled-components";
import { sectionContentWidth } from "./sectionLayout";

export const AboutMeContainer = styled.div`
  ${sectionContentWidth}
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 20px;
  margin-top: 2rem;
  margin-bottom: 8rem;
`;

export const About = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 12px;
  padding: 16px;
  border-radius: 12px;
  background: none;
  width: 100%;
  min-width: 0;
`;

export const Image = styled.div`
  img {
    width: 48px;
    height: 48px;
  }
`;

export const ContentContainer = styled.div``;

export const Title = styled.h1`
  margin: 0;
  font-size: 18px;
`;

export const Content = styled.p`
  margin: 4px 0 0;
`;
