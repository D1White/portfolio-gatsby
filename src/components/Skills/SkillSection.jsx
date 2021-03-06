import React from 'react'
import OnVisible from 'react-on-visible'

export const SkillSection = ({ title, list }) => {
  return (
    <OnVisible
      className="skills__section"
      percent={20}
      wrappingElement={'section'}
    >
      <h4 className="skills__header">{`${title}:`}</h4>
      <ul className="skills__list">
        {list &&
          list.map((item, index) => (
            <li className="skills__item" key={`${item}_${index}`}>
              {item}
            </li>
          ))}
      </ul>
    </OnVisible>
  )
}
