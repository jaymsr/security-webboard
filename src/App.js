import React, { Component } from 'react'
import { HashRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import './App.css'
import Login from './components/Login'
import FacebookLike from './components/FacebookLike'

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     page: "Login"
  //   };

  //   this.updateCurrentPage = this.updateCurrentPage.bind(this);
  // }

  // updateCurrentPage(status) {
  //   this.setState({
  //     page: status
  //   });
  // }


  render() {
    return (
      // <div>
      //   {this.state.page === "TimeLine" ? (
      //     <div>
      //       <FacebookLike />
      //     </div>
      //   ) : this.state.page === "Login" ? (
      //     <div>
      //       <Login
      //         updateCurrentPage={this.updateCurrentPage}
      //       />
      //     </div>
      //   ) : null}
      // </div>

      <div className="App">
          <div className="App__Aside"></div>
          <div className="App__Form">

            <div className="PageSwitcher"></div>

            <div className="FormTitle">
              <NavLink to="/sign-in" div activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign In</NavLink>
            </div>

            <Login />

          </div>
      </div>
    )
  }
}

export default App;

//////////////////////////// BELOW THIS LINE IS NOT USED, JUST FOR BEING AN EXAMPLE ////////////////////////

// import React, { Component, useState, useEffect } from 'react';
// import { HashRouter as Router, Route, Link, NavLink } from 'react-router-dom';
// import './App.css';
// import fire from "./firebase/config";
// import Login from './components/Login';
// import NavBar from './components/NavBar';
// import FacebookLike from './components/FacebookLike';

// function App() {
//   const [user, setUser] = useState('');
//   const [email, setEmail] = useState(''); 
//   const [password, setPassword] = useState(''); 
//   const [emailError, setEmailError] = useState(''); 
//   const [passwordError, setPasswordError] = useState(''); 
//   const [hasAccount, setHasAccount] = useState(false);

//   const clearInputs = () => {
//       setEmail('');
//       setPassword('');
//   }

//   const clearErrors = () => {
//       setEmailError('');
//       setPasswordError('');
//   }

//   const handleLogin = () => {
//       clearErrors();

      // fire
      //     .auth()
      //     .signInWithEmailAndPassword(email, password)
      //     .catch((err) => {
      //         switch (err.code){
      //             case "auth/invalid-email":
      //             case "auth/user-disabled":
      //             case "auth/user-not-found":
      //                 setEmailError(err.message);
      //                 break;
      //             case "auth/wrong-password":
      //                 setPasswordError(err.message);
      //                 break;
      //         }
      //     })
//   };

//   const handleLogout = () => {
//       fire.auth().signOut();
//   };

//   const authListener = () => {
//       fire.auth().onAuthStateChanged((user) => {
//           if (user){
//               clearInputs();
//               setUser(user);
//           } else {
//               setUser("");
//           }
//       })
//   };

//   useEffect(() => {
//       authListener();
//   }, []);

//   return (
//     <Router basename="/sign-in">
//       <div className='App'>

//         <div className="App__Aside"></div>
//         <div className="App__Form">

//           <div className="PageSwitcher"></div>

//           <div className="FormTitle">
//             <div activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign In</div>
//           </div>

//             {user ? (
//               <NavBar
//                 handleLogout={handleLogout}>
//               </NavBar>

//           ) : (

//               <Login 
//               email={email} 
//               setEmail={setEmail} 
//               password={password} 
//               setPassword={setPassword} 
//               handleLogin={handleLogin}
//               hasAccount={hasAccount}
//               setHasAccount={setHasAccount}
//               emailError={emailError}
//               passwordError={passwordError}>
            
//               </Login>
//           )}
//         </div>

//       </div>
//     </Router>
//   );
// }

// export default App