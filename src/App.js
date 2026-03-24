import { BrowserRouter } from "react-router-dom";
import "./App.css";

import Header from "./components/base/Header";
import AboutMe from "./components/features/AboutMe";
import Profile from "./components/features/Profile";
import Skills from "./components/features/Skills";
import ProjectsSection from "./components/features/project/ProjectsSection";

function AppContent() {
  return (
    <div>
      <Header />
      <Profile />
      <AboutMe />
      <Skills />
      <ProjectsSection />
    </div>
  );
}

function App() {
  const basename = process.env.PUBLIC_URL;

  return (
    <main className="app">
      <BrowserRouter basename={basename}>
        <AppContent />
      </BrowserRouter>
    </main>
  );
}

export default App;
