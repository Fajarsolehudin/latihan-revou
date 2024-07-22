document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const productList = document.getElementById('productList');
    const productItems = productList.getElementsByClassName('product-item');

    searchInput.addEventListener('input', function() {
        const filter = searchInput.value.toLowerCase();
        Array.from(productItems).forEach(function(item) {
            const name = item.getAttribute('data-name').toLowerCase();
            if (name.includes(filter)) {
                item.style.display = '';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

function showProductModal(productId) {
    fetch(`/product/${productId}`)
        .then(response => response.json())
        .then(product => {
            document.getElementById('modalProductName').textContent = product.name;
            document.getElementById('modalProductDescription').textContent = product.description;
            document.getElementById('modalProductPrice').textContent = `Harga: ${product.price}`;
            $('#productModal').modal('show');
        });
}