import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography } from '@material-ui/core';

import uniqid from 'uniqid'
import { Visibility, InsertLink } from '@material-ui/icons';

import './FeedbackContainer.css'
import StackIcon from 'tech-stack-icons';

const FeedbackContainer = ({ feedback }) => {

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
    <div className='feedback'>
      <h6>{feedback.name}</h6>
      <p>{feedback.position}</p>
      {/* <p className='feedback__description'>{feedback.feedback}</p> */}

      <img
        src={feedback.images[0]}
        style={{
          objectFit: 'contain',
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

      <img
        src={feedback.platformIcon}
        style={{
          objectFit: 'contain',
          paddingTop: '5px',
          left: 0,
          right: 0,
          top: '2rem',
          marginLeft: 'auto',
          marginRight: 'auto',
          width: '2rem',
          height: '2rem',
          borderRadius: '50%',
        }}
        className="shadow mb-3"
        alt=""
      />
      {/* {feedback && (
        <a
          href={feedback.noLink}
          aria-label='source code'
          className='link link--icon'
          onClick={handleOpen}
        >
          {feedback.platformIcon}
        </a>
      )} */}

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
                src={feedback} // Icon path
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
                <h6 style={{ fontWeight: 'bold', margin: 0 }}>{feedback.name}</h6>
                <h6 style={{ fontStyle: 'italic', margin: 0 }}>{feedback.associatedWith}</h6>
                <span>{feedback.from} - {feedback.to}</span>
                {/* <ul>
                  {feedback.domains?.map((item) => (
                    <li key={uniqid()}>{item}</li>
                  ))}
                </ul> */}
              </div>
            </div>

            {/* Description */}
            <p className='experience__description' style={{ marginBottom: '20px' }}>{feedback.description}</p>

            {/* Responsibilities */}
            <h6>Responsibilities:</h6>
            {/* <ul>
              {feedback.responsibilities?.map((item) => (
                <li key={uniqid()}>{item}</li>
              ))}
            </ul> */}

            {/* Stack */}
            <h6>Stack:</h6>
            {/* <ul className='skills__list'>
              {feedback.stack.map((stack) => (
                <li key={uniqid()} className='skills__list-item btn btn--plain'>
                  <StackIcon name={stack} className='icon-small' /> {stack}
                </li>
              ))}
            </ul> */}
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




export default FeedbackContainer
