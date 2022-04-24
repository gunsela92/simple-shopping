import React, {useState} from "react";
import "./contact.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPaperPlane} from "@fortawesome/free-solid-svg-icons";
import CalandhaLogo from "../../assets/Calandha-Logo.png";

const ContactUs = () => {
  const [username, setUsername] = useState("");
  const [userMail, setUserMail] = useState("");
  const [userMessage, setUserMessage] = useState("");
  const [isFormSent, setIsFormSent] = useState(false);

  const sendForm = (e) => {
    e?.preventDefault();
    setUsername("");
    setUserMail("");
    setUserMessage("");
    setIsFormSent(true);
  }

  return (
    <>
      <div className="contactUsTitle">
          Bize ulaşmak için aşağıdaki formu doldurabilirsiniz.
      </div>
      <form className="contactUsContainer" onSubmit={sendForm}>
        <div className="contactInputWrapper">
          <p>Adınız Soyadınız</p>
          <input type="text" required onChange={(e) => setUsername(e?.target?.value)} value={username} />
        </div>
        <div className="contactInputWrapper">
          <p>E-posta</p>
          <input type="email" required onChange={(e) => setUserMail(e?.target?.value)} value={userMail} />
        </div>
        <div className="contactInputWrapper">
          <p>Mesajınız</p>
          <textarea rows="4" cols="40" required onChange={(e) => setUserMessage(e?.target?.value)} value={userMessage} />
        </div>
        <button className="sendFormBtn" type="submit">
          <FontAwesomeIcon icon={faPaperPlane} />
            GÖNDER
        </button>
      </form>
      {isFormSent && <div className="formSent">
          Formunuz iletildi. Teşekkür ederiz.
      </div>}
      <div className="calandhaInfo">
          info@calandha.com <br/><br/>Tel / Whatsapp : +90 (552) 807 35 51
      </div>
      <img src={CalandhaLogo} className="contactLogo" alt="contactLogo" />
    </>
  );
};

export default ContactUs;
