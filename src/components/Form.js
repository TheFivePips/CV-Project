import React from "react";
import General from "./General";
import Education from "./Education";
import Experience from "./Experience";
import "../styles/Form.css"



class Form extends React.Component {
   
    render(){
        const { setName, setEmail, setPhone } = this.props
        return(
            <div className="form">
                <section >
                    <General
                    
                    setName={setName} 
                    setEmail={setEmail} 
                    setPhone={setPhone}
                    />
                </section>

                <section>
                    <Education />
                </section>

                <section>
                    <Experience />
                </section>
                
                
            </div>
        )
    }
}
export default Form