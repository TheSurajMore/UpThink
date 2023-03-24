import React from "react";
import "../styles/heading.css"

const Heading = () => {
    return(
    <div className="heading" >
        <div style={{fontWeight:'bold'}} >assignment I</div>
        <div className="links" >
            <div>🔗 Invite Link</div>
            <div> + Add Student </div>
        </div>
    </div>
    )
}

export default Heading;