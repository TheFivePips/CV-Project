import React from "react";
import "../styles/Experience-form.css"


class Experience extends React.Component {
    constructor(props){
        super(props)
        this.state= {
            companyNameInput:'',
            positionTitleInput: '',
            posistionDateInput: '',
            responsibilitiesInput: '',
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleExperienceSubmit = this.handleExperienceSubmit.bind(this)

    }
    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value,
        })
    }
    handleExperienceSubmit(e){
        e.preventDefault()
        this.props.setCompanyName(this.state.companyNameInput)
        this.props.setPositionTitle(this.state.positionTitleInput)
        this.props.setPositionDate(this.state.posistionDateInput)
        this.props.setResponsibilities(this.state.responsibilitiesInput)
        this.setState({
            responsibilitiesInput: ''
        })

    }
    render(){
                
        return(
            <div className="experience-form">
                <h2>Experience Information</h2>
                <label htmlFor="companyNameInput">Company Name: </label>
                <input
                    type="text" 
                    onChange={this.handleChange}
                    value={this.state.companyNameInput}
                    id="companyNameInput"
                    name="companyNameInput">
                </input>
                <label htmlFor="positionTitleInput">Job Title: </label>
                <input
                    type="text" 
                    onChange={this.handleChange}
                    value={this.state.positionTitleInput}
                    id="positionTitleInput"
                    name="positionTitleInput">
                </input>
                <label htmlFor="responsibilitiesInput">Responsibilities: </label>
                <input
                    type="text" 
                    onChange={this.handleChange}
                    value={this.state.responsibilitiesInput}
                    id="responsibilitiesInput"
                    name="responsibilitiesInput">
                </input>
                <label htmlFor="posistionDateInput">Years at company: </label>
                <input
                    type="num" 
                    onChange={this.handleChange}
                    value={this.state.posistionDateInput}
                    id="posistionDateInput"
                    name="posistionDateInput"
                    >
                    
                </input>
                <button onClick={this.handleExperienceSubmit}>Submit</button>
                
            
            </div>
        )
        }
}
export default Experience