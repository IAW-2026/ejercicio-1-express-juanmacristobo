const contenedor = document.getElementById('productos-container');

fetch('/api/productos')
  .then(response => response.json())
  .then(productos => {
    if (!productos.length) {
      contenedor.innerHTML = '<p>No hay productos.</p>';
      return;
    }

    const lista = document.createElement('ul');
    productos.forEach(producto => {
      const item = document.createElement('li');
      item.textContent = `${producto.nombre} - $${producto.precio}`;
      lista.appendChild(item);
    });
    contenedor.innerHTML = '';
    contenedor.appendChild(lista);
  })
  .catch(error => {
    contenedor.innerHTML = `<p>Error al cargar productos: ${error.message}</p>`;
  });