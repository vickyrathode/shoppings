document.addEventListener('DOMContentLoaded', function() {
    // Add event listener to all "Buy Now" buttons
    const buyButtons = document.querySelectorAll('.Buy');
    buyButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            // Extract product details
            const productContainer = button.closest('.pro');
            const productName = productContainer.querySelector('h5').innerText;
            const productPrice = parseFloat(productContainer.querySelector('h4').innerText.replace('$', ''));
            
            // Create a new product element
            const newProduct = document.createElement('div');
            newProduct.classList.add('product');
            newProduct.innerHTML = `
                <h3>${productName}</h3>
                <p>$${productPrice.toFixed(2)}</p>
                <button class="add-to-cart-btn">Add to Cart</button>
            `;
            
            // Append the new product element to the "Available Products" section
            const availableProductsSection = document.getElementById('products');
            availableProductsSection.appendChild(newProduct);
            
            // Add event listener to the "Add to Cart" button inside the new product element
            const addToCartButton = newProduct.querySelector('.add-to-cart-btn');
            addToCartButton.addEventListener('click', function() {
                // Extract product details again
                const productName = newProduct.querySelector('h3').innerText;
                const productPrice = parseFloat(newProduct.querySelector('p').innerText.replace('$', ''));
                
                // Create a new cart item element
                const newCartItem = document.createElement('li');
                newCartItem.innerHTML = `
                    <span>${productName}</span>
                    <span>$${productPrice.toFixed(2)}</span>
                `;
                
                // Append the new cart item element to the cart
                const cartItemsList = document.getElementById('cart-items');
                cartItemsList.appendChild(newCartItem);
                
                // Remove the product from the available products section
                availableProductsSection.removeChild(newProduct);
                
                // Update the total price in the cart
                updateTotal();
            });
        });
    });

    // Function to update the total price in the cart
    function updateTotal() {
        const cartItems = document.querySelectorAll('#cart-items li');
        let total = 0;
        cartItems.forEach(function(item) {
            const price = parseFloat(item.querySelector('span:nth-child(2)').innerText.replace('$', ''));
            total += price;
        });
        document.getElementById('total').innerText = `$${total.toFixed(2)}`;
    }

    // Checkout button functionality
    const checkoutButton = document.getElementById('checkout-btn');
    const purchaseMessage = document.getElementById('purchase-message');
    checkoutButton.addEventListener('click', function() {
        // Display the purchase message
        purchaseMessage.textContent = 'Purchase successful!';

        // Clear the cart
        const cartItemsList = document.getElementById('cart-items');
        cartItemsList.innerHTML = '';
        
        // Reset the total price
        document.getElementById('total').innerText = '$0.00';
    });
});
