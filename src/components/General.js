import React from "react";

class General extends React.Component {
 


    render(){
            const { nameInput, handleNameChange, handleNameSubmit } = this.props
            return(
                <div>
                    <input type="text" placeholder="First Name and Last Name" onChange={handleNameChange} value={nameInput}></input>
                    <button onClick={handleNameSubmit}>Submit</button>
                    
                
                </div>
            )
        }
    }
export default General