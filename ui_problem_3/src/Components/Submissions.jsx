import React from "react";
import "../styles/submissions.css"

const Submissions = () => {
    return(
        <div className="submissions" >
            <h1>Submissions</h1>
            <table>
                    <tr>
                        <th>Name</th>
                        <th>Submission Status</th>
                        <th>Grading Status</th>
                        <th>Submission Date</th>
                        <th>Actions</th>
                    </tr>
                    <tr>
                        <td>Will Kinsman</td>
                        <td className="green" >Submitted</td>
                        <td className="gray" >Pending</td>
                        <td>a month ago</td>
                        <td>
                            <button className="green_button" >Download Keylogs</button>
                            <button className="blue_button" >Show Submission</button>
                        </td>
                    </tr>
                    <tr>
                        <td>Taceveg 653</td>
                        <td className="green" >Submitted</td>
                        <td className="gray" >Pending</td>
                        <td>6 hours ago</td>
                        <td>
                            <button className="green_button" >Download Keylogs</button>
                            <button className="blue_button" >Show Submission</button>
                        </td>
                    </tr>
                </table>
        </div>
    )
}

export default Submissions;