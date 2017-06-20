import React from "react";
import ReactDOM from "react-dom";
import Thumbnail from "./components/thumbnail.jsx"
import {data} from "./data.js"
import MainBox from "./components/main-box.jsx";

export default class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {current_title:data[0].title, current_url:data[0].url};
        this.setCurrentState = this.setCurrentState.bind(this);
    }

    setCurrentState(title,url){
        //this.setState is used to modify the current state object
        this.setState({current_title:title, current_url:url});
    }

    render(){

        return (
          <div>
              <div className="jumbotron row">
                  <div className="col-md-4"></div>
                  <div className="col-md-4">
                      <MainBox title={this.state.current_title} url={this.state.current_url} />
                  </div>
                  <div className="col-md-4"></div>

              </div>
              {
                  // Start of JS Expression for data.map
                  data.map(function(object){
                          return (
                              <Thumbnail
                                  key = {object.title}
                                  title={object.title}
                                  url={object.url}
                                  setCurrentHandler={this.setCurrentState}
                              />
                          )
                      }.bind(this) // End of function
                  ) // End of Data.map
              }
          </div>

        );

    }
}

var app = <App/>;

var node = document.getElementById("app");

ReactDOM.render(app,node);