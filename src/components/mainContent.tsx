import "../styles/components/mainContent.sass";
import About from "./aboutContainer";
import Projetos from "./projetos";
import Tecnologias from "./tecnologias";

function MainContent() {
  return (
    <main id="main-content">
      <About />
      <Tecnologias />
      <Projetos />
    </main>
  );
}

export default MainContent;
