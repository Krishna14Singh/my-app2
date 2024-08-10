import React, {useState} from 'react'

export default function TextForm(props) {

    const handleUpClick=()=>{
        //console.log("Uppercase is clicked"+text);
        //to update text variable
        //to set state
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("UC is clicked","success");

    }
    const handleLoClick=()=>{
        //console.log("Uppercase is clicked"+text);
        //to update text variable
        //to set state
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("LC is clicked","success");
    }
    const handleRevClick=()=>{
        //console.log("Uppercase is clicked"+text);
        //to update text variable
        //to set state
        let newText=text.split(" ").reverse().join(" ");
        setText(newText);
        props.showAlert("RC is clicked","success");
    }
    //to handle event
    //to type in text area without this we can not type
    const handleOnChange=(event)=>{
        //console.log("Onchange");
        // without bottom line we can not add text after updated text in textbox
        //to set event
        setText(event.target.value);
    }
    //hooks to create a state, here state is text, and useState is one of the hook.
    //text ki by deafult value hai "Enter the text here"
    //by using setText we can update value of variable text
    const[text,setText]=useState("");
    //setText("Enter the text there");
  return (<>
    <div className="container" style= {{ color: props.mode==='dark'?'white':props.mode==='brown'?'white':props.mode==='green'?'white':'black'}}>        
        <h3>{props.heading}</h3>
        <div className="mb-3">
        <textarea className="form-control" style= {{backgroundColor:props.mode==='dark'?'#232323':props.mode==='brown'?'#795C34':props.mode==='green'?'#8CEF74':'white', color: props.mode==='dark'?'white':props.mode==='brown'?'white':props.mode==='green'?'white':'black'}}  id="mybox" onChange={handleOnChange} value={text} rows="8"></textarea> {/*we can change row to change size of text area */}
        </div>
        {/* button.btn.btn.primary */}
        {/* primary means blue colour,danger means red and success for green colour */}
        <button className="btn btn-primary mx-2"  style={{backgroundColor:props.mode==='dark'?'#232323':props.mode==='brown'?'#795C34':props.mode==='green'?'#8CEF74':'blue'}} onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-success mx-2" style={{backgroundColor:props.mode==='dark'?'#232323':props.mode==='brown'?'#795C34':props.mode==='green'?'#8CEF74':'blue'}} onClick={handleLoClick}>Convert to LowerCase</button>
        <button className="btn btn-dark mx-2" style={{backgroundColor:props.mode==='dark'?'#232323':props.mode==='brown'?'#795C34':props.mode==='green'?'#8CEF74':'blue'}} onClick={handleRevClick}>Reverse</button>         
    </div>
    <div className="container my-3" style= {{ color: props.mode==='dark'?'white':props.mode==='brown'?'white':props.mode==='green'?'white':'black'}}>
        <h3>Your Text Summary</h3>
        <p>Total words are {text.length>0?text.split(" ").length:0} and total letters are {text.length}</p>
        <p>{0.008*text.split(" ").length} Minutes read</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter something in textbox to preview it"}</p>
    </div>
    </>
  )
}
