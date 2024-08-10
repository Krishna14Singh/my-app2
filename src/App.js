//import logo from './logo.svg';
import './App.css';
import Alert from './components/Alert';

import { //from doc https://v5.reactrouter.com/web/guides/quick-start
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"; //this we have installed in cmd
import About from './components/About';
import Navbar from './components/Navbar';
 import TextForm from './components/TextForm';
 import React, {useState} from 'react'
 
 
 
function App(){
  const[mode,setMode]=useState("light");
  const[toggle1,setToggle1]=useState(false);
  const[toggle2,setToggle2]=useState(false);
  const[toggle3,setToggle3]=useState(false);
  const onToggle1=()=>{
    setToggle1(!toggle1);
  }
  const onToggle2=()=>{
    setToggle2(!toggle2);
  }
  const onToggle3=()=>{
    setToggle3(!toggle3);
  }



  const[alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert({
    msg:message,
    type:type}
  )
  setTimeout(() => {
    setAlert(null);
  }, 1000);
  }

 


  const toggleModeBrown=()=>{
    console.log(mode);
    if(mode==="brown"){
      setMode("light");
      document.title="Jadaun-Home";
      document.body.style.backgroundColor="white";
      showAlert("Light mode has been enabled","success");
    }
    else{
      setMode("brown"); 
      document.body.style.backgroundColor="#6F4E37";
      showAlert("Brown mode has been enabled","success");
      document.title="Jadaun-Brown Mode";
    }
    
    onToggle1();
  }
  const toggleModeDark=()=>{
    console.log(mode);
    if(mode==="dark"){
      setMode("light");
      document.title="Jadaun-Home";
      document.body.style.backgroundColor="white";
      showAlert("Light mode has been enabled","success");
    }
    else{
      setMode("dark");
      document.body.style.backgroundColor="#0d1c33";
      showAlert("Dark mode has been enabled","success");
      document.title="Jadaun-Dark Mode";
    }
    
    onToggle2();
  }
  const toggleModeGreen=()=>{
    console.log(mode);
    console.log("hi");
    if(mode==="green"){
      setMode("light");
      document.title="Jadaun-Home";
      document.body.style.backgroundColor="white";
      showAlert("Light mode has been enabled","success");
    }
    else{
      setMode("green");
      document.body.style.backgroundColor="#0d3a25";
      showAlert("Green mode has been enabled","success");
      document.title="Jadaun-Green Mode";
    }
    
    onToggle3();
  }
  return(<>
  <Router>
    <Navbar title="Jadaun" mode={mode} toggle1={toggle1} toggle2={toggle2} toggle3={toggle3} 
    toggleModeBrown={toggleModeBrown} toggleModeDark={toggleModeDark} toggleModeGreen={toggleModeGreen} 
    onToggle1={onToggle1} onToggle2={onToggle2} onToggle3={onToggle3}
    aboutText='About'/>

    <Alert alert={alert}/>

    {/*this container is used to place textbox in center */}
    <div className="container my-3"> {/* my-3 give margin of 3 */}
      {/* doc from https://v5.reactrouter.com/web/guides/quick-start */}
     <Routes> {/* Switch is replaced with Routes in latest update and <Route/> should be one component */}
         {/* react partial match krta h so use exact path in place of path */}
         <Route exact path="/About" element={<About />}/> {/*Now replace a with Link and href with to in navbar About ,if we use a and href then page will load and take time*/}
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>}/>
    </Routes>  
    </div> 
    </Router>
    
 

   
  </>
  );
}
export default App;
