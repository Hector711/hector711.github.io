const formulario = document.getElementById("formulario");
const resultado = document.getElementById("resultado");

formulario.addEventListener("submit", function (event) {
  event.preventDefault(); // Evita que el formulario se envíe

  const nombre = document.getElementById("nombre").value;
  const email = document.getElementById("email").value;
  const mensaje = document.getElementById("mensaje").value;

  // Aquí puedes realizar acciones con los datos, por ejemplo, mostrarlos en la página
  resultado.innerHTML = `
        <p>Nombre: ${nombre}</p>
        <p>Correo Electrónico: ${email}</p>
        <p>Mensaje: ${mensaje}</p>
      `;
});

