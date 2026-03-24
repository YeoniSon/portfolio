import {
  AboutMeContainer,
  About,
  Image,
  ContentContainer,
  Title,
  Content,
} from "../../styles/AboutMeStyled";
import { MenuTitle } from "../../styles/CommonStyled";

const AboutMe = () => {
  return (
    <div id="about">
      <MenuTitle>ABOUT ME</MenuTitle>
      <AboutMeContainer>
        <About>
          <Image>
            <img
              src="https://img.icons8.com/?size=100&id=ywULFSPkh4kI&format=png&color=000000"
              alt="이름 아이콘"
            />
          </Image>
          <ContentContainer>
            <Title>이름</Title>
            <Content>손지연</Content>
          </ContentContainer>
        </About>
        <About>
          <Image>
            <img
              src="https://img.icons8.com/?size=100&id=85102&format=png&color=000000"
              alt="생년월일 아이콘"
            />
          </Image>
          <ContentContainer>
            <Title>생년월일</Title>
            <Content>00.02.11</Content>
          </ContentContainer>
        </About>
        <About>
          <Image>
            <img
              src="https://img.icons8.com/?size=100&id=85149&format=png&color=000000"
              alt="위치 아이콘"
            />
          </Image>
          <ContentContainer>
            <Title>위치</Title>
            <Content>인천광역시 연수구</Content>
          </ContentContainer>
        </About>
        <About>
          <Image>
            <img
              src="https://img.icons8.com/?size=100&id=78382&format=png&color=000000"
              alt="연락처 아이콘"
            />
          </Image>
          <ContentContainer>
            <Title>연락처</Title>
            <Content>010.9032.9415</Content>
          </ContentContainer>
        </About>
        <About>
          <Image>
            <img
              src="https://img.icons8.com/?size=100&id=60688&format=png&color=000000"
              alt="이메일 아이콘"
            />
          </Image>
          <ContentContainer>
            <Title>이메일</Title>
            <Content>sjy8211@gmail.com</Content>
          </ContentContainer>
        </About>
        <About>
          <Image>
            <img
              src="https://img.icons8.com/?size=100&id=85962&format=png&color=000000"
              alt="학력 아이콘"
            />
          </Image>
          <ContentContainer>
            <Title>학력</Title>
            <Content>한서대학교 (항공컴퓨터학과)</Content>
          </ContentContainer>
        </About>
      </AboutMeContainer>
    </div>
  );
};

export default AboutMe;
