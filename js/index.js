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
const footer = document.querySelector("footer");

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
    signUp.addEventListener('mouseleave', e =>{
    e.target.style.backgroundColor = "black";
    });
    signUp.addEventListener('dblclick', e =>{
    window.alert("Thank you for trying, CLICK AGAIN!");
    });
});

headerChange.addEventListener('mouseenter', e =>{
    e.target.style.backgroundColor = "orange";
});
headerChange.addEventListener('mouseleave', e =>{
    e.target.style.backgroundColor = "yellow";
});

navTags.forEach( tags => {
    tags.addEventListener('click', e => {
        e.preventDefault();
}) 
});

footer.addEventListener("wheel", (event) => {
    event.target.style.backgroundColor = "yellow";
  });


window.addEventListener('keydown', (event) => {
            alert (`Ay you there, stop pressing '${event.key}'`)
        })

window.addEventListener('resize', (event) =>{
            console.log('I am running out of ideas here!!!')	
        })