import React, { useState } from "react";
import "../Styles/data.css"
import Accordion from "./Accordion";

const Data = () => {

    const [text, setText] = useState ('')

    return(
        <div className="data" >
        <div className="left" >
            <div>
            <div><Accordion text={'🏛 Liverpool (1558)'} /></div>
            </div>
            <div>
               <div><Accordion text={"🏛 Joe's Demo School (1569)"} 
                     next={<div className="course" ><Accordion text={"🎓 English Comp (1570)"} /></div>} />
               </div>
            </div>
            <div>
               <div><Accordion text={"🏛 Model Training Academy (1631)"} 
                     next={<div>
                     <div className="course" ><Accordion text={"🎓 Version 1.2 (1772)"} 
                     next={<div>
                 <div className="assignment" onClick={() => setText("📝 Tell me about your favourite book or movie. (1773)")} >📝 Tell me about your favourite book or movie. (1773)</div>
                 <div className="assignment" onClick={ () => setText("📝 Retype the text exactly as it is shown. (1774)")} >📝 Retype the text exactly as it is shown. (1774)</div>
                 <div className="assignment" onClick={ () => setText("📝 What are you most excited about next 90 days? (1775)")} >📝 What are you most excited about next 90 days? (1775) </div>
                 <div className="assignment" onClick={() => setText("📝 Tell me about your favourite book or movie. (1773)")} >📝 Tell me about your favourite book or movie. (1773)</div>
                 <div className="assignment" onClick={ () => setText("📝 Retype the text exactly as it is shown. (1774)")} >📝 Retype the text exactly as it is shown. (1774)</div>
                 <div className="assignment" onClick={ () => setText("📝 What are you most excited about next 90 days? (1775)")} >📝 What are you most excited about next 90 days? (1775) </div>
                     </div>} /></div>
                     <div className="course" ><Accordion text={"🎓 Version 1.0 (1632)"} /></div>
                     <div className="course" ><Accordion text={"🎓 Version 1.1 (1673)"} /></div>
                    </div>}
                     />
               </div>
            </div>
        </div>
        <div className="right" ><p>{text}</p></div>
        </div>
    )
}

export default Data; 