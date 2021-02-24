import React from 'react'
import './quote.scss'
import Logo from '../../assets/icons/logo.inline.svg'

const index = () => {
  return (
    <div className="quote">
      <div className="container">
        <div className="quote__content">
          <Logo className="quote__logo" />
          <div className="quote__block">
            <span className="quote__text">
              “Any fool can write code that a computer can understand. Good
              programmers write code that humans can understand.”
            </span>
            <span className="quote__author">Martin Fowler</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default index
