import { motion, AnimatePresence } from 'framer-motion'
import PropTypes from 'prop-types'
import FeedbackItem from "./FeedbackItem"
<<<<<<< HEAD
import Spinner from './shared/Spinner'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackList() {
    const { feedback, isLoading } = useContext(FeedbackContext)

    if(!isLoading && (!feedback || feedback.length === 0)) {
=======

function FeedbackList({ feedback, handleDelete }) {
    if(!feedback || feedback.length === 0) {
>>>>>>> parent of 13b022a (Routing to About page and Context addition)
        return <p>No feedback yet</p>
    }

    return isLoading ? <Spinner /> : ( 
    <div className='feedback-list'>
        <AnimatePresence>
            {feedback.map((item) => (
                <motion.div 
                    key={item.id} 
<<<<<<< HEAD
                    initial={{opacity: 0, x: -200}} 
                    animate={{opacity: 1, x: 0}}
                    // exit={{opacity: 0, y: 400}}
                    transition={{
                        delay: 1,
                        x: { type: "spring", stiffness: 100 },
                        default: { duration: 1 },
                    }}
=======
                    initial={{opacity: 0}} 
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
>>>>>>> parent of 13b022a (Routing to About page and Context addition)
                >
                <FeedbackItem 
                    key={item.id} 
                    item={item} 
                    handleDelete={handleDelete} 
                />
                </motion.div>
            ))}
        </AnimatePresence>
    </div>)

    // return (
    //     <div className='feedback-list'>
    //         {feedback.map((item) => (
    //             <FeedbackItem 
    //                 key={item.id} 
    //                 item={item} 
    //                 handleDelete={handleDelete} 
    //             />
    //         ))}
    //     </div>
    // )
}

FeedbackList.propTypes = {
    feedback: PropTypes.arrayOf(
        PropTypes.shape({
            // id: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
            rating: PropTypes.number.isRequired,
        })
    )
}

export default FeedbackList