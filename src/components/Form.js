import React from "react";
import General from "./General";
import Education from "./Education";
import Experience from "./Experience";
import "../styles/Form.css"



class Form extends React.Component {
   
    render(){
        const { name, nameInput, handleNameChange, handleNameSubmit } = this.props
        return(
            <form className="form">
                <General name={name} nameInput={nameInput} handleNameChange={handleNameChange} handleNameSubmit={handleNameSubmit}/>
                <Education />
                <Experience />
            </form>
        )
    }
}
export default Form