import React from "react";
import Form from "./components/Form";
import Display from "./components/Display";
import "./App.css"

class App extends React.Component{
    render(){
        return(
            <div className="App">
                <Form />
                <Display />
            </div>
        )
    }
}
export default App