/*Project creates string of bootstrap cards using a domStringBuilder function which loops over the products array at the top of this file.
The builder function extracts information from the array and builds it into the cards
It uses conditionals to determine how to establish the grid system into which the cards are built.
It prints the cards to the page using the printToDom function.*/

//Array of product objects with their information 
const products = [{
        name: 'product 1',
        description: 'A very awesome product',
        imageURL: 'https://images.vat19.com/covers/large/gigantic-coffee-mug.jpg',
        size: '4 in. by 4 in.',
        weight: '5 lb.',
        price1: '1.99',
        price2: '1.49',
        price3: '.99',
        validUntil: '04/01/2019',
    },
    {
        name: 'product 2',
        description: 'A very awesome product',
        imageURL: 'https://images.vat19.com/covers/large/gigantic-coffee-mug.jpg',
        size: '4 in. by 4 in.',
        weight: '5 lb.',
        price1: '1.99',
        price2: '1.49',
        price3: '.99',
        validUntil: '04/01/2019',
    },
    {
        name: 'product 3',
        description: 'A very awesome product',
        imageURL: 'https://images.vat19.com/covers/large/gigantic-coffee-mug.jpg',
        size: '4 in. by 4 in.',
        weight: '5 lb.',
        price1: '1.99',
        price2: '1.49',
        price3: '.99',
        validUntil: '04/01/2019',
    },
    {
        name: 'product 4',
        description: 'A very awesome product',
        imageURL: 'https://images.vat19.com/covers/large/gigantic-coffee-mug.jpg',
        size: '4 in. by 4 in.',
        weight: '5 lb.',
        price1: '1.99',
        price2: '1.49',
        price3: '.99',
        validUntil: '04/01/2019',
    },
    {
        name: 'product 5',
        description: 'A very awesome product',
        imageURL: 'https://images.vat19.com/covers/large/gigantic-coffee-mug.jpg',
        size: '4 in. by 4 in.',
        weight: '5 lb.',
        price1: '1.99',
        price2: '1.49',
        price3: '.99',
        validUntil: '04/01/2019',
    },
];

//print function which prints designated variable's value to DOM in div selected by id
const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};

/*function loops over products array and builds information into bootstrap card.  
Uses column counter to determine whether to insert opening and closing row div tags, and whether to insert a w-100 div to break to a new row
Prints to designated div using printToDom function*/

const domStringBuilder = () => {
    let domString = '';
    let columnCounter = 0;
    products.forEach((product) => {
        if (columnCounter === 0) {
            domString += `<div class='row'>`;
        }
        domString += `<div class='col-4'>`;
        domString += `<div class="card">`;
        domString += `<div class="card-header">`;
        domString += `<h2>${product.name}</h2>`;
        domString += `</div>`;
        domString += `<img src="${product.imageURL}" class="card-img-top product-card-image" alt="Image of a half-gallon white mug which says in brown text--Ive cut back to just one cup of coffee a day">`;
        domString += `<div class="card-body">`;
        domString += `<p class="card-text">${product.description}</p>`;
        domString += `<a href="#" class="btn btn-primary">Go somewhere</a>`;
        domString += `</div>`;
        domString += `</div>`;
        domString += `</div>`;
        columnCounter++;
        if (columnCounter === 3) {
            domString += `<div class='w-100'></div>`;
        }
        if (columnCounter === products.length) {
            domString += `</div>`;
        }
    })
    printToDom('productContainer', domString);
};

const init = () => {
    domStringBuilder();
};
init();