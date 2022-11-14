import React from "react";

class Display extends React.Component {
    render(){
        let responsibilities = this.props.responsibilities
        return(
            <div>
                <h1>{this.props.name}</h1>
                <h5>{this.props.email}</h5>
                <h5>{this.props.phone}</h5>

                <h3>{this.props.school}</h3>
                <h3>{this.props.title_of_study}</h3>
                <h3>{this.props.date_of_study}</h3>

                <h3>{this.props.company_name}</h3>
                <h3>{this.props.position_title}</h3>
                {responsibilities.map((res) => (
                    <li>{res}</li>
                ))}
                <h3>{this.props.position_date}</h3>

                
            </div>
        )
    }
}
export default Display