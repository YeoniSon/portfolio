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

  const withBasePath = (src) => {
    if (!src) return src;
    const base = process.env.PUBLIC_URL || "";
    if (src.startsWith("/")) return `${base}${src}`;
    return `${base}/${src}`.replace(/\/+/g, "/");
  };

  const pages = useMemo(() => chunkProjects(projects, PROJECTS_PER_PAGE), []);
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
                      <ProjectCard
                        key={p.id}
                        role="button"
                        tabIndex={0}
                        onClick={() => {
                          if (!p.deployUrl) openModal(p);
                        }}
                        onKeyDown={(e) => {
                          if (
                            (e.key === "Enter" || e.key === " ") &&
                            !p.deployUrl
                          ) {
                            openModal(p);
                          }
                        }}
                      >
                        <ProjectPreviewImage>
                          <img
                            src={withBasePath(p.imageUrl)}
                            alt={p.imageAlt}
                            loading="lazy"
                          />
                        </ProjectPreviewImage>
                        <ProjectPreviewBody>
                          <ProjectPreviewTitle>{p.title}</ProjectPreviewTitle>
                          <ProjectPreviewDesc>
                            {p.shortDescription}
                          </ProjectPreviewDesc>

                          <div
                            style={{
                              fontSize: 12,
                              color: "#666",
                              lineHeight: 1.4,
                            }}
                          >
                            <div style={{ marginBottom: 6 }}>
                              <span style={{ fontWeight: 700 }}>기간</span>
                              <div style={{ marginBottom: 6 }}>
                                {p.period || "-"}
                              </div>
                            </div>

                            <div style={{ marginBottom: 6 }}>
                              <span style={{ fontWeight: 700 }}>기술</span>
                              <div style={{ marginBottom: 6 }}>
                                {p.tech || "-"}
                              </div>
                            </div>

                            <div style={{ marginTop: 6 }}>
                              <span style={{ fontWeight: 700 }}>기능</span>
                              <div
                                style={{
                                  whiteSpace: "pre-line",
                                  marginBottom: 6,
                                }}
                              >
                                {String(p.function || "")
                                  .split("\n")
                                  .map((line) => line.trim())
                                  .filter(Boolean)
                                  .slice(0, 4)
                                  .join("\n") || "-"}
                              </div>
                            </div>
                          </div>

                          <ProjectButtons>
                            {p.githubUrl ? (
                              <ProjectButtonSecondary
                                as="a"
                                href={p.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => {
                                  e.stopPropagation();
                                }}
                              >
                                ReadMe
                              </ProjectButtonSecondary>
                            ) : (
                              <ProjectButtonSecondary
                                type="button"
                                disabled
                                onClick={(e) => e.stopPropagation()}
                              >
                                ReadMe
                              </ProjectButtonSecondary>
                            )}

                            {p.chatUrl ? (
                              <ProjectButtonSecondary
                                as="a"
                                href={p.chatUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                              >
                                채팅 사이트
                              </ProjectButtonSecondary>
                            ) : null}

                            {p.deployUrl ? (
                              <ProjectButtonPrimary
                                as="a"
                                href={p.deployUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                              >
                                배포 사이트
                              </ProjectButtonPrimary>
                            ) : (
                              <ProjectButtonPrimary
                                as="button"
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  openModal(p);
                                }}
                              >
                                배포 준비중
                              </ProjectButtonPrimary>
                            )}
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
            <ModalBody>{modalProject.unDeployReason || "-"}</ModalBody>
            <ModalActions>
              <ProjectButtonSecondary
                type="button"
                as="a"
                href={modalProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                ReadMe
              </ProjectButtonSecondary>

              <ProjectButtonPrimary as="button" type="button" disabled>
                배포 준비중
              </ProjectButtonPrimary>
            </ModalActions>
          </ModalPanel>
        </ModalOverlay>
      )}
    </div>
  );
};

export default ProjectsSection;
