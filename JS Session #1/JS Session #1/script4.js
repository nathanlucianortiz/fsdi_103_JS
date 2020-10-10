function hello(){
    alert("Hey, please enter the correct password");
}

do{
    var pass=prompt("Enter the password");
    if(pass=="Sam"){
        console.log("Welcome");
    }else{
        hello();
    } 
}while(pass!="Sam");
