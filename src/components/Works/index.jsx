import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import './works.scss'
import { WorkSections } from './WorkSections'
import pc from '../../assets/img/pc_img.jpg'

const Works = () => {
  const { allContentfulWork } = useStaticQuery(graphql`
    query {
      allContentfulWork {
        nodes {
          id
          name
          technologies
          image {
            # file {
            #   url
            # }
            resize(height: 680) {
              src
            }
          }
          deployUrl
          githubUrl
        }
      }
    }
  `)

  return (
    <div className="works" id='works'>
      <div className="container">
        <div className="works__content">
          <h2 className="block__title">Works</h2>
          <div className="works__block">
            {allContentfulWork.nodes.map(work => (
              <WorkSections
                title={work.name}
                items={work.technologies}
                deployUrl={work.deployUrl}
                githubUrl={work.githubUrl}
                imgUrl={work.image.resize.src}
                key={work.id}
              />
            ))}
            <div className="works__section">
              <div className="works__info">
                <h3 className="works__title">SOON</h3>
                <div className="works__soon">
                  <span className="works__soon__text">
                    I am learn something new every day. A new and interesting
                    project will appear here soon.
                  </span>
                </div>
              </div>
              <img src={pc} alt="work" className="works__image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Works
