import "./App.css";
import Navbar from "./Components/Navbar";
import Selectall from "./Components/Selectall";
import Textform from "./Components/Textform";
import React, { useState } from "react";
import Alert from "./Components/Alert";

function App() {
  const [mode, setmode] = useState({light:"light",primary:"primary",dark:"dark"});
  // const [mode, setmode] = useState("light");
  const [alert, setalert] = useState(null);
 

  // to Display alert
  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 3000);
  };


// to dark screen 
  // const darkswitchbtn = () => {
  //   if (mode.light == "light" || mode.primary == "primary") {
  //     setmode("dark");
  //     document.body.style.backgroundColor = "white";
  //     document.getElementById("tcolor").style.color = "black";
  //     showalert("light mode is enabled", "success");
  //   } else if(mode.primary == "primary" || mode.dark == "dark" ) {
  //     setmode("light");
  //     document.body.style.backgroundColor = "grey";
  //     document.getElementById("tcolor").style.color = "white";
  //     showalert("dark mode is enabled", "success");
  //   }
  //   else if(mode.dark == "dark" || mode.primary == "primary" )
  //   {
  //     setmode("primary");
  //     document.body.style.backgroundColor = "grey";
  //     document.getElementById("tcolor").style.color = "white";
  //     showalert("dark mode is enabled", "success");
  //   }
  // };
  
// to dark blue screen 
// const blueswitchbtn = () => {
//   if (bluemode == "light") {
//     setbluemode("primary");
//     document.body.style.backgroundColor = "blue";
//     document.getElementById("tcolor").style.color = "black";
//     showalert("light mode is enabled", "success");
//   } else {
//     setbluemode("light");
//     document.body.style.backgroundColor = "grey";
//     document.getElementById("tcolor").style.color = "white";
//     showalert("blue mode is enabled", "success");
//   }
// };

  return (
    <>
      <Navbar
        title="Vihang"
        about="About us"
        
        mode={mode}
        
        showalert= {showalert}
        // blueswitchbtn={blueswitchbtn}
      />
      <Alert alert={alert} />
      <div className="container mt-3">
        <Textform title="Enter Text Below" showalert={showalert} />
      </div>
      
    </>
  );
}

export default App;
