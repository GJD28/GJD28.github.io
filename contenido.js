/* =========================
   FICHAS DE AUTORES
   ========================= */

const fichasAutores = {
  "Irene Salgado": {
    nombre: "Irene Salgado",
    foto: "irene-salgado.png",
    bio: "Me emociono fácil con el cine y me implico sin demasiadas defensas. Soy bastante hooligan de Scorsese cuando decide bajar el volumen y dejar que el tiempo haga su trabajo, y me pierdo con gusto cada vez que Isabelle Huppert entra en un plano. Me encantan las películas que apetece volver a ver sin una razón clara y las que te hacen recomendar cosas como si fueran descubrimientos personales. Vivo el cine con entusiasmo, con curiosidad y con una alegría muy poco sofisticada. Escribo desde ahí, desde las ganas sinceras de compartir algo que me ha tocado."
  },

 "Paula Elizábal": {
  nombre: "Paula Elizábal",
  foto: "paula-elizabal.png",
  bio: "No recuerdo una primera película que lo cambiara todo. Recuerdo ver demasiadas, una detrás de otra, hasta el punto de aprenderme diálogos y escenas casi sin darme cuenta. Con el tiempo empecé a fijarme cada vez más en la imagen, en cómo una película puede sostenerse solo por lo que transmite sin necesidad de explicarlo todo.\n\nMe interesan las películas que tienen personalidad y que confían en lo que están mostrando. En el terror es donde más encuentro eso, aunque no el único sitio donde existe. Es una cuestión de mirada. Cuando una película consigue que algo se quede dentro y vuelva después, ahí hay algo que merece la pena."
},
   
  "Germán Juncosa": {
    nombre: "Germán Juncosa",
    foto: "german-juncosa2.png",
    bio: "Me muevo cómodo en el thriller, el terror y el cine de los noventa que apostaba por el entretenimiento adulto sin complejos. Vuelvo a menudo a películas como Seven, Heat o El silencio de los corderos, y no tengo ningún problema en disfrutar de cierto cine comercial cuando está bien hecho. Prefiero las películas con carácter, incluso con imperfecciones, a las que funcionan como un mecanismo demasiado pulido."
  },

     "Dolores Aranda": {
    nombre: "Dolores Aranda",
    foto: "dolores-aranda2.png",
    bio: "Vuelvo a menudo al cine que observa a sus personajes con paciencia. Me interesan las películas que miran antes de explicar, las que confían en un gesto, una pausa o una conversación para revelar quiénes somos. Por eso regreso con frecuencia a directores como Ingmar Bergman, Eric Rohmer o Krzysztof Kieślowski, cineastas que entendieron el cine como una forma de observación.\n\nPero tampoco le doy la espalda al cine popular cuando está hecho con convicción. El buen cine, al final, no depende tanto del tamaño de la historia como de la mirada que hay detrás de ella."
  },

     "Nil Miralles": {
    nombre: "Nil Miralles",
    foto: "nil-miralles.png",
    bio: "Siempre me ha parecido divertido teorizar, intentar anticipar y seguir el rastro de lo que viene. Me interesa estar pendiente de filtraciones, movimientos de la industria y pequeñas pistas que van apareciendo antes de que una película llegue a estrenarse. Los rumores forman parte del juego del cine comercial y muchas veces cuentan una historia paralela a la que luego vemos en pantalla. Aquí intento reunirlos, ordenarlos y compartirlos con cabeza."
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
     SECRET WARS RUMOR
     ========================= */

  {
    id: "secret-wars-no-se-divide",
    seccion: "rumores",
    titulo: "Marvel no planea dividir Avengers: Secret Wars en dos películas… al menos por ahora",
    autor: "Nil Miralles",
    fecha_publicacion: "11/03/2026",
    destacada: false,
    imagen: {
      src: "secret-wars2.png",
      alt: "Avengers: Secret Wars dentro de la Saga del Multiverso del MCU"
    },
    entradilla: "Un nuevo rumor apuntaba a que Marvel podría dividir Secret Wars en dos películas, pero las últimas informaciones señalan que el estudio no contempla esa posibilidad por ahora.",
    contenido: [

{ tipo: "texto", valor: "Durante unos días empezó a circular un rumor bastante llamativo entre los fans del Universo Cinematográfico de Marvel: la posibilidad de que Avengers: Secret Wars se dividiera en dos películas. Teniendo en cuenta la escala que se espera para el cierre de la Saga del Multiverso, la idea no parecía precisamente descabellada." },

{ tipo: "texto", valor: "Sin embargo, la información más reciente apunta justo en la dirección contraria. Y, según varias fuentes dentro del circuito habitual de rumores del MCU, Marvel Studios no estaría planeando dividir la película en dos partes." },

{ tipo: "subtitulo", valor: "La última actualización sobre Secret Wars" },

{ tipo: "texto", valor: "La actualización más reciente llega a través de medios como LRM Online y AOL, que recogen comentarios procedentes del entorno de insiders habituales del MCU. Según esta información, no hay planes actuales dentro de Marvel Studios para convertir Avengers: Secret Wars en una historia dividida en dos películas." },

{ tipo: "texto", valor: "Esto significa que, al menos por ahora, el proyecto sigue planteado como una única gran entrega dentro de la saga, algo que encajaría con la forma en que el estudio suele manejar sus grandes eventos cinematográficos." },

{ tipo: "texto", valor: "El portal ComicBookMovie también se hizo eco de esta actualización, señalando que el estudio no estaría considerando seriamente esa opción en este momento del desarrollo del proyecto." },

{ tipo: "texto", valor: "En otras palabras: aunque el tamaño de la historia pueda sugerir lo contrario, la idea de dividir la película no forma parte del plan actual." },

{ tipo: "subtitulo", valor: "De dónde salió el rumor" },

{ tipo: "texto", valor: "La conversación empezó cuando algunos insiders mencionaron la posibilidad de que Marvel pudiera optar por una estructura en dos partes para Secret Wars. La lógica detrás de esa teoría era bastante simple: si la película pretende reunir múltiples personajes, universos y líneas argumentales del MCU, condensar todo eso en una sola película podría ser un desafío enorme." },

{ tipo: "texto", valor: "Además, el propio estudio ya utilizó una estructura similar con Avengers: Infinity War y Avengers: Endgame, que en la práctica funcionaron como dos capítulos consecutivos de una misma historia." },

{ tipo: "texto", valor: "Pero, según la información más reciente recogida por LRM Online y AOL, esa posibilidad no estaría sobre la mesa en estos momentos." },

{ tipo: "subtitulo", valor: "El desafío real de la película más grande del MCU" },

{ tipo: "texto", valor: "Que Secret Wars no vaya a dividirse no significa que vaya a ser una película pequeña precisamente." },

{ tipo: "texto", valor: "Dentro del MCU, el proyecto está pensado como el gran evento que cierre la Saga del Multiverso, lo que inevitablemente hace pensar en una producción enorme. La película podría implicar la participación de personajes procedentes de diferentes universos, además de conexiones con varias de las franquicias actuales de Marvel." },

{ tipo: "texto", valor: "Eso es precisamente lo que ha llevado a muchos fans a imaginar una película todavía más grande de lo habitual." },

{ tipo: "texto", valor: "Pero dividir una historia en dos partes también implica desafíos logísticos enormes: presupuestos todavía más altos, agendas de actores más complicadas y una producción mucho más compleja." },

{ tipo: "texto", valor: "Por ahora, todo apunta a que Marvel prefiere concentrar ese gran evento en una sola película." },

{ tipo: "subtitulo", valor: "Un rumor que probablemente volverá" },

{ tipo: "texto", valor: "Si algo ha demostrado el MCU a lo largo de los años es que los rumores sobre sus grandes eventos van y vienen constantemente. Y con una película tan ambiciosa como Avengers: Secret Wars todavía en desarrollo, es muy probable que sigamos viendo teorías y filtraciones en los próximos meses." },

{ tipo: "texto", valor: "Por el momento, sin embargo, la información más reciente procedente de medios como LRM Online, AOL y ComicBookMovie indica que Marvel Studios no planea dividir la película en dos partes." },

{ tipo: "texto", valor: "Lo que sí parece seguro es que, incluso como una sola película, Secret Wars apunta a ser uno de los eventos cinematográficos más grandes que Marvel haya intentado hasta ahora." },

{ tipo: "texto", valor: "Y con el multiverso de por medio, eso ya es decir bastante." }

    ],

     etiquetas: [
      "MCU",
      "Marvel",
      "Marvel Studios",
      "Avengers",
      "Saga del Multiverso",
      "Kevin Feige",
      "Estados Unidos",
      "Superhéroes"
    ]
  },

     /* =========================
     EL APARTAMENTO
     ========================= */

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
     OBI-WAN RUMOR
     ========================= */

  {
    id: "obi-wan-ahsoka-rumor",
    seccion: "rumores",
    titulo: "Un rumor apunta al posible regreso de Obi-Wan en Ahsoka temporada 2… y todo empezó con un comentario del equipo de rodaje",
    autor: "Nil Miralles",
    fecha_publicacion: "12/03/2026",
    destacada: true,
    imagen: {
      src: "ashoka.png",
      alt: "Ahsoka Tano dentro del universo de Star Wars"
    },
    entradilla: "Un comentario aparentemente inocente de un especialista de la serie ha desatado un nuevo rumor sobre el posible regreso de Ewan McGregor como Obi-Wan Kenobi en la segunda temporada de Ahsoka.",
    contenido: [

{ tipo: "texto", valor: "Si hay algo que el fandom de Star Wars ha aprendido con los años es que los rumores pueden empezar en los lugares más inesperados. A veces es una foto filtrada, otras una pieza de merchandising… y en este caso todo parece haber arrancado con un comentario aparentemente inocente de alguien que trabajó en la serie." },

{ tipo: "texto", valor: "En los últimos días varios medios especializados han recogido un rumor que apunta a un posible regreso de Ewan McGregor como Obi-Wan Kenobi en la segunda temporada de Ahsoka. No hay confirmación oficial por parte de Lucasfilm, pero el detalle que ha encendido la conversación entre los fans es bastante curioso." },

{ tipo: "subtitulo", valor: "El comentario que ha despertado las especulaciones" },

{ tipo: "texto", valor: "El origen del rumor se remonta a una investigación publicada por Bespin Bulletin, que encontró varios vídeos de un creador de contenido que aparentemente formó parte del equipo de especialistas de la segunda temporada de la serie." },

{ tipo: "texto", valor: "En esos vídeos aparecía mostrando merchandising del equipo de rodaje, como chaquetas y prendas utilizadas por el equipo de producción de la nueva temporada." },

{ tipo: "texto", valor: "Hasta ahí todo normal. Pero en una respuesta en redes sociales el especialista dejó caer una frase que llamó inmediatamente la atención de los fans. Recordando sus momentos favoritos trabajando en proyectos de Star Wars, mencionó uno en particular:" },

{ tipo: "texto", valor: "“Cuando Ewan me dejó sostener el sable de luz de Ahsoka”." },

{ tipo: "texto", valor: "La referencia directa a “Ewan” fue suficiente para que muchos interpretaran que Ewan McGregor habría estado presente durante el rodaje, lo que rápidamente disparó las teorías sobre un posible cameo de Obi-Wan." },

{ tipo: "subtitulo", valor: "Varios medios se hacen eco del rumor" },

{ tipo: "texto", valor: "A partir de ese comentario, distintos portales especializados empezaron a recoger la historia." },

{ tipo: "texto", valor: "En Cosmic Book News señalan que el mensaje del especialista sugiere que McGregor pudo haber estado en el set durante el rodaje de la segunda temporada, lo que habría provocado la oleada de especulación sobre el regreso del personaje." },

{ tipo: "texto", valor: "Por su parte, GeekTyrant explica que el detalle encajaría con otros rumores previos que hablaban de posibles escenas relacionadas con el pasado de Anakin Skywalker y los personajes más cercanos a él." },

{ tipo: "texto", valor: "Y en Murphy’s Multiverse incluso van un paso más allá al señalar que la filtración podría indicar un regreso del actor dentro de la historia, algo que algunos fans ya interpretan como una pista bastante clara." },

{ tipo: "texto", valor: "En todos los casos, sin embargo, se trata de información basada en un detalle del equipo de producción, no en confirmaciones oficiales." },

{ tipo: "subtitulo", valor: "Cómo podría encajar Obi-Wan en la historia" },

{ tipo: "texto", valor: "Si el rumor terminara siendo cierto, lo más probable es que la aparición de Obi-Wan no fuese un papel principal dentro de la trama." },

{ tipo: "texto", valor: "El propio análisis de Cosmic Book News apunta a que el personaje podría aparecer en forma de flashback, visión de la Fuerza o escena relacionada con el pasado de Anakin Skywalker." },

{ tipo: "texto", valor: "No sería algo extraño para la serie. La primera temporada de Ahsoka ya utilizó el regreso de Hayden Christensen como Anakin dentro de una secuencia ambientada en el misterioso “World Between Worlds”, una forma bastante elegante de explorar la historia de los personajes sin romper la cronología de la saga." },

{ tipo: "texto", valor: "Además, Ahsoka y Obi-Wan comparten una conexión muy clara dentro del universo de Star Wars: ambos fueron figuras clave en la vida de Anakin durante las Guerras Clon." },

{ tipo: "subtitulo", valor: "Por ahora sigue siendo solo un rumor" },

{ tipo: "texto", valor: "Como suele ocurrir con este tipo de historias, Lucasfilm no ha confirmado nada oficialmente. Y con producciones de este tamaño es bastante habitual que aparezcan detalles ambiguos que luego no terminan formando parte del resultado final." },

{ tipo: "texto", valor: "Lo que sí está claro es que la segunda temporada de Ahsoka sigue siendo uno de los proyectos más importantes del universo televisivo de Star Wars. Y si algo ha demostrado Dave Filoni con esta serie es que le gusta explorar las conexiones entre los personajes clásicos de la saga." },

{ tipo: "texto", valor: "Así que, de momento, el posible regreso de Obi-Wan Kenobi queda en el terreno de los rumores." },

{ tipo: "texto", valor: "Pero si al final vemos a Ahsoka reencontrándose con el antiguo maestro de Anakin… digamos que no sería precisamente el cameo más extraño que ha hecho Star Wars últimamente." }

    ],

    etiquetas: [
      "Star Wars",
      "Lucasfilm",
      "Ahsoka",
      "Obi-Wan Kenobi",
      "Anakin Skywalker",
      "Dave Filoni",
      "Disney+",
      "Estados Unidos",
      "Ciencia ficción"
    ]
  },

  /* =========================
     NINJA SCROLL
     ========================= */

  {
    id: "ninja-scroll-1993",
    seccion: "criticas",
    titulo: "Ninja Scroll",
    autor: "Sergio Valdés",
    fecha_publicacion: "18/03/2026",
    director: "Yoshiaki Kawajiri",
    año: 1993,
    nota: 3,
    destacada: false,
    imagen: {
      src: "ninja-scroll.png",
      alt: "Ninja Scroll (1993), dirigida por Yoshiaki Kawajiri"
    },
    entradilla: "Una de las puertas de entrada al anime adulto de los noventa, marcada por la violencia estilizada, la fantasía oscura y una narrativa directa.",
    contenido: [

{ tipo: "texto", valor: "Hay películas que funcionan como puertas de entrada a una idea concreta del cine, y Ninja Scroll ocupa ese lugar dentro del anime más adulto de los noventa. En un momento en el que la animación japonesa empezaba a consolidar su circulación internacional, el film dirigido por Yoshiaki Kawajiri se convirtió en una carta de presentación muy clara: violencia estilizada, erotismo, fantasía oscura y una narrativa que avanza con la contundencia de un relato de aventuras clásico." },

{ tipo: "texto", valor: "La película sigue a Jubei, un espadachín errante atrapado en una conspiración que mezcla clanes ninja, corrupción política y elementos casi sobrenaturales. Desde ahí, Ninja Scroll construye su propuesta con bastante claridad: cada enfrentamiento introduce a un nuevo antagonista, cada tramo del viaje suma una pieza más a ese mosaico de amenazas. La estructura recuerda a cierto cine de samuráis, incluso al western más episódico, donde el héroe atraviesa espacios hostiles enfrentándose a figuras que funcionan casi como pruebas." },

{ tipo: "texto", valor: "En ese recorrido, la película encuentra uno de sus principales motores en los personajes que rodean a Jubei. Jubei funciona como protagonista clásico: lacónico, competente, definido por la acción más que por el discurso. A su lado, Kagero introduce un contrapunto interesante desde lo trágico, mientras que el antagonista principal, Gemma Himuro, encarna esa idea de amenaza persistente que atraviesa toda la narración. El reparto de voces en la versión original cumple bien con ese tono seco y directo que pide la historia, sin buscar matices excesivos." },

{ tipo: "texto", valor: "Desde el punto de vista de la animación, Ninja Scroll responde a una lógica muy concreta del anime de su época. El trabajo del estudio Madhouse se apoya en animación tradicional dibujada a mano, con un uso muy consciente del movimiento limitado en ciertas escenas y una expansión muy marcada en los momentos de acción. Sin ser animador profesional —y esto conviene decirlo con honestidad—, resulta fácil percibir cómo la película reserva recursos para los combates clave: ahí aparecen las coreografías más fluidas, los encuadres más dinámicos y una violencia que se apoya tanto en el montaje como en el propio trazo." },

{ tipo: "texto", valor: "Esa apuesta visual conecta directamente con otra de sus claves: la estilización. Kawajiri no busca realismo, sino impacto. Los cuerpos se deforman, la sangre exagera su presencia y los villanos se diseñan desde lo grotesco a lo hiperbólico. Esa acumulación de excesos forma parte de su identidad, y durante buena parte del metraje funciona como un motor muy eficaz." },

{ tipo: "texto", valor: "A medida que la película avanza aparece cierta sensación de repetición. La estructura episódica, que al principio aporta ritmo, termina generando una dinámica previsible: nuevo enemigo, combate, transición y vuelta a empezar. Falta una evolución más clara en el conflicto central, algo que dé la sensación de que todo lo anterior empuja hacia un clímax más trabajado." },

{ tipo: "texto", valor: "Ahí es donde Ninja Scroll se queda a medio camino. Funciona muy bien como experiencia inmediata, como despliegue de estilo y violencia coreografiada, pero le cuesta sostener un desarrollo más profundo de sus personajes o de su propio universo. En comparación con otras obras del anime de la época como Akira o Ghost in the Shell, aquí todo se mantiene en un nivel más superficial." },

{ tipo: "texto", valor: "Aun así, hay algo honesto en la película. Sabe perfectamente qué tipo de experiencia quiere ofrecer y la ejecuta con convicción. Esa claridad siempre suma, incluso cuando el resultado no termina de trascender." },

{ tipo: "texto", valor: "Ninja Scroll se disfruta, especialmente si entras en su juego de exceso y acción continua, pero también deja la sensación de que podría haber sido algo más con un poco más de ambición narrativa." }

    ],
    etiquetas: [
      "Yoshiaki Kawajiri",
      "1993",
      "Anime",
      "Acción",
      "Fantasía",
      "Terror",
      "Madhouse",
      "Japón"
    ]
  },
   
  /* =========================
     SINISTER
     ========================= */

  {
    id: "sinister-2012",
    seccion: "criticas",
    titulo: "Sinister",
    autor: "Paula Elizábal",
    fecha_publicacion: "18/03/2026",
    director: "Scott Derrickson",
    año: 2012,
    nota: 5,
    destacada: false,
    imagen: {
      src: "sinister.png",
      alt: "Sinister (2012), dirigida por Scott Derrickson"
    },
    entradilla: "Un ejercicio de terror que construye el miedo desde la atmósfera y el ritmo, hasta convertirlo en una experiencia que se queda dentro del espectador.",
    contenido: [

{ tipo: "texto", valor: "Hay un momento muy concreto en Sinister en el que ya estás dentro y no hay vuelta atrás. No es un susto, ni un giro, ni una revelación. Es la sensación de que la película ha tomado el control del ritmo al que respiras. Y a partir de ahí todo va a su tempo." },

{ tipo: "texto", valor: "La historia es sencilla y casi da igual. Un escritor de true crime se muda con su familia a una casa donde ocurrió un asesinato porque quiere sacar de ahí un libro. Rebuscando en el desván encuentra unas cintas domésticas. Empieza a verlas. Con eso la película ya ha abierto la puerta y decide no cerrarla." },

{ tipo: "texto", valor: "Scott Derrickson entiende algo que muy pocos directores de terror parecen tener claro: el miedo es más genuino cuando se cultiva y se deja crecer dentro del espectador, cuando se construye plano a plano, dejando que las escenas se muevan a un ritmo natural para que el conjunto empiece a incomodar de verdad." },

{ tipo: "texto", valor: "Y ahí entran las cintas." },

{ tipo: "texto", valor: "Cada una es un descenso hacia la oscuridad. Están pensadas para que te quedes mirando aunque notes que algo va mal. La textura de la imagen, el ritmo, el silencio antes de que ocurra algo… Cada detalle está colocado con una precisión enfermiza." },

{ tipo: "texto", valor: "La del cortacésped es directamente una de las mejores escenas de terror de este siglo. Y también del anterior. Por cómo se alarga, por cómo te obliga a anticipar, por cómo llega sin necesidad de adornos. Si llegas a ese punto sin estar enganchado a la película, ahí te quedas totalmente atrapado en ella." },

{ tipo: "texto", valor: "El sonido hace el resto. Hay momentos en los que parece que la película está enferma. Esa sensación se te mete en el cuerpo y se queda ahí, incómoda. Y, como quien mira un accidente en la carretera, sabes que no deberías hacerlo, que deberías apartar la vista, pero simplemente no puedes." },

{ tipo: "texto", valor: "Ethan Hawke está perfecto porque entiende que su personaje va perdiendo el control poco a poco. El actor lo acepta y deja que esa sensación de su personaje sirva de espejo para la que sentimos nosotros al otro lado de la pantalla." },

{ tipo: "texto", valor: "Y luego está Bughuul." },

{ tipo: "texto", valor: "El diseño del personaje, la forma en la que aparece, cómo se integra en las imágenes… todo en él tiene algo profundamente inquietante. Es uno de esos villanos cuya simple presencia ya es más que suficiente y consigue, hasta cierto punto, superar el impacto que generan sus acciones. Cuando Bughuul invade la película, uno no puede hacer nada que no sea rendirse." },

{ tipo: "texto", valor: "Aquí es donde muchas otras películas fallan, y esta no." },

{ tipo: "texto", valor: "El tramo final cambia el tipo de miedo. Se vuelve más explícito, más definido. Parte de la inquietud inicial se transforma en otra cosa más reconocible. Pasa de lo abstracto a lo concreto y, contrariamente a lo que cabría esperar, sigue manteniendo el nivel." },

{ tipo: "texto", valor: "Porque lo que te llevas de Sinister son tantas cosas que no tendría ningún sentido reducirlo a la historia, al villano, a la resolución, a los sustos puntuales o al aire perturbador que la compone. Lo que te llevas son imágenes y sensaciones que no puedes despegar de ti de ninguna forma. De nada sirve cerrar los ojos ni encender todas las luces de casa, porque la cosecha del terror cultivado en tu interior es tan grande que no te deja ir a ninguna otra parte." },

{ tipo: "texto", valor: "Y eso, dentro del terror, es muy raro." },

{ tipo: "texto", valor: "Por eso está donde está. Y por eso vuelve una y otra vez. Por eso es, para mí, una de las tres grandes películas de terror que nos ha dado el cine." }

    ],
    etiquetas: [
      "Scott Derrickson",
      "Ethan Hawke",
      "James Ransone",
      "2012",
      "Terror",
      "Thriller",
      "Christopher Young",
      "Chris Norr",
      "Scott Derrickson",
      "C. Robert Cargill",
      "Blumhouse Productions",
      "Automatik Entertainment",
      "Estados Unidos"
    ]
  },
   
  /* =========================
     PIZZA MOVIES
     ========================= */

  {
    id: "pizza-movies-2026",
    seccion: "criticas",
    titulo: "Pizza Movies",
    autor: "Irene Salgado",
    fecha_publicacion: "13/03/2026",
    director: "Carlo Padial",
    año: 2026,
    nota: 3,
    destacada: false,
    imagen: {
      src: "pizza-movies.png",
      alt: "Pizza Movies (2026), dirigida por Carlo Padial"
    },
    entradilla: "Una comedia libre y juguetona presentada en el Festival de Málaga que mezcla cine, precariedad creativa y humor con espíritu de reunión entre amigos.",
    contenido: [

{ tipo: "texto", valor: "Salgo de ver Pizza Movies en el Festival de Málaga con esa sensación que me gusta mucho cuando voy a festivales: la de haber visto algo raro en el buen sentido. No raro por extravagante, sino raro porque se mueve a su aire y parece que no le preocupa demasiado encajar en ningún molde concreto. Carlo Padial propone una comedia que respira con libertad, como si la película avanzara al ritmo de las ideas que le van apeteciendo." },

{ tipo: "texto", valor: "La premisa tiene algo muy simpático desde el principio. Una pareja siente que su vida profesional se ha ido quedando pequeña y decide abrir una pizzería dedicada al cine. La idea ya tiene gracia por sí sola. Yo la escuché en la sinopsis y pensé que era una locura bonita. Luego la película se encarga de explorar esa locura con bastante cariño." },

{ tipo: "texto", valor: "El centro está en la relación entre Berto Romero y Judit Martín. Los dos forman una pareja que se siente muy reconocible. Hay cansancio, hay bromas privadas, hay discusiones pequeñas que se olvidan rápido. Me gusta cómo se acompañan en pantalla. Transmiten la sensación de dos personas que llevan tiempo caminando juntas y que, incluso cuando toman decisiones absurdas, lo hacen con una mezcla de cariño y resignación muy humana." },

{ tipo: "texto", valor: "Carlo Padial dirige con ese estilo suyo tan particular. Sus películas suelen moverse entre la observación del mundo cultural y el humor un poco caótico. Aquí ocurre algo parecido. La historia avanza con momentos muy definidos y otros que parecen surgir simplemente porque la idea le hace gracia al director. Esa libertad forma parte del juego. Hay escenas que funcionan como chistes muy claros y otras que se quedan flotando con una sonrisa medio torcida." },

{ tipo: "texto", valor: "El reparto se mueve muy bien dentro de ese tono. Además de los protagonistas aparecen rostros muy reconocibles del cine y la comedia española. Por la película pasan Bruna Cusí, Raúl Arévalo, Joaquín Reyes o Miguel Noguera, y cada aparición suma un pequeño momento de humor o de complicidad. A mí me gusta mucho cuando las películas tienen ese aire de reunión entre amigos que se entienden." },

{ tipo: "texto", valor: "Hay también algo que me toca especialmente porque tiene que ver con el cine en sí. Pizza Movies mira al mundo creativo con una mezcla de ironía y cariño. Aparecen bromas sobre la precariedad, sobre los sueños que a veces se desinflan, sobre la necesidad de seguir inventando cosas aunque parezcan ridículas. Yo conecto bastante con esa idea. A veces una idea absurda es lo único que mantiene viva la ilusión." },

{ tipo: "texto", valor: "La pizzería funciona como corazón de la película. Es un espacio pequeño, casi doméstico, donde entran personajes, conversaciones y ocurrencias. Ese lugar acaba teniendo algo acogedor. Me imaginaba sentándome allí, comiendo una pizza con nombres de películas y escuchando a la gente discutir sobre cine durante horas." },

{ tipo: "texto", valor: "La película avanza con un ritmo irregular, eso es verdad. Hay momentos que funcionan muy bien y otros que parecen existir simplemente porque a Padial le apetecía probar algo. Yo acepto ese tipo de cine cuando detecto cariño por lo que se está haciendo. Aquí ese cariño está bastante claro." },

{ tipo: "texto", valor: "Dentro del Festival de Málaga, donde conviven propuestas muy distintas, Pizza Movies se siente como una comedia pequeña, juguetona y muy consciente del mundo cultural en el que vive. Sales con la sensación de haber pasado un rato curioso, de haber visto algo que no se parece demasiado a lo demás." },

{ tipo: "texto", valor: "Y eso, en un festival, siempre me parece una buena noticia." }

    ],
    etiquetas: [
      "Carlo Padial",
      "Berto Romero",
      "Judit Martín",
      "Bruna Cusí",
      "Raúl Arévalo",
      "Joaquín Reyes",
      "Miguel Noguera",
      "2026",
      "Comedia",
      "España"
    ]
  },

  /* =========================
     YO NO MORIRÉ DE AMOR
     ========================= */

  {
    id: "yo-no-morire-de-amor-2026",
    seccion: "criticas",
    titulo: "Yo no moriré de amor",
    autor: "Dolores Aranda",
    fecha_publicacion: "15/03/2026",
    director: "Marta Matute",
    año: 2026,
    nota: 3.5,
    destacada: false,
    estreno: true,
    imagen: {
      src: "yo-no-morire-de-amor.png",
      alt: "Yo no moriré de amor (2026), dirigida por Marta Matute"
    },
    entradilla: "Un drama íntimo que observa la enfermedad desde la vida cotidiana y desde la mirada de una hija que intenta sostener la normalidad mientras todo empieza a cambiar.",
    contenido: [

{ tipo: "texto", valor: "El cine suele acercarse a la enfermedad desde el dramatismo. El conflicto se convierte en el motor visible de la historia. Yo no moriré de amor adopta un camino más silencioso. La película observa la enfermedad como una transformación lenta de la vida cotidiana." },

{ tipo: "texto", valor: "La historia sigue a Claudia, una chica de dieciocho años cuya vida cambia cuando su madre empieza a perder la memoria. La película se sitúa completamente en esa edad concreta. La juventud suele aparecer en el cine como un momento de expansión: decisiones nuevas, descubrimientos, primeras experiencias. Aquí ese impulso convive con una responsabilidad inesperada. La protagonista se encuentra en medio de dos tiempos distintos de la vida." },

{ tipo: "texto", valor: "Júlia Mascort sostiene la película con una interpretación muy contenida. Claudia atraviesa el relato intentando mantener una normalidad que cada día resulta más difícil. La enfermedad de su madre transforma la dinámica familiar y obliga a reorganizar la vida doméstica alrededor del cuidado." },

{ tipo: "texto", valor: "El personaje de la madre, interpretado por Sonia Almarcha, introduce el elemento más frágil de la historia. La película se acerca a su deterioro con una mirada cercana, concentrada en los cambios pequeños que alteran la relación entre madre e hija. El reconocimiento empieza a volverse incierto. La memoria deja de ser un territorio estable." },

{ tipo: "texto", valor: "La presencia del padre, interpretado por Tomás del Estal, añade otra dimensión al retrato familiar. La película muestra cómo cada miembro de la familia responde de manera distinta a la enfermedad. El hogar se convierte en el centro emocional de la historia, un espacio donde las rutinas diarias adquieren un peso cada vez mayor." },

{ tipo: "texto", valor: "Marta Matute dirige la película con una puesta en escena sobria. El relato avanza a través de escenas domésticas, conversaciones y momentos de convivencia donde la enfermedad aparece integrada en la vida diaria. La cámara permanece cerca de los personajes, observando los cambios en sus relaciones." },

{ tipo: "texto", valor: "Ese enfoque da forma al tema central de la película: la experiencia del cuidado. El relato sigue el desgaste emocional que acompaña a esa responsabilidad. La juventud de Claudia introduce una tensión constante entre su propia vida y las necesidades de su madre." },

{ tipo: "texto", valor: "La película encuentra su fuerza en esa observación íntima de la vida familiar. El título introduce una idea de resistencia emocional. La historia termina construyéndose alrededor de esa resistencia, de la forma en que el afecto persiste incluso cuando la memoria empieza a desaparecer." },

{ tipo: "texto", valor: "El resultado es un drama contenido que mira de cerca la fragilidad de las relaciones cuando la enfermedad altera el equilibrio de una familia." }

    ],
    etiquetas: [
      "Marta Matute",
      "Júlia Mascort",
      "Sonia Almarcha",
      "Tomás del Estal",
      "Distinto Films",
"Dos Soles Media",
       "2026",
      "Drama",
      "España"
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
   ORDENAR CONTENIDO POR FECHA (más reciente primero)
   ========================= */

const contenidoOrdenado = contenido
  .slice()
  .sort((a, b) => {
    const [diaA, mesA, añoA] = a.fecha_publicacion.split("/");
    const [diaB, mesB, añoB] = b.fecha_publicacion.split("/");

    const fechaA = new Date(`${añoA}-${mesA}-${diaA}`);
    const fechaB = new Date(`${añoB}-${mesB}-${diaB}`);

    return fechaB - fechaA;
  });

/* =========================
   SISTEMA DE TARJETAS
   ========================= */

function crearTarjeta(e, modo = "normal") {

  let bannerHTML = "";

   let estrenoHTML = "";

   let autorBannerHTML = "";

if (modo !== "autor") {
  autorBannerHTML = `
    <div class="miniatura-autor">
      ${e.autor.toUpperCase()}
    </div>
  `;
}

if(esEstrenoActivo(e)){
  estrenoHTML = `<div class="miniatura-estreno">ESTRENO</div>`;
}

  if (modo !== "rumores") {

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



  item.innerHTML = `
    <a href="entrada.html?id=${e.id}">
      <div class="miniatura-wrapper">
  <img src="${e.imagen.src}" alt="${e.imagen.alt}">
  ${autorBannerHTML}
  ${bannerHTML}
  ${estrenoHTML}
</div>
      <h3>${e.titulo}</h3>
      ${metaHTML}
    </a>
  `;

   return item;
}


/* =========================
   DETECTAR ESTRENOS
   ========================= */

function esEstrenoActivo(entrada){

  if(!entrada.estreno) return false;

  const [d,m,y] = entrada.fecha_publicacion.split("/");
  const fechaPublicacion = new Date(`${y}-${m}-${d}`);

  const hoy = new Date();

  const dias = (hoy - fechaPublicacion) / (1000*60*60*24);

  return dias <= 28;

}
