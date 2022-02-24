import React, { useState  } from "react";

export default function Textform(props) {
  const [text, setText] = useState("");
   // Touppercase
  const toUppercase = () => {
    //  console.log("calll");
    //  console.log(text);
    let value = text.toUpperCase();
    //  console.log(value);
    setText(value);
    props.showalert("Successfully converted toUppercase ","success")
  };


  // Lower Case
  const toLowercase = () => {
    console.log("calll");
    console.log(text);
    let Lvalue = text.toLowerCase();
    //  console.log(Lvalue);
    setText(Lvalue);
    props.showalert("Successfully converted toLowercase ","success")
  };

//Edit Text

  const Edittext = (event) => {
    console.log("hllllllllll");
    setText(event.target.value);
    // console.log(event);
  };
//Clear Text
  const Cleartext = () => {
    let ctext = "";
    setText(ctext);
    props.showalert("Successfully clear text","success")
  };
  
  const SelectAllText = (e) => {
    e.target.select();
  };

  //     const Selectall = (e) => {
  //     console.log(e);
  //     // let cselect = e.target.Selectall();
  //     // setText(e.target.select());
  //     console.log("hello0000000000");

  //     console.log(e.target);

  // }
//Copy Text
  const handlecopy = () =>{
    var text = document.getElementById("Text");
    text.select();
    // console.log(navigator);
    navigator.clipboard.writeText(text.value);
    props.showalert("Successfully copytext ","success")
  }
//remove Extra space
const handleExtraSpaces = () =>{
  const string = text    
 
  // let newText = text.split(/[ ]*/);
  setText(string.replace(/\s{2,}/g, ' ').trim())
  props.showalert("Successfully handleExtraSpaces ","success")
}
  return (
    <>
      <div className="container">
        <div className="mb-3">
          <h1 id="tcolor">{props.title}</h1>
          <textarea
            className="form-control"
            value={text}
            onClick={SelectAllText}
            onChange={Edittext}
            
            id="Text"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-2" onClick={toUppercase}>
          Covert toUppercase
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={toLowercase}>
          Covert toLowercase
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={Cleartext}>
          Cleartext
        </button>
        <button className="btn btn-primary mx-2 my-2 " onClick={handlecopy}>Handle Copy</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>handleExtraSpaces</button>
        
        
             </div>

      <div className="container">
        <h1> Your Text Summary</h1>

        <p>
          {text == "" ? 0:text.split(" ").length} Words And {text.length} Characters
        </p>
        <p>{0.0008 * text.split(" ").length} Minutes read to Word</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
