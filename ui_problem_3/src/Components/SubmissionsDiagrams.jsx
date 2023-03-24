import React from "react";
import "../styles/submissions_diagrams.css"

const SubmissionsDiagrams = () => {
    return(
        <div className="submissions_diagrams" >
            <div>
                <h4>Submitted Activities vs Pending Submission</h4>
                <div className="circle" ></div>
                <div className="graph_data" >
                  <div className="green">  
                    <div className="green_box" ></div>
                    <div>Submitted</div>
                  </div>
                  <div className="blue" >
                    <div className="blue_box" ></div>
                    <div>Pending Submissions</div>
                  </div>
                </div>
            </div>
            <div>
                <h4>Day-wise submissions</h4>
                <div className="graph" ></div>
            </div>
        </div>
    )
}

export default SubmissionsDiagrams;