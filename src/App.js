import React from "react";
import Form from "./components/Form";
import Display from "./components/Display";
import "./styles/App.css"

class App extends React.Component{
    constructor(props){
        super(props)

        this.state = {
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

       this.setName = this.setName.bind(this)

    }
    setName(string){
        this.setState({
            name: string,
        })
    }
    render(){
        const { name } = this.state
        return(
            <div className="App">
                <Form setName={this.setName}/>
                <Display name={name}/>
            </div>
        )
    }
}
export default App