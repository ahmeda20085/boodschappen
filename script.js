
const productPrice = document.getElementsByClassName('productPrice');
const productQuantity = document.getElementsByClassName('productQuantity');
const productTotalCost = document.getElementsByClassName('productTotalCost');
const totalCost = document.getElementById('totalCost');

console.log(productPrice);
console.log(productQuantity);
console.log(productTotalCost);
console.log(totalCost);


const table = document.getElementById('myTable');
table.addEventListener('change', producten);


function producten() {

    let totalPrice = 0;

    for (let i = 0; i < productPrice.length; i++) {

        let price = Number(productPrice[i].textContent);
        let quantity = Number(productQuantity[i].value);

        let subtotal = price * quantity;

        productTotalCost[i].textContent = subtotal.toFixed(2);

        totalPrice += subtotal;
    }

    totalCost.textContent = totalPrice.toFixed(2);
}


producten();