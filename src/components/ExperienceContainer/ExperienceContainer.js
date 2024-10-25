import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography } from '@material-ui/core';

import uniqid from 'uniqid'
import { Visibility } from '@material-ui/icons';
import './ExperienceContainer.css'
import StackIcon from 'tech-stack-icons';

const ExperienceContainer = ({ experience }) => {

  const [open, setOpen] = useState(false);

  // Open the modal
  const handleOpen = () => {
    setOpen(true);
  };

  // Close the modal
  const handleClose = () => {
    setOpen(false);
  };
  console.log(experience)

  return (
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
          width: '6rem',
          height: '6rem',
          borderRadius: '50%',
        }}
        className="shadow mb-3"
        alt=""
      />


      <h4>{experience.company}</h4>
      <h6>{experience.position}</h6>
      <p>{experience.from} - {experience.to}</p>

      <p className='' style={{ marginTop: '15px' }}>{experience.description}</p>
      <p className='' style={{ marginBottom: '20px', fontWeight: "" }}>{experience.location}</p>

      {experience && (
        <a
          href={experience.noLink}
          aria-label='source code'
          className='link link--icon mt-1'
          onClick={handleOpen}
        >
          <Visibility />
        </a>
      )}

      <div>
        {/* Dialog component */}
        <Dialog open={open} onClose={handleClose} variant="outlined" fullWidth maxWidth='lg'>
          <DialogTitle>
            <h5>Detail</h5>
          </DialogTitle>
          <hr />
          <DialogContent>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
              {/* Company Icon */}
              <img
                src={experience.icon} // Icon path
                style={{
                  objectFit: 'cover',
                  width: '5rem',
                  height: '5rem',
                  borderRadius: '50%',
                  marginRight: '1rem',
                }}
                className="shadow"
                alt=""
              />

              {/* Position, Company Name, and Date */}
              <div>
                <h6 style={{ fontWeight: 'bold', margin: 0 }}>{experience.position}</h6>
                <h6 style={{ fontStyle: 'italic', margin: 0 }}>{experience.company}</h6>
                <span>{experience.startDate} - {experience.endDate}</span>
              </div>
            </div>

            {/* Description */}
            <p className='experience__description' style={{ marginBottom: '20px' }}>{experience.description}</p>
            <p className='experience__description' style={{ marginBottom: '20px' }}>{experience.location}</p>

            {/* Responsibilities */}
            <h6>Responsibilities:</h6>
            <ul>
              {experience.responsibilities?.map((item) => (
                <li key={uniqid()}>{item}</li>
              ))}
            </ul>

            {/* Stack */}
            <h6>Stack:</h6>
            <ul className='skills__list'>
              {experience.stack.map((stack) => (
                <li key={uniqid()} className='skills__list-item btn btn--plain'>
                  <StackIcon name={stack} className='icon-small' /> {stack}
                </li>
              ))}
            </ul>
          </DialogContent>

          <DialogActions>
            {/* Button to close the modal */}
            <Button onClick={handleClose} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </div>


    </div>
  )
}

export default ExperienceContainer