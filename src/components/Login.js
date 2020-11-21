import React, { Component } from "react";
import fire from "../Util/Firebase";
import "../css/Login.css";
import {sendRequest, decrypt} from '../Util/GeneralUtils';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            currentUser: '',
            message: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    handleLogin(email, idToken, csrfToken) {
        let data = {
                        email: email,
                        idToken: idToken,
                        csrfToken: csrfToken
                    };
        
        sendRequest("/users/login", 'post', data).then(function(response) {
            let token = decrypt(response.data.token);
            localStorage.setItem('token', token);
            window.location.reload();
        }).catch(function (error) {
            console.log(error);
        });
    }

    handleChange(e) {
        const { name, value } = e.target

        this.setState({
          [name]: value
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        const {email, password} = this.state;

        fire
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(response => {
                response.user.getIdToken().then(idToken => {
                    this.handleLogin(response.user.email, idToken, process.env.REACT_APP_CSRF);
                    this.setState({
                        currentUser: response.user
                    });
                    this.props.updateCurrentUser(response.user);
                });
            })
            .catch((err) => {
                switch (err.code){
                    case "auth/invalid-email":
                    case "auth/user-disabled":
                    case "auth/user-not-found":
                        this.setState({
                            message: 'Username or password is incorrect'
                        })
                        break;

                    case "auth/wrong-password":
                        this.setState({
                            message: 'Username or password is incorrect'
                        })
                        break;
                }
          })
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
        ////////////////////// change this part to webbord page //////////////////////////
        const {message, currentUser} = this.state;
        // if (currentUser) {
        //     return (
        //         <div>
        //             <button className="FormField__Button mr-20" onClick={this.logout}>Logout</button>
        //         </div>
        //     )
        // }
        ////////////////////// change this part to webbord page //////////////////////////

        return (
            <div className="Login-panel">
                <form className="FormFields">
                    <div className="FormField">
                        {/* Username */}
                        <label className="FormField__Label" htmlFor="email">Username</label>
                        <input type="email"
                            className="FormField__Input"
                            autoFocus
                            required
                            placeholder="Enter your username" 
                            name="email"
                            value={this.state.email}
                            autocomplete="off" 
                            onChange={this.handleChange} />
                    </div>

                    <div className="FormField">
                        {/* Password */}
                        <label className="FormField__Label" htmlFor="email">Password</label>
                        <input type="password"  
                            className="FormField__Input"
                            required
                            placeholder="Enter your password"
                            name="password" 
                            value={this.state.password} 
                            autocomplete="off"
                            onChange={this.handleChange} />      
                    </div>

                    <div className="FormField">
                        {/* Button */}
                        <button 
                            disabled={!this.state.email.trim().length > 0}
                            className="FormField__Button mr-20"
                            type="submit"
                            onClick={this.handleSubmit}
                            >

                            Sign In
                        
                        </button> 
                        {message ? <p className="errorMsg">{message}</p> : null}
                    </div>

                </form>
            </div>
        )
    }
}

export default Login