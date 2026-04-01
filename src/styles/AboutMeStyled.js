import styled from "styled-components";
import { sectionContentWidth } from "./sectionLayout";

export const AboutMeContainer = styled.div`
  ${sectionContentWidth}
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 20px;
  margin-top: 2rem;
  margin-bottom: 8rem;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 14px;
    margin-bottom: 4rem;
  }

  @media (max-width: 520px) {
    grid-template-columns: 1fr;
    gap: 10px;
  }
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
  box-sizing: border-box;

  @media (max-width: 520px) {
    padding: 12px 14px;
    gap: 10px;
  }
`;

export const Image = styled.div`
  flex-shrink: 0;

  img {
    display: block;
    width: 48px;
    height: 48px;
  }

  @media (max-width: 520px) {
    img {
      width: 40px;
      height: 40px;
    }
  }
`;

export const ContentContainer = styled.div`
  min-width: 0;
  overflow-wrap: break-word;
`;

export const Title = styled.h1`
  margin: 0;
  font-size: 18px;

  @media (max-width: 520px) {
    font-size: clamp(0.9375rem, 4vw, 1.125rem);
  }
`;

export const Content = styled.p`
  margin: 4px 0 0;
  font-size: 15px;
  line-height: 1.45;

  @media (max-width: 520px) {
    font-size: clamp(0.8125rem, 3.5vw, 0.9375rem);
  }
`;
