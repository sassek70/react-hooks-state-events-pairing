import {useState} from 'react'
import RenderComments from './DisplayComments'

const VideoDetails = ({video}) => {

    const {upvotes, downvotes, views, createdAt, comments} = video

    const [upvoteCount, setUpvoteCount] = useState(upvotes)
    const [downvoteCount, setDownvoteCount] = useState(downvotes)
    const [showComments, setShowComments] = useState(false)

    const updateUpvoteCount = () => {
        setUpvoteCount((upvoteCount) => upvoteCount +1)
    }

    const updateDownvoteCount = () => {
        setDownvoteCount((downvoteCount) => downvoteCount +1)
    }

    const toggleComments = () => {
        setShowComments(!showComments)
    }
    console.log(showComments)
    console.log(comments)

    const renderComments = comments.map((comment) => {
        return  <RenderComments user={comment.user} comment={comment.comment}/>
    })

    return(
        <>
            <div>
                <p>{views} Views | {createdAt}</p>
                <button onClick={updateUpvoteCount}>{upvoteCount} 👍</button>
                <button onClick={updateDownvoteCount}>{downvoteCount} 👎</button>
            </div>
                <button onClick={toggleComments}>Hide Comments</button>
                {showComments? <h3>{comments.length} Comments</h3> : null}
                {showComments? renderComments : null}
                
        </>

    )
}

export default VideoDetails