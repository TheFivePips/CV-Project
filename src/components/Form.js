import React from "react";
import General from "./General";
import Education from "./Education";
import Experience from "./Experience";
import "../styles/Form.css"



class Form extends React.Component {
   
    render(){
        const { setName, setEmail, setPhone, setSchool, setTitleOfStudy, setDateOfStudy, setCompanyName, setPositionTitle, setPositionDate, setResponsibilities } = this.props
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
                    <Education 
                        setSchool={setSchool}
                        setTitleOfStudy={setTitleOfStudy}
                        setDateOfStudy={setDateOfStudy}
                    />
                </section>

                <section>
                    <Experience 
                        setCompanyName={setCompanyName}
                        setPositionTitle={setPositionTitle}
                        setPositionDate={setPositionDate}
                        setResponsibilities={setResponsibilities}/>
                </section>
                
                
            </div>
        )
    }
}
export default Form