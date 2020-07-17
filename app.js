let str = 'apple';
let num = 5;
let arr = [3,4,5,6];
let isCool = true;
let fruits = {
    item: 'peach',
    count: 7,
    color: ['white', 'yellow'],
    isSweeet: true
}

//1 pass array
function getLength(array){
    return array.length;
}

console.log(getLength(arr));

//2
function getLastItem(array){
    return array.pop();
}

console.log(getLastItem(arr));

//3 pass number
function add(num1, num2){
    return num1 + num2;
}

console.log(add(4, 5));

//4 pass string
function printString (string){
    console.log(string);
}

console.log(printString(str));

//5 pass object
function printBool (boo){
    if(boo){
        console.log('TRUE!!');
    }
    else{
        console.log('False');
    }
}

console.log(printBool(isCool));


//////////// DOM

const sectionOne = document.getElementById("section-one");
const sectionTwo = document.getElementById("section-two");
const sectionThree = document.querySelector("#section-three");
const sectionFour = document.querySelector("#section-four");
const sectionFive = document.querySelector("#section-five");

console.log(sectionOne,sectionTwo,sectionThree,sectionFour,sectionFive);

sectionOne.textContent = 'This is section one';
sectionTwo.textContent = 'This is section two';
sectionThree.textContent = 'This is section three';
sectionFour.textContent = 'This is section four';
sectionFive.textContent = 'This is section five';