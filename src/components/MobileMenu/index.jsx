import React from 'react'
import { Link } from 'react-scroll'
import './mobmenu.scss'
import { ContactButton } from '../index'

import Logo from '../../assets/icons/logo.inline.svg'

const MobileMenu = ({ setMobMenu }) => {
  const [close, setClose] = React.useState(false)

  const closeMobMenu = () => {
    setClose(true);
    setTimeout(() => {
      setMobMenu(false);
    }, 500);
  }

  return (
    <div className={`mob-menu ${close ? 'close' : ''}`}>
      <button className="mob-menu__close" aria-label='close' onClick={closeMobMenu} />
      <Logo className="mob-menu__logo" />
      <ul className="mob-menu__links">
        <li className="mob-menu__link">
          <Link
            to="opening"
            activeClass="active"
            offset={-88}
            spy={true}
            smooth={true}
            onClick={closeMobMenu}
          >
            Main
          </Link>
        </li>
        <li className="mob-menu__link">
          <Link
            to="skills"
            activeClass="active"
            offset={-88}
            spy={true}
            smooth={true}
            onClick={closeMobMenu}
          >
            Skills
          </Link>
        </li>
        <li className="mob-menu__link">
          <Link
            to="works"
            activeClass="active"
            offset={-88}
            spy={true}
            smooth={true}
            onClick={closeMobMenu}
          >
            Works
          </Link>
        </li>
        <li className="mob-menu__link">
          <Link
            to="contacts"
            activeClass="active"
            offset={-88}
            spy={true}
            smooth={true}
            onClick={closeMobMenu}
          >
            Contacts
          </Link>
        </li>
      </ul>
      <div className="mob-menu__contacts">
        <ContactButton url='https://t.me/d_white' className='telegram' />
        <ContactButton url='https://github.com/D1White' className='github' />
        <ContactButton url='https://www.behance.net/1white' className='behaunce' />
        <ContactButton url='https://habr.com/ru/users/1white/posts' className='habr' />
      </div>
    </div>
  )
}

export default MobileMenu
