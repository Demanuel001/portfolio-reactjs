import React from 'react'

const ExperienceContainer = () => {
  return (
    <section>
        <h2>Experiências</h2>
        <h3 className="funcao">Programador</h3>
        <h3 className="empresa">Casa O Toureiro <i>( Set 2018 - Presente )</i></h3>
        <p>
          <li>
            Desenvolvimento de rotinas para o sistema usando a linguagem de programação Xharbour/Clipper;
          </li>
          <li>
            Manutenção do site de curriculo em JavaScript, html, css;
          </li>
          <li>
            Criação de servidores Linux, OpenSuse;
          </li>
          <li>
            Suporte e criação de banco de dados PostgreSQL e tabelas DBF.
          </li>
        </p>
        <br />
        <h3 className="funcao">Estagiário</h3>
        <h3 className="empresa">Ceep Liceu Parnaibano <i>( Mar 2018 - Set 2018 )</i></h3>
        <p>
          <li>
            Monitor no grupo de robótica básica, dava suporte e
            intruções de arduino uno e Lego EV3 aos alunos;
          </li>
          <li>
            Principais tecnologias: scratch for Arduino, linguagem
            Arduino ( baseada em C/C++ ), Lego EV3;
          </li>
          <li>
            Prestava suporte técnico na rede, softwares e
            máquinas usados nos laboratórios.
          </li>
        </p>
      <div className="tres-pontinhos">
        <h1>...</h1>
      </div>
    </section>
  )
}

export default ExperienceContainer