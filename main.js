const products = [{
        name: 'product 1',
        description: 'A very awesome product',
        imageURL: '',
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
        imageURL: '',
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
        imageURL: '',
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
        imageURL: '',
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
        imageURL: '',
        size: '4 in. by 4 in.',
        weight: '5 lb.',
        price1: '1.99',
        price2: '1.49',
        price3: '.99',
        validUntil: '04/01/2019',
    },
];

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};

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

        domString += `<img src="..." class="card-img-top" alt="...">`;
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