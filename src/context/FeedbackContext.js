// import { v4 as uuidv4 } from 'uuid'
import { createContext, useState, useEffect } from 'react'

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
<<<<<<< HEAD
    const [isLoading, setIsLoading] = useState(true)
    const [feedback, setFeedback] = useState([])
    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })

    useEffect(() => {
        fetchFeedback()
    }, [])

    // Fetch feedback
    const fetchFeedback = async () => {
        const response = await fetch(`/feedback?_sort=id&_order=desc`)
        const data = await response.json()

        setFeedback(data)
        setIsLoading(false)
    }

    // Add Feedback
    const addFeedback = async (newFeedback) => {
        const response = await fetch('/feedback', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newFeedback),
        })

        const data = await response.json()

        // newFeedback.id = uuidv4()
        setFeedback([data, ...feedback])
     }

    // Delete Feedback
    const deleteFeedback = async (id) => {
=======
    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: "This is feedback item 1",
            rating: 10,
        },
        {
            id: 2,
            text: "This is feedback item 2",
            rating: 9,
        },
        {
            id: 3,
            text: "This is feedback item 3",
            rating: 7,
        },
    ])

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
     }

    const deleteFeedback = (id) => {
>>>>>>> parent of 97871dd (Update functionality)
        if(window.confirm('Are you sure you want to delete?')) {
            await fetch(`/feedback/${id}`, { method: 'DELETE' })

           setFeedback(feedback.filter((item) => item.id !== id))
        }
    }

<<<<<<< HEAD
    //  Update feedback item
    const updateFeedback = async (id, updItem) => {
        const response = await fetch(`/feedback/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updItem)
        })

        const data = await response.json()

        setFeedback(feedback.map((item) => item.id === id ? { ...item, ...data} : item))
    } 

    // Set item to be updated
    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true
        })
    }

    return <FeedbackContext.Provider value={{
        feedback,
        feedbackEdit,
        isLoading,
=======
    return <FeedbackContext.Provider value={{
        feedback,
>>>>>>> parent of 97871dd (Update functionality)
        deleteFeedback,
        addFeedback,
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext