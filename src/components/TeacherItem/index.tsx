import React from 'react'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars3.githubusercontent.com/u/64929797?s=460&u=d1330cdacb2511eb8e3e125bc409fc7c2d44e1b4&v=4" alt="Thiago Magano" />
        <div>
          <strong>Thiago Magano</strong>
          <span>História</span>
        </div>
      </header>

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis maxime,
      odit consequatur perferendis eveniet expedita vero labore modi numquam amet?
					</p>

      <footer>
        <p>Preço/Hora</p>
        <strong>R$ 50,00</strong>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
							Entrar em Contato
						</button>
      </footer>
    </article>
  )
}

export default TeacherItem
