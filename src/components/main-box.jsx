import React from "react";

export default class MainBox extends  React.Component{

    render(){
        var breathe={width:"100%"};
        return (
            <div>
                <img style={breathe} className="img-rounded" src="/images/belt.jpg"/>
            </div>
        );
    }

}