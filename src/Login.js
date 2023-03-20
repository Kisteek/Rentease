// import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
// import { auth } from './firebase';
// import './Login.css'


// function Login() {
//   const [email, setEmail] =useState('');
//   const [password, setPassword] =useState('');
  
//   const signIn = e => {
//     e.preventDefault();

//   }

//   const register = e => {
//     e.preventDefault();

//     auth
//       .createUserWithEmailAndPassword(email, password)
//       .then((auth) => {

//         console.log(auth);
//       })
//       .catch(error => alert(error.message))
//   }
  
//   return (
//         <div className='login'>
//             <Link to='/'>
//               <img className='login__logo' 
//               src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png'/>
//             </Link>
//             <div className='login__container'>
//               <h1>Sign-in</h1>

//               <form>
//                 <h5>Email</h5>
//                 <input type ='text'  value ={email} onChange=
//                 {e => setEmail(e.target.value)}/>
                
//                 <h5>Password</h5>
//                 <input type = 'password' value={password} onChange=
//                 {e => setPassword(e.target.value)}/>
                
//                 <br/>
                
//                 <button className='login__signInButton'>Sign In</button>
//               </form>
//               <br/>
//               <p>
//                 By signing-in you agree to the FARZI AMAZON 
//                 Conditions of Use & Sale. Please see our 
//                 Privacy Notice, our Cookies Notice and our 
//                 Interest-Based Ads Notice. 
//               </p>

//               <button className='login__registerButton'>Create 
//               your Amazon Account</button>

//             </div>
//         </div>
//   )
// }

// export default Login


import React, { useState } from 'react';
import './Login.css'
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/')
            })
            .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                // it successfully created a new user with email and password
                if (auth) {
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))
    }

    return (
        <div className='login'>
            <Link to='/'>
                <img
                    className="login__logo"
                    src='https://www.instagram.com/p/Cp_6ciljCht/?utm_source=ig_web_copy_link' 
                />
            </Link>

            <div className='login__container'>
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                    <button type='submit' onClick={signIn} className='login__signInButton'>Sign In</button>
                </form>

                <p>
                    By signing-in you agree to the RENT-EASE Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>

                <button onClick={register} className='login__registerButton'>Create your RENT-EASE Account</button>
            </div>
        </div>
    )
}

export default Login