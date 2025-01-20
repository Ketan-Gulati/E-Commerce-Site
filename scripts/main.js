fetch("./Data/products.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Error ${response.status} !`);
    } else {
      return response.json();
    }
  })
  .then((data) => {
    renderProducts(data);
  })
  .catch((error) => {
    console.error("Error fetching product :", error);
  });

function renderProducts(products) {
  let productHtml = "";
  products.forEach((product) => {
    if (product.featured === "yes") {
      productHtml += `
        <div class="featured-product">
          <img
            class="product-img"
            src="./Assets/Images/Products/${product.image}"
          />
          <img
            class="product-rating"
            src="./Assets/Images/ratings/${product.ratings}"
          />
          <p>Rs. ${product.price}</p>
        </div>`;
    }
  });
  document.getElementById("featured-products").innerHTML = productHtml;
}
