import React from 'react'
import './footer.scss'

const Footer = () => {
  return (
    <footer className="footer">
      <span className="footer__text">
        {`© ${new Date().getFullYear()} `}
        <a href="https://github.com/D1White" target="_blank" rel="noreferrer">
          Danylo Bilyi
        </a>
      </span>
    </footer>
  )
}

export default Footer
