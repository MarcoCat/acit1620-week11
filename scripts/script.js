// const greet = (username) =>{
//     console.log(`hewwo ${username}`);
// }

// const greet = function(user){
//     console.log(`hewwo ${username}`);
// }

// function greet(username, time = 'day'){
//     console.log(`hewwo ${username} its ${time} time`);
// }

// let username = prompt('What is your name?')
// greet(username, 'night')

// function area_circle(radius){
//     return Math.PI * radius**2
// }

function populateList(unorderedListElement, list){
    for (let item of list){
        const listItemElement = document.createElement('li');
        listItemElement.textContent = item;
        unorderedListElement.appendChild(listItemElement);
    }
}

function changeSquare(object){
    object.classList.replace('circlelist', 'squarelist');
}

function updateImage(image){
    image.width = 100;
    image.height = 100;
    image.src = 'cart.png';
}

function updateGreen(list){
    for (let item of list){
        if (item.textContent.includes('green')){
            // item.classList.add('greentext') 
            item.style.color = "green";
        }
    }
}

const unorderedListElement = document.querySelector('.shopping')
let shoppingList = ['cheese', 'bread', 'green pepper', 'milk'];
populateList(document.querySelector('.shopping'), shoppingList)
changeSquare(document.querySelector('.circlelist'))
updateImage(document.querySelector('#shoppingcart'))
updateGreen(document.querySelectorAll('.shopping li'))
