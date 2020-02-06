// let dropdown = document.getElementById('dropdown');
// let dropdownItems = document.querySelector('.dropdownMenu');


// dropdown.addEventListener('click', function(){
//     dropdownItems.classList.toggle('show');   
// });


let demo = document.getElementById('demo');

let test = document.querySelectorAll('.test')

demo.innerText = "Hello";

test[0].innerText = "step";
test[1].innerText = "213";
test[1].style.backgroundColor = "blue";


let light = document.querySelector('#light')
let btn = document.querySelector("#btn")
let btn2 = document.querySelector("#btn-2")

btn.addEventListener('click', function(){
   light.src = "color_light_off_lamp-512.png";
})
btn2.addEventListener('click', function(){
    light.src = "solid_light_off_lamp-512.png";
 })