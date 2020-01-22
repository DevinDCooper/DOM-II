// img mouseenter
const mapImage = document.querySelector('.img-content');

mapImage.addEventListener('mouseenter', () => {
    mapImage.style.transform = "scale(1.2)";
    mapImage.style.transition = "all 0.3s";
});



// we can also use (event) inside the parameters => event.style...

//mouseleave 
mapImage.addEventListener('mouseleave',() => {
    mapImage.style.transform = 'scale(1)';
});



//Propagation //click

const body = document.querySelector('body');
body.addEventListener('click', (event) => {
    event.target.style.backgroundColor ='papayawhip';
});



//preventDefault // click
const navLink = document.querySelector('.nav');
navLink.addEventListener('click', (event) => {
    event.target.style.color ='blue'
    event.preventDefault()
});






//load 


window.addEventListener("load", (event) => {
    console.log ('GOOD TO GO')
});



//online
window.addEventListener('online', (event) => {
    console.log("you are connected to the network!")
});


//keydown
function logKey(e) {
    console.log(e)

    if(e.keycode === 93) {
        alert ('hey that is a command key')
    }
};


document.addEventListener('keydown' , logKey)


//scroll
const textArea = document.querySelector('textarea')
textArea.addEventListener('scroll', function(e) {
  console.log('scrolled', e)
});


//dbclick 

const logo = document.querySelector('.logo-heading h1')

logo.addEventListener('dbclick', function(e) {
    logo.target.style.color ='red'
});