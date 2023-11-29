import React, {useState} from 'react'

export default function TextForm(props) {

    const handelUpperCase = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("change to uppercase","success");
    }

    const handelLowerCase = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("change to lowercase","success");

    }
    
    const handelOnChange = (event) => {
        setText(event.target.value)
    }
    
    const [text, setText] = useState("Enter the Text...");

    return (
        <>
            <div>
                <div className="mb-3 my-4">
                    <label htmlFor="TextForm" className="form-label">Text Form</label>
                    <textarea className="form-control" id="TextForm" rows="8" value={text} onChange={handelOnChange}></textarea>
                </div>
                <button className="btn btn-primary mx-3" onClick={handelUpperCase}>Convert To UpperCase</button>
                <button className="btn btn-primary" onClick={handelLowerCase}>Convert To LowerCase</button>
            </div>
            <div className="container my-3">
                <h1>Your text summery</h1>
                <p>Text Length Character: {text.length}</p>
                <p>Text Word Count : {text.split(" ").length}</p>
                <p>Time Taken to Read Paragraph : {0.008 * text.split(" ").length}</p>
                <p>Preview of Text : {text}</p>
            </div>
        </>
    )
}
