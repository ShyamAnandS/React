import React,{useState} from 'react'
function Changes(){
    const[cars,setCars] = useState([]);
    const[carYear,setCarYear] = useState(new Date().getFullYear());
    const[carModel,setCarModel] = useState("");
    const[carMake,setCarMake] = useState("");

    function addCar(){
        const newCar = {year : carYear,model : carModel, make : carMake};
        setCars(c => [...c,newCar]);
        setCarYear(new Date().getFullYear());
        setCarModel("");
        setCarMake("");
    }
    function removeCar(index){
        setCars(c => c.filter((_  ,i) => i !== index));
    }
    function changeYear(event){
        setCarYear(event.target.value);
    }
    function changeModel(event){
        setCarModel(event.target.value);
    }
    function changeMake(event){
        setCarMake(event.target.value);
    }

   return(
    <div>
    <h1>List of Cars</h1>
    <ul>
         {cars.map((car,index) => 
         <li key={index} onClick={() => removeCar(index)}>{car.year} {car.model} {car.make}</li>)
         }
    </ul>
    <input type="number" value={carYear} onChange={changeYear} /><br />
    <input type="text" value={carModel} onChange={changeModel} /><br />
    <input type="text" value={carMake} onChange={changeMake} /><br />
    <button onClick={addCar} >Add car</button>
    </div>
   );
}
export default Changes