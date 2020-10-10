//document.getElementById("msg").innerHTML="Hello";
function getValues(){
    var name=prompt("Enter your name:");
    return name;
}

document.getElementById("msg").innerHTML=`
    <p> Welcome to the system ${getValues()} </p> 
`;
