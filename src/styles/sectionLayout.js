import { css } from "styled-components";

/** ProjectBoardContainer와 동일한 가로 폭 (최대 1200px, 좌우 여백) */
export const sectionContentWidth = css`
  width: 100%;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 32px;
  padding-right: 32px;
  box-sizing: border-box;
`;
