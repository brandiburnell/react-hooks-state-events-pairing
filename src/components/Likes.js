import React, {useState} from "react";

function Likes({upvotes, downvotes}) {
    const [likes, setLikes] = useState(upvotes);
    const [dislikes, setDislikes] = useState(downvotes);

    function handleClick(e) {
        if (e.target.id === "like-btn") {
            setLikes(() => likes + 1);
        }
        else {
            setDislikes(() => dislikes + 1);
        }
    }

    return (
        <div>
            <button onClick={handleClick} id="like-btn">{likes} 👍</button>
            <button onClick={handleClick} id="dislike-btn">{dislikes} 👎</button>
        </div>
    );
}

export default Likes;