import React from 'react'

export const SkillSection = ({ title, list }) => {
  return (
    <section className="skills__section">
      <h3 className="skills__header">{`${title}:`}</h3>
      <ul className="skills__list">
        { list && list.map( (item, index) => (
          <li className="skills__item" key={`${item}_${index}`}>{item}</li>
        ))}
      </ul>
    </section>
  )
}