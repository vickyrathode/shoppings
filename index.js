document.addEventListener('DOMContentLoaded', function() {
    // Add event listener to all "Buy Now" buttons
    const buyNowButtons = document.querySelectorAll('.pro1 button');
    buyNowButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            // Extract product details
            const productContainer = button.closest('.pro1');
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
        });
    });

    // Event delegation for "Add to Cart" button clicks
    document.addEventListener('click', function(event) {
        if (event.target && event.target.classList.contains('add-to-cart-btn')) {
            const productElement = event.target.closest('.product');
            const productName = productElement.querySelector('h3').innerText;
            const productPrice = parseFloat(productElement.querySelector('p').innerText.replace('$', ''));
            
            // Create a new cart item element
            const newCartItem = document.createElement('li');
            newCartItem.innerHTML = `
                <span>${productName}</span>
                <span>$${productPrice.toFixed(2)}</span>
            `;
            
            // Append the new cart item element to the cart
            const cartItemsList = document.getElementById('cart-items');
            cartItemsList.appendChild(newCartItem);
            
            // Remove the product from the Available Products section
            productElement.remove();
            
            // Update the total price in the cart
            updateTotal();
        }
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

    const checkoutButton = document.getElementById('checkout-btn');
    const purchaseMessage = document.getElementById('purchase-message');
    const cartItems = document.getElementById('cart-items');
    const totalSpan = document.getElementById('total');

    checkoutButton.addEventListener('click', function() {
        // Display the purchase message
        purchaseMessage.textContent = 'Purchased successfully';

        // Reset the cart
        cartItems.innerHTML = ''; // Clear cart items
        totalSpan.textContent = '0.00'; // Reset total value

    });
});


//login
  // Check if username is stored in local storage
        const username = localStorage.getItem('username');
        const userInfoContainer = document.getElementById('user-info-container');

        if (username !== null && username !== undefined && username !== '') {
            // Display welcome message
            const welcomeMessage = document.createElement('div');
            welcomeMessage.textContent = `Welcome, ${username}!`;
            userInfoContainer.appendChild(welcomeMessage);
            
            // Display logout button
            const logoutButton = document.createElement('button');
            logoutButton.textContent = 'Logout';
            logoutButton.addEventListener('click', function() {
                // Remove username from local storage
                localStorage.removeItem('username');
                // Redirect to login page
                window.location.href = 'login.html';
            });
            userInfoContainer.appendChild(logoutButton);
        } else {
            // Display login button
            const loginButton = document.createElement('button');
            loginButton.textContent = 'Login';
            loginButton.addEventListener('click', function() {
                // Redirect to login page
                window.location.href = 'login.html';
            });
            userInfoContainer.appendChild(loginButton);
        }

////
        document.addEventListener('DOMContentLoaded', function() {
    const userInfoContainer = document.getElementById('user-info');

    // Check if user is already logged in
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
        showUserInfo(loggedInUser);
    }

    function showUserInfo(username) {
        const userInfoHTML = `
            <p>Logged in as: ${username}</p>
            <button id="logout-btn">Logout</button>
        `;
        userInfoContainer.innerHTML = userInfoHTML;

        // Add event listener to the logout button
        const logoutButton = document.getElementById('logout-btn');
        logoutButton.addEventListener('click', function() {
            // Remove user's login status and username from local storage
            localStorage.removeItem('loggedInUser');
            // Remove user info from the DOM
            userInfoContainer.innerHTML = '';
        });
    }
});
