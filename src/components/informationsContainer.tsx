import "../styles/components/informationContainer.sass";
import { AiFillPhone, AiOutlineMail} from "react-icons/ai";


function InformationContainer() {
  return <section id="information">
        <div className="info-card">
            <AiFillPhone  id="phone-icon" />
            <div>
                <h3>Telefone</h3>
                <p>(66) 99902-8161</p>
            </div>
        </div>
        <div className="info-card">
            <AiOutlineMail  id="email-icon" />
            <div>
                <h3>E-mail</h3>
                <p>joaopedromaciel007@gmail.com</p>
            </div>
        </div>
  </section>
}
export default InformationContainer;
