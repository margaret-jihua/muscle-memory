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

// console.log(sectionOne,sectionTwo,sectionThree,sectionFour,sectionFive);

sectionOne.textContent = 'Section One';
sectionTwo.textContent = 'Section Two';
sectionThree.textContent = 'Section Three';
sectionFour.textContent = 'Section Four';
sectionFive.textContent = 'Section Five';

const paraOne = document.querySelector('.paragraph-one');
paraOne.textContent = 'paragraphy 1';

const paraTwo = document.querySelector('.paragraph-two');
paraTwo.textContent = 'paragraph 2';

const paraThree = document.querySelector('.paragraph-three');
paraThree.textContent = 'paragraph 3';

const paraFour = document.querySelector('.paragraph-four');
paraFour.textContent = 'paragraph 4';

const paraFive = document.querySelector('.paragraph-five');
paraFive.textContent = 'paragraph 5';

//create div 6

const containerSix = document.createElement('div');
containerSix.classList.add('container-six');
console.log(containerSix);

const sectionSix = document.createElement('h2');
sectionSix.setAttribute('id', 'section-six');
console.log(sectionSix);
sectionSix.textContent = 'Section Six';

const paraSix = document.createElement('p');
paraSix.classList.add('paragraph-six');
console.log(paraSix);
paraSix.textContent = 'paragraph 6';

///

const body = document.querySelector('body');

body.appendChild(containerSix);
containerSix.appendChild(sectionSix);
containerSix.appendChild(paraSix);

////


const newContainer = document.createElement('div');
newContainer.classList.add('additional-container');
console.log(newContainer);

const newSection = document.createElement('h2');
newSection.setAttribute('id', 'new-section');
newSection.textContent = 'New Section!';
console.log(newSection);

const newPara = document.createElement('p');
newPara.classList.add('new-paragraph');
newPara.textContent = 'new paragraph!';
console.log(newPara);

body.appendChild(newContainer);
newContainer.appendChild(newSection);
newContainer.appendChild(newPara);






