import { useState } from 'react';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';

const App = ()=> {
  const [mode, setMode] = useState('light'); //weather dark mode enabled or not
  const[alert, setAlert] =useState(null);
  const showAlert =(message,type)=>{
    setAlert({
      msg : message,
      type:type
    })
    setTimeout (()=>{
      setAlert(null);
    },1500)

  }
 const  toggleMode = ()=>{
  if(mode === 'light'){
    setMode ('dark');
    document.body.style.backgroundColor = 'black';
    showAlert("Dark mode has been enabled","success");
  }
  else{
    setMode ('light');
    document.body.style.backgroundColor = 'white';
    showAlert("Light mode has been enabled", "success");
  }
  }
  return (

    <>
    <BrowserRouter basename="/">
      <Navbar title="Text Converter App" mode={mode} toggleMode={toggleMode} aboutText="About Us" /  >
      <Alert alert={alert} />        
        <div  className="container my-3">
          <Routes>
            <Route path="/about" element={<About mode={mode} />} / > 
            <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter your text and convert to what do you want" mode={mode} />} />

         </Routes>
        </div>
        </BrowserRouter>
    </>
  );
};


export default App;
