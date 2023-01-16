import React, { useState } from 'react';
import  '../App.css';
// import { Link } from "react-router-dom";




export default function TextForm(props) {

    const handleUpClick = () => {
         // eslint-disable-next-line
        setText(text.toUpperCase());
        props.showAlert("Converted to upperase", "success")
    }

    const handlelowClick = () => {
        setText(text.toLowerCase());
        props.showAlert("Converted to Lowerase", "warning")
    }
    
    const handleClearText = () => {
        setText("");
        props.showAlert("Text has been Cleared", "primary")
    }

    const handleCopy = () => {
        var text1 = document.getElementById('myBox')
        text1.select();
        document.getSelection().removeAllRanges();
        navigator.clipboard.writeText(text1.value);
        props.showAlert("Text has been copied", "info")
    }
           
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        console.log(newText)
        props.showAlert("Extraspaces are removed", "info")
    }

    const handleOnChange = (event)=>{
        // console.log("uppercase was clicked");
        setText(event.target.value);
    }

    const [text, setText] = useState("");



    return (
        <>
            <div className={`container bg-${props.mode}`}>
                <h1><strong>{props.heading}</strong></h1>
                <div className="mb-3 form">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="10">erwerewrewr </textarea>
                </div>
                <div className='buttons'>
                    <button className="btn btn-success mx-2 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
                    <button className="btn btn-danger mx-2 my-1" onClick={handlelowClick} >Convert to Lowercase</button>
                    <button className="btn btn-warning mx-2 my-1" onClick={handleCopy}>Copy Text</button>
                    <button className="btn btn-primary mx-2 my-1" onClick={handleClearText}>Clear text</button>
                    <button className="btn btn-dark mx-2 my-1" onClick={handleExtraSpaces}>Remove Extraspaces</button>
                </div>
            </div>

            <div className="container my-5">
                <h1>Your text summery</h1>
                <p>{text.split(" ").filter((element)=>{return element.length!== 0}).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").filter((element)=>{return element.length!== 0}).length} Minutes to read text.</p>
            </div>



        </>
    )
}




