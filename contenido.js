/* =========================
   FICHAS DE AUTORES
   ========================= */

const fichasAutores = {
  "Irene Salgado": {
    nombre: "Irene Salgado",
    foto: "irene-salgado.png",
    bio: "Me emociono fácil con el cine y me implico sin demasiadas defensas. Soy bastante hooligan de Scorsese cuando decide bajar el volumen y dejar que el tiempo haga su trabajo, y me pierdo con gusto cada vez que Isabelle Huppert entra en un plano. Me encantan las películas que apetece volver a ver sin una razón clara y las que te hacen recomendar cosas como si fueran descubrimientos personales. Vivo el cine con entusiasmo, con curiosidad y con una alegría muy poco sofisticada. Escribo desde ahí, desde las ganas sinceras de compartir algo que me ha tocado."
  },

  "Germán Juncosa": {
    nombre: "Germán Juncosa",
    foto: "german-juncosa2.png",
    bio: "Me muevo cómodo en el thriller, el terror y el cine de los noventa que apostaba por el entretenimiento adulto sin complejos. Vuelvo a menudo a películas como Seven, Heat o El silencio de los corderos, y no tengo ningún problema en disfrutar de cierto cine comercial cuando está bien hecho. Prefiero las películas con carácter, incluso con imperfecciones, a las que funcionan como un mecanismo demasiado pulido."
  }
};

/* =========================
   CONTENIDO
   ========================= */

const contenido = [
  {
    id: "the-game-1997",
    seccion: "criticas",
    titulo: "The Game",
    autor: "Germán Juncosa",
    fecha_publicacion: "20/02/2026",
    director: "David Fincher",
    año: 1997,
    nota: 3.5,
    destacada: true, // 👈 ESTO GARANTIZA CONTENIDO EN INICIO
    imagen: {
      src: "the-game-nueva.png",
      alt: "The Game (1997), dirigida por David Fincher"
    },
    entradilla: "Un thriller que funciona mejor como experiencia sensorial que como mecanismo cerrado.",
    contenido: [
      {
        tipo: "texto",
        valor: "The Game es una película que siempre me ha funcionado mejor en el cuerpo que en la cabeza. Cada vez que vuelvo a ella entro sin resistencia en su clima y me dejo arrastrar por una sensación de inestabilidad muy bien sostenida. Fincher sabe exactamente qué tipo de experiencia quiere provocar y la ejecuta con una seguridad que se nota desde los primeros minutos."
      },
      {
        tipo: "texto",
        valor: "Me interesa especialmente cómo la película se apoya en Nicholas Van Orton como figura central. Su rigidez, su forma de ocupar el espacio y de relacionarse con los demás construyen un punto de partida muy fértil. Ver cómo ese mundo ordenado empieza a deformarse resulta estimulante porque el proceso está bien dosificado. La película encuentra ahí su mayor virtud: convertir el control en una trampa narrativa y emocional."
      },
      {
        tipo: "texto",
        valor: "Durante buena parte del metraje, The Game maneja la tensión con mucha inteligencia. La acumulación de situaciones funciona, el desconcierto crece y el espectador comparte la pérdida de referencias sin sentirse manipulado. Es un thriller que confía en el recorrido y que entiende el valor de la atmósfera, del espacio y del ritmo. En ese tramo, Fincher está especialmente inspirado."
      },
      {
        tipo: "texto",
        valor: "Donde la película se me queda corta es en el cierre. El desenlace es eficaz y está bien armado, pero introduce una limpieza excesiva que enfría parte de lo que venía funcionando tan bien. Todo encaja, todo se explica y todo queda bajo control otra vez. El problema no es que tenga sentido, sino que reduce la incomodidad acumulada y deja una sensación más calculada de la que pedía el viaje."
      },
      {
        tipo: "texto",
        valor: "Aun así, The Game me sigue gustando mucho. No la considero una obra mayor ni una película redonda, pero sí un thriller muy sólido, con una identidad clara y con momentos de auténtica fuerza. Es una de esas películas que disfruto más mientras la estoy viendo que cuando empiezo a pensarla después, y eso, en su caso, juega a favor. Fincher sostiene el pulso durante casi todo el metraje y eso basta para que el viaje merezca la pena."
      }
    ],
    etiquetas: [
      "Michael Douglas",
      "David Fincher",
      "1997",
      "Thriller",
      "Años 90"
    ]
  },

  {
    id: "entrevista-con-el-vampiro-1994",
    seccion: "criticas",
    titulo: "Entrevista con el vampiro",
    autor: "Álvaro Ríos",
    fecha_publicacion: "01/01/2026", // 👈 FECHA REAL PARA QUE APAREZCA
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
      { tipo: "texto", valor: "Advertencia al lector: lo que sigue asume la película ya vista." },
      { tipo: "texto", valor: "«La belleza es una forma de desesperación.» — Charles Baudelaire" },
      { tipo: "texto", valor: "Entrevista con el vampiro aspira a una solemnidad que no sabe sostener..." },
      { tipo: "texto", valor: "La narración avanza como un lamento prolongado y estetizado..." },
      { tipo: "texto", valor: "El problema central reside en las interpretaciones..." },
      { tipo: "texto", valor: "Brad Pitt ofrece un Louis sostenido en una languidez decorativa..." },
      { tipo: "texto", valor: "Antonio Banderas aparece como Armand..." },
      { tipo: "texto", valor: "El contraste con Kirsten Dunst resulta revelador..." },
      { tipo: "texto", valor: "En el plano formal, la dirección se refugia en un academicismo..." },
      { tipo: "texto", valor: "La música de Elliot Goldenthal insiste en el dramatismo..." },
      { tipo: "texto", valor: "Entrevista con el vampiro envejece mal por una cuestión de actitud." }
    ],
    etiquetas: [
      "Brad Pitt",
      "Tom Cruise",
      "Antonio Banderas",
      "Neil Jordan",
      "1994",
      "Terror",
      "Vampiros"
    ]
  }
];
