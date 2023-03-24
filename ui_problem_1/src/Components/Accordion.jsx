import React, { useState } from "react";

const Accordion = ({text, next}) => {

    const [show, setShow] = useState(true)

    return(
        <div>
            <div><button onClick={()=>setShow(!show)} >{show? "➕" : "➖"}</button>{text}</div>
            { !show && next}
        </div>
    )
}

export default Accordion;