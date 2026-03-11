document.addEventListener("DOMContentLoaded", () => {

const input = document.getElementById("buscador-input");
const sugerencias = document.getElementById("sugerencias-busqueda");

if(!input) return;


/* normalizar texto */

function normalizar(texto){
  return texto.toLowerCase();
}


/* recoger posibles resultados */

function obtenerResultados(query){

query = normalizar(query);

return contenido.filter(e => {

const titulo = normalizar(e.titulo);
const autor = normalizar(e.autor);

const etiquetas = e.etiquetas ? e.etiquetas.join(" ").toLowerCase() : "";

return (
titulo.includes(query) ||
autor.includes(query) ||
etiquetas.includes(query)
);

});

}


/* sugerencias */

input.addEventListener("input", () => {

const query = input.value.trim();

sugerencias.innerHTML = "";

if(query.length < 2){
sugerencias.style.display = "none";
return;
}

const resultados = obtenerResultados(query).slice(0,5);

resultados.forEach(r => {

const div = document.createElement("div");

div.className = "sugerencia-item";

div.textContent = r.titulo;

div.addEventListener("click", () => {

window.location.href = "entrada.html?id=" + r.id;

});

sugerencias.appendChild(div);

});

sugerencias.style.display = resultados.length ? "flex" : "none";

});


/* enter → página de resultados */

input.addEventListener("keydown", (e) => {

if(e.key === "Enter"){

const query = input.value.trim();

if(query.length > 0){

window.location.href = "buscar.html?q=" + encodeURIComponent(query);

}

}

});


});
