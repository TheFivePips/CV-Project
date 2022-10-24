import React from "react";
import General from "./General";
import Education from "./Education";
import Experience from "./Experience";
import "../styles/Form.css"



class Form extends React.Component {
   
    render(){
        const { setName } = this.props
        return(
            <form className="form">
                <General setName={setName}/>
                <Education />
                <Experience />
            </form>
        )
    }
}
export default Form