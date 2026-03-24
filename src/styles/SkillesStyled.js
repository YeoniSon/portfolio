import styled from "styled-components";
import { sectionContentWidth } from "./sectionLayout";

export const SkillsContainer = styled.div`
  ${sectionContentWidth}
  margin-top: 32px;
  margin-bottom: 120px;
  background-color: #ffffff;
  border-radius: 16px;
`;

export const SkillContainer = styled.div`
  display: flex;
  padding: 20px 24px;
  align-items: flex-start;
  gap: 10px;
`;

export const SkillIcon = styled.div`
  img {
    width: 40px;
    height: 40px;
  }
`;

export const SkillName = styled.h1`
  margin: 0;
  font-size: 22px;
`;

export const SkillTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  min-width: 200px;
  margin-right: 1.25rem;
`;

export const SkillContent = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
`;

export const Skill = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 30px;
  border-radius: 4px;
  padding: 4px 10px;
  font-size: 13px;
  font-weight: 600;
  background-color: #eee;
  color: #fff;
`;
