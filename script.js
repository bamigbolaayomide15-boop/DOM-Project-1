document.addEventListener("DOMContentLoaded", function () {
  // Function to calculate total price
  function updateTotal() {
    let total = 0;

    // Get all product cards
    const productCards = document.querySelectorAll(".card-body");

    productCards.forEach((card) => {
      const priceElement = card.querySelector(".unit-price");
      const quantityElement = card.querySelector(".quantity");

      if (priceElement && quantityElement) {
        const price = parseFloat(priceElement.textContent);
        const quantity = parseInt(quantityElement.textContent);
        total += price * quantity;
      }
    });

    // Update total display
    const totalElement = document.querySelector(".total");
    if (totalElement) {
      totalElement.textContent = total + " $";
    }
  }

  // Add event listeners to plus buttons
  const plusButtons = document.querySelectorAll(".fa-plus-circle");
  plusButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const quantityElement = this.nextElementSibling;
      if (quantityElement && quantityElement.classList.contains("quantity")) {
        let quantity = parseInt(quantityElement.textContent);
        quantity++;
        quantityElement.textContent = quantity;
        updateTotal();
      }
    });
  });

  // Add event listeners to minus buttons
  const minusButtons = document.querySelectorAll(".fa-minus-circle");
  minusButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const quantityElement = this.previousElementSibling;
      if (quantityElement && quantityElement.classList.contains("quantity")) {
        let quantity = parseInt(quantityElement.textContent);
        if (quantity > 0) {
          quantity--;
          quantityElement.textContent = quantity;
          updateTotal();
        }
      }
    });
  });

  // Add event listeners to trash buttons
  const trashButtons = document.querySelectorAll(".fa-trash-alt");
  trashButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Find the parent card-body and remove it
      const productCard = this.closest(".card-body");
      if (productCard) {
        productCard.remove();
        updateTotal();
      }
    });
  });

  // Add event listeners to heart buttons
  const heartButtons = document.querySelectorAll(".fa-heart");
  heartButtons.forEach((button) => {
    button.addEventListener("click", function () {
      this.classList.toggle("text-danger");
    });
  });

  // Initial total calculation
  updateTotal();
});
