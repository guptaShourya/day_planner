import React from "react";

const RmText = ({type}) => {
    return (
        <h2 id="headerTitle">{type?"Login":"SignUp"}</h2>
    )
}

export default RmText;