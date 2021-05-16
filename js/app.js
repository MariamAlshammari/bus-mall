'use strict';

let firstImgElement=document.getElementById('first-image');
let secondImgElement=document.getElementById('second-image');
let thirdImgElement=document.getElementById('third-image');

let resultElement=document.getElementById('btn');

let firstImgIndex ;
let secondImgIndex;
let thirdImgIndex;

let maxAttempts = 25;
let userAttemptsCount = 0;

let counter=0;

let allProducts=[];

function ProductsImg(name,source){
this.name=name;
this.source=source;
this.showTimes=0;
this.views=0;

allProducts.push(this);
}

new ProductsImg('bag','imgs/bag.jpg');
new ProductsImg('banana','imgs/banana.jpg');
new ProductsImg('bathroom','imgs/bathroom.jpg');
new ProductsImg('boots','imgs/boots.jpg');
new ProductsImg('brekfast','imgs/breakfast.jpg');
new ProductsImg('bubblegum','imgs/bubblegum.jpg');
new ProductsImg('chair','imgs/chair.jpg');
new ProductsImg('cthulhu','imgs/cthulhu.jpg');
new ProductsImg('dog-duck','imgs/dog-duck.jpg');
new ProductsImg('dragon','imgs/dragon.jpg');
new ProductsImg('pen','imgs/pen.jpg');
new ProductsImg('pet-sweep','imgs/pet-sweep.jpg');
new ProductsImg('scissors','imgs/scissors.jpg');
new ProductsImg('shark','imgs/shark.jpg');
new ProductsImg('sweep','imgs/sweep.png');
new ProductsImg('tauntaun','imgs/tauntaun.jpg');
new ProductsImg('unicorn','imgs/unicorn.jpg');
new ProductsImg('water-can','imgs/water-can.jpg');
new ProductsImg('wine-glass','imgs/wine-glass.jpg');

//  console.log(allProducts);

function generateRandomIndex() {
    return Math.floor(Math.random() * allProducts.length);
}
// console.log(generateRandomIndex());

function renderImgs(){
    firstImgIndex = generateRandomIndex();
    secondImgIndex = generateRandomIndex();
    thirdImgIndex = generateRandomIndex();


     do {
        firstImgIndex = generateRandomIndex();
        secondImgIndex=generateRandomIndex();
    }
     while (firstImgIndex === secondImgIndex || secondImgIndex===thirdImgIndex || firstImgIndex===thirdImgIndex);

    //  console.log(firstImgIndex);
    //  console.log(secondImgIndex);
    //  console.log(thirdImgIndex);


    //  console.log(allProducts[firstImgIndex]);
    //  console.log(allProducts[secondImgIndex]);
    //  console.log(allProducts[thirdImgIndex]);


   firstImgElement.src=allProducts[firstImgIndex].source;
   console.log(allProducts[firstImgIndex].name);

   secondImgElement.src=allProducts[secondImgIndex].source;
   console.log(allProducts[secondImgIndex].name);

   thirdImgElement.src=allProducts[thirdImgIndex].source;
   console.log(allProducts[thirdImgIndex].name);



  allProducts[firstImgIndex].views++;
  allProducts[secondImgIndex].views++;
  allProducts[thirdImgIndex].views++;



}
renderImgs();

firstImgElement.addEventListener('click',userClicking);
secondImgElement.addEventListener('click',userClicking);
thirdImgElement.addEventListener('click',userClicking);


function userClicking(event){
    // console.log(event.target.id);
    userAttemptsCount++;
    // console.log(userAttemptsCount);
    if (userAttemptsCount <= maxAttempts) {
        if (event.target.id==='first-image') {
            allProducts[firstImgIndex].showTimes=allProducts[firstImgIndex].showTimes+1;}
            
            else if(event.target.id==='second-image'){
                allProducts[secondImgIndex].showTimes=allProducts[secondImgIndex].showTimes+1;
            }
            else{
                allProducts[thirdImgIndex].showTimes=allProducts[thirdImgIndex].showTimes+1;
            }
            renderImgs();
            console.log(allProducts);

        }
        else{
            firstImgElement.removeEventListener('click',userClicking);
            secondImgElement.removeEventListener('click',userClicking);
            thirdImgElement.removeEventListener('click', userClicking);

            resultElement.addEventListener('click',resultShowing);
            

    
            }
        }
        
    

    function resultShowing(event){
        
        let list = document.getElementById('result');
        let liElement;
        for (let i = 0; i < allProducts.length; i++) {
            liElement = document.createElement('li');
            list.appendChild(liElement);
            liElement.textContent = `${allProducts[i].name} had ${allProducts[i].showTimes}  votes, and was seen ${allProducts[i].views} times.`;

    }
    resultElement.removeEventListener('click', resultShowing);
}
console.log(allProducts);