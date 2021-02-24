import React from 'react'
import './contacts.scss'
import { ContactButton } from './ContactButton'

const Contacts = () => {
  return (
    <div className="contacts">
      <div className="container">
        <div className="contacts__content">
          <h2 className="block__title">Contacts</h2>
          <span className="contacts__subtitle">You can find me here:</span>
          <a href="mailto:danilo.bilyi@gmail.com" className="contacts__email">
            danilo.bilyi@gmail.com
          </a>
          <div className="contacts__buttons">
            <ContactButton url='https://t.me/d_white' className='telegram' />
            <ContactButton url='https://github.com/D1White' className='github' />
            <ContactButton url='https://www.behance.net/1white' className='behaunce' />
            <ContactButton url='https://habr.com/ru/users/1white/posts' className='habr' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contacts
