const url = "https://fakestoreapi.com/products";
fetch(url)
  .then((response) => response.json())
  .then((product) => {
    console.log("Success:", product);
    allProducts(product);
  })

  .catch((error) => {
    console.error("Error", error);
  });

const output = document.querySelector("#products");

function allProducts(products) {
  let myProducts = "";
  for (let product of products) {
    console.log(product);
    products.sort(function (a, b) {
      if (a.title < b.title) {
        return -1;
      }
      if (a.title > b.title) {
        return 1;
      }
      return 0;
    });
    myProducts += `
        <li>
     

        
       

    
            <img src="${product.image}">
            <h2>${product.title}</h2>
            
           
            
                
                
          
        </li>`;
  }
  output.innerHTML = myProducts;
}
