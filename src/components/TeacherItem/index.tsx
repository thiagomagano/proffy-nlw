import React from 'react'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'
import api from '../../services/api'

export interface Teacher {
  id: number,
  name: string,
  avatar: string,
  whatsapp: string,
  bio: string,
  subject: string,
  cost: number,
  schedule: {
    week_day: string,
    from: string,
    to: string,
  }
}

interface TeacherItemProps {
  teacher: Teacher
}

function createNewConnection(id: number) {
  api.post('/connections', { user_id: id })
}
const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {
  return (
    <article className="teacher-item">
      <header>
        <img src={teacher.avatar} alt={teacher.name} />
        <div>
          <strong>{teacher.name} </strong>
          <span>{teacher.subject}</span>
        </div>
      </header>

      <p>{teacher.bio}	</p>

      <footer>
        <p>Preço/Hora
        <strong>R$ {teacher.cost},00</strong></p>

        <a
          onClick={() => createNewConnection(teacher.id)}
          href={`https://wa.me/${teacher.whatsapp}`}
          target='_blank'
          type="button"
        >
          <img src={whatsappIcon} alt="Whatsapp" />
							Entrar em Contato
						</a>
      </footer>
    </article>
  )
}

export default TeacherItem
