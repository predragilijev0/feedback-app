import { motion, AnimatePresence } from 'framer-motion'
import { useContext } from 'react'
// import PropTypes from 'prop-types'
import FeedbackItem from "./FeedbackItem"
import FeedbackContext from '../context/FeedbackContext'

function FeedbackList() {
    const {feedback} = useContext(FeedbackContext)

    if(!feedback || feedback.length === 0) {
        return <p>No feedback yet</p>
    }

    return (
        <div className='feedback-list'>
            <AnimatePresence>
            {feedback.map((item) => (
                <motion.div 
                    key={item.id} 
                    initial={{opacity: 0, x: -200}} 
                    animate={{opacity: 1, x: 0}}
                    exit={{opacity: 0, y: 400}}
                    transition={{
                        delay: 1,
                        x: { type: "spring", stiffness: 100 },
                        default: { duration: 1 },
                    }}
                >
                <FeedbackItem 
                    key={item.id} 
                    item={item} 
                />
                </motion.div>
            ))}
            </AnimatePresence>
        </div>
    )

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

// FeedbackList.propTypes = {
//     feedback: PropTypes.arrayOf(
//         PropTypes.shape({
//             // id: PropTypes.number.isRequired,
//             text: PropTypes.string.isRequired,
//             rating: PropTypes.number.isRequired,
//         })
//     )
// }

export default FeedbackList