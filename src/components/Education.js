import React from "react";
import "../styles/Education-form.css"


class Education extends React.Component {
    constructor(props){
        super(props)
        this.state= {
            schoolInput:'',
            titleOfStudyInput: '',
            dateOfStudyInput: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleEducationSubmit = this.handleEducationSubmit.bind(this)

    }
    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value,
        })
    }
    handleEducationSubmit(e){
        e.preventDefault()
        this.props.setSchool(this.state.schoolInput)
        this.props.setTitleOfStudy(this.state.titleOfStudyInput)
        this.props.setDateOfStudy(this.state.dateOfStudyInput)

    }
    render(){
                
        return(
            <div className="education-form">
                <h2>Education Information</h2>
                <label htmlFor="schoolInput">School/ University: </label>
                <input
                    type="text" 
                    onChange={this.handleChange}
                    value={this.state.schoolInput}
                    id="schoolInput"
                    name="schoolInput">
                </input>
                <label htmlFor="titleOfStudyInput">Field of Study: </label>
                <input
                    type="text" 
                    onChange={this.handleChange}
                    value={this.state.titleOfStudyInput}
                    id="titleOfStudyInput"
                    name="titleOfStudyInput">
                </input>
                <label htmlFor="dateOfStudyInput">Graduation Date: </label>
                <input
                    type="date" 
                    onChange={this.handleChange}
                    value={this.state.dateOfStudyInput}
                    id="dateOfStudyInput"
                    name="dateOfStudyInput"
                    >
                    
                </input>
                <button onClick={this.handleEducationSubmit}>Submit</button>
                
            
            </div>
        )
        }
}
export default Education