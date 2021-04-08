import React, { useRef } from 'react'
import useMouse from '@react-hook/mouse-position'
import './skills.scss'
import { Grid } from '../index'
import { SkillSection } from './SkillSection'
import skills from '../../assets/skills.json'

const isBrowser = typeof window !== `undefined`;

const Skills = () => {
  const ref = useRef(null);

  if (!isBrowser) { //SSR hack
    global.window = {}; 
  }

  const mouse = useMouse(document.body, {
    enterDelay: 100,
    leaveDelay: 100,
  });

  return (
    <div className="skills" id='skills' ref={ref}>
      <div className="container">
        <div className="skills__content">
          <h2 className="block__title">Skills</h2>
          <div className="skills__block">
            <SkillSection title="Frontend" list={skills.frontend} />
            <SkillSection title="Backend" list={skills.backend} />
            <SkillSection title="Other skills" list={skills.other} />
          </div>
        </div>
      </div>
      <Grid mousePos={mouse ? { x: mouse.x, y: mouse.y } : { x: 0, y: 0 }} />
    </div>
  )
}

export default Skills
