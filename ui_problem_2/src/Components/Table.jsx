import React, { useState } from "react";
import data from "../data.json";
import "../styles/table.css"
import DialogueBox from "./DialogueBox";

const Table = () => {

  const [show, setShow] = useState(false)
  const [id, setId] = useState('')

 const handleClick = (el) => {
  setId(el)
  setShow(true)
 }

    return(
        <div className="table" >
            <h2>Manage Users</h2>
            <table>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Groups</th>
                </tr>
                {
                data.map((el)=>(
                  <tr key={el.id} onClick={()=>handleClick(el)} >
                    <td>{el.name}</td>
                    <td>{el.email}</td>
                    <td><button style={{backgroundColor:el.role==="Admin"?"red":el.role==="Instructor"?"violet":"blue", color:"white", border:"none" }} >
                        {el.role}</button></td>
                  </tr>
                ))
                }
              </table>
              {
                show && <DialogueBox name={id.name} email={id.email} now={id.role} 
                //Admin
                change1={id.role===Admin?"Student":''}
                change2={id.role===Admin?"Instructor":''} />
              }
        </div>
    )
}

export default Table;