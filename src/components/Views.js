import React from "react";

function Views({views}) {
    console.log(views);
    return (
        <div>
            <p>
                <span>{views} </span>
                Views | Uploaded Oct 26, 2018
            </p>
        </div>
    );
}

export default Views;