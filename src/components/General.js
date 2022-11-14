import React from "react";
import "../styles/General-form.css"


class General extends React.Component {
    constructor(props){
        super(props)
        this.state= {
            nameInput:'',
            emailInput: '',
            phoneInput: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleNameSubmit = this.handleNameSubmit.bind(this)

    }
    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value,
        })
    }
    handleNameSubmit(e){
        e.preventDefault()
        this.props.setName(this.state.nameInput)
        this.props.setEmail(this.state.emailInput)
        this.props.setPhone(this.state.phoneInput)

        // this.setState({
        //     nameInput: '',
        //     emailInput: '',
        //     phoneInput: ''
        // })
    }
    render(){
                
        return(
            <div className="general-form">
                <h2>General Information</h2>
                <label htmlFor="nameInput">First and Last Name: </label>
                <input
                    type="text" 
                    onChange={this.handleChange}
                    value={this.state.nameInput}
                    id="nameInput"
                    name="nameInput">
                </input>
                <label htmlFor="emailInput">Email: </label>
                <input
                    type="email" 
                    onChange={this.handleChange}
                    value={this.state.emailInput}
                    id="emailInput"
                    name="emailInput">
                </input>
                <label htmlFor="phoneInput">Phone: </label>
                <input
                    type="tel" 
                    onChange={this.handleChange}
                    value={this.state.phoneInput}
                    id="phoneInput"
                    name="phoneInput"
                    placeholder="###-###-####">
                    
                </input>
                <button onClick={this.handleNameSubmit}>Submit</button>
                
            
            </div>
        )
        }
}
export default General