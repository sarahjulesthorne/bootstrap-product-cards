const products = [
    {
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
products.forEach((product) => {
domString += `<h2>${product.name}</h2>`;
})
printToDom('cardContainer', domString);
};

const init = () => {
domStringBuilder();
};
init();