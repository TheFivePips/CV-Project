import React from "react";

class Display extends React.Component {
    render(){
        return(
            <div>
                <h1>{this.props.name}</h1>
                <h5>{this.props.email}</h5>
                <h5>{this.props.phone}</h5>

                
            </div>
        )
    }
}
export default Display