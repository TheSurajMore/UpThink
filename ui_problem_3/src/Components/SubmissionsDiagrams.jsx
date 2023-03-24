import React from "react";
import "../styles/submissions_diagrams.css"

const SubmissionsDiagrams = () => {
    return(
        <div className="submissions_diagrams" >
            <div>
                <h5>Submitted Activities vs Pending Submission</h5>
                <div className="circle" ></div>
            </div>
            <div>
                <h5>Day-wise submissions</h5>
                <div className="graph" ></div>
            </div>
        </div>
    )
}

export default SubmissionsDiagrams;