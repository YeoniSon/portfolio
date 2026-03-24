import { MenuTitle } from "../../styles/CommonStyled";
import {
  SkillContainer,
  SkillIcon,
  SkillsContainer,
  SkillName,
  SkillTitle,
  SkillContent,
  Skill,
} from "../../styles/SkillesStyled";

const backend = [
  { name: "Java", color: "#f89820" },
  { name: "Spring Boot", color: "#6db33f" },
  { name: "Gradle", color: "#02303a" },
  { name: "Spring Security + JWT", color: "#6db33f" },
  { name: "Spring Data JPA", color: "#6db33f" },
  { name: "WebSocket (STOMP)", color: "#4f46e5" },
  { name: "node.js", color: "#33998b" },
  { name: "express.js", color: "#33997f" },
  { name: "MariaDB", color: "#c869c2" },
  { name: "MySQL", color: "#4479a1" },
];

const tools = [
  { name: "Git / GitHub", color: "#24292f" },
  { name: "Swagger", color: "#85ea2d", textColor: "#111" },
  { name: "Postman", color: "#ff6c37" },
  { name: "IntelliJ IDEA", color: "#6c2bd9" },
];

const devOps = [
  { name: "Docker", color: "#716bed" },
  { name: "AWS", color: "#28a745" },
];

const Skills = () => {
  return (
    <div id="skills">
      <MenuTitle>Skills</MenuTitle>

      <SkillsContainer>
        <SkillContainer>
          <SkillTitle>
            <SkillIcon>
              <img
                src="https://img.icons8.com/?size=100&id=12447&format=png&color=000000"
                alt="Language 아이콘"
              />
            </SkillIcon>
            <SkillName>Language</SkillName>
          </SkillTitle>

          <SkillContent>
            <Skill style={{ backgroundColor: "#f89820" }}>Java</Skill>
            <Skill style={{ backgroundColor: "#f7df1e", color: "#111" }}>
              JavaScript
            </Skill>
          </SkillContent>
        </SkillContainer>
        <SkillContainer>
          <SkillTitle>
            <SkillIcon>
              <img
                src="https://img.icons8.com/?size=100&id=PyT1qyw487YU&format=png&color=000000"
                alt="FrontEnd 아이콘"
              />
            </SkillIcon>
            <SkillName>FrontEnd</SkillName>
          </SkillTitle>

          <SkillContent>
            <Skill style={{ backgroundColor: "#3f5de2" }}>React</Skill>
            <Skill style={{ backgroundColor: "#234343" }}>HTML</Skill>
            <Skill style={{ backgroundColor: "#fe2334" }}>CSS</Skill>
          </SkillContent>
        </SkillContainer>

        <SkillContainer>
          <SkillTitle>
            <SkillIcon>
              <img
                src="https://img.icons8.com/?size=100&id=X1LX7Gl2V5Ly&format=png&color=000000"
                alt="BackEnd 아이콘"
              />
            </SkillIcon>
            <SkillName>BackEnd</SkillName>
          </SkillTitle>
          <SkillContent>
            {backend.map((item) => (
              <Skill
                key={item.name}
                style={{
                  backgroundColor: item.color,
                  color: item.textColor || "#fff",
                }}
              >
                {item.name}
              </Skill>
            ))}
          </SkillContent>
        </SkillContainer>

        <SkillContainer>
          <SkillTitle>
            <SkillIcon>
              <img
                src="https://img.icons8.com/?size=100&id=n-6PakmAMkgj&format=png&color=000000"
                alt="DevOps 아이콘"
              />
            </SkillIcon>
            <SkillName>DevOps</SkillName>
          </SkillTitle>
          <SkillContent>
            {devOps.map((item) => (
              <Skill
                key={item.name}
                style={{
                  backgroundColor: item.color,
                  color: item.textColor || "#fff",
                }}
              >
                {item.name}
              </Skill>
            ))}
          </SkillContent>
        </SkillContainer>

        <SkillContainer>
          <SkillTitle>
            <SkillIcon>
              <img
                src="https://img.icons8.com/?size=100&id=24551&format=png&color=000000"
                alt="Tool 아이콘"
              />
            </SkillIcon>
            <SkillName>Tool</SkillName>
          </SkillTitle>
          <SkillContent>
            {tools.map((item) => (
              <Skill
                key={item.name}
                style={{
                  backgroundColor: item.color,
                  color: item.textColor || "#fff",
                }}
              >
                {item.name}
              </Skill>
            ))}
          </SkillContent>
        </SkillContainer>
      </SkillsContainer>
    </div>
  );
};

export default Skills;
