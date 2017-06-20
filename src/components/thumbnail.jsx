import React from "react";

export default class Thumbnail extends  React.Component{

    onButtonClickEvent(evt){
        console.log(this.props.setCurrentHandler(this.props.title,this.props.url));
        console.log(evt);
    }
    // All the props are stored in this.props
    /// Expect  variable title
    // Will be accessed by this.props.title
    render(){

        var styleus = {marginLeft:"20px", marginRight:"20px"}
        return(
            // To add style we pss object of style attributes
                <span><button
                    onClick={this.onButtonClickEvent.bind(this)} // this refers to current class
                    // secont click is to bind this component props
                    style={styleus} className="btn btn-success btn-lg" >{this.props.title}</button></span>
        );
    }
}