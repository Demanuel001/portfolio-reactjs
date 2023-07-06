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
            <h2>Desenvolvedor Full Stack</h2>
            <p className="title">
                -Graduando ( 8/8 período ) em Sistemas de Informação na faculdade Estácio de SÁ. <br />
                <br />
                -Técnico em Informática, Ceep Liceu Parnaibano (2015-2017).
            </p>
            <SocialNetworks />
            <InformationContainer />
            <form method="get" action="https://drive.google.com/file/d/17q-fhXKJKEYkt9PmpxQcCxCpORxJPe2A/view?usp=sharing">
                <button className="btn" type="submit">Download curriculo</button>
            </form>
        </aside>
    )
}

export default Sidebar