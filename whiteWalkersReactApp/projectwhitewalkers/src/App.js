import React from 'react';
import logo from './logo.svg';
import './App.css';

import History from './History'
import Result from './Result'

import {Component} from 'react';
import axios from 'axios';


class App extends Component {

  constructor() {
    super();
    this.state = {
      history: [{
        "url": "https://i.ytimg.com/vi/J-HbAxA5QH0/maxresdefault.jpg",
        "classification": "ice",
      },
      {
        "url": "https://i.ytimg.com/vi/J-HbAxA5QH0/maxresdefault.jpg",
        "classification": "no-ice",
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

    const iceImages = []
    const noIceImages = []
		for (let key in this.state.history) {
      if (this.state.history[key].classification == 'ice') {
        iceImages.push(this.state.history[key]);
      } else {
        noIceImages.push(this.state.history[key]);
      }
		}
    
    return (
      <div className = "App" >
        <div className= "topBar" style = {styles.topBar}>
          <div className= "title" style = {styles.title}>
            <img src="https://m0.joe.ie/wp-content/uploads/2019/04/16173602/Trisk.jpg" style={styles.logo} width="40" height="40" ></img>
             Project White Walkers
          </div>
          <input type = "text" style = {styles.urlBox} name = "imageName" placeholder="enter url of image" onChange = {(e) => this.onInputChange(e)}></input> 
          <button type = "button" style = {styles.classifyBtn} onClick = {(e) => this.onClassifyBtnClicked(e)}>Is it safe?</button>
          <div style={styles.hint}>hint: use "https://m0.joe.ie/wp-content/uploads/2019/04/16173602/Trisk.jpg"</div>
        </div> 
        <History iceImages={iceImages} noIceImages={noIceImages}/>
        {/* <Result msg={"The Road is safe!"} imageModel={{"url": "https://i.ytimg.com/vi/J-HbAxA5QH0/maxresdefault.jpg","classification": "no-ice"}}/> */}
      </div>
      );
    }
  }

  const styles = {
    topBar: {
      padding: "2%",
      paddingRight: 0,
      // position: "absolute",
      // left: 0,
      // top: 0,
      textAlign: "left",
      width: "100vw",
      zIndex: 99,
      boxShadow: "0 4px 12px -2px #03A9F4",
    },
    title: {
      fontSize: "42px",
      marginBottom: "10px",

    },
    urlBox: {
      padding: '1%',
      width: '60%',
      marginRight: '50px',
      borderRadius: '10px',
      border: '2px solid #03A9F4'
    },
    classifyBtn: {
      padding: '1%',
      width: '210px',
      fontSize: '21px',
      backgroundColor: '#03A9F4',
      color: '#eee',
      borderRadius: '10px',
      border: '0',
      cursor: 'pointer'
    },
    logo: {
      marginRight: '10px'
    },
    hint: {
      fontSize: '12px',
      marginTop: '5px'
    }
  };

  export default App;