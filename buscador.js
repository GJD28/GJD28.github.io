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


/* ENTER → comportamiento centralizado */

input.addEventListener("keydown", (e) => {

  if(e.key === "Enter"){

    const query = input.value.trim();

    if(query.length === 0) return;

    // 🔍 buscar etiqueta primero
    function buscarEtiqueta(query){

      const q = normalizar(query);

      for(const entrada of contenido){

        if(!entrada.etiquetas) continue;

        for(const tag of entrada.etiquetas){

          if(normalizar(tag).includes(q)){
            return tag;
          }

        }

      }

      return null;
    }

    const etiquetaEncontrada = buscarEtiqueta(query);

    if(etiquetaEncontrada){

      const tagURL = etiquetaEncontrada.toLowerCase().replace(/\s+/g,"-");

      window.location.href = "etiqueta.html?tag=" + encodeURIComponent(tagURL);

    }else{

      const resultados = obtenerResultados(query);

      if(resultados.length > 0){

        window.location.href = "entrada.html?id=" + resultados[0].id;

      }else{

        const tag = query.toLowerCase().replace(/\s+/g,"-");

        window.location.href = "etiqueta.html?tag=" + encodeURIComponent(tag);

      }

    }

  }

});

});
