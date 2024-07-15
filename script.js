
/*

document.getElementById("myH1").textContent ="Hello";

 var variable or let variable = document.getElementById("name of variable from ID in html")
const decrasebtn = document.getElementById("decrasebtn");
const resetbtn = document.getElementById("resetbtn");
const increasebtn = document.getElementById("increasebtn");
//constant variable| doc..gEBI is main part for variable for changing


 creating variable for counting
let count = 0 ;

 creating function on click what it will do 
increasebtn.onclick = function(){
    count ++;
    countlabel.textContent = count;
}
decreasebtn.onclick = function(){
    count --;
    countlabel.textContent = count;
}
resetbtn.onclick = function(){
    count = 0;
    countlabel.textContent = count;
}
    */

let text = document.getElementById("parallaxtext")
let leaf = document.getElementById("leaf")
let hill1 = document.getElementById("hill1")
let hill4 = document.getElementById("hill4")
let hill5 = document.getElementById("hill5")
window.addEventListener('scroll',()=> {
    let scrolling = window.scrollY;

    parallaxtext.style.marginTop = scrolling * 2.5 + 'px'
    leaf.style.marginTop = scrolling * -1.5 + 'px'
    leaf.style.marginLeft = scrolling * 1.5 + 'px'
    hill5.style.marginLeft = scrolling * 1.5 + 'px'
    hill4.style.marginLeft = scrolling * -1.5 + 'px'
    tree.style.marginLeft = scrolling * -0.5 + 'px'
})