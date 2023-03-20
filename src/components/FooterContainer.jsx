import React from 'react'
import "../styles/components/footercontainer.sass"
import Events from "./Events"

const FooterContainer = () => {
  return (
    <div className="footer-container">
        <Events/>
        <p className="autor">&copy;Copyright 2023 Danilo Emanuel</p>
    </div>
  )
}

export default FooterContainer