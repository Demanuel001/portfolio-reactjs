import React from 'react'
import '../styles/components/maincontent.sass'
import AboutContainer from './AboutContainer'
import ExperienceContainer from '../components/ExperienceContainer'

const MainContent = () => {
    return (
        <main id='main-content'>
            <AboutContainer/>
            <ExperienceContainer/>
        </main>
    )
}

export default MainContent