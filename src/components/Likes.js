import React from "react";

function Likes({upvotes, downvotes}) {

    return (
        <div>
            <button>{upvotes} 👍</button>
            <button>{downvotes} 👎</button>
        </div>
    );
}

export default Likes;