import uniqid from 'uniqid'
import GitHubIcon from '@material-ui/icons/GitHub'
import { Button } from '@material-ui/core';
import { Visibility } from '@material-ui/icons';
import './EducationContainer.css'
import StackIcon from 'tech-stack-icons';
import UpworkIcon from '../../assets/UpworkIcon.png'
import img from '../../assets/companies/fieztech.jpg'


const EducationContainer = ({ education }) => (
  <div className='education'>
    {console.log(education, `${education.image}`)}
    <img
      // src={`../..${education.icon}.jpg`} // Correctly use template literals
      src={education.image} // Use the icon path directly from the educations array
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


    <h5>{education.institute}</h5>
    <p>{education.program}</p>
    <p>{education.year}</p>
    {/* <p>Grade: {education.grade}</p> */}

  </div>
)

export default EducationContainer