// ITERATION 1

function updateSubtotal(product) {

 console.log (product)

 const productPrice = product.querySelector('.price span');
 const productQuantity = product.querySelector('.quantity input');
 product.querySelector('.subtotal span').textContent =
 productPrice.textContent * productQuantity.value;

 return productPrice.textContent * productQuantity.value;

  console.log('Calculating subtotal, yey!');

  //... your code goes here
}

function calculateAll() {
  
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
   
  let total = 0;
 
  const allProducts = document.querySelectorAll('.product');
  for (i=0;i< allProducts.length;i=i+1){
     total = total+ updateSubtotal(allProducts[i]);  
     
  }
  console.log(total);
  document.querySelector('#total-value span').textContent =total;
  // updateSubtotal(singleProduct);
  // end of test


  // ITERATION 2
  //... your code goes here

  // ITERATION 3
  //... your code goes here
 



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
