import React, {useState} from "react";

export default function Content() {

  const handle_upper=()=>{
    let newText= text.toUpperCase();
    setText(newText);
  }

  const handle_lower=()=>{
    let newText= text.toLowerCase();
    setText(newText);
  }

  const handle_extraSpace=()=>{
    let newText= text.split(/[ ]+/);
    setText(newText.join(" "));
  }

  const handle_copy=()=>{
    navigator.clipboard.writeText(text); 
  }

  const handle_clean=()=>{
    setText(""); 
  }

  const handleOnChange = (e)=>{
      setText(e.target.value);
  }

  const [text, setText] = useState('');

  return (
    <div className="content">
      <div className="txt">
        <textarea
          name="text"
          className="area"
          value={text}
          onChange={handleOnChange}
          placeholder="Enter a text..."
        ></textarea>
      </div>
      <div className="btn">
        <button disabled={text.length===0} onClick={handle_upper}>UPPER-CASE</button>
        <button disabled={text.length===0} onClick={handle_lower}>lower-case</button>
        <button disabled={text.length===0} onClick={handle_extraSpace}>Remove Extra Spaces</button>
        <button disabled={text.length===0} onClick={handle_copy}>Copy Text</button>
        <button disabled={text.length===0} onClick={handle_clean}>Clear Text</button>
      </div>

      <div className="summary">
        <h2>Your text summary</h2>
        <h3> {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} word and {text.length} character</h3>
      <h4>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to read</h4>
      </div>
    </div>
  );
}
