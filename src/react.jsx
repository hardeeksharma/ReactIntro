import React from "react";
import ReactDOM from "react-dom";

// react is a node module

class HelloWorld extends React.Component{

    render(){
        return (<div>Hello World 123</div>);
    }
}

var elem = <HelloWorld/> // this is equivalent to making object in jsx
// INStansiation of react component

var node = document.getElementById("app");

// render this component
ReactDOM.render(elem,node);


