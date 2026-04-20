const form = document.getElementById('form-contacto');
const respuesta = document.getElementById('respuesta-contacto');

if (form && respuesta) {
	form.addEventListener('submit', async (event) => {
		event.preventDefault();

		const nombre = document.getElementById('nombre').value.trim();
		const mensaje = document.getElementById('mensaje').value.trim();

		try {
			const response = await fetch('/api/contacto', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ nombre, mensaje })
			});

			const data = await response.json();

			if (!response.ok) {
				respuesta.textContent = data.mensaje || 'Error al enviar el formulario.';
				return;
			}

			respuesta.textContent = data.mensaje;
			form.reset();
		} catch (error) {
			respuesta.textContent = 'No se pudo conectar con el servidor.';
		}
	});
}
