import React,{useState,useContext} from "react"
import ComponentB from "./componentB.jsx";

export const userContext = createContext();
function ComponentA(){

    const[user,setUser] = useState("BroCode");

    return(
        <div className="box">
            <h1>ComponentA</h1>
            <nameContext.provider value = {user}>
            <ComponentB/>
            </nameContext.provider>
            <h2>`Hello ${user}`</h2>
           
        </div>
    );
}
export default ComponentA