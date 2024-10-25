import uniqid from 'uniqid'
import { feedbacks } from '../../portfolio'
import FeedbackContainer from '../FeedbackContainer/FeedbackContainer'
import './Feedbacks.css'

const Feedbacks = () => {
  if (!feedbacks.length) return null

  return (
    <section id='feedbacks' className='section feedbacks'>
      <h2 className='section__title'>Feedback</h2>

      <div className='feedbacks__grid'>
        {feedbacks.map((feedback) => (
          <FeedbackContainer key={uniqid()} feedback={feedback} />
        ))}
      </div>
    </section>
  )
}

export default Feedbacks
