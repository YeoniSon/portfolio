import { useCallback, useEffect, useMemo, useState } from "react";
import { MenuTitle } from "../../../styles/CommonStyled";
import {
  ProjectBoardContainer,
  ProjectsCarouselRow,
  CarouselViewport,
  ProjectsPagesTrack,
  ProjectPage,
  ProjectsSlideGrid,
  ProjectCard,
  ProjectPreviewImage,
  ProjectPreviewBody,
  ProjectPreviewTitle,
  ProjectPreviewDesc,
  ProjectButtons,
  ProjectButtonPrimary,
  ProjectButtonSecondary,
  CarouselNav,
  CarouselDots,
  CarouselDot,
  ModalOverlay,
  ModalPanel,
  ModalClose,
  ModalTitle,
  ModalBody,
  ModalActions,
} from "../../../styles/project/ProjectBoardStyled";
import projects, { PROJECTS_PER_PAGE } from "../../../data/projects";

function chunkProjects(items, size) {
  const pages = [];
  for (let i = 0; i < items.length; i += size) {
    pages.push(items.slice(i, i + size));
  }
  return pages;
}

const ProjectsSection = () => {
  const [pageIndex, setPageIndex] = useState(0);
  const [modalProject, setModalProject] = useState(null);

  const pages = useMemo(
    () => chunkProjects(projects, PROJECTS_PER_PAGE),
    [],
  );
  const pageCount = pages.length;

  const openModal = (project) => setModalProject(project);
  const closeModal = useCallback(() => setModalProject(null), []);

  const goPrev = () => setPageIndex((i) => Math.max(0, i - 1));
  const goNext = () => setPageIndex((i) => Math.min(pageCount - 1, i + 1));

  useEffect(() => {
    if (!modalProject) return undefined;

    const onKey = (e) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [modalProject, closeModal]);

  useEffect(() => {
    if (pageIndex > pageCount - 1) {
      setPageIndex(Math.max(0, pageCount - 1));
    }
  }, [pageCount, pageIndex]);

  return (
    <div id="project">
      <MenuTitle>Project</MenuTitle>
      <ProjectBoardContainer>
        <ProjectsCarouselRow>
          <CarouselNav
            type="button"
            aria-label="이전 슬라이드"
            onClick={goPrev}
            disabled={pageIndex === 0 || pageCount <= 1}
          >
            ‹
          </CarouselNav>
          <CarouselViewport>
            <ProjectsPagesTrack $pageIndex={pageIndex} $pageCount={pageCount}>
              {pages.map((page, pageIdx) => (
                <ProjectPage key={pageIdx} $pageCount={pageCount}>
                  <ProjectsSlideGrid>
                    {page.map((p) => (
                      <ProjectCard key={p.id}>
                        <ProjectPreviewImage>
                          <img
                            src={p.imageUrl}
                            alt={p.imageAlt}
                            loading="lazy"
                          />
                        </ProjectPreviewImage>
                        <ProjectPreviewBody>
                          <ProjectPreviewTitle>{p.title}</ProjectPreviewTitle>
                          <ProjectPreviewDesc>
                            {p.shortDescription}
                          </ProjectPreviewDesc>
                          <ProjectButtons>
                            <ProjectButtonSecondary
                              type="button"
                              onClick={() => openModal(p)}
                            >
                              자세히 보기
                            </ProjectButtonSecondary>
                            <ProjectButtonPrimary
                              href={p.deployUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              배포 사이트
                            </ProjectButtonPrimary>
                          </ProjectButtons>
                        </ProjectPreviewBody>
                      </ProjectCard>
                    ))}
                  </ProjectsSlideGrid>
                </ProjectPage>
              ))}
            </ProjectsPagesTrack>
          </CarouselViewport>
          <CarouselNav
            type="button"
            aria-label="다음 슬라이드"
            onClick={goNext}
            disabled={pageIndex >= pageCount - 1 || pageCount <= 1}
          >
            ›
          </CarouselNav>
        </ProjectsCarouselRow>

        {pageCount > 1 && (
          <CarouselDots>
            {pages.map((_, i) => (
              <CarouselDot
                key={`dot-${projects[i * PROJECTS_PER_PAGE]?.id ?? i}`}
                type="button"
                $active={i === pageIndex}
                aria-label={`${i + 1}번째 슬라이드로 이동`}
                onClick={() => setPageIndex(i)}
              />
            ))}
          </CarouselDots>
        )}
      </ProjectBoardContainer>

      {modalProject && (
        <ModalOverlay
          role="presentation"
          onClick={(e) => {
            if (e.target === e.currentTarget) closeModal();
          }}
        >
          <ModalPanel
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
          >
            <ModalClose type="button" aria-label="닫기" onClick={closeModal}>
              ×
            </ModalClose>
            <ModalTitle id="project-modal-title">
              {modalProject.title}
            </ModalTitle>
            <ModalBody>{modalProject.detailDescription}</ModalBody>
            <ModalActions>
              <ProjectButtonSecondary type="button" onClick={closeModal}>
                닫기
              </ProjectButtonSecondary>
              <ProjectButtonPrimary
                href={modalProject.deployUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                배포 사이트 열기
              </ProjectButtonPrimary>
            </ModalActions>
          </ModalPanel>
        </ModalOverlay>
      )}
    </div>
  );
};

export default ProjectsSection;
