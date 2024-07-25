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

const decrasebtn = document.getElementById("decrasebtn");
const resetbtn = document.getElementById("resetbtn");
const increasebtn = document.getElementById("increasebtn");


let count = 0 ;

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

let roll = document.getElementById("rollbtn");
const mylabel = document.getElementById("mylabel");
let min = 1;
let max = 100;

roll.onclick = function (){
    roll = Math.floor(Math.random()*max) + min;
    mylabel.textContent = roll;

}
