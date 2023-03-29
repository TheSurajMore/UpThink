import "../styles/dialoguebox.css"

const DialogueBox = ({name, email, now, change1, change2 }) => {

    return(
        <>
          <div className="main" >
            <div className="heading" >
              <h2>Edit User Profile</h2>
              <button style={{border:'0px', width:"fit-content" }} >✖</button>
            </div>
            <div className="data" >
              <div>
                <p>Name</p> 
                <input type="text" placeholder={name} /> 
                <button style={{backgroundColor:"blue", color:'white', border:"0px"}} >Change</button>
              </div>
              <div>
                <p>Email</p>
                <h4 >{email}</h4>
              </div>
              <div>
                <p>Groups</p> 
                <button>{now}✖</button> 
                <button>{change1}➕</button> 
                <button>{change2}➖</button>
              </div>
            </div>
          </div>
        </>
    )
}

export default DialogueBox;