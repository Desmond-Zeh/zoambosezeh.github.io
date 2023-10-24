//My scripts page

//My main heading 
const myheading=document.querySelector("h1");
const heading="sizing of current and voltage transformer for metering systems";
const head=heading.toUpperCase();
myheading.textContent=head;

// My first Event code (Anytime you access my page and tap on the heading "h1", an event should execute prompting you to stop.

document.querySelector("h1").addEventListener("click", function(){
alert("Ouch! Please stop poking on me. You can't edit directly from here. Thanks!");
});

//// Personalized welcome message

let myButton=document.querySelector("button");  ///Declare the button and the heading to be replaced
let myHeading=document.querySelector("h5");

//// Function use to set the user's name

function setUserName(){
let myName=prompt("Please enter your username. Note, user name must be a string of any character other than digit");
if(!myName){                                         
setUserName();                  ///// Check if the myName variable is not empty and then return to the setUserName function if it's false
}
else{
VerifyPromptContent();   ///// Check if the myName variable is not empty and then proceed to the VerifyPromptContent function if it's true
}
   
//// Function use to verify the content of Prompt command

function VerifyPromptContent(){
let myNumber=Number(myName);     //// Declare a new variable called myNumber to content the output conversion of the myNumber
if(!Number.isNaN(myNumber)){
setUserName();                    ///// Check if the myNumber value is not a number and then return to the setUserName function if it's false
}
else{
  
localStorage.setItem("name",myName);  /// Save the value of myNumber in a variable called name in the localStorage memory of the browser
myHeading.textContent="Welcome, " + myName;  /////Add the value of the myNumber to the string and then proceed to the setUserPassword function
setUserPassword();
}
    
//// Function use to set the user's password

function setUserPassword(){
let myPassword=prompt("Please enter your password.");
if(!myPassword){
setUserPassword();                ///// Check if the myPassword variable is not empty and then return to the setUserPassword function if it's false
}
else{
password();               //// Proceed to the password function
}
   
//// Function use to set the verify password

function password(){
const mypassword=["love"];
if(myPassword !=mypassword){
setUserPassword(); //// Check if the password enter doesn't correspond with the defaut password and return to the setUserPassword function if it's true
}

else {
localStorage.getItem("name",myName)  //// Check the value of the myName which is name in the localStorage is not empty and then return to the seyUserName function if it's false
}
  }
}
   }
}
if(!localStorage.getItem("name")){
setUserName();
}
else{
let savedName=localStorage.getItem("name");   //// if it isn't empty, then get its value and store it in the savedName variable
myHeading.textContent="Welcome, " + savedName; //// Display myHeading
  }
   myButton.onclick=function(){
setUserName();
  }
