'use strict';

let firstImgElement=document.getElementById('first-image');
let secondImgElement=document.getElementById('second-image');
let thirdImgElement=document.getElementById('third-image');

let resultElement=document.getElementById('btn');

let roundsControl = document.getElementById('btn2');

let firstImgIndex ;
let secondImgIndex;
let thirdImgIndex;

let maxAttempts = 25;
let userAttemptsCount = 0;

let counter=0;

let allProducts=[];

let productName=[];
let productVotes=[];
let productShown=[];

let myArray=[];
// let myArray2=[];


function ProductsImg(name,source){
this.name=name;
this.source=source;
this.showTimes=0;
this.views=0;


allProducts.push(this);
productName.push(this.name);
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
        thirdImgIndex = generateRandomIndex();
    }
     while (firstImgIndex === secondImgIndex || secondImgIndex===thirdImgIndex || firstImgIndex===thirdImgIndex || myArray.includes(firstImgIndex)|| myArray.includes(secondImgIndex)||myArray.includes(thirdImgIndex));

    //  console.log(firstImgIndex);
    //  console.log(secondImgIndex);
    //  console.log(thirdImgIndex);


    //  console.log(allProducts[firstImgIndex]);
    //  console.log(allProducts[secondImgIndex]);
    //  console.log(allProducts[thirdImgIndex]);

   
    myArray[0] = firstImgIndex;
    myArray[1] = secondImgIndex;
    myArray[2] = thirdImgIndex;



   firstImgElement.src=allProducts[firstImgIndex].source;
   secondImgElement.src=allProducts[secondImgIndex].source;
   thirdImgElement.src=allProducts[thirdImgIndex].source;


firstImgElement.alt=allProducts[firstImgIndex].name;
secondImgElement.alt=allProducts[secondImgIndex].name;
thirdImgElement.alt=allProducts[thirdImgIndex].name;
// compareImgs();
// console.log(compareImgs);

// myArray2.push(firstImgElement.alt);
// myArray2.push(secondImgElement.alt);
// myArray2.push(thirdImgElement.alt);
// console.log(myArray2);







  allProducts[firstImgIndex].views++;
  allProducts[secondImgIndex].views++;
  allProducts[thirdImgIndex].views++;



}
renderImgs();




firstImgElement.addEventListener('click',userClicking);
secondImgElement.addEventListener('click',userClicking);
thirdImgElement.addEventListener('click',userClicking);
roundsControl.addEventListener('click',usersRoundsControl);

function usersRoundsControl(event){
    let userRound = prompt("Please enter your rounds");
    maxAttempts=userRound;
}

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
            
            roundsControl.removeEventListener('click',usersRoundsControl);
           
            }
          
        
}

    function resultShowing(event){
        
    //     let list = document.getElementById('result');
    //     let liElement;
    //     for (let i = 0; i < allProducts.length; i++) {
    //         liElement = document.createElement('li');
    //         list.appendChild(liElement);
    //         liElement.textContent = `${allProducts[i].name} had ${allProducts[i].showTimes}  votes, and was seen ${allProducts[i].views} times.`;

    // }
     for (let i = 0; i < allProducts.length; i++) {
        productVotes.push(allProducts[i].showTimes);
        productShown.push(allProducts[i].views);
        
    }
    viewChart();
    



    resultElement.removeEventListener('click', resultShowing);
}
// console.log(allProducts);

function viewChart() {

    let ctx = document.getElementById('myChart').getContext('2d');
    let myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: productName,
            datasets: [{
                    label: '# of Votes',
                    data: productVotes,
                    backgroundColor: 'rgb(60, 179, 113)',
                    borderColor: 'rgb(60, 179, 113)',
                    borderWidth: 1
                },
                {
                    label: '# of shown',
                    data: productShown,
                    backgroundColor: 'rgb(106, 90, 205)',
                    borderColor: 'rgb(106, 90, 205)'
                    
                }
            ]
        },
        options: {

        }
    });

}
// console.log('names', productName);
// console.log('votes', productVotes);
// console.log('shown', productShown);