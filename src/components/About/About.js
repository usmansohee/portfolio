import { PDFDocument } from 'pdf-lib'

import GithubIcon from '../../assets/GithubIcon.png'
import LinkedInIcon from '../../assets/LinkedInIcon.png'
import UpworkIcon from '../../assets/UpworkIcon.png'
import FiverrIcon from '../../assets/FiverrIcon.png'
import Resume from '../../assets/resume.pdf'

import { about } from '../../portfolio'
import './About.css'

const About = () => {
  const { name, role, description, resume, socialLinks, avatar } = about;

  const downloadResume = async () => {
    // Load the existing PDF
    const existingPdfBytes = await fetch(Resume).then(res => res.arrayBuffer());
    const pdfDoc = await PDFDocument.load(existingPdfBytes);

    // Set PDF metadata
    pdfDoc.setTitle('Usman Ahmed Resume');
    pdfDoc.setAuthor('Usman Ahmed');
    pdfDoc.setSubject('Resume');
    pdfDoc.setKeywords(['resume', 'cv', 'pdf']);

    // Serialize the PDFDocument to bytes (a Uint8Array)
    const pdfBytes = await pdfDoc.save();

    // Create a blob and trigger the download
    const blob = new Blob([pdfBytes], { type: 'application/pdf' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'Usman_Ahmed_Resume.pdf'; // Custom filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className='about center'>
      {name && (
        <h1>
          Hi, I am <span className='about__name'>{name}.</span>
        </h1>
      )}
      {role && <h2 className='about__role'>A {role}.</h2>}
      <p className='about__desc'>{description && description}</p>
      <div className='profile-container'>
        <img className='avatar' alt='Profile Avatar' src={avatar} />
      </div>
      <div className='about__contact center'>
  {socialLinks && (
    <>
      {socialLinks.github && (
        <a 
          href={socialLinks.github} 
          aria-label='github' 
          className='link link--icon' 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <img src={GithubIcon} alt="Github Icon" className="icon-img" />
        </a>
      )}
      {socialLinks.linkedin && (
        <a 
          href={socialLinks.linkedin} 
          aria-label='linkedin' 
          className='link link--icon' 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <img src={LinkedInIcon} alt="LinkedIn Icon" className="icon-img" />
        </a>
      )}
      {socialLinks.fiverr && (
        <a 
          href={socialLinks.fiverr} 
          aria-label='fiverr' 
          className='link link--icon' 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <img src={FiverrIcon} alt="Fiverr Icon" className="icon-img" />
        </a>
      )}
      {socialLinks.upwork && (
        <a 
          href={socialLinks.upwork} 
          aria-label='upwork' 
          className='link link--icon' 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <img src={UpworkIcon} alt="Upwork Icon" className="icon-img" />
        </a>
      )}
    </>
  )}
</div>

      <div className='' style={{ marginTop: '15px' }}>
        {Resume && (
          <button
            type='button'
            className='btn btn--outline'
            onClick={downloadResume}
          >
            Resume
          </button>
        )}
      </div>

    </div>
  );
};

export default About