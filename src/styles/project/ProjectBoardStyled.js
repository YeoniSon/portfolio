import styled from "styled-components";
import { sectionContentWidth } from "../sectionLayout";

export const ProjectBoardContainer = styled.div`
  ${sectionContentWidth}
  margin-top: 50px;
  margin-bottom: 120px;
  border-radius: 30px;
  padding: 20px;
  background-color: #efecec;
`;

export const ProjectsCarouselRow = styled.div`
  display: flex;
  align-items: stretch;
  gap: 8px;
  margin-bottom: 12px;
`;

export const CarouselViewport = styled.div`
  flex: 1;
  min-width: 0;
  overflow: hidden;
`;

export const ProjectsPagesTrack = styled.div`
  display: flex;
  width: ${({ $pageCount }) => `${$pageCount * 100}%`};
  transition: transform 0.35s ease;
  transform: ${({ $pageIndex, $pageCount }) =>
    `translateX(-${($pageIndex * 100) / $pageCount}%)`};
`;

export const ProjectPage = styled.div`
  flex: 0 0 ${({ $pageCount }) => `${100 / $pageCount}%`};
  min-width: 0;
  box-sizing: border-box;
  padding: 0 6px;

  &:first-child {
    padding-left: 0;
  }

  &:last-child {
    padding-right: 0;
  }
`;

export const ProjectsSlideGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 20px;
  align-items: stretch;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const CarouselNav = styled.button`
  flex-shrink: 0;
  width: 40px;
  align-self: center;
  border: none;
  background-color: transparent;
  font-size: 24px;
  line-height: 1;
  cursor: pointer;

  &:hover:not(:disabled) {
    color: #ef8c6b;
  }

  &:disabled {
    opacity: 0.35;
    cursor: not-allowed;
  }
`;

export const CarouselDots = styled.div`
  display: flex;
  gap: 8px;
  justify-content: center;
`;

export const CarouselDot = styled.button`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: 0;
  padding: 0;
  cursor: pointer;
  background: ${({ $active }) => ($active ? "#111" : "#ccc")};
  opacity: ${({ $active }) => ($active ? 1 : 0.6)};

  &:hover {
    opacity: 1;
  }
`;

export const ProjectCard = styled.article`
  display: flex;
  min-width: 0;
  flex-direction: column;
  border-radius: 16px;
  background: #fff;
  box-shadow: 0 8px 28px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  height: 100%;
`;

export const ProjectPreviewImage = styled.div`
  width: 100%;
  aspect-ratio: 16 / 9;
  background: #f0f0f0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;

export const ProjectPreviewBody = styled.div`
  padding: 16px 18px 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex: 1;
  min-height: 0;
`;

export const ProjectPreviewTitle = styled.h2`
  margin: 0;
  font-size: 1.1rem;
`;

export const ProjectPreviewDesc = styled.p`
  margin: 0;
  font-size: 0.95rem;
  line-height: 1.55;
  color: #444;
`;

export const ProjectButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: auto;
  padding-top: 8px;
`;

export const ProjectButtonSecondary = styled.button`
  border: 1px solid #ccc;
  background: #fff;
  color: #333;
  padding: 10px 16px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background: #f7f7f7;
  }
`;

export const ProjectButtonPrimary = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 0;
  background: #111;
  color: #fff;
  padding: 10px 16px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    background: #333;
    color: #fff;
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
  z-index: 200;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
`;

export const ModalPanel = styled.div`
  position: relative;
  width: 100%;
  max-width: 520px;
  max-height: min(80vh, 600px);
  overflow: auto;
  background: #fff;
  border-radius: 16px;
  padding: 24px 28px 20px;
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.2);
`;

export const ModalClose = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  width: 36px;
  height: 36px;
  border: 0;
  background: transparent;
  font-size: 28px;
  line-height: 1;
  cursor: pointer;
  color: #666;

  &:hover {
    color: #111;
  }
`;

export const ModalTitle = styled.h3`
  margin: 0 32px 12px 0;
  font-size: 1.35rem;
  padding-right: 8px;
`;

export const ModalBody = styled.div`
  font-size: 0.95rem;
  line-height: 1.6;
  color: #333;
  white-space: pre-line;
  margin-bottom: 20px;
`;

export const ModalActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: flex-end;
`;
