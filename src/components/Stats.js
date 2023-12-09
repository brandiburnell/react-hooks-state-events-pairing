import React from "react";
import Views from "./Views";
import Likes from "./Likes";
import Comments from "./Comments";

function Stats({video}) {
    console.log(video);
    return (
        <div>
            <h2>React Today and Tomorrow and 90% Cleaner React With Hooks</h2>
            <Views views={video.views} />
            <Likes upvotes={video.upvotes} downvotes={video.downvotes} />
            <br></br>
            <button>Hide Comments</button>
            <hr></hr>
            <Comments comments={video.comments}/>
        </div>
    );
}

export default Stats;