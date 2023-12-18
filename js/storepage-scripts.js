function redirectToSignUp() {
    window.location.href = "../pages/signup.html";
}

document.getElementById('btn_click').addEventListener('click', function() {
    redirectToSignUp();
});

const products = [
    { 
        name: 'HyperX Cloud III Wireless - Gaming Headset', 
        image: '../assets/product1.webp',
        price: 169.99
    },
    { 
        name: 'HyperX QuadCast S - USB Microphone', 
        image: '../assets/product2.webp',
        price: 119.99
    },
    { 
        name: 'HyperX Pulsefire Surge - Gaming Mouse', 
        image: '../assets/product3.webp',
        price: 54.99
    },
    { 
        name: 'HyperX Pulsefire Mat - Gaming Mouse Pad - Cloth (XL)', 
        image: '../assets/product4.webp',
        price: 29.99
    },
    { 
        name: 'HyperX Alloy Elite 2 - Mechanical Gaming Keyboard', 
        image: '../assets/product5.webp',
        price: 129.99
    },
    { 
        name: 'HyperX Clutch - Wired Gaming RGB Controller - Xbox', 
        image: '../assets/product6.webp',
        price: 44.99
    },
    { 
        name: 'HyperX Armada 27 QHD Gaming Monitor', 
        image: '../assets/product7.webp',
        price: 399.99
    },
    { 
        name: 'HyperX Armada Single Gaming Mount', 
        image: '../assets/product8.webp',
        price: 109.99
    },
    { 
        name: 'AiMClab Men\'s Classic Tee', 
        image: '../assets/product9.png',
        price: 24.99
    },
    { 
        name: 'AiMClab Women\'s Classic Tee', 
        image: '../assets/product10.png',
        price: 24.99
    },
];

document.addEventListener('DOMContentLoaded', function() {
    const productsGrid = document.querySelector('.products-grid');

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const productImage = document.createElement('img');
        productImage.src = product.image;
        productImage.alt = product.name;

        const productName = document.createElement('h3');
        productName.textContent = product.name;

        const productPrice = document.createElement('p');
        productPrice.textContent = `$${product.price}`;

        productCard.appendChild(productImage);
        productCard.appendChild(productName);
        productCard.appendChild(productPrice);

        productsGrid.appendChild(productCard);
    });
});
