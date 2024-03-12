import React,{useState} from "react"
function Component(){
    const updateName = () => {
               setName("BroCode")
               
    }
    const incrementAge = () => {
               setAge(age+1)
    }
    const employee = () => {
              setIsEmployed(!isEmployed)
    }
    const[name,setName] = useState("Guest");
    const[age,setAge] = useState(0 ); 
    const[isEmployed,setIsEmployed] = useState(false);
     return(
        <div>
            <p>Name: {name}</p>
            <button onClick = {updateName}>Set name</button>

            <p>Age: {age}</p>
            <button onClick = {incrementAge}>Increment age</button>

            <p>Employee Status: {isEmployed ? "Yes" : "No"}</p>
            <button onClick = {employee}>Toggle status</button>
        </div>

     );
}
export default Component