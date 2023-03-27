import "../styles/dialoguebox.css"

const DialogueBox = () => {
    return(
        <>
          <div className="main" >
            <h2>Edit User Profile</h2>
            <div className="data" >
              <div>
                <p>Name</p> 
                <input type="text" /> 
                <button></button>
              </div>
              <div>
                <p>Email</p>
                <h4>adasdasd</h4>
              </div>
              <div>
                <p>Groups</p> 
                <button></button> 
                <button></button> 
                <button></button>
              </div>
            </div>
          </div>
        </>
    )
}

export default DialogueBox;