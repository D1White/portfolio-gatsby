import React from 'react'
import './header.scss'
import Logo from '../../assets/icons/logo.inline.svg'

const Header = () => {
  const [theme, setTheme] = React.useState(false)

  const themeSwitcher = () => {
    setTheme(!theme)
  }

  return (
    <header className="header">
      <div className="container">
        <div className="header__content">
          <Logo className="header__logo" />
          <nav className="header__nav">
            <ul className="nav__links">
              <li className="nav__link">Main</li>
              <li className="nav__link active">Skills</li>
              <li className="nav__link">Works</li>
              <li className="nav__link">Contacts</li>
            </ul>
            <input
              type="button"
              className={`header__theme-btn ${theme ? 'light' : 'dark'}`}
              onClick={themeSwitcher}
            />
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
