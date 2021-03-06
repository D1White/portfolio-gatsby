import React from 'react'
import './opening.scss'
import avatar from '../../assets/img/avatar.png'
import ArrowIcon from '../../assets/icons/arrow.inline.svg'

const Opening = () => {
  return (
    <div className="opening" id='opening'>
      <div className="container">
        <div className="opening__content">
          <div className="opening__info">
            <img src={avatar} alt="avatar" className="opening__avatar" draggable="false" />
            <span className="opening__subtitle" role="img" aria-label="waving hand">
              Hi, I'm Danylo Bilyi 👋
            </span>
            <h1 className="opening__title">
              Front-end developer passionate about creating beautiful
              user-friendly apps
            </h1>
          </div>
          <div className="opening__arrow">
            <ArrowIcon />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Opening
