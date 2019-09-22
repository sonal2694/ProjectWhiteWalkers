import React from 'react';
import logo from './logo.svg';
import './App.css';
import ImageBox from './ImageBox'
import {Component} from 'react';
import axios from 'axios';


class App extends Component {

  constructor() {
    super();
    this.state = {
      history: [{
          "url": "https://i.ytimg.com/vi/J-HbAxA5QH0/maxresdefault.jpg",
          "classification": "ice",
        }
      ],
      currentImageValue: ""
    };
    this.onClassifyBtnClicked = this.onClassifyBtnClicked.bind(this);
    this.onInputChange = this.onInputChange.bind(this);

  }

  onInputChange = (e) => {
    console.log("Here");
    this.setState({
      currentImageValue: e.target.value
    });
  };

  onClassifyBtnClicked = (e) => {
    console.log(this.state);
    let self = this;

    axios.post('http://localhost:4000/image/process', {
      url: this.state.currentImageValue,
    })
    .then(function (response) {
      console.log("In the response");
      console.log(response);
      let currentHistory = self.state.history;
      currentHistory.unshift({
        "url": response.data.url,
        "classification": response.data.class
      });
      self.setState({history: currentHistory});
    })
    .catch(function (error) {
      console.log(error);
    });
  };

  render() {
    const images = []
    for (let key in this.state.history) {
      images.push( <ImageBox imageData={this.state.history[key]}/> );
    }
    return (
      <div className = "App" >
        <div className= "topBar" style = {styles.topBar}>
          <div className= "title" style = {styles.title}>Project White Walkers</div>
          <input type = "text" style = {styles.urlBox} name = "imageName" onChange = {(e) => this.onInputChange(e)}></input> 
          <button type = "button" onClick = {(e) => this.onClassifyBtnClicked(e)}>Classify!</button>
        </div> 
        
        {images} 
      </div>
      );
    }
  }

  const styles = {
    topBar: {
      margin: "5%",
      position: "fixed",
      left: 0,
      top: 0,
      textAlign: "left",
      width: "100vw",
      zIndex: 99
    },
    title: {
      fontSize: "52px",
      marginBottom: "2%",

    },
    urlbox: {
      padding: '2%',
      marginRight: '1%'
    }
  };

  export default App;