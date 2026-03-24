import {
  HeaderContainer,
  Logo,
  MenuContainer,
  MenuButton,
} from "../../styles/HeaderStyled";

const Header = () => {
  const handleLogoClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <HeaderContainer>
      <Logo onClick={handleLogoClick}>Son Jiyeon</Logo>

      <MenuContainer>
        <MenuButton type="button" onClick={() => scrollToSection("about")}>
          About
        </MenuButton>
        <MenuButton type="button" onClick={() => scrollToSection("skills")}>
          Skills
        </MenuButton>
        <MenuButton type="button" onClick={() => scrollToSection("project")}>
          Project
        </MenuButton>
      </MenuContainer>
    </HeaderContainer>
  );
};

export default Header;
