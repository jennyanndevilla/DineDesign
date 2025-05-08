document.querySelectorAll(".jump-btn").forEach((button) => {
    button.addEventListener("click", () => {
      button.classList.add("jump");
      setTimeout(() => {
        button.classList.remove("jump");
      }, 900); 
    });
  });
  
  document.querySelector('.navbar input[type="text"]').addEventListener("input", function () {
    const searchTerm = this.value.toLowerCase();
    const products = document.querySelectorAll(".Product, .product");
  
    products.forEach((product) => {
      const text = product.innerText.toLowerCase();
      product.style.display = text.includes(searchTerm) ? "block" : "none";
    });
  });
