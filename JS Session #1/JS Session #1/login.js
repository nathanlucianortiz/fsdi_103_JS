// Database simulator
var userDB="Joel";
var passwordDB="12345";

// our program
var user=prompt("Enter username");
var pass=prompt("Password");

if(user===userDB && pass===passwordDB){
    console.log("Welcome to the system"+user);
}else{
    console.error("Enter the correct user name and password");
}
