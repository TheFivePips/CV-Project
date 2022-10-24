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
       this.setEmail = this.setEmail.bind(this)
       this.setPhone = this.setPhone.bind(this)



    }
    setName(string){
        this.setState({
            name: string,
        })
    }
    setEmail(string){
        this.setState({
            email: string,
        })
    }
    setPhone(num){
        this.setState({
            phone: num,
        })
    }
    render(){
        const { name, email, phone } = this.state
        return(
            <div className="App">
                <Form setName={this.setName} setEmail={this.setEmail} setPhone={this.setPhone}/>
                <Display name={name} email={email} phone={phone} />
            </div>
        )
    }
}
export default App