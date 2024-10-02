import uniqid from 'uniqid'
import { educations } from '../../portfolio'
import EducationsContainer from '../EducationContainer/EducationContainer'
import './Educations.css'

const Educations = () => {
  if (!educations.length) return null

  return (
    <section id='educations' className='section educations'>
      <h2 className='section__title'>Education</h2>

      <div className='experiences__grid'>
        {educations.map((education) => (
          <EducationsContainer key={uniqid()} education={education} />
        ))}
      </div>
    </section>
  )
}

export default Educations
