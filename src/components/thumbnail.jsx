import React from "react";

export default class Thumbnail extends  React.Component{

    // All the props are stored in this.props
    /// Expect  variable title
    // Will be accessed by this.props.title
    render(){
        var styleus = {marginLeft:"20px", marginRight:"20px"}
        return(
                <span><button style={styleus} className="btn btn-success btn-lg" url={this.props.url}>{this.props.title}</button></span>
        );
    }
}