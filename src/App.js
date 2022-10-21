import React from "react";
import Form from "./components/Form";
import Display from "./components/Display";
import "./styles/App.css"

class App extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            nameInput: '',
            name: '',
            email: '',
            phone: '',
            school: '',
            title_of_study: '',
            date_of_study: '',
            company_name: '',
            position_title: '',
            responsibiliies: [],
            position_date: '',
        }

       this.handleNameChange = this.handleNameChange.bind(this)
       this.handleNameSubmit = this.handleNameSubmit.bind(this)


    }
    handleNameChange(e){
        this.setState({
            nameInput: e.target.value,
        })
    }
    handleNameSubmit(e){
        e.preventDefault()
        this.setState({
            name: this.state.nameInput,
            nameInput: ''
        })
    }
    render(){
        const { name, nameInput } = this.state
        return(
            <div className="App">
                <Form name={name} nameInput={nameInput} handleNameChange={this.handleNameChange} handleNameSubmit={this.handleNameSubmit} />
                <Display name={name}/>
            </div>
        )
    }
}
export default App