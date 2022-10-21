import React from "react";

class General extends React.Component {
 


    render(){
            const { nameInput, handleNameChange } = this.props
            return(
                <div>
                    <input type="text" placeholder="FirstName and LastName" onChange={handleNameChange} value={nameInput}></input>
                    
                
                </div>
            )
        }
    }
export default General