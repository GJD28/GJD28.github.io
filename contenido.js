/* =========================
   FICHAS DE AUTORES
   ========================= */

const fichasAutores = {
  "Irene Salgado": {
    nombre: "Irene Salgado",
    foto: "autores/irene-salgado.png",
    bio: "Me emociono fácil con el cine y me implico sin demasiadas defensas. Soy bastante hooligan de Scorsese cuando decide bajar el volumen y dejar que el tiempo haga su trabajo, y me pierdo con gusto cada vez que Isabelle Huppert entra en un plano. Me encantan las películas que apetece volver a ver sin una razón clara y las que te hacen recomendar cosas como si fueran descubrimientos personales. Vivo el cine con entusiasmo, con curiosidad y con una alegría muy poco sofisticada. Escribo desde ahí, desde las ganas sinceras de compartir algo que me ha tocado."
  },

  "Germán Juncosa": {
    nombre: "Germán Juncosa",
    foto: "autores/german-juncosa2.png",
    bio: "Me muevo cómodo en el thriller, el terror y el cine de los noventa que apostaba por el entretenimiento adulto sin complejos. Vuelvo a menudo a películas como Seven, Heat o El silencio de los corderos, y no tengo ningún problema en disfrutar de cierto cine comercial cuando está bien hecho. Prefiero las películas con carácter, incluso con imperfecciones, a las que funcionan como un mecanismo demasiado pulido."
  }
};

/* =========================
   CONTENIDO
   ========================= */

const contenido = [
  {
    id: "entrevista-con-el-vampiro-1994",
    seccion: "criticas",
    titulo: "Entrevista con el vampiro",
    autor: "Álvaro Ríos",
    fecha_publicacion: "—",
    director: "Neil Jordan",
    año: 1994,
    nota: 2,
    destacada: false,
    imagen: {
      src: "ECEV.png",
      alt: "Entrevista con el vampiro (1994), dirigida por Neil Jordan"
    },
    entradilla: "Entrevista con el vampiro aspira a una solemnidad que no sabe sostener, obsesionada con su propia gravedad.",
    contenido: [
      {
        tipo: "texto",
        valor: "Advertencia al lector: lo que sigue asume la película ya vista."
      }
    ],
    etiquetas: []
  },

  {
    id: "the-game-1997",
    seccion: "criticas",
    titulo: "The Game",
    autor: "Germán Juncosa",
    fecha_publicacion: "20/02/2026",
    director: "David Fincher",
    año: 1997,
    nota: 3.5,
    destacada: false,
    imagen: {
      src: "the-game.png",
      alt: "The Game (1997), dirigida por David Fincher"
    },
    entradilla: "Un thriller que funciona mejor como experiencia sensorial que como mecanismo cerrado.",
    contenido: [
      {
        tipo: "texto",
        valor: "The Game es una película que siempre me ha funcionado mejor en el cuerpo que en la cabeza."
      }
    ],
    etiquetas: []
  }
];
