import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import UpworkIcon from '../../assets/UpworkIcon.png'
import FiverrIcon from '../../assets/FiverrIcon.png'

import { about } from '../../portfolio'
import './About.css'

const About = () => {
  const { name, role, description, resume, socialLinks } = about

  return (
    <div className='about center'>
      {name && (
        <h1>
          Hi, I am <span className='about__name'>{name}.</span>
        </h1>
      )}

      {role && <h2 className='about__role'>A {role}.</h2>}
      <p className='about__desc'>{description && description}</p>

      <div className='about__contact center'>
        {resume && (
          <a href={resume}>
            <span type='button' className='btn btn--outline'>
              Resume
            </span>
          </a>
        )}

        {socialLinks && (
          <>
            {socialLinks.github && (
              <a
                href={socialLinks.github}
                aria-label='github'
                className='link link--icon'
              >
                <GitHubIcon />
              </a>
            )}

            {socialLinks.linkedin && (
              <a
                href={socialLinks.linkedin}
                aria-label='linkedin'
                className='link link--icon'
              >
                <LinkedInIcon />
              </a>
            )}

            {socialLinks.fiverr && (
              <a
                href={socialLinks.fiverr}
                aria-label='fiverr'
                className='link link--icon'
              >
                <img
                  src={FiverrIcon}
                  alt="Fiverr Icon"
                  className="icon-img" // Add custom CSS class for consistent sizing if needed
                />
              </a>
            )}

            {socialLinks.upwork && (
              <a
                href={socialLinks.upwork}
                aria-label='upwork'
                className='link link--icon'
              >
                <img
                  src={UpworkIcon}
                  alt="Upwork Icon"
                  className="icon-img" // Add custom CSS class for consistent sizing if needed
                />
              </a>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default About
