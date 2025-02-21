import React from "react";

function Links({ github, linkedin }) {
    return (
        <div>
            <h3>Links</h3>
            <a href="{github}" target="blank" rel="noopener noreferrer">
                Github
            </a>
            <br />
            <a href="{linkedin}" target="blank" rel="noopener noreferrer">
                LinkedIn
            </a>
        </div>
    );
}

export default Links;