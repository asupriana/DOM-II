// Your code goes here

//Variables
const submitButton = document.querySelector(".form-submit");
 const signUpButton = document.querySelectorAll(".btn");
 const signUpPressure = document.querySelectorAll("h4");
const comeBackHere = document.querySelector(".destination");
const titleChange = document.querySelector("h1");
const headerChange = document.querySelector(".main-navigation");
const textChange = document.querySelector(".home");
const navTags = document.querySelectorAll("a");

signUpPressure.forEach ( pressure => {
    pressure.addEventListener('mouseover', e =>{
        window.alert("Sign up before time runs out! Double click now!");
        e.stopPropagation();
        });
    });
    
signUpButton.forEach ( signUp => {
    signUp.addEventListener('mouseenter', e =>{
    e.target.style.backgroundColor = "orange";
    });
});

signUpButton.forEach ( signUp => {
    signUp.addEventListener('dblclick', e =>{
        window.alert("Thank you for trying, CLICK AGAIN!");
        });
    });