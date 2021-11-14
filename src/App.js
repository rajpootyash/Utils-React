
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from "./components/Alert";
import About from "./components/About";

import {
  BrowserRouter as Router, 
  Switch, //Note Switch change by Routes 
  Route,
  Link
} from "react-router-dom";
import React, { useState } from 'react';



function App() {
  const [mode, setMode] = useState('light'); //weather dark mode is enable or not
  const [alert, setAlert] = useState(null);
  const showAlert = (message , type) =>{
    setAlert({
      msg :message,
      type :type
    }
    )
    setTimeout(() => {
      setAlert(null)
      
    }, 1500);

  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor="#042743";
      showAlert("Dark mode has been enabled", "success");
      document.title = 'TextUtils - Dark Mode';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor="white";
      showAlert("Light mode has been enabled", "success");
      document.title = 'TextUtils - light Mode';
      // setInterval(()=>{
      //   document.title = 'interval set now';
      // },2000);
      // setInterval(()=>{
      //   document.title = 'intervl yes now';
      // },1500);
    }
  }
  return (
  
   <>
   <Router>
  
<Navbar title = "TextUtils" about = "About us" home ="Home" mode = {mode} toggleMode = {toggleMode}/>
<Alert alert = {alert}/>
<div className="container my-3">
<Switch>
  {/* exact /users --> Component 1  */}
  {/* /users home --> Component 2 */}
          <Route exact path="/about">
            <About />
          </Route>
          
          <Route exact path="/">
          <TextForm showAlert={showAlert} heading = "Enter the text to analyze" mode = {mode}/>
            
          </Route>
        </Switch>

<About/>
</div>
</Router>
</>
   
    );
  }

export default App;
