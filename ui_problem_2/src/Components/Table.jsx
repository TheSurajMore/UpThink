import React from "react";
import data from "../data.json";
import "../styles/table.css"

const Table = () => {

    return(
        <div className="table" >
            <h2>Manage Users</h2>
            <table>
                <thead>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Groups</th>
                </thead>
                {
                data.map((el)=>(
                  <tbody key={el.id} >
                    <td>{el.name}</td>
                    <td>{el.email}</td>
                    <td><button style={{backgroundColor:el.role==="Admin"?"red":el.role==="Instructor"?"violet":"blue", color:"white", border:"none" }} >
                        {el.role}</button></td>
                  </tbody>
                ))
                }
              </table>
            
        </div>
    )
}

export default Table;