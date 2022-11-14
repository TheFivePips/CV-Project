import React from "react";

class Display extends React.Component {
    render(){
        return(
            <div>
                <h1>{this.props.name}</h1>
                <h5>{this.props.email}</h5>
                <h5>{this.props.phone}</h5>

                <h3>{this.props.school}</h3>
                <h3>{this.props.title_of_study}</h3>
                <h3>{this.props.date_of_study}</h3>

                
            </div>
        )
    }
}
export default Display