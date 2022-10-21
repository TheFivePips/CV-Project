import React from "react";
import General from "./General";
import Education from "./Education";
import Experience from "./Experience";
import "../styles/Form.css"



class Form extends React.Component {
   
    render(){
        return(
            <form className="form">
                <General name={this.props.name} nameInput={this.props.nameInput} handleNameChange={this.props.handleNameChange}/>
                <Education />
                <Experience />
            </form>
        )
    }
}
export default Form