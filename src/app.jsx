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
              <Thumbnail title={data[0].title} url={data[0].url} />
              <Thumbnail title={data[1].title} url={data[1].url} />
              <Thumbnail title={data[2].title} url={data[2].url} />
              <Thumbnail title={data[3].title} url={data[3].url} />
              <Thumbnail title={data[4].title} url={data[4].url} />
          </div>

        );

    }
}

var app = <App/>;

var node = document.getElementById("app");

ReactDOM.render(app,node);