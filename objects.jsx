import React,{useState} from "react"
function Object(){
   const[car,setCar] = useState({year: 2024,model: 'Mustang' ,make: 'Ford'});
   function handleYear(event){
      setCar(c => ({...c,year: event.target.value}));
   }
   function handleModel(event){
      setCar(c => ({...car,model: event.target.value}));
   }
   function handleMake(event){
      setCar(c => ({...car,make: event.target.value})) ;
   }
   return(
      <div>
         <p>Your favourite car is : {car.year} {car.make} {car.model}</p>
         <input type="number" value={car.year} onChange={handleYear}/><br />
         <input type="text" value={car.model} onChange={handleModel} /><br />
         <input type="text" value={car.make} onChange={handleMake}/>
      </div>
   );
}
export default Object