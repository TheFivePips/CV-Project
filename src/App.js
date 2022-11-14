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
        // this is the general info methods
       this.setName = this.setName.bind(this)
       this.setEmail = this.setEmail.bind(this)
       this.setPhone = this.setPhone.bind(this)
    //    this is the Education info methods
        this.setSchool = this.setSchool.bind(this)
        this.setTitleOfStudy = this.setTitleOfStudy.bind(this)
        this.setDateOfStudy = this.setDateOfStudy.bind(this)



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

    setSchool(string){
        this.setState({
            school: string,
        })
    } 
    setTitleOfStudy(string){
        this.setState({
            title_of_study: string,
        })
    } 
    setDateOfStudy(date){
        this.setState({
            date_of_study: date,
        })
    }
    render(){
        const { name, email, phone, school, title_of_study, date_of_study } = this.state
        return(
            <div className="App">
                <Form 
                setName={this.setName} 
                setEmail={this.setEmail} 
                setPhone={this.setPhone}
                setSchool={this.setSchool}
                setTitleOfStudy={this.setTitleOfStudy}
                setDateOfStudy={this.setDateOfStudy}
                />
                <Display
                 name={name} 
                 email={email} 
                 phone={phone} 
                 school={school} 
                 title_of_study={title_of_study} 
                 date_of_study={date_of_study}  
                 />
            </div>
        )
    }
}
export default App