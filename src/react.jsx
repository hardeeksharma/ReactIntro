import React from "react";
import ReactDOM from "react-dom";

// react is a node module

class HelloWorld extends React.Component{



    render(){
        let title = "Kernal Shell"
        return (<div>Hello {title} + {2+2}</div>);
    }
}

var elem = <HelloWorld/> // this is equivalent to making object in jsx
// INStansiation of react component

var node = document.getElementById("app");

// render this component
ReactDOM.render(elem,node);


