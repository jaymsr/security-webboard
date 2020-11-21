import React, { Component } from 'react'
import axios from 'axios';
import fire from "./Util/Firebase";
import './App.css'
import Login from './components/Login'
import Logout from './components/Logout'
import FacebookLike from './components/FacebookLike'
import {sendRequest} from './Util/GeneralUtils';

class App extends Component {
  constructor(props) {
    super(props);
    // axios.defaults.headers.post['X-CSRF-Token']  =  process.env.CSRF;
    axios.defaults.withCredentials = true;
    this.state = {
      currentUser: {
        email: '',
        role: '',
      },
      currentBlogs: []
    };
    this.updateCurrentUser = this.updateCurrentUser.bind(this);
    this.getAllBlogs = this.getAllBlogs.bind(this);
  }

  componentDidMount() {
    fire.auth().onAuthStateChanged(user => {
      this.updateCurrentUser(user);
      if (user){
        this.getAllBlogs();
      }
    })
  }

  updateCurrentUser(user) {
    if (user == null) {
      this.setState({
        currentUser: {
          email: null,
          role: null,
        },
      })
    }
    else {
      var email = user.email
      let data = undefined;

      let self = this;

      sendRequest("http://localhost:9000/api/users/useremail/" + email, 'get', data).then(function(response) {
        self.setState({
          currentUser: {
            email: email,
            role: response.data.role,
          },
        })
      }).catch(function (error) {
          console.log(error);
      });
      
    }
  }

  getAllBlogs() {

    let data = undefined;
    let self = this;

    sendRequest("http://localhost:9000/api/blogs/", 'get', data).then(function(response) {
      self.setState({
        currentBlogs: response.data
      })
    }).catch(function (error) {
        console.log(error);
    });
  }


  render() {
    // console.log(this.state, 'current state')
    if (this.state.currentUser.email === '') {
      return (
        null
      )
    }
    else {
      return (
        <div>
          {this.state.currentUser.email ? (
            // {false ? (
            <div>
              <Logout style={{ float: 'right' }} />
              <FacebookLike currentBlogs={this.state.currentBlogs} currentUser={this.state.currentUser} />
            </div>
            // ) : true ? (
          ) : !this.state.currentUser.email ? (
            <div className="App">
              <div className="App__Aside"></div>
              <div className="App__Form">
                <div className="PageSwitcher"></div>
                <div className="FormTitle">
                  <label className="FormTitle_Link">Sign In</label>
                </div>
                <Login updateCurrentUser={this.updateCurrentUser} />
              </div>
            </div>
          ) : null}
        </div>
      )
    }
  }
}

export default App;