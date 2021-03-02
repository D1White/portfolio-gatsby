import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll'

import './header.scss'
import Logo from '../../assets/icons/logo.inline.svg'
import MobMenuIcon from '../../assets/icons/mob_menu.inline.svg'


const Header = () => {
  const [theme, setTheme] = useState(false)
  const [scroll, setScroll] = useState(false)

  const handleScroll = () => {
    const position = window.pageYOffset
    if (position > 0) {
      setScroll(true)
    } else {
      setScroll(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    if (theme) {
      document.documentElement.setAttribute('theme', 'dark');
    }else {
      document.documentElement.setAttribute('theme', 'light');
    }
  }, [theme])

  const themeSwitcher = () => {
    setTheme(!theme)
  }

  return (
    <header className={`header ${scroll ? 'scroll' : ''}`}>
      <div className="container">
        <div className="header__content">
          <Logo className="header__logo" />
          <nav className="header__nav">
            <ul className="nav__links">
              <li className="nav__link">
                <Link
                  to="opening"
                  activeClass="active"
                  offset={-60}
                  spy={true}
                  smooth={true}
                >
                  Main
                </Link>
              </li>
              <li className="nav__link active">
                <Link
                  to="skills"
                  activeClass="active"
                  offset={-60}
                  spy={true}
                  smooth={true}
                >
                  Skills
                </Link>
              </li>
              <li className="nav__link">
                <Link
                  to="works"
                  activeClass="active"
                  offset={-60}
                  spy={true}
                  smooth={true}
                >
                  Works
                </Link>
              </li>
              <li className="nav__link">
                <Link
                  to="contacts"
                  activeClass="active"
                  offset={-60}
                  spy={true}
                  smooth={true}
                >
                  Contacts
                </Link>
              </li>
            </ul>
            <input
              type="button"
              className={`header__theme-btn ${theme ? 'light' : 'dark'}`}
              onClick={themeSwitcher}
            />
          </nav>
          <MobMenuIcon className="header__mob-menu" />
        </div>
      </div>
    </header>
  )
}

export default Header
