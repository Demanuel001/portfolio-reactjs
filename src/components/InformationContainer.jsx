import React from 'react'
import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from "react-icons/ai"
import "../styles/components/informationcontainer.sass"

const InformationContainer = () => {
  return (
    <section id="information">
        <div className="info-card">
            <AiFillPhone id="phone-icon" />
            <div>
                <h3>Telefone</h3>
                <p>(86) 99524-0082</p>
            </div>
        </div>
        <div className="info-card">
            <AiOutlineMail id="email-icon" />
            <div>
                <h3>E-mail</h3>
                <p>daniloemanuel360@gmail.com</p>
            </div>
        </div>
        <div className="info-card">
            <AiFillEnvironment id="pin-icon" />
            <div>
                <h3>Localização</h3>
                <p>Parnaíba-PI</p>
            </div>
        </div>
    </section>
  )
}

export default InformationContainer