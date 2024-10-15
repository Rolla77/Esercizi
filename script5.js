fetch('https://dummyjson.com/products')
            .then(response => response.json())
            .then(data => {
                const productsContainer = document.getElementById('products');
                data.products.forEach(product => {
                    const productDiv = document.createElement('div');
                    productDiv.classList.add('product');
                    productDiv.innerHTML = `
                        <p><strong>ID:</strong> ${product.id}</p>
                        <p><strong>Titolo:</strong> ${product.title}</p>
                        <p><strong>Prezzo:</strong> ${product.price} €</p>
                        <p><strong>Descrizione:</strong> ${product.description}</p>
                        <img src="${product.thumbnail}" alt="${product.title}" width="100">
                    `;
                    productsContainer.appendChild(productDiv);
                });
            })
            .catch(error => console.error('Errore:', error));
