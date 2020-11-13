import React, { Component } from 'react';
import fire from "../firebase/config";

class Logout extends Component {

    constructor(props) {
        super(props);
    }

    logout = e => {
        e.preventDefault()
        fire.auth().signOut().then(response => {
            this.setState({
                currentUser: null
            })
        })
    }

    render() {
        return (
            <div>
                <button style={{ float: 'right' }} onClick={this.logout}>Logout</button>
            </div>
        )
    }
}

export default Logout;
