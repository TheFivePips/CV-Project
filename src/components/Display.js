import React from "react";
import "../styles/Display.css"

class Display extends React.Component {
    // constructor(props){
    //     super(props)
    //     // this.renderResponsibilities = this.renderResponsibilities.bind(this)
    // }
    renderResponsibilities() {
        return(
            
            <ul>
                {this.props.responsibilities.map((res) => (
                    <li key={res} className="responsibility_item">{res}</li>
                ))}
            </ul>
        )
    }
    render(){
        
        return(
            <div className="display">
                <div className="general">
                    <h1 className="name">{this.props.name}</h1>
                    <h5 className="email">{this.props.email}</h5>
                    <h5 className="phone">{this.props.phone}</h5>
                </div>

                {this.props.school !== "" && 
                
                <div className="education">
                    <h2 className="education_title">Education:</h2>
                    <h3 className="school">{this.props.school}</h3>
                    <h4 className="study">Field of Study: {this.props.title_of_study}</h4>
                    <h4 className="study_date">Graduaction Date:{this.props.date_of_study}</h4>
                </div>}
                
                {this.props.company_name !== "" &&
                <div className="experience">
                    <h2>Experience:</h2>
                    <h3 className="company_name">Company: {this.props.company_name}</h3>
                    <h4 className="position">Position Held: {this.props.position_title}</h4>

                    {this.props.responsibilities.length === 0 ? "" : 
                    <div className="responsibilities">
                        <h4 className="responsibility_title">Responsibilities:</h4>

                        {this.renderResponsibilities()}
                    </div>}
                    <h4 className="position_date">Years worked at Company: {this.props.position_date}</h4>
                    
                </div>}
                

                
            </div>
        )
    }
}
export default Display