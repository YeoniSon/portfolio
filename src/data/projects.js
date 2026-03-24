import data from "./projects.json";

/** 한 슬라이드에 보여줄 프로젝트 카드 수 (JSON의 perPage와 동기화) */
export const PROJECTS_PER_PAGE = data.perPage;

export default data.projects;
