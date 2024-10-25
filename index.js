document.addEventListener('DOMContentLoaded', () => {
  const productList = document.getElementById('product-list');
  const addProductForm = document.getElementById('add-product-form');

  addProductForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const productName = document.getElementById('product-name').value;
    const productPrice = document.getElementById('product-price').value;
    const productDescription = document.getElementById('product-description').value;

    // Agregar producto a la lista
    const productListItems = productList.children;
    const newProduct = `
      <li>
        <span>${productName}</span>
        <span>${productPrice}</span>
        <span>${productDescription}</span>
      </li>
    `;
    productList.insertAdjacentHTML('beforeend', newProduct);

    // Almacenar el producto en Local Storage
    const products = JSON.parse(localStorage.getItem('products') || '[]');
    products.push({ name: productName, price: productPrice, description: productDescription });
    localStorage.setItem('products', JSON.stringify(products));

    // Limpia los campos del formulario
    addProductForm.reset();
  });

  // Carga los productos almacenados en Local Storage
  const products = JSON.parse(localStorage.getItem('products') || '[]');
  products.forEach((product) => {
    const newProduct = `
      <li>
        <span>${product.name}</span>
        <span>${product.price}</span>
        <span>${product.description}</span>
      </li>
    `;
    productList.insertAdjacentHTML('beforeend', newProduct);
  });
});