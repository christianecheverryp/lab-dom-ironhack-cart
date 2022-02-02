// ITERATION 1

//const { product } = require("puppeteer");

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = product.querySelector(".price span"); //obtengo lo que aparece en el input price
  const quantity = product.querySelector(".quantity input") // obtengo lo que aparece en el input quantity
  const subTotal = product.querySelector(".subtotal span")


  const priceNumber = price.innerHTML; // extraigo los elementos
  const quantityNumber = quantity.value; // extraigo los elementos

  let totalPrice = priceNumber * quantityNumber; 
  subTotal.innerText = Number(totalPrice) // añado el precio a la clase subTotal
  console.log(totalPrice)
  
  return totalPrice;

}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const products = document.querySelectorAll(".product");
  
  let sumaProductos = 0; // creo el contador de productos
  // utilizo el forEach para recorrer el numero de productos que hay
  products.forEach(eachProduct => {
    sumaProductos += updateSubtotal(eachProduct) 
  });

  console.log(sumaProductos)

  // ITERATION 3
  const total = document.querySelector("#total-value span")
  total.innerText = sumaProductos
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
