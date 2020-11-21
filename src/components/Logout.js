import React, { Component } from 'react';
import fire from "../Util/Firebase";

class Logout extends Component {

    constructor(props) {
        super(props);
    }

    logout = e => {
        e.preventDefault()
        fire.auth().signOut().then(response => {
            localStorage.clear();
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
