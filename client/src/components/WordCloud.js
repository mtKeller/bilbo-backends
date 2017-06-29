import React, { Component } from 'react';
import { TagCloud } from "react-tagcloud";

const options = {
  luminosity: 'light',
  hue: 'blue'
};

const data = [
  { value: "title", count: 25 }, { value: "What can you go for?", count: 35 },
  { value: "JavaScript", count: 38 }, { value: "React", count: 30 },
  { value: "Nodejs", count: 28 }, { value: "Express.js", count: 25 },
  { value: "HTML5", count: 33 }, { value: "CSS3", count: 20 },
  { value: "Webpack", count: 22 }, { value: "Babel.js", count: 7 },
  { value: "ECMAScript", count: 25 }, { value: "Jest", count: 15 },
  { value: "Mocha", count: 17 }, { value: "React Native", count: 27 },
  { value: "Angular.js", count: 30 }, { value: "TypeScript", count: 15 },
  { value: "Flow", count: 30 }, { value: "NPM", count: 11 },
];
 
class WordCloud extends Component{
  constructor(props){
    super(props);

    this.state = {
      wordCloudValue : this.props.init
    }
  };

  render(){
    return(
      <div className={"col-lg-12 word-box"}>
      <TagCloud minSize={12}
                maxSize={35}
                colorOptions={options}
                tags={this.state.wordCloudValue}
                style={{width: 500, textAlign: 'center'}}
                className="myTagCloud center-block text-center" />
      </div>
    );
  }
}
export default WordCloud;