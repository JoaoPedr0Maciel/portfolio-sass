import {
  DiHtml5,
  DiCss3,
  DiJavascript,
  DiReact,
  DiSass,
  DiJqueryLogo,
} from "react-icons/di";

const technologies = [
  { id: "html", name: "Html5", icon: <DiHtml5 /> },
  { id: "css", name: "Css3", icon: <DiCss3 /> },
  { id: "javascript", name: "JS", icon: <DiJavascript /> },
  { id: "react", name: "React", icon: <DiReact /> },
  { id: "sass", name: "Sass", icon: <DiSass /> },
  { id: "jquery", name: "jQuery", icon: <DiJqueryLogo /> },
];

import "../styles/components/tecnologias.sass";

function Tecnologias() {
  return (
    <section className="tecnologia-container">
      <h2>Tecnologias</h2>
      <div className="tecnologias-grid">
        {technologies.map((tech) => (
          <div className="tecnologia-card" id={tech.id} key={tech.id}>
            {tech.icon}
            <div className="tecnologia-info">
              <h3>{tech.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Tecnologias;
