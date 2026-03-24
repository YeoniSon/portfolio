import {
  ProfileContainer,
  Image,
  AboutContentContainer,
  MainContent,
  SubContent,
  Github,
  Icon,
} from "../../styles/ProfileStyled";

const Profile = () => {
  return (
    <div>
      <ProfileContainer>
        <Image>
          <img src="/image/IMG_8710.JPG" alt="Profile" />
        </Image>
        <AboutContentContainer>
          <MainContent>
            {`"왜 이런 문제가 발생했을까"를 먼저 고민하는 
            백엔드 개발자 손지연입니다.`}
          </MainContent>
          <SubContent>
            {`프론트엔드와 백엔드를 모두 경험하며 서비스의 전체 흐름을 이해해왔습니다.

기능 간의 영향과 구조를 고려한 개발을 지향합니다.`}
          </SubContent>

          <Github>
            <Icon>
              <img
                src="https://img.icons8.com/?size=100&id=62856&format=png&color=000000"
                alt="GitHub 아이콘"
              />
            </Icon>
            <SubContent>Git</SubContent>
          </Github>
        </AboutContentContainer>
      </ProfileContainer>
    </div>
  );
};

export default Profile;
