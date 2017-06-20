import React from "react";

export default class MainBox extends  React.Component{

    render(){
        var breathe={width:"250px", height:"250px"};
        return (
            <div>
                <img style={breathe} className="img-rounded" alt={this.props.title} src={this.props.url}/>
            </div>
        );
    }

}