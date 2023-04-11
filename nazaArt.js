var checkbox = document.getElementById("habilitar");
var texto = document.getElementById("texto");

checkbox.addEventListener('change', function() {
  if (this.checked) {
    texto.disabled = false;
  } else {
    texto.disabled = true;
  }
});