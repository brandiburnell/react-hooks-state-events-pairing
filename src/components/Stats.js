import React, {useState} from "react";
import Views from "./Views";
import Likes from "./Likes";
import Comments from "./Comments";

function Stats({video}) {
    const [showComments, setShowComments] = useState(true);

    console.log(video);

    function handleClick() {
        setShowComments(!showComments);
    }

    return (
        <div>
            <h2>React Today and Tomorrow and 90% Cleaner React With Hooks</h2>
            <Views views={video.views} />
            <Likes upvotes={video.upvotes} downvotes={video.downvotes} />
            <br></br>
            <button onClick={handleClick}>Hide Comments</button>
            <hr></hr>
            { showComments ? <Comments comments={video.comments}/> : null }
        </div>
    );
}

export default Stats;