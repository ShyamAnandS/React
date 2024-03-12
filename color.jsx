import React,{useState} from "react"

function Color(){
  const[color,setColor] = useState("#FFFFFF");

  function colorPicker(event){
    setColor(event.target.value);
  }
  return(
    <div>
        <h1>Color Picker</h1>
        <div style={{backgroundColor : color}}>
            <p>Selected color: {color}</p>
        </div>
        <label>Select a color: &nbsp;
            <input type="color" value={color} onChange={colorPicker }/>
        </label>
    </div>
  ); 
}
export default Color