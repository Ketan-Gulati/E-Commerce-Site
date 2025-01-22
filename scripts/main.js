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
    console.error("Error loading :", error);
  });

function renderProducts(products) {
  let featuredHtml = "";
  let customHtml = "";
  products.forEach((product) => {
    if (product.featured === "yes") {
      featuredHtml += `
        <div class="home-product">
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
    } else if (product.customizable === "yes") {
      customHtml += `
        <div class="home-product">
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
  document.getElementById("featured-products").innerHTML = featuredHtml;
  document.getElementById("Customizable-products").innerHTML = customHtml;
}

function slider(productList, prev, next) {
  // code for slider operation
  const itemList = document.querySelector(`.${productList}`);
  const prevBtn = document.querySelector(`.${prev}`);
  const nextBtn = document.querySelector(`.${next}`);

  let currentIndex = 0;

  prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateSlider();
    }
  });

  nextBtn.addEventListener("click", () => {
    if (currentIndex < itemList.children.length - 5) {
      currentIndex++;
      updateSlider();
    }
  });

  function updateSlider() {
    itemList.style.transform = `translateX(-${currentIndex * 300}px)`;
  }
}

slider("featured-product-list", "prev1", "next1");
slider("Customizable-product-list", "prev2", "next2");
