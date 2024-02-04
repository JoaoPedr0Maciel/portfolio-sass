import IMG from "../img/eu.png";
import "../styles/components/sideBar.sass";
import InformationContainer from "./informationsContainer";
import Networks from "./networks";

import Curriculo from "../../public/Joao pedro - Software Developer.pdf";

function sideBar() {
  return (
    <aside id="sideBar">
      <img id="img" src={IMG} alt="" />
      <p className="title">Front-End Developer</p>
      <Networks />
      <InformationContainer />
      <a href={Curriculo} className="btn">
        curriculo
      </a>
    </aside>
  );
}

export default sideBar;
