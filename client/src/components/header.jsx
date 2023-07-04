import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import {AppContext} from '../App';
import '../styles/header.css';
import '../styles/login_prompt.css';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import app from '../firebaseinit';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
export default function Header() {
  
  const navigate=useNavigate();
  const {user, setUser}= useContext(AppContext);
   const [showLoginPrompt, setShowLoginPrompt] = useState(false);
  const [isSignupPrompt, setIsSignupPrompt] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleLogout = () => {
    const auth = getAuth();
    auth.signOut().then(()=> {
      console.log('logged out')
    }).catch((error) => {
      console.log(error.message)
    })
    setUser(null);
  };

  const handleLogin = async() => {
    setShowLoginPrompt(true);
  };

  const handleSignup = async() => {
    console.log(process.env.REACT_APP_SERVER)
    try {
      let res = await axios({
        method: 'post',
        url: `${process.env.REACT_APP_SERVER}/api/auth/signup`,
        data: {email,password},
        withCredentials:true
      });
      console.log(res.data);
    }catch (error) {
      console.log(error.response);
    }
    setIsSignupPrompt(true);
  };

  const handleCancel = () => {
    setShowLoginPrompt(false);
    setIsSignupPrompt(false);
  };

  const handleConfirmLogin = async() => {
    console.log(email,password)
    try {
      let res = await axios({
        method: 'post',
        url: `${process.env.REACT_APP_SERVER}/api/auth/login`,
        data: {email,password},
        withCredentials:true
      });
    setUser(true);
    setShowLoginPrompt(false);
    console.log(`Logging in with email: ${email} and password: ${password}`);
    }catch (error) {
      // console.log(error.response);
      console.log("login failed")
      window.alert("enter correct credentials")
    }
 
  };

  const handleConfirmSignup = () => {
    setUser(true);
    setIsSignupPrompt(false);
    console.log(`Signing up with email: ${email} and password: ${password}`);

  };
  const handleGoogleLogin = () => {
    console.log(1);
    const provider = new GoogleAuthProvider();
    const auth = getAuth(app);
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        console.log("HI")
      //  const success = signIn(user.accessToken);
        handleCancel();
          // navigate('/'); 
          toast.success('Login Successful!', {
            position: toast.POSITION.TOP_RIGHT
        });
          toast.error('Login Failed!', {
            position: toast.POSITION.TOP_RIGHT
        });
      
      })
      .catch(() => {
        toast.error('Login Failed!', {
          position: toast.POSITION.TOP_RIGHT
      });
      });
    console.log('Logging in with Google');
  };


  return (
    <header className="header">
      <div className="container">
        <nav>
          <ul className="nav-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li className="logout-li">
              {user ? (
                <button className="logout-button" onClick={handleLogout}>
                  Logout
                </button>
              ) : (
                <button className="login-button" onClick={handleLogin}>
                  Login
                </button>
              )}
            </li>
          </ul>
        </nav>
      </div>
      {showLoginPrompt && (
        <div className="login-prompt">
        <div className="login-box">
        <h2>Login</h2>
          <div className="input-group">
            <label>Email:</label>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label>Password:</label>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="button-group">
            <button onClick={handleCancel}>Cancel</button>
            <button onClick={handleConfirmLogin}>Login</button>
            <button onClick={handleSignup}>Sign up</button>
          </div>
          
          <h3>Login using google</h3>
          <div className="google-login-button">
          <button className="google-icon-button" onClick={handleGoogleLogin}>
            <img alt="" />
          </button>
        </div>
        </div>
      </div>
      )}
      {isSignupPrompt && (
        <div className="login-prompt">
        <div className="login-box">
          <h2>Sign Up</h2>
          <div className="input-group">
            <label>Email:</label>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label>Password:</label>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="button-group">
            <button onClick={handleCancel}>Cancel</button>
            <button onClick={handleConfirmSignup}>Sign Up</button>
          </div>
          
          <h3>Signup using google</h3>
          <div className="google-login-button">
          <button className="google-icon-button" onClick={handleGoogleLogin}>
            <img alt="" />
          </button>
         </div>
        </div>
      </div>
      )}
    </header>
  );
}
