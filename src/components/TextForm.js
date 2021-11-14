import React,{ useState }  from 'react'



export default function TextForm(pros) {
    const handleUPclik = ()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        pros.showAlert(" Converted to upperCase","success");
    }
    const handlelowerclik = ()=>{
        let newtext = text.toLowerCase();
        setText(newtext);
        pros.showAlert(" Converted to loverCase","success");

    }
    const handleCopy = ()=>{
        let  text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        pros.showAlert(" Coppy to clipBoard","success");
    }
    const handleExtraSpace = ()=>{
        let  newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        pros.showAlert(" Remove extra spaces","success");
    }
    
    const [text,setText] = useState("Enter text here");
    const handleOnChange = (event)=>{
        // console.log("On change");
        setText(event.target.value);
    }
    return (
        <>
        <div className="container" style={{color: pros.mode==='dark'?'white':'black'}}>
            <h1 >{pros.heading }</h1>
      
<div className="mb-3">
  <label htmlFor="myBox" className="form-label"></label>
  <textarea className="form-control" id="myBox" value={text } onChange = {handleOnChange} style={{backgroundColor: pros.mode==='dark'?'gray':'white',color: pros.mode==='dark'?'white':'black'}} rows="8"></textarea>
</div>
<button className="btn btn-primary mx-2" onClick = {handleUPclik}>Convert to upperCase</button>
<button className="btn btn-primary mx-2" onClick = {handlelowerclik}>Convert to lowerCase</button>

<button className="btn btn-primary" onClick = {handleCopy}>Coppy</button>
<button className="btn btn-primary mx-2" onClick = {handleExtraSpace}> Remove extra space </button>
            
        </div>
        <div className="conatiner my-3" style={{color: pros.mode==='dark'?'white':'black'}} >
            <h1>Your text summary</h1>
            <p>{text.split(" ").length} words and {text.length}</p>
            <p>{0.008 * text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something in the textbox above preview it here"}</p>

        </div>
        </>
    )
}
