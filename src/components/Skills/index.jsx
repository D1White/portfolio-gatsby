import React from 'react'
import useMouse from '@react-hook/mouse-position'
import './skills.scss'
import { Grid } from '../index'
import { SkillSection } from './SkillSection'
import skills from '../../assets/skills.json'

const Skills = () => {
  const ref = React.useRef(null);
  const mouse = useMouse(ref, {
    enterDelay: 100,
    leaveDelay: 100,
  });

  return (
    <div className="skills" ref={ref}>
      <div className="container">
        <div className="skills__content">
          <h2 className="block__header">Skills</h2>
          <div className="skills__block">
            <SkillSection title='Frontend' list={skills.frontend} />
            <SkillSection title='Backend' list={skills.backend} />
            <SkillSection title='Other skills' list={skills.other} />
          </div>
        </div>
      </div>
      <Grid mousePos={{ x: mouse.x, y: mouse.y }} />
    </div>
  )
}

export default Skills
