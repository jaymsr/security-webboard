import React, { Component } from "react";
import "../css/Login.css";

class Login extends Component {
    constructor() {
        super();
    }

    submitHandler(e) {
    }

    render() {
        return (
            <div className="Login-Page">
                <div className="Field-Container">
                    <h1 className="enterText">LOGIN</h1>
                    <h3 >Samakkee</h3>
                    <br />
                    <form onSubmit={this.submitHandler}>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter your name"
                            id="nameField"
                            autocomplete="off"
                        />
                    </form>

                    <div>
                        <button
                            className="btn btn-primary"
                            type="submit"
                            onClick={e => {
                                this.props.updateCurrentPage("TimeLine");
                            }}
                        >
                            Enter
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}
export default Login;