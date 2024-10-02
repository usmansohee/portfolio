import uniqid from 'uniqid'
import GitHubIcon from '@material-ui/icons/GitHub'
import { Button } from '@material-ui/core';
import { Visibility } from '@material-ui/icons';
import './ExperienceContainer.css'
import StackIcon from 'tech-stack-icons';
import UpworkIcon from '../../assets/UpworkIcon.png'
import img from '../../assets/companies/fieztech.jpg'


const ExperienceContainer = ({ experience }) => (
  <div className='experience'>
    {console.log(experience, `${experience.icon}`)}
    <img
      // src={`../..${experience.icon}.jpg`} // Correctly use template literals
      src={experience.icon} // Use the icon path directly from the experiences array
      style={{
        objectFit: 'cover',
        left: 0,
        right: 0,
        top: '7rem',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '8rem',
        height: '8rem',
        borderRadius: '50%',
      }}
      className="shadow mb-3"
      alt=""
    />


    <h3>{experience.company}</h3>
    <h5>{experience.position}</h5>
    <p>{experience.from} - {experience.to}</p>

    <p className='experience__description' style={{marginBottom: '20px'}}>{experience.description}</p>
    {/* {experience.stack && (
      <ul className='experience__stack'>
        {experience.stack.map((item) => (
          <li key={uniqid()} className='experience__stack-item'>
            {item}
          </li>
        ))}
      </ul>
    )} */}

    {experience && (
      <a
        href={experience.sourceCode}
        aria-label='source code'
        className='link link--icon mt-1'
      >
        <Visibility />
      </a>
    )}

  </div>
)

export default ExperienceContainer