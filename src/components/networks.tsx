import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import "../styles/components/networks.sass";

const networks = [
  {
    name: "linkedin",
    icon: <FaLinkedinIn />,
    link: "https://www.linkedin.com/in/joão-pedro-maciel/",
  },
  {
    name: "github",
    icon: <FaGithub />,
    link: "https://github.com/JoaoPedr0Maciel",
  },
  {
    name: "instagram",
    icon: <FaInstagram />,
    link: "https://www.instagram.com/j.pedr0zzx/",
  },
];

function Networks() {
  return (
    <section id="networks">
      {networks.map((social) => (
        <a href={social.link} target="_blank" className="social-btn" id={social.name} key={social.name}>
          {social.icon}
        </a>
      ))}
    </section>
  );
}

export default Networks;
