// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Estado
let amigos = [];

// Referencias
const input = document.getElementById('amigo');
const listaAmigos = document.getElementById('listaAmigos');
const resultado = document.getElementById('resultado');

// Reutilizable: asigna texto a un selector (como en tu juego anterior)
function asignarTextoElemento(selector, texto) {
  const elemento = document.querySelector(selector);
  if (elemento) elemento.innerHTML = texto;
  return;
}

// Limpia el input
function limpiarCaja() {
  input.value = '';
}

// Pinta la lista de amigos
function renderLista() {
  listaAmigos.innerHTML = '';
  amigos.forEach((nombre, i) => {
    const li = document.createElement('li');
    li.textContent = `${i + 1}. ${nombre}`;
    listaAmigos.appendChild(li);
  });
}

// Muestra un único mensaje en el <ul id="resultado">
function mostrarMensaje(texto) {
  resultado.innerHTML = '';
  if (!texto) return;
  const li = document.createElement('li');
  li.textContent = texto;
  resultado.appendChild(li);
}

// Añadir amigo (evita vacíos)
function agregarAmigo() {
  const nombre = input.value.trim();

  if (nombre === '') {
    mostrarMensaje('No se permite añadir amigos vacíos.');
    input.focus();
    return;
  }

  amigos.push(nombre);
  renderLista();
  mostrarMensaje('Amigo añadido correctamente.');
  limpiarCaja();
  input.focus();
}

// Sortear amigo al azar
function sortearAmigo() {
  if (amigos.length === 0) {
    mostrarMensaje('Primero añade al menos un amigo para sortear.');
    input.focus();
    return;
  }

  const indice = Math.floor(Math.random() * amigos.length);
  const elegido = amigos[indice];
  mostrarMensaje(`🎉 El amigo secreto es: ${elegido}`);
}

// Condiciones iniciales (mismo patrón que tu ejemplo)
function condicionesIniciales() {
  asignarTextoElemento('.main-title', 'Amigo Secreto');
  mostrarMensaje('');
  amigos = [];
  renderLista();
  limpiarCaja();
  console.log('Listo para jugar');
}

// (Opcional) Reiniciar si agregas un botón con id="reiniciar"
function reiniciarJuego() {
  condicionesIniciales();
  const btn = document.querySelector('#reiniciar');
  if (btn) btn.setAttribute('disabled', 'true');
}

// Enter para añadir rápido
input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') agregarAmigo();
});

// Exponer funciones para los botones inline del HTML
window.agregarAmigo = agregarAmigo;
window.sortearAmigo = sortearAmigo;
window.reiniciarJuego = reiniciarJuego;

// Iniciar
condicionesIniciales();
