import React from "react";
import "../styles/active_students.css"

const ActiveStudents = () => {
    return(
        <div className="active_students" >
            <h3>Active Students</h3>
            <div>
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Last Activity</th>
                        <th>Sessions</th>
                        <th>Words</th>
                        <th>Submission Date</th>
                        <th>Type ID</th>
                        <th>CB</th>
                    </tr>
                    <tr>
                        <td>Taceveg 653</td>
                        <td>12 hours ago</td>
                        <td>7</td>
                        <td>65</td>
                        <td>12 hours ago</td>
                        <td>100%</td>
                        <td>100%</td>
                    </tr>
                    <tr>
                        <td>Will Kinsman</td>
                        <td>a month ago</td>
                        <td>2</td>
                        <td>118</td>
                        <td>a month ago</td>
                        <td>80%</td>
                        <td>44%</td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default ActiveStudents ;