document.addEventListener("DOMContentLoaded", () => {

const input = document.getElementById("buscador-input");
const sugerencias = document.getElementById("sugerencias-busqueda");

if(!input) return;


/* normalizar */

function normalizar(texto){
  return texto.toLowerCase();
}


/* 🔹 obtener TODAS las sugerencias (etiquetas + títulos) */

function obtenerSugerencias(query){

  const q = normalizar(query);

  const mapa = new Map();

  contenido.forEach(e => {

    // títulos
    if(normalizar(e.titulo).includes(q)){
      mapa.set(e.titulo, { tipo:"entrada", valor:e });
    }

    // etiquetas
    if(e.etiquetas){
      e.etiquetas.forEach(tag => {
        if(normalizar(tag).includes(q)){
          mapa.set(tag, { tipo:"etiqueta", valor:tag });
        }
      });
    }

  });

  // convertir a array y ordenar alfabéticamente
  return Array.from(mapa.entries())
    .sort((a,b) => a[0].localeCompare(b[0]));
}


/* 🔹 SUGERENCIAS EN TIEMPO REAL */

input.addEventListener("input", () => {

  const query = input.value.trim();

  sugerencias.innerHTML = "";

  if(query.length < 2){
    sugerencias.style.display = "none";
    return;
  }

  const resultados = obtenerSugerencias(query).slice(0,5);

  resultados.forEach(([texto, data]) => {

    const div = document.createElement("div");
    div.className = "sugerencia-item";
    div.textContent = texto;

    div.addEventListener("click", () => {

      if(data.tipo === "entrada"){
        window.location.href = "entrada.html?id=" + data.valor.id;
      }else{
        const tagURL = data.valor.toLowerCase().replace(/\s+/g,"-");
        window.location.href = "etiqueta.html?tag=" + encodeURIComponent(tagURL);
      }

    });

    sugerencias.appendChild(div);

  });

  sugerencias.style.display = resultados.length ? "flex" : "none";

});


/* 🔹 ENTER */

input.addEventListener("keydown", (e) => {

  if(e.key === "Enter"){

    const query = input.value.trim();

    if(query.length === 0) return;

    const sugerenciasLista = obtenerSugerencias(query);

    // buscar coincidencia exacta
    const match = sugerenciasLista.find(([texto]) =>
      normalizar(texto) === normalizar(query)
    );

    if(match){

      const [texto, data] = match;

      if(data.tipo === "entrada"){
        window.location.href = "entrada.html?id=" + data.valor.id;
      }else{
        const tagURL = data.valor.toLowerCase().replace(/\s+/g,"-");
        window.location.href = "etiqueta.html?tag=" + encodeURIComponent(tagURL);
      }

    }else{

      // no hay coincidencia → no resultados
      window.location.href = "no-resultados.html?q=" + encodeURIComponent(query);

    }

  }

});

});
