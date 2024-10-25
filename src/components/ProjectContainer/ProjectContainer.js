import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography } from '@material-ui/core';

import uniqid from 'uniqid'
import { Visibility, InsertLink } from '@material-ui/icons';

import './ProjectContainer.css'
import StackIcon from 'tech-stack-icons';

const ProjectContainer = ({ project }) => {

  const [open, setOpen] = useState(false);

  // Open the modal
  const handleOpen = () => {
    setOpen(true);
  };

  // Close the modal
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className='project'>
      <h3>{project.name}</h3>
      <p className='project__description'>{project.description}</p>

      <img
        // src={`../..${experience.icon}.jpg`} // Correctly use template literals
        src={project.images[0]} // Use the icon path directly from the experiences array
        style={{
          objectFit: 'cover',
          left: 0,
          right: 0,
          top: '7rem',
          marginLeft: 'auto',
          marginRight: 'auto',
          width: '18rem',
          height: '10rem',
          borderRadius: '2%',
        }}
        className="shadow mb-3"
        alt=""
      />

      {project && (
        <a
          href={project.noLink}
          aria-label='source code'
          className='link link--icon'
          onClick={handleOpen}
        >
          <Visibility />
        </a>
      )}

      {project && (
        <a
          href={project.domains[0]}
          aria-label='source code'
          className='link link--icon'
        >
          <InsertLink />
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
                src={project.images[0]} // Icon path
                style={{
                  objectFit: 'cover',
                  width: '18rem',
                  height: '10rem',
                  borderRadius: '2%',
                  marginRight: '1rem',
                }}
                className="shadow"
                alt=""
              />

              {/* Position, Company Name, and Date */}
              <div>
                <h6 style={{ fontWeight: 'bold', margin: 0 }}>{project.name}</h6>
                <h6 style={{ fontStyle: 'italic', margin: 0 }}>{project.associatedWith}</h6>
                <span>{project.from} - {project.to}</span>
                <ul>
                  {project.domains?.map((item) => (
                    <li key={uniqid()}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Description */}
            <p className='experience__description' style={{ marginBottom: '20px' }}>{project.description}</p>

            {/* Responsibilities */}
            <h6>Responsibilities:</h6>
            {/* <ul>
              {project.responsibilities?.map((item) => (
                <li key={uniqid()}>{item}</li>
              ))}
            </ul> */}

            {/* Stack */}
            <h6>Stack:</h6>
            <ul className='skills__list'>
              {project.stack.map((stack) => (
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




export default ProjectContainer
