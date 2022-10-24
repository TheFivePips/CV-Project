import React from "react";

class General extends React.Component {
    constructor(props){
        super(props)
        this.state= {
            nameInput:''
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
    }
    render(){
                
        return(
            <div>
                <label htmlFor="nameInput">First and Last Name: </label>
                <input
                    type="text" 
                    onChange={this.handleChange}
                    value={this.state.nameInput}
                    id="nameInput"
                    name="nameInput">
                </input>
                <button onClick={this.handleNameSubmit}>Submit</button>
                
            
            </div>
        )
        }
}
export default General