import uniqid from 'uniqid'
import StackIcon from 'tech-stack-icons';
import { skills } from '../../portfolio'
import './Skills.css'

const Skills = () => {
  // if (!skills.length) return null

  console.log(skills)

  return (
    <section className='section skills' id='skills'>
      <h2 className='section__title'>Skills</h2>
      <ul className='skills__list'>
        {skills.backend.map((skill) => (
          <li key={uniqid()} className='skills__list-item btn btn--plain'>
            <StackIcon name={skill.icon} className='icon-small' /> {skill.name}
          </li>
        ))}
      </ul>
      <ul className='skills__list'>
        {skills.frontend.map((skill) => (
          <li key={uniqid()} className='skills__list-item btn btn--plain'>
            <StackIcon name={skill.icon} className='icon-small' /> {skill.name}
          </li>
        ))}
      </ul>
      <ul className='skills__list'>
        {skills.devops.map((skill) => (
          <li key={uniqid()} className='skills__list-item btn btn--plain'>
            <StackIcon name={skill.icon} className='icon-small' /> {skill.name}
          </li>
        ))}
      </ul>
      <ul className='skills__list'>
        {skills.databases.map((skill) => (
          <li key={uniqid()} className='skills__list-item btn btn--plain'>
            <StackIcon name={skill.icon} className='icon-small' /> {skill.name}
          </li>
        ))}
      </ul>
      <ul className='skills__list'>
        {skills.tools.map((skill) => (
          <li key={uniqid()} className='skills__list-item btn btn--plain'>
            <StackIcon name={skill.icon} className='icon-small' /> {skill.name}
          </li>
        ))}
      </ul>

    </section>
  )
}

export default Skills
