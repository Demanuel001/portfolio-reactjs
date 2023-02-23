import React from 'react'
import Avatar from '../img/perfil.jpg'
import SocialNetworks from './SocialNetworks'
import InformationContainer from './InformationContainer'
import '../styles/components/sidebar.sass'

const Sidebar = () => {
    return (
        <aside id="sidebar">
            <img src={Avatar} alt="Danilo Emanuel" />
            <h1 className='nome'>Danilo Emanuel</h1>
            <h2>Desenvolvedor web jr.</h2>
            <p className="title">
                -Graduando ( 7/8 período ) em Sistemas de Informação na faculdade Estácio de SÁ. <br />
                <br />
                -Técnico em Informática, Ceep Liceu Parnaibano.
            </p>
            <SocialNetworks />
            <InformationContainer />
            <button className="btn" onClick={()=>{alert("Ops... Ainda não disponivel.")}}>
                Download curriculo
            </button>
        </aside>
    )
}

export default Sidebar