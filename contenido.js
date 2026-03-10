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
  },

  "Álvaro Ríos": {
    nombre: "Álvaro Ríos",
    foto: "alvaro-rios.png",
    bio: "Veo muchas más películas que cine, para mi desgracia. La costumbre de sentarme ante cualquier estreno tiene algo de disciplina mal entendida y algo de adicción voluntaria. Paso demasiadas horas atravesando páramos para justificar, de vez en cuando, un destello que lo compense todo.\n\nHabrá quien piense que cierta experiencia debería afinar el olfato y evitar tropiezos previsibles. Prefiero mantener esa puerta entreabierta. La posibilidad de que, en medio del ruido y la mediocridad industrial, aparezca una imagen verdadera sigue siendo motivo suficiente para volver a apagar las luces."
  },

 "Miguel Romero": {
    nombre: "Miguel Romero",
    foto: "miguel-romero.png",
    bio: "Me formé a base de videoclub, carátulas gastadas y decisiones a ciegas. Tengo una debilidad clara por el cine de los ochenta y los noventa.\n\nVoy al cine con ganas de que me muevan algo por dentro, da igual si es a base de una idea grande o de un tiroteo bien montado. Una película ligera y ruidosa puede ser tan seria como la que te pide silencio sepulcral y ceño fruncido. Si salgo del cine con una escena clavada en la cabeza o con el pulso un poco acelerado, para mí ya ha merecido la pena. El cine, para mí, va de disfrutar durante dos horas y, para eso, lo mismo me puede servir Michael Bay que Andrei Tarkovski."
  }
};


/* =========================
   CONTENIDO
   ========================= */

const contenido = [

  /* =========================
     THE GAME
     ========================= */

  {
    id: "the-game-1997",
    seccion: "criticas",
    titulo: "The Game",
    autor: "Germán Juncosa",
    fecha_publicacion: "20/02/2026",
    director: "David Fincher",
    año: 1997,
    nota: 3.5,
    destacada: true,
    imagen: {
      src: "the-game-nueva.png",
      alt: "The Game (1997), dirigida por David Fincher"
    },
    entradilla: "Un thriller que funciona mejor como experiencia sensorial que como mecanismo cerrado, sostenido por una atmósfera de inestabilidad muy bien dosificada.",
    contenido: [
      { tipo: "texto", valor: "The Game es una película que siempre me ha funcionado mejor en el cuerpo que en la cabeza. Cada vez que vuelvo a ella entro sin resistencia en su clima y me dejo arrastrar por una sensación de inestabilidad muy bien sostenida. Fincher sabe exactamente qué tipo de experiencia quiere provocar y la ejecuta con una seguridad que se nota desde los primeros minutos." },
      { tipo: "texto", valor: "Me interesa especialmente cómo la película se apoya en Nicholas Van Orton como figura central. Su rigidez, su forma de ocupar el espacio y de relacionarse con los demás construyen un punto de partida muy fértil. Ver cómo ese mundo ordenado empieza a deformarse resulta estimulante porque el proceso está bien dosificado. La película encuentra ahí su mayor virtud: convertir el control en una trampa narrativa y emocional." },
      { tipo: "texto", valor: "Durante buena parte del metraje, The Game maneja la tensión con mucha inteligencia. La acumulación de situaciones funciona, el desconcierto crece y el espectador comparte la pérdida de referencias sin sentirse manipulado. Es un thriller que confía en el recorrido y que entiende el valor de la atmósfera, del espacio y del ritmo. En ese tramo, Fincher está especialmente inspirado." },
      { tipo: "texto", valor: "Donde la película se me queda corta es en el cierre. El desenlace es eficaz y está bien armado, pero introduce una limpieza excesiva que enfría parte de lo que venía funcionando tan bien. Todo encaja, todo se explica y todo queda bajo control otra vez. El problema no es que tenga sentido, sino que reduce la incomodidad acumulada y deja una sensación más calculada de la que pedía el viaje." },
      { tipo: "texto", valor: "Aun así, The Game me sigue gustando mucho. No la considero una obra mayor ni una película redonda, pero sí un thriller muy sólido, con una identidad clara y con momentos de auténtica fuerza. Es una de esas películas que disfruto más mientras la estoy viendo que cuando empiezo a pensarla después, y eso, en su caso, juega a favor. Fincher sostiene el pulso durante casi todo el metraje y eso basta para que el viaje merezca la pena." }
    ],
    etiquetas: [
      "Michael Douglas",
      "David Fincher",
      "1997",
      "Thriller",
      "Harris Savides",
"Howard Shore",
"John Brancato",
"Michael Ferris",
"PolyGram Filmed Entertainment",
"Propaganda Films",
"Estados Unidos",
    ]
  },

  /* =========================
     ENTREVISTA CON EL VAMPIRO
     ========================= */

  {
    id: "entrevista-con-el-vampiro-1994",
    seccion: "criticas",
    titulo: "Entrevista con el vampiro",
    autor: "Álvaro Ríos",
    fecha_publicacion: "01/01/2026",
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
      { tipo: "texto", valor: "«La belleza es una forma de desesperación.»\n— Charles Baudelaire, El spleen de París" },
      { tipo: "texto", valor: "Entrevista con el vampiro aspira a una solemnidad que no sabe sostener. Neil Jordan dirige una película obsesionada con su propia gravedad, convencida de estar hablando de la eternidad, el deseo y la culpa, cuando en realidad se recrea en una imaginería gótica de escaparate, tan recargada como finalmente insignificante. El film se contempla a sí mismo con una seriedad impostada que nace del gesto reiterado y no de una verdadera densidad cinematográfica." },
      { tipo: "texto", valor: "La narración avanza como un lamento prolongado y estetizado. El paso del tiempo, la inmortalidad y el hastío aparecen envueltos en una melancolía ornamental que se repite sin transformación apreciable. La lentitud domina el ritmo y el conjunto se aplana en una misma cadencia emocional. La película se vuelve pesada por acumulación y acaba girando sobre su propio ensimismamiento." },
      { tipo: "texto", valor: "El problema central reside en las interpretaciones, especialmente en las más visibles. Tom Cruise encarna a Lestat desde un disfrute evidente de su propia presencia. La actuación se repliega sobre el actor y se convierte en una exhibición constante de carisma autosatisfecho. Cada gesto reclama atención y el personaje queda reducido a un escaparate de vanidad. El vampiro pierde cualquier espesor posible y se transforma en un ruido continuo, tan insistente como agotador." },
      { tipo: "texto", valor: "Brad Pitt ofrece un Louis sostenido en una languidez decorativa e inmediatamente fatigosa. El hastío del personaje se expresa como una pose elegante repetida hasta la extenuación. La experiencia de la inmortalidad se diluye en un abatimiento uniforme que fatiga al espectador mucho antes de que la película alcance su último tramo. La melancolía acaba convertida en gesto vacío." },
      { tipo: "texto", valor: "Antonio Banderas aparece como Armand y eleva el desajuste a un extremo difícil de justificar. Su interpretación roza lo grotesco por acumulación. Excesiva, afectada y completamente desbordada, convierte cada escena en un ejercicio de histrionismo que rompe cualquier continuidad tonal. Su presencia desactiva la atmósfera y empuja la película hacia un territorio cercano a la caricatura." },
      { tipo: "texto", valor: "El contraste con Kirsten Dunst resulta revelador. En medio de este desfile de egos y poses, su Claudia introduce una incomodidad tangible. Hay crueldad, rabia y frustración expresadas con una claridad que el resto del reparto apenas alcanza. Su trabajo deja en evidencia la superficialidad interpretativa que domina el conjunto." },
      { tipo: "texto", valor: "En el plano formal, la dirección se refugia en un academicismo lujoso y asfixiante. Decorados, iluminación y vestuario sostienen una belleza mortecina que se repite hasta perder cualquier capacidad de sugestión. La puesta en escena acompaña la autocomplacencia general y refuerza la sensación de estancamiento." },
      { tipo: "texto", valor: "La música de Elliot Goldenthal insiste en el dramatismo mediante un subrayado constante. La emoción se amplifica de forma mecánica y termina por vaciarse. La tristeza se convierte en un ruido de fondo persistente, más decorativo que significativo." },
      { tipo: "texto", valor: "Entrevista con el vampiro envejece mal por una cuestión de actitud. La película se mira con devoción y confunde importancia con profundidad. El artificio se impone y la verdad desaparece entre capas de afectación. Lo que queda es un objeto vistoso, solemnemente hueco y en buena medida olvidable." }
    ],
    etiquetas: [
      "Brad Pitt",
      "Tom Cruise",
      "Antonio Banderas",
      "Kirsten Dunst",
      "Neil Jordan",
      "1994",
      "Terror",
      "Vampiros",
       "Philippe Rousselot",
"Elliot Goldenthal",
"Anne Rice",
"Geffen Pictures",
"Warner Bros.",
"Estados Unidos",
    ]
  },

  /* =========================
     HA NACIDO UNA ESTRELLA
     ========================= */

  {
    id: "ha-nacido-una-estrella-2018",
    seccion: "criticas",
    titulo: "Ha nacido una estrella",
    autor: "Irene Salgado",
    fecha_publicacion: "26/02/2026",
    director: "Bradley Cooper",
    año: 2018,
    nota: 4,
    destacada: false,
    imagen: {
      src: "ha-nacido-una-estrella.png",
      alt: "Ha nacido una estrella (2018), dirigida por Bradley Cooper"
    },
    entradilla: "Una historia que vuelve sobre sí misma desde 1937 y que en 2018 encuentra una química y una emoción difíciles de olvidar.",
    contenido: [
      { tipo: "texto", valor: "Pensar en A Star Is Born significa entrar en una historia que lleva viva desde 1937 y que siempre ha tenido algo muy claro: el centro emocional está en ella. Desde la primera versión, aquella chica que soñaba con actuar ya ocupaba el corazón del relato. Con Judy Garland en 1954 eso se volvió casi doloroso de mirar, porque Judy Garland estaba interpretando a una estrella que sube mientras el hombre que ama cae, y el público conocía perfectamente las heridas que ella arrastraba en su propia vida. En 1976, Barbra Streisand hacía algo parecido desde otro lugar: una mujer con un talento inmenso, consciente de su poder, negociando su identidad artística en una industria que la quería moldear. Cada versión ha tenido una protagonista femenina que dialoga con su biografía pública. Eso le da a la historia una capa extra de verdad." },
      { tipo: "texto", valor: "En 2018 ocurre lo mismo con Lady Gaga. Ella ya era una estrella mundial cuando aceptó el papel de Ally, y la película juega con esa imagen. Al principio la vemos casi escondida, maquillada de más, cantando en un bar pequeño. Luego asistimos a su transformación, a ese momento en el que empieza a ocupar escenarios enormes y a tomar decisiones sobre su imagen y su sonido. Esa evolución está escrita con mucho cuidado. El guion, firmado por Bradley Cooper junto a Eric Roth y Will Fetters, acompaña cada paso sin prisa y deja que el vínculo con Jackson crezca a base de miradas, silencios y conversaciones cotidianas." },
      { tipo: "texto", valor: "La dirección de Bradley Cooper me parece valiente y muy implicada. Se nota que está dentro de la historia hasta el fondo. Rueda los conciertos con una energía casi documental. Coloca la cámara a la altura de los personajes en las escenas íntimas. Permite que las canciones se desarrollen completas, sin cortarlas en cuanto aparece el estribillo. Esa decisión marca mucho la experiencia. Cuando Ally canta por primera vez “Shallow” en el escenario grande, el momento crece de manera progresiva, con una construcción que pone la piel de gallina." },
      { tipo: "texto", valor: "Y ya que hablamos de canciones, aquí la música es columna vertebral. La banda sonora fue compuesta en colaboración por Lady Gaga, Bradley Cooper y varios productores y compositores como Mark Ronson, Andrew Wyatt o Anthony Rossomando. Cada tema está integrado en la historia. “Always Remember Us This Way” acompaña uno de los momentos más íntimos de la pareja. “I’ll Never Love Again” cierra la película con una carga emocional enorme. Y “Shallow”, claro, se convirtió en fenómeno global y ganó el Oscar a mejor canción original. Yo la escucho y todavía me emociono." },
      { tipo: "texto", valor: "La relación entre Jackson y Ally se desarrolla con una naturalidad que me convence mucho. Él aparece como una estrella cansada, arrastrando adicciones y una relación complicada con su hermano. Ella es talento en bruto, con inseguridades muy humanas. La película dedica tiempo a su enamoramiento, a sus bromas privadas, a esa escena en la cocina que parece pequeña y acaba siendo fundamental. Luego llega el choque entre éxito y fragilidad. El orgullo herido de él, la presión mediática, la incomodidad en actos públicos. Todo avanza con una lógica dolorosa." },
      { tipo: "texto", valor: "Me interesa mucho cómo esta versión recoge el corazón melodramático de la original de 1937, mantiene la tradición de protagonistas femeninas que se parecen mucho a las mujeres que las interpretan y sitúa la música como espacio de gloria y de caída, tal como ya había hecho la versión de 1976. La diferencia está en la química. Entre Bradley Cooper y Lady Gaga hay una conexión que atraviesa la pantalla. Se escuchan de verdad. Se admiran. Se necesitan." },
      { tipo: "texto", valor: "Yo adoro todas las versiones. La de 1937 me parece brillante en su sencillez. La de Judy Garland me conmueve profundamente. La de Barbra Streisand y Kris Kristofferson me encanta por su energía y por ese giro hacia la música que cambió el rumbo de la historia. Y aun así, cuando pienso en cuál me toca más hondo, vuelvo a la de 2018." },
      { tipo: "texto", valor: "Salgo de ella con el corazón un poco apretado y con ganas de volver a escuchar la banda sonora entera. Y eso, para mí, significa que la película ha hecho su trabajo." }
    ],
    etiquetas: [
      "Matthew Libatique",
"Lady Gaga",
"Bradley Cooper",
"Eric Roth",
"Will Fetters",
"Warner Bros.",
"Live Nation Productions",
"Estados Unidos",
    ]
  },

   /* =========================
   LOS ODIOSOS OCHO
   ========================= */

{
  id: "los-odiosos-ocho-2015",
  seccion: "criticas",
  titulo: "Los odiosos ocho",
  autor: "Miguel Romero",
  fecha_publicacion: "10/03/2026",
  director: "Quentin Tarantino",
  año: 2015,
  nota: 4,
  destacada: false,
  imagen: {
    src: "los-odiosos-ocho.png",
    alt: "Los odiosos ocho (2015), dirigida por Quentin Tarantino"
  },
  entradilla: "Tarantino encierra a ocho personajes en una cabaña durante una tormenta de nieve y convierte el espacio en una ratonera de sospechas, violencia y mala baba.",
  contenido: [

{ tipo: "texto", valor: "Hay películas que te entran como una bala y otras que te meten en un sitio raro y te dicen: siéntate aquí y mira lo que pasa. Los odiosos ocho juega a eso. Tarantino planta una cabaña en mitad de una tormenta de nieve, mete dentro a un puñado de tipos que no se fían ni de su sombra y se dedica a ver cómo se van midiendo. Desde el primer rato uno sabe perfectamente que allí dentro alguien va a acabar muy mal." },

{ tipo: "texto", valor: "La excusa es sencilla y muy de western clásico. Un cazarrecompensas, Kurt Russell, lleva a una prisionera que vale dinero, interpretada por Jennifer Jason Leigh, hasta el pueblo más cercano. Por el camino se suman otros viajeros y todos terminan refugiados en una mercería perdida mientras fuera cae una nevada que parece que el cielo esté tirando sacos de harina. Dentro empieza el verdadero espectáculo: miradas torcidas, preguntas con mala baba y silencios que se te meten hasta por la raja del culo." },

{ tipo: "texto", valor: "Cuando Samuel L. Jackson se presenta por la puerta la cosa sube su nivel de malrollismo. Su personaje entra como un tipo que trae historias en la mochila y ninguna es bonita. Cada vez que abre la boca la mesa se convierte en un campo de minas. Tarantino deja que los personajes se suelten hostias verbales con calma, sabiendo que cada frase añade gasolina al incendio." },

{ tipo: "texto", valor: "La cabaña funciona como una ratonera. Un espacio pequeño, lleno de esquinas, con gente escuchando desde el otro lado de la habitación. Tarantino mueve a los personajes como si estuvieran en un tablero: uno se levanta, otro se acerca a la puerta, alguien se queda quieto observando. Todo está colocado para que la tensión circule por el aire." },

{ tipo: "texto", valor: "Y en medio de todo eso aparece Jennifer Jason Leigh, que aquí está a un nivel escandaloso. Su Daisy Domergue es una fiera desatada, una presencia incómoda que sonríe justo cuando la situación se pone más fea. Cada gesto suyo tiene mala leche y personalidad. Es de esas interpretaciones que se quedan pegadas." },

{ tipo: "texto", valor: "El reparto se mueve dentro de ese ambiente como si todos supieran que la cosa puede torcerse en cualquier momento. Walton Goggins tiene ese aire de tipo que parece simpático hasta que deja de serlo. Y Tim Roth parece ese tío que te habla sin faltas de ortografía con su polo de Ralph Lauren pero que, a la que te descuidas, te calza una hostia sin que la veas venir." },

{ tipo: "texto", valor: "Tarantino además se da el gustazo de rodar esto en 70 mm, como si estuviera filmando una epopeya gigantesca… para contar una historia que ocurre casi entera dentro de una habitación. Primero te abre el paisaje nevado como si fuera una postal enorme y luego te encierra en la cabaña con esta panda." },

{ tipo: "texto", valor: "Lo que más me gusta de la película es la paciencia que tiene. Deja que los personajes se den la chapa unos a otros, que se cuenten batallitas, mientras las sospechas botan y rebotan y el ambiente se va convirtiendo en aire que envenena los pulmones. Cuando la cosa termina saltando por los aires, el espectáculo entra en ese terreno donde Tarantino mezcla violencia, sarcasmo y mala baba con total naturalidad." },

{ tipo: "texto", valor: "Por eso es mi favorita suya. Tiene algo muy concreto: ocho personajes encerrados, todos con algo que ocultar, y un director disfrutando mientras los deja hablar, provocarse y ponerse trampas unos a otros. Es como sentarte en una mesa donde sabes que en cualquier momento alguien va a sacar una pistola." },

{ tipo: "texto", valor: "La oferta de la semana: dos películas donde un grupo de personajes queda atrapado en un espacio cerrado y la tensión empieza a subir poco a poco hasta que todo revienta: La cosa (John Carpenter, 1982) y Cube (Vincenzo Natali, 1997)." }

  ],

  etiquetas: [
    "Quentin Tarantino",
    "Kurt Russell",
    "Jennifer Jason Leigh",
    "Samuel L. Jackson",
    "Walton Goggins",
    "Tim Roth",
    "Michael Madsen",
    "Demián Bichir",
    "Bruce Dern",
    "Ennio Morricone",
    "Robert Richardson",
    "2015",
    "Western",
    "Thriller"
    
  ]
},

     /* =========================
     EL APARTAMENTO
     ========================= */

  {
    id: "el-apartamento-1960",
    seccion: "criticas",
    titulo: "El apartamento",
    autor: "Dolores Aranda",
    fecha_publicacion: "11/03/2026",
    director: "Billy Wilder",
    año: 1960,
    nota: 4.5,
    destacada: true,
    imagen: {
      src: "el-apartamento.png",
      alt: "El apartamento (1960), dirigida por Billy Wilder"
    },
    entradilla: "Billy Wilder convierte una comedia de oficina en una historia sobre la dignidad personal, donde el humor y la melancolía conviven con una naturalidad extraordinaria.",
    contenido: [

{ tipo: "texto", valor: "Billy Wilder abre la película con una de esas imágenes que contienen un mundo entero: un océano de escritorios idénticos extendiéndose hasta el horizonte de la oficina. Filas interminables de hombres inclinados sobre papeles, máquinas de escribir y lámparas de escritorio. El anonimato adquiere forma física desde el primer plano. En medio de ese paisaje aparece C.C. Baxter, un empleado más entre miles, un hombre discreto cuya ambición cabe dentro de un gesto sencillo: ascender un poco en la empresa." },

{ tipo: "texto", valor: "La vida de Baxter encuentra su peculiar oportunidad cuando descubre que su pequeño apartamento puede convertirse en moneda de cambio. Algunos ejecutivos de la compañía necesitan un lugar discreto donde llevar a sus amantes, y Baxter decide prestarles las llaves. El sistema funciona con una lógica casi administrativa. Cada cita nocturna acerca un poco más la posibilidad de un ascenso. La comedia empieza ahí, en esa economía moral donde la cortesía y la humillación conviven con una naturalidad inquietante." },

{ tipo: "texto", valor: "Wilder organiza el relato con una claridad admirable. Cada escena añade una capa a la vida de Baxter y revela un mundo laboral regido por jerarquías invisibles y favores privados. El apartamento funciona como espacio físico y como metáfora. Allí se concentran las aspiraciones, las decepciones y la fragilidad de unos personajes que intentan mantener cierta dignidad en un entorno donde el éxito suele exigir pequeñas renuncias." },

{ tipo: "texto", valor: "La dirección de Billy Wilder, uno de los grandes narradores del cine estadounidense y responsable también de guiones tan precisos como los de Sunset Boulevard (El crepúsculo de los dioses, 1950) o Double Indemnity (Perdición, 1944), encuentra aquí un equilibrio perfecto entre ironía y compasión. Wilder observa a sus personajes con una lucidez implacable y al mismo tiempo les concede una humanidad profunda. La cámara se mantiene cercana, atenta a los gestos mínimos, a los silencios que revelan más que los diálogos." },

{ tipo: "texto", valor: "El guion, firmado por el propio Wilder junto a I. A. L. Diamond, colaborador habitual del director y pieza clave en su etapa final, avanza con una precisión admirable. Las escenas encajan unas con otras con una naturalidad que esconde una estructura muy calculada. El humor surge de la observación y se transforma lentamente en una melancolía que envuelve toda la película." },

{ tipo: "texto", valor: "El reparto sostiene esa escritura con una naturalidad extraordinaria. Jack Lemmon compone a Baxter desde una mezcla de ingenuidad y tristeza que define al personaje con apenas un gesto. Lemmon logra que el espectador reconozca la vulnerabilidad de ese hombre que intenta agradar a todo el mundo. Frente a él aparece Shirley MacLaine, que interpreta a Fran Kubelik con una mezcla de encanto y cansancio moral que da profundidad a cada escena. La presencia de Fred MacMurray como el ejecutivo Sheldrake introduce una ambigüedad inquietante: un hombre educado, elegante y perfectamente adaptado a un sistema que premia la indiferencia." },

{ tipo: "texto", valor: "La película nació en un momento en que Hollywood empezaba a mirar con más atención la vida cotidiana de los adultos. Wilder y Diamond encontraron la inspiración inicial en una situación secundaria de Brief Encounter (Breve encuentro, 1945), la película de David Lean, donde un personaje menciona el préstamo de un apartamento para encuentros amorosos. Wilder vio en ese detalle una historia completa y la desarrolló hasta convertirla en el núcleo de la película." },

{ tipo: "texto", valor: "La música de Adolph Deutsch acompaña el relato con una ligereza melancólica que refuerza el tono general. El tema principal aparece con discreción, como un eco emocional que acompaña a los personajes sin imponerse. Todo en la película parece avanzar con ese mismo ritmo: un movimiento suave que va revelando poco a poco el peso de las decisiones." },

{ tipo: "texto", valor: "The Apartment alcanza su mayor fuerza en la forma en que une comedia y tristeza dentro del mismo gesto. Wilder construye una historia donde el humor ilumina la soledad y donde la ternura aparece en los lugares menos previsibles. El relato encuentra su sentido en el momento en que Baxter comprende que la dignidad personal no admite alquileres temporales." },

{ tipo: "texto", valor: "El final llega con una sencillez admirable. Los personajes se sientan frente a una mesa, reparten unas cartas y el mundo vuelve a ordenarse durante un instante. Wilder encuentra ahí la forma perfecta de cerrar la historia. La emoción aparece con naturalidad y permanece." }

    ],

    etiquetas: [
      "Billy Wilder",
      "Jack Lemmon",
      "Shirley MacLaine",
      "Fred MacMurray",
      "I. A. L. Diamond",
      "Joseph LaShelle",
      "Adolph Deutsch",
      "1960",
      "Comedia",
      "Romance",
      "The Mirisch Company",
      "United Artists",
      "Estados Unidos"
    ]
  },

  /* =========================
     UN LUGAR TRANQUILO
     ========================= */

  {
    id: "un-lugar-tranquilo-saga",
    seccion: "articulos",
    titulo: "Un lugar tranquilo: cuando el silencio se convierte en franquicia",
    autor: "Miguel Romero",
    fecha_publicacion: "26/02/2026",
    destacada: false,
    imagen: {
      src: "un-lugar-tranquilo.png",
      alt: "Un lugar tranquilo, análisis de la saga"
    },
    entradilla: "Tres películas, una regla sencilla y una franquicia que convierte el silencio en arma narrativa.",
    contenido: [
      { tipo: "texto", valor: "Hay ideas que parecen pequeñas y luego te revientan en la cara. Lo de Un lugar tranquilo era casi un chiste contado en serio: criaturas que cazan por el oído y un mundo donde hacer ruido equivale a firmar tu sentencia. Con eso te montan una saga entera. Y lo más fuerte es que durante bastante rato funciona como un tiro." },
      { tipo: "texto", valor: "La primera te mete en situación sin darte margen. Una familia que vive midiendo cada paso, caminando descalza por senderos de arena, comiendo en silencio como si estuvieran en una biblioteca con francotiradores. Cada objeto cotidiano se convierte en una amenaza. Un juguete, un clavo, una puerta mal cerrada. La tensión nace de cosas muy simples y muy reconocibles. Aquí no hay discursos largos ni mapas del mundo pegados en la pared. Hay supervivencia doméstica. Hay padres haciendo cuentas mentales todo el rato. Hay niños que entienden que un error no se arregla con una bronca, se paga caro." },
      { tipo: "texto", valor: "Y cuando la peli aprieta, aprieta de verdad. Hay momentos en los que estás pensando: a ver quién es el siguiente que tira algo al suelo y monta más jaleo que un concierto de Obús. Ese tipo de tensión tan concreta, tan física, es lo que le dio identidad al invento. No era solo el monstruo. Era la norma." },
      { tipo: "texto", valor: "Luego llega Un lugar tranquilo 2 y la cosa se mueve. Ya no estamos solo en la casa, ya no vale con conocer cada crujido del suelo. El mundo se abre y con él llegan más caras, más dinámicas y más decisiones que tomar. Aquí la película juega a cruzar líneas narrativas, a montar secuencias paralelas y a darle más protagonismo a la hija, que crece como personaje y como motor de la historia. La idea sigue siendo la misma, pero el tablero es más grande y las reglas pesan de otra forma." },
      { tipo: "texto", valor: "Eso tiene dos efectos. Por un lado, gana épica. Hay escenas que están medidas al milímetro y que demuestran que el concepto todavía tiene gasolina. Por otro, al ampliar el foco también se ven más las costuras. Cuando el mundo se explica demasiado, la amenaza pierde un poco de misterio. Cuando se insiste en ciertos detalles, la tensión cambia de sitio. Ya no es solo el plato que cae, es la logística de sobrevivir en comunidad." },
      { tipo: "texto", valor: "Y luego aparece Día Uno, que decide meterse en el momento en el que todo se va al carajo. Aquí no hay senderos de arena ni rutinas aprendidas. Aquí hay ciudad, hay ruido por todas partes y hay gente que todavía no sabe que el sonido es el enemigo. Ese arranque tiene una potencia brutal porque mezcla caos y desconcierto. Ves a la gente reaccionar tarde, mal y con pánico, y entiendes que nadie estaba preparado para algo así." },
      { tipo: "texto", valor: "La diferencia es clara: en la primera se sobrevive a base de disciplina, en la segunda se intenta reorganizar el mundo, y en la tercera se asiste al derrumbe. Las tres se pisan y se complementan. Una te da intimidad, otra te da expansión y la otra te da impacto inicial. Cuando la saga funciona, lo hace porque vuelve siempre a lo básico: una decisión, un ruido, una consecuencia." },
      { tipo: "texto", valor: "También hay momentos en los que el concepto se estira más de la cuenta. Cada vez que la historia necesita que alguien haga algo arriesgado, el espectador afila el colmillo. El equilibrio entre tensión y conveniencia es delicado. A veces la jugada sale redonda y otras se nota la mano del guion empujando. Eso forma parte del juego cuando conviertes una idea tan cerrada en franquicia." },
      { tipo: "texto", valor: "Aun así, hay algo muy valioso en esta trilogía: consiguió que una sala de cine estuviera en silencio absoluto por puro miedo. No por respeto, no por educación. Por miedo. Eso no pasa todos los días. Y esa sensación, esa incomodidad compartida, es oro puro para el género." },
      { tipo: "texto", valor: "En conjunto, Un lugar tranquilo como saga es un experimento comercial que salió mejor de lo que muchos esperaban. Tiene picos muy altos, algún tramo irregular y una identidad clara que la distingue dentro del terror mainstream reciente. No inventa el silencio, pero lo convierte en arma y en amenaza constante." },
      { tipo: "texto", valor: "La oferta de la semana: tres películas que también convierten una regla sencilla en el motor de todo y exprimen esa norma hasta el final: La noche de los muertos vivientes (George A. Romero, 1968) y 28 días después (Danny Boyle, 2002). Dos formas distintas de levantar un mundo nuevo a partir de una amenaza clara y reconocible." },
      { tipo: "texto", valor: "Si hay que ponerle nota al conjunto como experiencia de saga, se queda en un 3,5 sobre 5. Tiene momentos que juegan en primera división y otros que caminan por la cuerda floja, pero el balance final es más que digno." }
    ],
    etiquetas: [
  "John Krasinski",
  "Emily Blunt",
  "Millicent Simmonds",
  "Noah Jupe",
  "Cillian Murphy",
  "Lupita Nyong'o",
  "Djimon Hounsou",
"2018",
       "2020",
       "2024",
  "Charlotte Bruus Christensen",
  "Polly Morgan",
  "Pat Scola",
"Saga",
  "Marco Beltrami",
  "Alexis Grapsas",

  "Scott Beck",
  "Bryan Woods",
  "Michael Sarnoski",

  "Platinum Dunes",
  "Sunday Night Productions",

  "Estados Unidos",

  "Terror",
  "Ciencia ficción",
  "Thriller"
]
   
  }

];

/* =========================
   SISTEMA DE TARJETAS
   ========================= */

function crearTarjeta(e, modo = "normal") {

  let bannerHTML = "";

  if (modo === "inicio" || modo === "autor") {

    let tipoClase = "";
    let tipoTexto = "";

    if (e.seccion === "criticas") {
      tipoClase = "tipo-critica";
      tipoTexto = "CRÍTICA";
    } else if (e.seccion === "articulos") {
      tipoClase = "tipo-articulo";
      tipoTexto = "ARTÍCULO";
    } else if (e.seccion === "rumores") {
      tipoClase = "tipo-rumor";
      tipoTexto = "RUMOR";
    }

    bannerHTML = `
      <div class="miniatura-banner ${tipoClase}">
        ${tipoTexto}
      </div>
    `;
  }

  const item = document.createElement("div");
  item.className = "carousel-item";

  let metaHTML = "";

  if (modo !== "autor") {
    metaHTML = `<div class="meta">${e.autor}</div>`;
  }

  item.innerHTML = `
    <a href="entrada.html?id=${e.id}">
      <div class="miniatura-wrapper">
        <img src="${e.imagen.src}" alt="${e.imagen.alt}">
        ${bannerHTML}
      </div>
      <h3>${e.titulo}</h3>
      ${metaHTML}
    </a>
  `;

  return item;
}
