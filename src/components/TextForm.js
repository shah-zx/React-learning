import React, { useState } from 'react'

export default function TextForm(props) {

    const handleUpClick = () => {
        console.log("Uppercase was clicked " + text);
        let newText = text.slice(2, 8);
        setText(newText);
    }   
    
    // This is our handleUpClick() function whose work is to slice the string //

    const handleUp2Click = () => {
        console.log("You clicked the blue button " + text);
        let newT = text.toUpperCase();
        setText(newT);
    }

    // This is the function for making the text uppercase //

    const handleOnChange = (event) => {
        console.log("On change");
        setText(event.target.value);
    }

    const handleUp3Click = () => {
        console.log("You clicked handleUp3click " + text);
        const newTT = text.toLowerCase();
        setText(newTT);
    }

    // const handleUp4Click = () => {
    //     console.log("You clicked handleUp4click " + text);
    //     setText(text);
    // }

    const [text, setText] = useState('Enter text here');  // Using the state update // // Text is the normal text and setText is the function //

    // text = "Hello there"; this is wrong way //
    // setText("Hello there");

    return (
        <>
        <div>
            <h1>{props.heading}</h1>
            <div class="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: "100px" }}></textarea>
            </div>
            <button className="btn btn-danger mx-1" onClick={handleUpClick}>slice it up !!</button>
            <button className="btn btn-primary mx-1" onClick={handleUp2Click}>convert to Uppercase</button>
            <button className="btn btn-success mx-1" onClick={handleUp3Click}>convert to lowercase</button>
            {/* <hr />
            <button className="btn btn-secondary" onClick={handleUp4Click}>back to normal</button> */}
        </div>
        <div className="container my-3">
           <h1>Your text summary</h1>
           <p>{text.split(" ").length} words and {text.length} characters</p>
           <p>This text taken this much of time : {0.008 * text.split(" ").length}</p>
           <h2>Preview</h2>
           <p>{text}</p>
        </div>

        </>
    )
}

// text is a state variable ..
