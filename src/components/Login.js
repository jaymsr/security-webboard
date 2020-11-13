import React, { Component } from "react";
import fire from "../firebase/config";
import "../css/Login.css";

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
                this.setState({
                  currentUser: response.user
                })
                this.props.updateCurrentUser(response.user)
            })
            .catch((err) => {
                switch (err.code){
                    case "auth/invalid-email":
                    case "auth/user-disabled":
                    case "auth/user-not-found":
                        this.setState({
                            message: err.message
                        })
                        break;

                    case "auth/wrong-password":
                        this.setState({
                            message: err.message
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

//////////////////////////// BELOW THIS LINE IS NOT USED, JUST FOR BEING AN EXAMPLE ////////////////////////

//         return (
//             <div className="Login-Page">
//                 <div className="Field-Container">
//                     <h1 className="enterText">LOGIN</h1>
//                     <h3 >Samakkee</h3>
//                     <br />
//                     <form onSubmit={this.submitHandler}>
//                         <input
//                             type="text"
//                             className="form-control"
//                             placeholder="Enter your name"
//                             id="nameField"
//                             autocomplete="off"
//                         />
//                     </form>

//                     <div>
//                         <button
//                             className="btn btn-primary"
//                             type="submit"
//                             onClick={e => {
//                                 this.props.updateCurrentPage("TimeLine");
//                             }}
//                         >
//                             Enter
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }
// export default Login;

/////////////////////////////

// import React, { Component, useState, useEffect } from 'react';
// import fire from "../firebase/config";
// import "../css/Login.css";
// import { configure } from '@testing-library/react';

// function Login(props) {

//     const {
//         email,
//         setEmail,
//         password,
//         setPassword,
//         handleLogin,
//         hasAccount,
//         setHasAccount,
//         emailError,
//         passwordError,
//     } = props;

//     return (
//         <div className="Login-panel">
//             <form className="FormFields">
//                 <div className="FormField">
//                     {/* Username */}
//                     <label className="FormField__Label" htmlFor="email">Username</label>
//                     <input type="text"  
//                         className="FormField__Input"
//                         autoFocus
//                         required
//                         placeholder="Enter your username" 
//                         value={email} 
//                         onChange={(e) => setEmail(e.target.value)} />

//                     <p className="errorMsg">
//                         {emailError}
//                     </p>
//                 </div>

//                 <div className="FormField">
//                     {/* Password */}
//                     <label className="FormField__Label" htmlFor="email">Password</label>
//                     <input type="password"  
//                         className="FormField__Input"
//                         required
//                         placeholder="Enter your password" 
//                         value={password} 
//                         onChange={(e) => setPassword(e.target.value)} />

//                     <p className="errorMsg">
//                         {passwordError}
//                     </p>
//                 </div>

//                 <div className="FormField">
//                     {/* Button */}
//                     {/* <NavLink to="sign-in"> */}
//                     <button 
//                         className="FormField__Button mr-20"
//                         type="submit"
//                         onClick={handleLogin}
//                         >

//                         Sign In
                      
//                       </button> 

//                 {/* </NavLink> */}
//                 </div>

//             </form>
//         </div>
//     )
// }

// export default Login
