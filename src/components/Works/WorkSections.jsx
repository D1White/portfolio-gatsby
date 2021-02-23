import React from 'react'
import LinkArrow from '../../assets/icons/link_arrow.inline.svg'
import GithubIco from '../../assets/icons/github.inline.svg'

export const WorkSections = ({ title, items, deployUrl, githubUrl, imgUrl }) => {
  return (
    <div className="works__section">
      <div className="works__info">
        <h3 className="works__title">{title}</h3>
        <ul className="works__technologies">
          {items &&
            items.map(tech => (
              <li className="works__item" key={tech}>
                {tech}
              </li>
            ))}
        </ul>
        <div className="works__buttons">
          <a
            href={deployUrl}
            className="works__button"
            target="_blank"
            rel="noreferrer"
          >
            <span className="works__button__text">visit</span>
            <LinkArrow className="works__button__ico" />
          </a>
          <a
            href={githubUrl}
            className="works__button"
            target="_blank"
            rel="noreferrer"
          >
            <span className="works__button__text">source</span>
            <GithubIco className="works__button__ico" />
          </a>
        </div>
      </div>
      <img src={`https:${imgUrl}`} alt="work" className="works__image" />
    </div>
  )
}
