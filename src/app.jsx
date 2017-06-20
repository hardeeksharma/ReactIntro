import React from "react";
import ReactDOM from "react-dom";
import Thumbnail from "./components/thumbnail.jsx"
import {data} from "./data.js"
import MainBox from "./components/main-box.jsx";

export default class App extends React.Component{

    render(){

        return (
          <div>
              <div className="jumbotron row">
                  <div className="col-md-4"></div>
                  <div className="col-md-4">
                      <MainBox/>
                  </div>
                  <div className="col-md-4"></div>

              </div>
              { // Start of JS Expression for data.map
                  data.map(function(object){
                          return (
                              <Thumbnail
                                  title={object.title}
                                  url={object.url}
                              />
                          );
                      } // End of function
                  ) // End of Data.map
              }
          </div>

        );

    }
}

var app = <App/>;

var node = document.getElementById("app");

ReactDOM.render(app,node);