import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import ContactForm from './pages/contact';
import Footer from './components/footer';
import About from './pages/about';
import Home from './pages/home';
import Profile from './pages/profile';
import './styles/footer.css'
import './styles/background.css'
import { createContext,useState } from 'react';
import { getAuth } from "firebase/auth";
import axios from 'axios';
console.log(process.env.REACT_APP_SERVER)
const AppContext=createContext();

function App() {
 
    const [user, setUser] = useState(null);
  
  const fetchuser=async ()=>{
    try {
      let res = await axios({
        method: 'get',
        url: `${process.env.REACT_APP_SERVER}/api/auth/isLoggedin`,
        withCredentials:true
      });
      setUser(res);
      console.log(res,"hi kdjdjbskicvsck iugsci gs");
    }catch (error) {
      // console.log(error.response);
      console.log("jkhgky oyfoufit ollogin failed")
    }
 
  }
  useEffect(()=>{
    const auth = getAuth();
    auth.onAuthStateChanged(async (user) => {
      if(!user){
        fetchuser();
        return;
      }
      const { displayName, email }  = user;
      setUser({
        displayName,
        email
      });
    })
  },[]);

  return (
    <AppContext.Provider value={{user,setUser}}>
    <Router>
      <div className="App">
        <Header />
        <div className="container">
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
        <Footer />
      </div>
    </Router>
    </AppContext.Provider>
  );
}

export {App,AppContext};
