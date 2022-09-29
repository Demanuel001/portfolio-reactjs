import React from 'react'
import OlimpFll from "../img/fll-olimp.jpg"
import CertFll from "../img/fll.jpg"
import Obr16 from "../img/obr-16.jpg"
import Regional from "../img/regional.jpg"
import Obr17 from "../img/obr-17.jpg"
import CertObr17 from "../img/cert-obr-17.jpg"
import '../styles/components/meritoscontainer.sass'

const meritos = [
    {id: 1, titulo: "Olimpíada do Conhecimento - 2016", info: "Eu e minha equipe ao chegar em Brasília-DF para o Festival Sesi de Robótica, First Lego League ( FLL ), novembro de 2016"},
    {id: 2, titulo: "Olimpíada do Conhecimento - 2016", info: "Competidor no Festival Sesi de Robótica, First Lego League ( FLL ) Medalha de Participação 11° colocação nível nacional, novembro de 2016"},
    {id: 3, titulo: "Olimpíada Brasileira de Robótica - 2016", info: "Medalhista na categoria de melhor Programação da Olimpíada Brasileira de Robótica (OBR), novembro de 2016"},
    {id: 4, titulo: "3° Circuito de Ciências do Piauí - 2017", info: "Medalhista na Terceira colocação do Evento Estadual no Piauí, setembro de 2017"},
    {id: 5, titulo: "Olimpíada Brasileira de Robótica - 2017", info: "Medalhista na categoria de melhor Design de Robô na Olimpíada Brasileira de Robótica (OBR), novembro de 2017"},
    {id: 6, titulo: "Long Line Modalidade Lego - 2017", info: "Medalhista na Primeira colocação na competição Long Line do Evento ARTTRON no Piauí, setembro de 2017"},
]

const MeritosContainer = () => {
  return (
    <section className="meritos-container">
        <h2>Meritos</h2>
        <div className="meritos-grid">
            {meritos.map((merito) => (
                <div className="meritos-card" id={merito.id} key={merito.id}>
                    <div className='icone-front'>
                        {(() => {
                            switch (merito.id) {
                            case 1:
                                return (
                                    <img src={OlimpFll} alt="" className='img-card'/>
                                )
                            case 2:
                                return (
                                    <img src={CertFll} alt="" className='img-card'/>
                                )
                            case 3:
                                return (
                                    <img src={Obr16} alt="" className='img-card'/>
                                )
                            case 4:
                                return (
                                    <img src={Regional} alt="" className='img-card'/>
                                )
                            case 5:
                                return (
                                    <img src={Obr17} alt="" className='img-card'/>
                                )
                            case 6:
                                return (
                                    <img src={CertObr17} alt="" className='img-card'/>
                                )
                            default:
                                return (
                                    <img src={Obr16} alt="" className='img-card'/>
                                )
                            }
                        })()}
                    </div>
                    <div className='icone-back'>
                        <h3>
                            {merito.titulo}
                        </h3>
                        <p>
                            {merito.info}
                        </p>
                    </div>
                </div>
            ))}
        </div>
        <div className="tres-pontinhos">
            <h1>...</h1>
        </div>
    </section>
  )
}

export default MeritosContainer