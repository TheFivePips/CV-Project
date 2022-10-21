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

    }
    handleNameChange(e){
        this.setState({
            nameInput: e.target.value,
        })
    
    }
    render(){
        const { name, nameInput, handleNameChange } = this.state
        return(
            <div className="App">
                <Form name={name} nameInput={nameInput} handleNameChange={this.handleNameChange} />
                <Display name={name} nameInput={nameInput}/>
            </div>
        )
    }
}
export default App