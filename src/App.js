import React, { Component } from 'react'
import axios from 'axios';
import fire from "./firebase/config";
import './App.css'
import Login from './components/Login'
import Logout from './components/Logout'
import FacebookLike from './components/FacebookLike'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: {
        email: '',
        role: '',
      },
      currentBlogs: []
    };
    this.updateCurrentUser = this.updateCurrentUser.bind(this);
  }

  componentDidMount() {
    this.getAllBlogs()
    console.log('comp did')
    fire.auth().onAuthStateChanged(user => {
      this.updateCurrentUser(user)
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
      axios.get("http://localhost:9000/api/users/useremail/" + email)
        .then(res => {
          console.log(res.data, ' set state');
          this.setState({
            currentUser: {
              email: email,
              role: res.data.role,
            },
          })
        });
    }
  }

  getAllBlogs() {
    axios.get("http://localhost:9000/api/blogs/")
      .then(res => {
        console.log(res.data)
        this.setState({
          currentBlogs: res.data
        })
      });
  }


  render() {
    console.log(this.state, 'current state')
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