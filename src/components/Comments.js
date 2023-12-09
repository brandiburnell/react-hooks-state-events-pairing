import React from "react";

function Comments({comments}) {

    function displayComments(comments) {
        const elementComments = comments.map((comment) => {
            return (
                <div>
                    <h4>{comment.user}</h4>
                    <p>{comment.comment}</p>
                </div>
            );
        });

        return elementComments;
    }

    return (
        <div>
            <h3><span>{comments.length}</span> Comments</h3>
            {displayComments(comments)}
        </div>
    );
}

export default Comments;