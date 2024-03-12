
function Button(){
    const styles={
            backgroundColor: "hsl(200,100%,50%)" ,
            color: "azure",
            padding: "10px 20px",
            border: "none",
            borderRadius: "5px",
            cursor : "pointer",
    }
    return(
        <button style = {styles}>click me</button>
    );
}
export default Button