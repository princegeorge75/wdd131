
const currentYear = document.getElementById('currentyear');
const lastModified = document.getElementById('modified');

currentYear.textContent = new Date().getFullYear();
lastModified.textContent = `Last modification: ${document.lastModified}`;


let productsBox = document.getElementById('product-name');

const products = [
    {
        id: "hp-4121-lp",
        name: "HP Touchscreen mini laptop",
        averagerating: 4.7
    },
    {
        id: "sm-2430-as",
        name: "Samsung A24s",
        averagerating: 4.2
    },      
    {
        id: "fs-1987-wm",
        name: "Hisense Washing Maching, 12kg",
        averagerating: 4.3
    },
    {
        id: "ai-1256-pr",
        name: "Iphone 12 pro",
        averagerating: 3.9
    },
    {
        id: "fs-4278-to",
        name: "Toshiba Flat Screen 42 Inches",
        averagerating: 5.0
    },
    {
        id: "pq-7884-qm",
        name: "Lenovo Desktop Monitor",
        averagerating: 3.4
    }
];

function displayProducts(product){

    products.forEach(index => {

        const box = document.createElement("option");
        
        box.value = index.id;
        box.textContent = index.name;
        productsBox.appendChild(box);
    });

}

displayProducts(productsBox);

