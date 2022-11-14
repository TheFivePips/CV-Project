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
            responsibilities: [],
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
        // this is the experience info methods
        this.setCompanyName = this.setCompanyName.bind(this)
        this.setPositionTitle = this.setPositionTitle.bind(this)
        this.setResponsibilities = this.setResponsibilities.bind(this)
        this.setPositionDate = this.setPositionDate.bind(this)




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
    setCompanyName(string){
        this.setState({
            company_name: string,
        })
    } 
    setPositionTitle(string){
        this.setState({
            position_title: string,
        })
    } 
    setResponsibilities(string){
        this.setState((state) => ({
            responsibilities: [...state, string]
        }))
    }
    setPositionDate(num){
        this.setState({
            position_date: num,
        })
    }
    render(){
        const { name, email, phone, school, title_of_study, date_of_study, company_name, position_title, position_date, responsibilities } = this.state
        return(
            <div className="App">
                <Form 
                setName={this.setName} 
                setEmail={this.setEmail} 
                setPhone={this.setPhone}
                setSchool={this.setSchool}
                setTitleOfStudy={this.setTitleOfStudy}
                setDateOfStudy={this.setDateOfStudy}
                setCompanyName={this.setCompanyName}
                setPositionTitle={this.setPositionTitle}
                setResponsibilities={this.setResponsibilities}
                setPositionDate={this.setPositionDate}
                />
                <Display
                 name={name} 
                 email={email} 
                 phone={phone} 
                 school={school} 
                 title_of_study={title_of_study} 
                 date_of_study={date_of_study}  
                 company_name={company_name}
                 position_title={position_title}
                 position_date={position_date}
                 responsibilities={responsibilities}
                 />
            </div>
        )
    }
}
export default App