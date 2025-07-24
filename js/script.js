function enviarFormulario(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const nombre = formData.get("nombre");
  
  alert(`Gracias, ${nombre}! Tu solicitud fue enviada. Pronto me contactaré contigo.`);
  e.target.reset();
}