import profilePic from "./assets/propic.png"
function Card(){
    return(
        <div className="card "> 
            <img src = {profilePic} alt="rofile-picture" />
            <h1>Shyam Anand S</h1>
            <p>I am a final year graduate at Sathyabama University pursuing computer science engineering specialized in Artificial Intelligence.</p>
        </div>
    );
}
export default Card