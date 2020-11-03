import React, { Component } from 'react'
import './App.css'
import Login from './components/Login'
import FacebookLike from './components/FacebookLike'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "Login"
    };

    this.updateCurrentPage = this.updateCurrentPage.bind(this);
  }

  updateCurrentPage(status) {
    this.setState({
      page: status
    });
  }


  render() {
    return (
      <div>
        {this.state.page === "TimeLine" ? (
          <div>
            <FacebookLike />
          </div>
        ) : this.state.page === "Login" ? (
          <div>
            <Login
              updateCurrentPage={this.updateCurrentPage}
            />
          </div>
        ) : null}
      </div >
    );
  }
}

export default App;
