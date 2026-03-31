/* =========================
   FICHAS DE AUTORES
   ========================= */

const fichasAutores = {
  "Irene Salgado": {
    nombre: "Irene Salgado",
    foto: "irene-salgado.png",
    bio: "Me emociono fácil con el cine y me implico sin demasiadas defensas. Soy bastante hooligan de Scorsese cuando decide bajar el volumen y dejar que el tiempo haga su trabajo, y me pierdo con gusto cada vez que Isabelle Huppert entra en un plano. Me encantan las películas que apetece volver a ver sin una razón clara y las que te hacen recomendar cosas como si fueran descubrimientos personales. Vivo el cine con entusiasmo, con curiosidad y con una alegría muy poco sofisticada. Escribo desde ahí, desde las ganas sinceras de compartir algo que me ha tocado."
  },

"Sergio Valdés": {
  nombre: "Sergio Valdés",
  foto: "sergio-valdes.png",
  bio: "Mi relación con el cine se construyó viendo de todo, muy pronto y sin demasiados filtros. Películas de distintas épocas, géneros que se mezclaban sin orden y una curiosidad que fue creciendo sola. Con el tiempo empecé a mirar más allá de la historia, a tratar de entender qué hacía que una imagen funcionara.\n\nEl anime me marcó de una forma especial y bastante temprana. Llegué antes a Ghibli que a Disney, algo que sigue definiendo mi manera de mirar la animación. Me fascina todo lo que ocurre entre un dibujo y el siguiente, y arrastro la sensación de ser un animador frustrado cuya carrera nunca empezó."
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
  "David Fincher",
  "John Brancato",
  "Michael Ferris",
  "Michael Douglas",
  "Sean Penn",
  "Deborah Kara Unger",
  "Harris Savides",
  "Howard Shore",
  "PolyGram Filmed Entertainment",
  "Propaganda Films",
  "Estados Unidos",
  "1997",
  "Thriller"
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
  "Neil Jordan",
  "Anne Rice",
  "Brad Pitt",
  "Tom Cruise",
  "Kirsten Dunst",
  "Antonio Banderas",
  "Philippe Rousselot",
  "Elliot Goldenthal",
  "Geffen Pictures",
  "Warner Bros.",
  "Estados Unidos",
  "1994",
  "Terror",
  "Drama"
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
  "Bradley Cooper",
  "Eric Roth",
  "Will Fetters",
  "Sam Elliott",
  "Andrew Dice Clay",
  "Matthew Libatique",
  "Lady Gaga",
  "Warner Bros.",
  "Live Nation Productions",
  "Estados Unidos",
  "2018",
  "Drama",
  "Romance"
]
  },

/* =========================
   THE QUEST
   ========================= */

{
  id: "the-quest-1996",
  seccion: "criticas",
  titulo: "The Quest",
  autor: "Miguel Romero",
  fecha_publicacion: "23/03/2026",
  director: "Jean-Claude Van Damme",
  año: 1996,
  nota: 3,
  destacada: false,
  imagen: {
    src: "the-quest.png",
    alt: "The Quest (1996), dirigida por Jean-Claude Van Damme"
  },
  entradilla: "The Quest es una peli dirigida por Jean-Claude Van Damme, cuyo guion se basa en una premisa de Jean-Claude Van Damme y está protagonizada por Jean-Claude Van Damme. Con eso ya sabes que si la pillas a media tarde en la tele, toca verla.",
  contenido: [

{ tipo: "texto", valor: "The Quest es una peli dirigida por Jean-Claude Van Damme, cuyo guion se basa en una premisa de Jean-Claude Van Damme y está protagonizada por Jean-Claude Van Damme. Con eso ya sabes que si la pillas a media tarde en la tele, toca verla. Arranca con Van Damme haciendo de buscavidas, tirando de calle, robando aquí, escapando allá, hasta que la lía y acaba metido en un viaje que no ha pedido. Y tú ya estás dentro porque ese tipo de arranque huele a aventura de las de antes, de las que  tiran millas sin que les importe una mierda que las cosas tengan sentido." },

{ tipo: "texto", valor: "La peli se pega un buen rato llevándote de un sitio a otro como si fuera una ruta de mercadillos: barco, selva, templo, peña rara… todo muy rápido, todo muy de “venga, que hay que llegar a lo importante”. Y lo importante se sabe desde el minuto uno. Aquí se viene a ver un torneo donde la peña se da hostias representando a su país como si esto fuera una especie de mundial clandestino. Cuando empiezan a soltar mamporros, tú ya sabes contra quién va a ganar Van Damme al final, pero te la suda. Lo que quieres es que ceben ese combate como a un pavo en la mierda esa del Acción de Gracias." },

{ tipo: "texto", valor: "Cuando aparece el torneo, la peli se pone seria. Seria dentro de lo que es un concepto al que le importa un pepino todo. Ahí es donde conecta con ese rollo que siempre se ha dicho de que esto parece un Street Fighter sin licencia. Incluso un Street Fighter de verdad, y no aquella cosa repulsiva de Steven E. de Souza. Uno contra uno, cada luchador con pinta de estar en su propia despedida de soltero, su estilo de lucha y su manera de entrar en escena como si acabara de salir de la pantalla de elegir personaje. El grande que parece un armario, el ágil que no para quieto, el que te mira y ya te está retando. Cada combate es como pasar de pantalla y eso engancha por mucho que sepas cuál es el jefe final. \"El monstruo\", como decíamos en mi pueblo." },

{ tipo: "texto", valor: "Van Damme aquí va a lo suyo pero con un punto más terrenal. No entra como el puto amo desde el principio. Se le ve currándoselo, adaptándose y aprendiendo sobre la marcha. Luego, cuando toca pelear, hace lo de siempre: patadas imposibles y esa forma de moverse que parece que flota. El tío cumple porque sabe perfectamente en qué película está y qué espera la peña de él." },

{ tipo: "texto", valor: "Los rivales están ahí para lucirse un rato y largarse, pero tienen ese encanto de catálogo noventero que funciona. Son simples, sí, simples de cojones, pero efectivos de la hostia. Cada uno tiene su momento y su forma de pelear, y eso hace que el torneo no se haga pesado. Aquí se busca el espectáculo con cimientos hechos de sopapos, no la profundidad. Y no hay que sentirse culpable, algo que la peli sabe perfectamente y por eso no intenta venderte que es otra cosa." },

{ tipo: "texto", valor: "Para darle cuerpo y que no sea una colección de ñoras, hay ratos en los que la peli intenta meterle algo más de historia, darle un poco de contexto a todo el viaje. A veces cuela, si uno hace el esfuerzo de dejarlo colar,  y otras no, pero te da un poco igual porque estás esperando a que vuelva el siguiente combate. Puede que esos añadidos no cuajen del todo, pero así es el formato y sabemos que forma parte del pack." },

{ tipo: "texto", valor: "Al final, The Quest es lo que es: una peli de hostias con envoltorio de aventura que se ve sola. Viene a entretenerte, a enseñarte a gente dándose leña con varios estilos y banderas y a dejarte satisfecho, porque si has elegido ver The Quest es porque querías ver algo como The Quest. Si quisieras ver una peli con silencios y con carga emocional, no estarías viendo The Quest." },

{ tipo: "texto", valor: "La oferta de la semana: dos películas que también van de gente repartiéndose a base de bien, con combates uno contra uno y ese rollo de torneo que engancha fácil: Contacto sangriento (Newt Arnold, 1988) y Kickboxer (Mark DiSalle, 1989). Las dos con el belga volador." }

  ],

  etiquetas: [
    "Jean-Claude Van Damme",
    "Frank Dux",
    "Roger Moore",
    "James Remar",
    "David Worth",
    "John Barry",
    "Universal Pictures",
    "Estados Unidos",
    "1996",
    "Acción",
    "Artes marciales"
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
  "Samuel L. Jackson",
  "Kurt Russell",
  "Jennifer Jason Leigh",
  "Walton Goggins",
  "Robert Richardson",
  "Ennio Morricone",
  "The Weinstein Company",
  "Columbia Pictures",
  "Estados Unidos",
  "2015",
  "Western",
  "Thriller"
]
},

/* =========================
   LOS MERCENARIOS
   ========================= */

{
  id: "los-mercenarios-2010",
  seccion: "criticas",
  titulo: "Los mercenarios",
  autor: "Miguel Romero",
  fecha_publicacion: "24/03/2026",
  director: "Sylvester Stallone",
  año: 2010,
  nota: 4,
  destacada: false,
  imagen: {
    src: "los-mercenarios.png",
    alt: "Los mercenarios (2010), dirigida por Sylvester Stallone"
  },
  entradilla: "Los mercenarios se vendía sola antes de rodarse. Era leer que Sylvester Stallone quería juntar a medio gimnasio de los 80 y 90 y ya estabas dentro sin preguntar el argumento.",
  contenido: [

{ tipo: "texto", valor: "Los mercenarios se vendía sola antes de rodarse. Era leer que Sylvester Stallone quería juntar a medio gimnasio de los 80 y 90 y ya estabas dentro sin preguntar el argumento. Jason Statham, Jet Li, Dolph Lundgren, Mickey Rourke… eso no es un reparto, eso es un cartel de feria con tíos que te han acompañado media vida repartiendo hostias. Y con eso ya te han ganado. Porque aquí hay algo que no tienen muchas pelis: el simple hecho de reunir a esa peña ya te justifica la entrada. Da igual lo que pase después." },

{ tipo: "texto", valor: "La peli arranca con lo que esperas: mercenarios, misión, tiros y una isla con un dictador de esos que duran lo justo. Todo muy de manual. Y claro, uno entra pensando que esto va a ser un pum pum pum sin alma, algo tipo la última de Rambo que era pegar tiros y mirar al infinito con cara de estreñido. Pero aquí pasa otra cosa. Aquí, entre explosión y explosión, hay ratos donde los personajes paran, hablan y se dejan ver un poco más allá del músculo. Y eso, aunque dure poco, ya cambia el sabor." },

{ tipo: "texto", valor: "Luego están los momentos que son puro regalo. La escena con Bruce Willis, Arnold Schwarzenegger y Stallone compartiendo plano no dura nada, pero da igual. Es como ver a tres colegas que han sido dioses del género sentados en la misma mesa soltándose pullas. Eso no lo compras con efectos especiales ni con millones de dólares en CGI. Eso es historia del cine de acción mirándose a la cara y diciendo “seguimos aquí”." },

{ tipo: "texto", valor: "Porque esa es otra. Aquí no hay bichos azules ni mundos que flipan cinco minutos y luego te dejan frío. Aquí hay tíos de carne y hueso que sabes quiénes son, que sabes lo que han hecho y que con solo aparecer ya te generan algo. Los efectos de Avatar te hacen decir “qué pasada” durante un rato. Estos cabrones te mantienen enganchado porque cada uno arrastra una mochila de películas detrás que pesa más que cualquier explosión digital." },

{ tipo: "texto", valor: "Y luego está la peli en sí. Hay tiros, hay hostias, hay explosiones que parecen hechas con bidones de gasolina de verdad y no con un ordenador. But también hay pequeñas cosas que suman. La movida de Statham con la chavala, el rollo de Rourke soltando ese monólogo que te deja callado un momento, Lundgren haciendo de tipo que no está muy fino de la cabeza… Son pinceladas, no te van a cambiar la vida, pero le dan algo de cuerpo al asunto." },

{ tipo: "texto", valor: "Stallone, además, dirige con bastante más cabeza de la que muchos esperaban. Sabe cuándo acelerar y cuándo dejar que los personajes respiren un poco. No es un prodigio, pero tampoco es un tío apretando el botón de detonación sin mirar. Se nota que aquí hay cariño por el género, que no es solo juntar colegas y rodar cuatro tiros." },

{ tipo: "texto", valor: "También te digo una cosa: la película tiene sus cosas. La trama es más simple que el mecanismo de un chupete y hay momentos en los que todo va tan directo que parece que le han quitado escenas por el camino. Pero es que tampoco le hace falta mucho más. Esto no va de reinventar nada. Va de ver a esta panda en pantalla haciendo lo que llevan haciendo toda la vida." },

{ tipo: "texto", valor: "Al final, Los mercenarios funciona porque sabe exactamente lo que es. No pide perdón, no intenta hacerse la lista y no se esconde detrás de nada. Es un homenaje con mala leche, con músculo y con un punto de “aquí estamos los de siempre, por si alguien nos echaba de menos”. Y la verdad, para los que hemos crecido con esta peña, eso entra solo, porque los echábamos de menos una puta barbaridad." },

{ tipo: "texto", valor: "La oferta de la semana: dos películas donde el músculo, el carisma y las hostias bien dadas pesan más que cualquier otra cosa y donde los nombres propios ya te hacen sentarte: Con Air (Simon West, 1997) y Depredador (John McTiernan, 1987)." }

  ],
  etiquetas: [
    "Sylvester Stallone",
    "David Callaham",
    "Jason Statham",
    "Jet Li",
    "Dolph Lundgren",
    "Mickey Rourke",
    "Bruce Willis",
    "Arnold Schwarzenegger",
    "Steve Austin",
    "Randy Couture",
    "Terry Crews",
    "Charisma Carpenter",
    "Eric Roberts",
    "Geoffrey Hall",
    "Brian Tyler",
    "Millennium Films",
    "Nu Image",
    "Estados Unidos",
    "2010",
    "Acción",
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
  "I. A. L. Diamond",
  "Jack Lemmon",
  "Shirley MacLaine",
  "Fred MacMurray",
  "Ray Walston",
  "Joseph LaShelle",
  "Adolph Deutsch",
  "The Mirisch Company",
  "United Artists",
  "Estados Unidos",
  "1960",
  "Comedia",
  "Romance"
]
  },

/* =========================
   PROYECTO SALVACIÓN
   ========================= */

{
  id: "proyecto-salvacion-2026",
  seccion: "criticas",
  titulo: "Proyecto Salvación",
  autor: "Sergio Valdés",
  fecha_publicacion: "26/03/2026",
  director: "Phil Lord, Christopher Miller",
  año: 2026,
  nota: 2.5,
  destacada: false,
  estreno: true,
imagen: {
  src: "proyecto-salvacion.png",
  alt: "Proyecto Salvación (2026), dirigida por Phil Lord y Christopher Miller"
},
  entradilla: "La ciencia ficción comercial lleva años intentando resolver una tensión bastante evidente: cómo hacer comprensibles ideas complejas sin que el propio esfuerzo por explicarlas termine ahogando la película.",
  contenido: [

{ tipo: "texto", valor: "La ciencia ficción comercial lleva años intentando resolver una tensión bastante evidente: cómo hacer comprensibles ideas complejas sin que el propio esfuerzo por explicarlas termine ahogando la película. Proyecto Salvación se construye exactamente sobre ese conflicto. La adaptación de la novela de Andy Weir recoge la vocación divulgativa de su autor y la empuja hacia un terreno más amplio, más espectacular y también más dependiente de su propia necesidad de justificarse." },

{ tipo: "texto", valor: "La película sigue a Ryland Grace, interpretado por Ryan Gosling, un científico que despierta solo y desmemoriado y que va reconstruyendo tanto su identidad como el propósito de su misión. Ese punto de partida, pese a ser uno de los clichés del Olimpo de los Clichés, funciona muy bien como motor narrativo porque permite dosificar la información y convertir el aprendizaje en parte del relato. Durante su primer tramo, la película encuentra ahí un ritmo bastante eficaz, apoyándose en la curiosidad y en la implicación directa del espectador." },

{ tipo: "texto", valor: "Gosling sostiene ese arranque con solvencia, moviéndose en un registro que combina desconcierto y ligereza sin perder del todo el peso dramático. Su presencia mantiene la película en pie incluso cuando el guion empieza a girar hacia terrenos más explicativos. A su alrededor, el resto del reparto queda más diluido, funcionando sobre todo como soporte narrativo en los momentos donde la historia necesita avanzar a través de la información." },

{ tipo: "texto", valor: "La dirección corre a cargo de Phil Lord y Christopher Miller, un dúo que ha construido su carrera desde el equilibrio entre irreverencia y precisión narrativa. Su trabajo en títulos como La LEGO película o Infiltrados en clase siempre ha jugado con la mezcla de ritmo, humor y una cierta conciencia del propio relato, algo que aquí se percibe de forma más contenida. En Proyecto Salvación esa personalidad queda parcialmente diluida dentro de un material más rígido, más dependiente de la explicación que del impulso, como si la película marcara más el camino que sus propios directores." },

{ tipo: "texto", valor: "El punto de inflexión llega con la introducción del personaje alienígena, una decisión que cambia el tono de la película de forma bastante clara. Ahí aparece una dinámica más cercana a la comedia de compañeros, una relación que aporta energía y que, en cierto modo, se convierte en el verdadero corazón emocional del conjunto. La película respira mejor en esos tramos porque deja de explicarse constantemente y empieza a apoyarse en la interacción entre personajes." },

{ tipo: "texto", valor: "Ese equilibrio, sin embargo, no se sostiene. A medida que la historia avanza, la necesidad de explicar cada elemento del conflicto vuelve a imponerse y la película entra en una dinámica de sobreexplicación bastante insistente. Conceptos, procesos y soluciones se desarrollan con un nivel de detalle que termina afectando al ritmo, como si la película no terminara de confiar en su propia capacidad para ser entendida o, lo que es más habitual, como si no confiara en que todos y cada uno de los espectadores no sean capaces de entenderla." },

{ tipo: "texto", valor: "Ahí es donde Proyecto Salvación pierde parte de su fuerza. La ambición de ser accesible y rigurosa al mismo tiempo deriva en una acumulación de información que diluye el impacto de muchas de sus ideas. Lo que debería sentirse como avance narrativo se convierte en exposición, y la experiencia empieza a pesar más de lo que la propia película parece prever." },

{ tipo: "texto", valor: "La comparación con Marte (The Martian) aparece casi de forma automática, no solo por el origen compartido, sino por la manera de abordar la ciencia dentro del relato. Allí la explicación formaba parte del ritmo; aquí lo interrumpe. La cosa no va de que haya más o menos información, sino de cómo integrar eso dentro de la narración." },

{ tipo: "texto", valor: "Proyecto Salvación funciona a ratos, especialmente cuando se apoya en sus personajes y en esa relación central que introduce algo de ligereza dentro del conjunto. Pero también arrastra una tendencia constante a justificarse, a explicarse más de lo necesario, y ahí es donde termina limitando su alcance." },

{ tipo: "texto", valor: "El resultado es una película que se deja ver, que tiene elementos claramente eficaces, pero que no termina de encontrar el equilibrio entre lo que quiere contar y cómo decide hacerlo. Y en una propuesta construida precisamente sobre ese equilibrio, esa falta de ajuste pesa más de lo que debería." }

  ],

  etiquetas: [
    "Phil Lord",
    "Christopher Miller",
    "Drew Goddard",
    "Ryan Gosling",
    "Sandra Hüller",
    "Dariusz Wolski",
    "Michael Giacchino",
    "Amazon MGM Studios",
    "Pascal Pictures",
    "Estados Unidos",
    "2026",
    "Ciencia ficción",
    "Aventura"
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
   CUBE
   ========================= */
{
  id: "cube-1997",
  seccion: "criticas",
  titulo: "Cube",
  autor: "Álvaro Ríos",
  fecha_publicacion: "20/03/2026",
  director: "Vincenzo Natali",
  año: 1997,
  nota: 3,
  destacada: false,
  imagen: {
    src: "cube.png",
    alt: "Cube (1997), dirigida por Vincenzo Natali"
  },
  entradilla: "Un experimento de ciencia ficción que parte de una premisa tan potente como limitada, donde la idea resiste mejor que su desarrollo.",

  contenido: [
    { tipo: "texto", valor: "“El infierno está vacío y todos los demonios están aquí.” — William Shakespeare, La tempestad" },

    { tipo: "texto", valor: "Advertencia: este texto menciona elementos narrativos de la película." },

    { tipo: "texto", valor: "Cube (1997), dirigida por Vincenzo Natali, se apoya en una de esas premisas que parecen autosuficientes: un grupo de desconocidos atrapados en una estructura cúbica plagada de trampas, obligados a descifrar un sistema que nunca termina de revelarse del todo. Hay una sequedad conceptual muy atractiva en ese punto de partida, una especie de experimento casi abstracto donde cada movimiento tiene consecuencias inmediatas." },

    { tipo: "texto", valor: "Los primeros compases funcionan precisamente por eso. La película avanza con una lógica sencilla, casi matemática, y el espectador entra en el juego sin resistencia. La amenaza es clara, el espacio es reconocible dentro de su extrañeza y el mecanismo invita a ser descifrado. Durante un buen tramo, Cube mantiene esa tensión con una eficacia que compensa cualquier limitación evidente de producción." },

    { tipo: "subtitulo", valor: "El mecanismo empieza a agotarse antes de lo que debería." },

    { tipo: "texto", valor: "A medida que la estructura se repite, la película pierde parte de su capacidad de inquietar. Las variaciones son mínimas y la sensación de avance se diluye en una sucesión de pruebas que apenas modifican las reglas del juego. La idea sigue siendo buena; la insistencia termina desgastándola." },

    { tipo: "texto", valor: "Los personajes contribuyen a esa erosión. Cada uno parece diseñado para ocupar una función muy concreta dentro del grupo, y esa función se vuelve transparente demasiado pronto. Las decisiones, los conflictos y hasta los estallidos de violencia responden a una lógica previsible, como si la película no confiara del todo en la ambigüedad que su propio planteamiento pedía." },

    { tipo: "texto", valor: "Las interpretaciones se mueven dentro de ese mismo marco. Hay rigidez, hay momentos de evidente artificio, pero también una cierta coherencia con el tipo de cine que Cube decide ser. La película nunca aspira a un naturalismo sofisticado; le basta con que las piezas encajen dentro del dispositivo." },

    { tipo: "texto", valor: "La música de Mark Korven opta por una presencia contenida, casi funcional, que refuerza la sensación de encierro sin imponerse sobre la imagen. Cumple su cometido sin dejar una huella especialmente memorable." },

    { tipo: "texto", valor: "En el fondo, Cube sugiere más de lo que desarrolla. La idea de un sistema cerrado, arbitrario y potencialmente absurdo, donde las reglas existen sin necesidad de explicación, tiene un filo inquietante que la película roza sin llegar a explorar del todo. Ese vacío conceptual juega a su favor durante un tiempo, aunque acaba revelando también sus límites." },

    { tipo: "texto", valor: "Cube sigue siendo un experimento interesante, una película que se recuerda por lo que propone más que por cómo lo ejecuta. Su premisa resiste. Su desarrollo, bastante menos." }
  ],

  etiquetas: [
    "Vincenzo Natali",
    "André Bijelic",
    "Graeme Manson",
    "Nicole de Boer",
    "Maurice Dean Wint",
    "David Hewlett",
    "Nicky Guadagni",
    "Derek Rogers",
    "Mark Korven",
    "The Feature Film Project",
    "Téléfilm Canada",
    "Canadá",
    "1997",
    "Ciencia ficción",
    "Thriller"
  ]
},

/* =========================
   EL AMOR EN SU LUGAR
   ========================= */

{
  id: "el-amor-en-su-lugar-2021",
  seccion: "criticas",
  titulo: "El amor en su lugar",
  autor: "Dolores Aranda",
  fecha_publicacion: "23/03/2026",
  director: "Rodrigo Cortés",
  año: 2021,
  nota: 3.5,
  destacada: false,
  imagen: {
    src: "el-amor-en-su-lugar.png",
    alt: "El amor en su lugar (2021), dirigida por Rodrigo Cortés"
  },
  entradilla: "En el gueto de Varsovia, durante la Segunda Guerra Mundial, una compañía de actores judíos prepara la representación de una comedia musical mientras vive bajo la amenaza constante del régimen nazi. La historia se concentra en una noche concreta, en las horas previas a la función, cuando cada decisión adquiere un peso definitivo. El teatro se convierte en el centro de la acción: un espacio donde los personajes ensayan, negocian, actúan y toman decisiones mientras el exterior permanece presente como una presión constante. La película sigue a ese grupo en tiempo casi real, acompañando sus movimientos por camerinos, pasillos y escenario, y mostrando cómo la ficción que están a punto de representar convive con una realidad que avanza hacia ellos.",
  contenido: [

{ tipo: "texto", valor: "En el gueto de Varsovia, durante la Segunda Guerra Mundial, una compañía de actores judíos prepara la representación de una comedia musical mientras vive bajo la amenaza constante del régimen nazi. La historia se concentra en una noche concreta, en las horas previas a la función, cuando cada decisión adquiere un peso definitivo. El teatro se convierte en el centro de la acción: un espacio donde los personajes ensayan, negocian, actúan y toman decisiones mientras el exterior permanece presente como una presión constante. La película sigue a ese grupo en tiempo casi real, acompañando sus movimientos por camerinos, pasillos y escenario, y mostrando cómo la ficción que están a punto de representar convive con una realidad que avanza hacia ellos." },

{ tipo: "texto", valor: "El amor en su lugar (2021) se apoya en un contexto histórico muy concreto: la actividad teatral real que existió en el gueto de Varsovia, y en particular en la obra Miłość szuka mieszkania de Jerzy Jurandot, representada en 1942. La película no reconstruye un hecho documentado de forma literal, sino que imagina una situación a partir de ese material, concentrando la historia en una única noche y en un espacio cerrado. Esa decisión permite que el relato funcione como una especie de cámara de presión donde todo ocurre a la vista del espectador, sin grandes saltos temporales y con una continuidad muy marcada. El tiempo no se fragmenta, avanza con los personajes, y esa proximidad refuerza la sensación de urgencia que atraviesa toda la película." },

{ tipo: "texto", valor: "El reparto internacional —con Clara Rugaard, Ferdia Walsh-Peelo y Mark Ryder al frente— sostiene esa estructura desde un equilibrio delicado entre lo teatral y lo íntimo. Los personajes están constantemente en tránsito entre dos planos: el de la obra que representan y el de sus propias vidas dentro del gueto. Esa superposición define muchas de las escenas, donde una conversación puede tener al mismo tiempo un sentido dentro de la ficción escénica y otro completamente distinto en la realidad que viven. La película trabaja bien esa ambigüedad y encuentra ahí uno de sus puntos más interesantes, porque permite que el espectador perciba cómo la representación funciona también como una forma de sostenerse frente a lo que ocurre fuera del teatro." },

{ tipo: "texto", valor: "La puesta en escena de Rodrigo Cortés responde a una concepción muy clara del espacio. El teatro, recreado en el Casino del Masnou, se convierte en un organismo cerrado donde cada movimiento está medido. La cámara recorre ese espacio con fluidez, enlazando escenas a través de desplazamientos continuos que refuerzan la idea de unidad temporal. El uso del plano secuencia y de una planificación que evita la fragmentación excesiva contribuye a que la película mantenga una sensación de continuidad constante. La iluminación trabaja en la misma dirección, con interiores donde la luz está controlada y delimitada, creando una atmósfera que refuerza el encierro sin necesidad de recurrir a contrastes evidentes con el exterior, que apenas se muestra pero nunca desaparece del todo." },

{ tipo: "texto", valor: "La música, compuesta por Víctor Reyes, cumple una función doble dentro del film. Por un lado, reconstruye el espíritu de la obra original cuya música se ha perdido, generando números que encajan con la época. Por otro, se integra en la estructura narrativa como parte de la representación que los personajes intentan mantener en pie. Esa integración refuerza la idea de que el espectáculo no es un elemento añadido, sino el núcleo mismo de la película, el lugar donde se cruzan todas las tensiones." },

{ tipo: "texto", valor: "Dentro de ese diseño aparece con claridad uno de los rasgos más característicos del cine de Cortés: su inclinación hacia el mecanismo. La película está construida como un dispositivo donde cada elemento —el tiempo casi real, el espacio único, la superposición de niveles narrativos— responde a una lógica muy definida. Esa organización permite que el relato avance con precisión y que el espectador entienda en todo momento dónde está y qué está ocurriendo. Al mismo tiempo, esa misma precisión genera una distancia particular. La historia se sitúa en un contexto donde la incertidumbre y el desorden forman parte esencial de la experiencia de los personajes, mientras la puesta en escena tiende a ordenar cada situación dentro de un sistema muy controlado. Ese contraste atraviesa la película de principio a fin y define buena parte de su tono." },

{ tipo: "texto", valor: "La narrativa se articula a través de varios niveles que conviven simultáneamente: la vida de los personajes dentro del gueto, la ficción de la obra que están representando y la mirada del público que asiste a la función dentro de la propia historia. Esa estructura añade complejidad al relato y permite que cada escena tenga más de una lectura. Una misma acción puede funcionar como parte del espectáculo y, al mismo tiempo, como una decisión que afecta directamente a la supervivencia de los personajes. La película mantiene ese equilibrio con bastante consistencia, apoyándose en la claridad de su puesta en escena para evitar la confusión." },

{ tipo: "texto", valor: "El resultado es una película que se define por su coherencia formal y por la solidez de su planteamiento. El amor en su lugar construye un espacio donde el arte y la supervivencia conviven de forma inseparable, y donde la representación adquiere un sentido que va más allá del propio espectáculo. La propuesta de Cortés se apoya en un diseño muy preciso que le permite desarrollar esa idea con claridad, aunque esa misma precisión introduce una distancia emocional que forma parte de la identidad de la película." }

  ],

  etiquetas: [
    "Rodrigo Cortés",
    "David Safier",
    "Clara Rugaard",
    "Ferdia Walsh-Peelo",
    "Mark Ryder",
    "Rafa García",
    "Víctor Reyes",
    "Nostromo Pictures",
    "Amor en su lugar AIE",
    "España",
    "2021",
    "Drama",
    "Histórico"
  ]
},
   
/* =========================
   SPIDER-MAN BRAND NEW DAY (TRÁILER)
   ========================= */

{
  id: "spiderman-brand-new-day-trailer",
  seccion: "rumores",
  titulo: "Spider-Man: Brand New Day lanza su primer tráiler",
  autor: "Nil Miralles",
  fecha_publicacion: "19/03/2026",
  destacada: false,
  imagen: {
    src: "brand-new-day.png",
    alt: "Spider-Man: Brand New Day, primer tráiler"
  },
  entradilla: "Marvel y Sony lanzan el primer tráiler de Spider-Man: Brand New Day y desatan una oleada de teorías, análisis y especulación sobre el futuro del personaje.",
  contenido: [

{ tipo: "texto", valor: "Marvel y Sony lanzan el primer tráiler de Spider-Man: Brand New Day y desatan una oleada de teorías, análisis y especulación sobre el futuro del personaje." },

{ tipo: "texto", valor: "Vale, vamos a hablar claro: Marvel y Sony han soltado el primer tráiler de Spider-Man: Brand New Day y esto ha sido como abrir una lata de Coca-Cola agitada. No es el típico avance que ves, comentas por encima y olvidas al rato. Aquí hay intención, hay ritmo y hay una forma muy concreta de enseñar las cosas que deja bastante claro que no están mostrando todo lo que tienen." },

{ tipo: "texto", valor: "En cuestión de horas, medio internet estaba analizando cada plano, cada frase y cada sombra sospechosa del fondo. Y lo curioso es que cuanto más se mira el tráiler, más sensación da de que hay piezas que no terminan de encajar del todo. Es como si todo estuviera colocado para que entiendas lo básico, pero no para que veas el dibujo completo." },

{ tipo: "texto", valor: "Y no es para menos." },

{ tipo: "video", src: "https://www.youtube.com/embed/owfWVJoxXR4" },

{ tipo: "subtitulo", valor: "Un Peter Parker completamente solo (y un tono bastante más oscuro)" },

{ tipo: "texto", valor: "Lo primero que deja claro el tráiler es que esta peli no va a ser “otra más”." },

{ tipo: "texto", valor: "La historia arranca varios años después de No Way Home, con un Peter Parker que vive completamente aislado: nadie recuerda quién es, ni MJ, ni Ned… nadie." },

{ tipo: "texto", valor: "Y eso se nota en el tono. Más callejero, más solitario, menos “equipo Vengadores” y más Spider-Man sobreviviendo por su cuenta." },

{ tipo: "texto", valor: "De hecho, uno de los enfoques que más se repite en los análisis es ese: esto no parece una secuela típica, parece casi un reinicio emocional del personaje." },

{ tipo: "texto", valor: "Vamos, el típico “vale, lo hemos roto todo… ahora empezamos de cero”." },

{ tipo: "subtitulo", valor: "Nuevos aliados… y amenazas bastante curiosas" },

{ tipo: "texto", valor: "El tráiler también deja caer varias cosas interesantes a nivel de personajes:" },

{ tipo: "texto", valor: "· Regresa MJ, pero con una vida completamente separada de Peter (y ojo, con posible nueva pareja)\n· Aparece The Punisher, que no es precisamente el colega más optimista del MCU\n· Vuelve Scorpion como amenaza\n· Tenemos a Bruce Banner/Hulk en un rol bastante distinto al habitual" },

{ tipo: "texto", valor: "Todo esto ya te da una pista clara: la peli va a mezclar historia personal, rollo callejero y conexiones con el MCU más grande." },

{ tipo: "texto", valor: "Un cóctel curioso." },

{ tipo: "subtitulo", valor: "El detalle que ha disparado los rumores" },

{ tipo: "texto", valor: "Ahora viene la parte divertida." },

{ tipo: "texto", valor: "Porque más allá de lo que enseña el tráiler, lo que ha hecho explotar internet son los detalles que no explica del todo." },

{ tipo: "texto", valor: "El más comentado: Peter parece estar sufriendo algún tipo de mutación, incluso con pistas de que podría generar telarañas de forma orgánica." },

{ tipo: "texto", valor: "Y claro, aquí ya ha empezado el festival:" },

{ tipo: "texto", valor: "· Teorías sobre experimentos genéticos\n· Conexiones con Oscorp\n· Gente hablando de versiones alternativas del personaje\n· Comparaciones con el Spider-Man de Tobey Maguire" },

{ tipo: "texto", valor: "El fandom, en su estado natural." },

{ tipo: "subtitulo", valor: "Sadie Sink y el clásico misterio Marvel" },

{ tipo: "texto", valor: "Y luego está el tema de Sadie Sink." },

{ tipo: "texto", valor: "El tráiler no deja claro quién interpreta, pero eso no ha impedido que ya haya teorías para aburrir:" },

{ tipo: "texto", valor: "· Jean Grey (sí, ya estamos metiendo a los X-Men)\n· Algún personaje nuevo vinculado al multiverso\n· Una sorpresa completamente distinta" },

{ tipo: "texto", valor: "Los medios internacionales ya recogen esta incertidumbre como uno de los grandes misterios del proyecto." },

{ tipo: "texto", valor: "Porque si algo le gusta a Marvel es dejarte pistas sin darte respuestas." },

{ tipo: "subtitulo", valor: "Un tráiler que ha arrasado (y eso también dice mucho)" },

{ tipo: "texto", valor: "Por cierto, pequeño detalle que no es menor: el tráiler ha superado cifras masivas de visualizaciones en muy poco tiempo." },

{ tipo: "texto", valor: "Eso no es solo hype." },

{ tipo: "texto", valor: "Eso es el equivalente a decir: “vale, la gente sigue MUY dentro de Spider-Man”." },

{ tipo: "subtitulo", valor: "Entonces… ¿qué pinta tiene todo esto?" },

{ tipo: "texto", valor: "Te lo resumo como lo diría con una cerveza delante:" },

{ tipo: "texto", valor: "Marvel y Sony están jugando aquí a algo interesante." },

{ tipo: "texto", valor: "No están intentando hacer No Way Home 2." },

{ tipo: "texto", valor: "Están intentando hacer una nueva etapa de Spider-Man:" },

{ tipo: "texto", valor: "· Más personal\n· Más aislada\n· Con semillas para algo mucho más grande" },

{ tipo: "texto", valor: "Y los rumores que están saliendo alrededor del tráiler van justo por ahí: esto no es solo una peli más, es el inicio de algo." },

{ tipo: "subtitulo", valor: "Y ahora viene lo importante" },

{ tipo: "texto", valor: "Porque al final, todo esto está muy bien —tráiler, teorías, hype— pero la pregunta real es otra:" },

{ tipo: "texto", valor: "¿Va a conseguir esta peli que volvamos a sentir lo mismo que con Spider-Man… sin multiverso, sin nostalgia y sin tres Spider-Men en pantalla?" },

{ tipo: "texto", valor: "Si lo logran, Marvel tiene oro." },

{ tipo: "texto", valor: "Si no… bueno, al menos el tráiler ya nos ha dado semanas de debate." },

{ tipo: "texto", valor: "Y eso, siendo honestos, también forma parte del espectáculo." }

  ],
  etiquetas: [
    "Spider-Man",
    "Marvel",
    "Marvel Studios",
    "Sony Pictures",
    "MCU",
    "Estados Unidos",
    "Superhéroes"
  ]
},

/* =========================
   TORRENTE PRESIDENTE
   ========================= */

{
  id: "torrente-presidente-2026",
  seccion: "criticas",
  titulo: "Torrente, Presidente",
  autor: "Irene Salgado",
  fecha_publicacion: "20/03/2026",
  director: "Santiago Segura",
  año: 2026,
  nota: 2.5,
  destacada: false,
  estreno: true,
  imagen: {
    src: "torrente-presidente.png",
    alt: "Torrente Presidente (2026), dirigida por Santiago Segura"
  },
  entradilla: "Una nueva entrega que mantiene el humor reconocible del personaje mientras deja ver cierto desgaste en sus mecanismos.",
  contenido: [

{ tipo: "texto", valor: "Una nueva entrega que mantiene el humor reconocible del personaje mientras deja ver cierto desgaste en sus mecanismos." },

{ tipo: "texto", valor: "Entrar en Torrente Presidente es aceptar desde el primer minuto el tipo de viaje que propone Santiago Segura. Yo entro fácil en Torrente. Me hace gracia ese tipo de personaje que parece sacado de la calle, exagerado hasta el esperpento, pero reconocible en demasiadas cosas como para mirarlo con distancia cómoda. Me río porque identifico comportamientos, frases, actitudes que he visto mil veces. Esa cercanía incómoda es parte del mecanismo." },

{ tipo: "texto", valor: "La película coloca a Torrente en un contexto político que le viene como anillo al dedo. La idea de verlo moverse dentro de ese entorno ya tiene algo de chiste en sí misma. Todo arranca con esa energía de disparate controlado, con Torrente ocupando espacios que le quedan grandes y pequeños a la vez, y con una sensación constante de que cualquier cosa puede pasar en cualquier momento. A mí eso me funciona durante buena parte del metraje. Me relajo dentro de ese caos." },

{ tipo: "texto", valor: "El desarrollo avanza a base de situaciones más que de una historia cerrada con precisión. Hay una sucesión de escenas que buscan el gag, la reacción, la incomodidad. Algunas entran muy bien. Hay momentos en los que me reí de verdad, de esos que te salen solos y no te da tiempo a analizarlos. Otros pasan más rápido, se quedan en una sonrisa ligera o en una idea que podría haber dado más de sí. Esa irregularidad está ahí todo el tiempo, y forma parte de la experiencia de ver la película." },

{ tipo: "texto", valor: "Santiago Segura dirige con una intención muy clara. Quiere que la película sea un vehículo para el humor del personaje. La cámara se coloca al servicio de eso, sin buscar grandes alardes formales. Todo está pensado para que Torrente sea el centro absoluto, para que cada escena gire a su alrededor y para que el ritmo no se detenga demasiado en nada que no tenga potencial cómico. Esa decisión hace que la película avance ligera, aunque también provoca que algunos momentos se queden sin desarrollar." },

{ tipo: "texto", valor: "Hay algo que me interesa especialmente en esta entrega, y es cómo el personaje se relaciona con el contexto actual. Torrente siempre ha funcionado como una caricatura muy exagerada de ciertos comportamientos. Aquí esa caricatura se mezcla con un entorno político reconocible, y la combinación tiene gracia porque amplifica lo ridículo de ambos lados. Yo veo a Torrente y no lo siento como algo ajeno. Me recuerda a conversaciones, a comentarios escuchados en bares, a actitudes que aparecen en el día a día. Esa conexión es la que sostiene muchas de las escenas." },

{ tipo: "texto", valor: "El reparto que acompaña a Torrente entra en ese juego con naturalidad. Hay apariciones que funcionan como pequeños golpes de humor, como guiños que suman al tono general. La película tiene ese aire de fiesta un poco desordenada donde van entrando personajes, soltando su momento y dejando paso al siguiente. A mí ese formato me resulta simpático cuando estoy dentro del código que propone." },

{ tipo: "texto", valor: "También hay un punto de desgaste que se percibe. El personaje lleva muchos años entre nosotros y eso se nota en algunos recursos que resultan familiares. Hay chistes que recuerdan a otros, dinámicas que ya conocemos. Aun así, cuando la película acierta, acierta bien. Y cuando me hace reír, me olvido bastante rápido de lo demás." },

{ tipo: "texto", valor: "Yo con Torrente tengo una relación bastante clara. Sé perfectamente que no estoy viendo una gran película en términos de construcción, de guion o de ambición formal. Tampoco la necesito así. Entro porque me apetece pasar un rato divertido, porque me interesa esa mirada deformada de la realidad y porque me hace gracia reconocer en pantalla ese tipo de ser humano que me cruzo más de lo que me gustaría." },

{ tipo: "texto", valor: "Salgo de Torrente Presidente con una sensación agradable. Me he reído, he reconocido cosas, he pasado un buen rato. También veo las costuras, los momentos que podrían haber ido más lejos, las ideas que se quedan a medio camino. Todo eso convive sin problema." }

  ],
  etiquetas: [
    "Santiago Segura",
    "Saga Torrente",
    "España",
    "2026",
    "Comedia",
    "Atresmedia Cine",
    "Amiguetes Entertainment",
    "Roque Baños",
    "Kiko de la Rica"
  ]
},

/* =========================
   LA BRUJA
   ========================= */

{
  id: "la-bruja-2015",
  seccion: "criticas",
  titulo: "La bruja",
  autor: "Paula Elizábal",
  fecha_publicacion: "22/03/2026",
  director: "Robert Eggers",
  año: 2015,
  nota: 3.5,
  destacada: true,
  imagen: {
    src: "la-bruja.png",
    alt: "La bruja (2015), dirigida por Robert Eggers"
  },
  entradilla: "Un terror que nace del aislamiento, la fe y la ruptura familiar, construido desde dentro con una coherencia tan precisa como inquietante.",
  contenido: [

{ tipo: "texto", valor: "Un terror que nace del aislamiento, la fe y la ruptura familiar, construido desde dentro con una coherencia tan precisa como inquietante." },

{ tipo: "texto", valor: "En The Witch seguimos a una familia puritana en la Nueva Inglaterra del siglo XVII que es expulsada de su comunidad tras un conflicto religioso provocado por el padre, incapaz de someterse a la autoridad del resto. Se instalan junto a un bosque y, a partir de ahí, una desaparición, el comportamiento extraño de los hijos y una sensación constante de amenaza empiezan a tensar la convivencia. La película se mueve en ese terreno ambiguo donde lo sobrenatural y lo psicológico se mezclan sin separarse del todo." },

{ tipo: "texto", valor: "Lo que ocurre a partir de ese punto tiene mucho más que ver con cómo esa familia empieza a resquebrajarse que con cualquier elemento externo. El aislamiento deja de ser un simple contexto y se convierte en el verdadero motor de la película, en el espacio donde todo se amplifica. El bosque está ahí, pero funciona casi como una extensión de ese deterioro interno. Lo que realmente pesa es la forma en la que los miembros de la familia dejan de reconocerse entre ellos, cómo la confianza se erosiona y da paso a una convivencia cada vez más tensa." },

{ tipo: "texto", valor: "La expulsión inicial atraviesa toda la película y define el tono desde el principio. El hecho podría quedarse solo en una ruptura con la comunidad, pero resulta ser el ejemplo perfecto de una forma muy concreta de entender el mundo: rígida, inflexible, incapaz de convivir con otros matices. Ese mismo marco es el que después condiciona todo lo que ocurre dentro de la casa. Salen buscando pureza y acaban en un espacio donde esa misma pureza se convierte en una carga que los encierra y los entierra." },

{ tipo: "texto", valor: "Robert Eggers construye ese entorno con una precisión muy poco habitual. La luz naturalista ayuda a exponer los rincones precisos del cuadro. Los interiores son densos, cargados, con una sensación constante de peso que nunca desaparece. La cámara observa sin intervenir, se queda el tiempo necesario para que el espectador note ese desgaste progresivo, como si la película te obligara a convivir con esa incomodidad sin ofrecerte una vía de escape." },

{ tipo: "texto", valor: "La auténtica tensión nace de cómo se relacionan entre ellos. Cada conversación arrastra culpa, religión y una necesidad constante de dar sentido a lo que está ocurriendo. Esa necesidad, en su transitar, va cerrando caminos. Cada intento de explicación añade más presión, más sospecha, más distancia. Las miradas cambian, los gestos se endurecen y la familia empieza a funcionar como un espacio hostil en el que cualquiera puede convertirse en el problema." },

{ tipo: "texto", valor: "La fe actúa como un filtro que lo distorsiona todo. Cada personaje interpreta lo que ocurre desde una estructura mental que ya viene condicionada, y eso impide cualquier lectura alternativa. Aquí nada es relativo, todo es absoluto. Todo se vuelve definitivo, y eso empuja a los personajes a posiciones cada vez más extremas, reduciendo el margen de movimiento hasta que ya no queda salida posible." },

{ tipo: "texto", valor: "Anya Taylor-Joy se convierte en el eje de todo ese proceso. Su personaje queda atrapado en una dinámica que la señala desde el principio, en un entorno que ya ha decidido qué representa antes de que pueda defenderse. La película sigue ese desplazamiento sin necesidad de forzarlo, dejando que la presión del grupo la arrastre poco a poco hacia el lugar al que inevitablemente iba a llegar. Para que eso funcione, es fundamental el brillante trabajo (uno más) de esta actriz de talento casi único." },

{ tipo: "texto", valor: "El uso del lenguaje refuerza esa sensación de distancia constante. Los diálogos, a menudo cortos y secos, van separando a los personajes cada vez más. Cada frase tiene un peso específico que añade fricción, que dificulta la comunicación y que contribuye a que la relación entre ellos se vuelva cada vez más rígida, más incómoda, más insostenible." },

{ tipo: "texto", valor: "El tramo final recoge todo lo que se ha ido acumulando y lo lleva hasta sus últimas consecuencias sin cambiar las reglas del juego. Lejos de tener un giro que lo altere todo, hay una continuidad que termina de cerrar el círculo. La sensación deja de ser incertidumbre y se convierte en algo más definitivo, más claro, más difícil de revertir." },

{ tipo: "texto", valor: "The Witch funciona porque construye su tensión desde dentro y la mantiene con una coherencia muy calculada y extremadamente elegante. Cada decisión refuerza la misma idea y empuja en la misma dirección, sin desviarse ni un milímetro." },

{ tipo: "texto", valor: "Y cuando todo encaja, lo que queda no es una explicación tranquilizadora. Es la sensación de haber asistido a algo que se ha desarrollado exactamente como tenía que hacerlo. Eso, en mi opinión, es lo verdaderamente terrorífico de la película y lo que la cierra de forma redonda." }

  ],
  etiquetas: [
    "Robert Eggers",
    "Anya Taylor-Joy",
    "Ralph Ineson",
    "Kate Dickie",
    "Jarin Blaschke",
    "Mark Korven",
    "A24",
    "Parts and Labor",
    "2015",
    "Terror",
    "Estados Unidos"
  ]
},
   
/* =========================
   SPIDER-MAN BRAND NEW DAY (VILLANO OCULTO)
   ========================= */

{
  id: "spiderman-brand-new-day-villano-oculto",
  seccion: "rumores",
  titulo: "El tráiler de Spider-Man: Brand New Day esconde un villano… y las teorías apuntan a algo mucho más grande de lo que parece",
  autor: "Nil Miralles",
  fecha_publicacion: "20/03/2026",
  destacada: false,
  imagen: {
    src: "brand-new-day.png",
    alt: "Spider-Man: Brand New Day, teorías sobre el villano oculto"
  },
  entradilla: "El nuevo tráiler de Spider-Man: Brand New Day deja más preguntas que respuestas y ha disparado teorías sobre la presencia de un villano oculto mucho más importante de lo que parece.",
  contenido: [

{ tipo: "texto", valor: "Vale, vamos a sentarnos un momento y hablar de lo que realmente importa del tráiler de Spider-Man: Brand New Day. Porque sí, hay acción, hay personajes conocidos y hay ese Peter Parker más solo que nunca intentando reconstruir su vida después de No Way Home. Pero más allá de todo eso, hay una sensación bastante clara que se te queda en la cabeza cuando termina el tráiler: aquí falta alguien. O mejor dicho, aquí hay alguien que Marvel no quiere enseñarte todavía." },

{ tipo: "texto", valor: "Y claro, cuando Marvel juega a esconder cartas, ya sabemos cómo funciona esto. No es casualidad, no es un despiste, y desde luego no es porque no tengan material que enseñar. Es una decisión consciente. Y eso es lo que ha hecho que varios medios especializados coincidan en la misma lectura: lo que estamos viendo no es el cuadro completo, sino solo la superficie." },

{ tipo: "subtitulo", valor: "Lo que el tráiler enseña… y lo que no termina de explicar" },

{ tipo: "texto", valor: "Si te quedas solo con lo evidente, el tráiler parece bastante claro. Tenemos a Spider-Man enfrentándose a amenazas más “de calle”, con villanos como Scorpion o Tombstone entrando en juego, lo que refuerza ese tono más urbano y más cercano al cómic clásico del personaje. Después de una película tan descomunal como No Way Home, este cambio hacia algo más contenido tiene todo el sentido del mundo." },

{ tipo: "texto", valor: "Pero el problema —o más bien, lo interesante— es que hay varios momentos en el tráiler que no encajan del todo con ese enfoque. Hay escenas donde los personajes parecen actuar de forma extraña, donde se insinúa algún tipo de manipulación o influencia externa, y donde la amenaza no se presenta como algo físico que puedas resolver con un par de puñetazos y una buena coreografía de CGI." },

{ tipo: "texto", valor: "Esa disonancia es justo lo que ha encendido las alarmas. Porque cuando una película te vende un tipo de conflicto pero deja caer pistas de otro completamente distinto, normalmente significa que hay un villano mayor operando en la sombra." },

{ tipo: "subtitulo", valor: "El patrón clásico de Marvel: enseñar secundarios, ocultar al importante" },

{ tipo: "texto", valor: "Aquí Marvel no está inventando nada nuevo. De hecho, está aplicando una de sus jugadas favoritas desde hace años: mostrarte a los villanos “visibles” en el tráiler mientras guarda el verdadero antagonista para la película. Lo hemos visto antes y lo seguiremos viendo, porque funciona." },

{ tipo: "texto", valor: "Scorpion, Tombstone y compañía podrían ser simplemente la cara visible del conflicto, pero no necesariamente el núcleo de la historia. Es decir, funcionan como obstáculos, como piezas del tablero, pero no como el jugador que mueve las fichas." },

{ tipo: "texto", valor: "Y eso cambia bastante la película. Porque pasas de una historia de Spider-Man contra criminales a una historia donde hay una inteligencia detrás organizando el caos." },

{ tipo: "subtitulo", valor: "Las pistas que apuntan a un villano “diferente”" },

{ tipo: "texto", valor: "Uno de los elementos más comentados en los análisis del tráiler es la posible presencia de habilidades que no encajan con los villanos confirmados. Se habla de comportamientos alterados, de situaciones donde los personajes parecen no tener control total sobre sus acciones y de una amenaza que no es puramente física." },

{ tipo: "texto", valor: "Eso ha llevado a muchos a pensar en un tipo de villano que el MCU todavía no ha explorado del todo en el contexto de Spider-Man: alguien con capacidades más mentales que físicas. No necesariamente alguien que se enfrente directamente a Peter en combate, sino alguien que pueda manipular, influir o incluso controlar desde la distancia." },

{ tipo: "texto", valor: "Y aquí es donde empiezan las teorías más interesantes, porque este tipo de enemigo cambia completamente la dinámica de la película. Spider-Man ya no solo tiene que pelear, tiene que entender qué está pasando, quién está detrás y cómo enfrentarse a algo que no puede simplemente golpear." },

{ tipo: "subtitulo", valor: "El factor Sadie Sink y el misterio que rodea su personaje" },

{ tipo: "texto", valor: "Y luego está el tema que no se puede ignorar: el personaje de Sadie Sink. Porque el tráiler la muestra, pero no la explica. Y eso, en una producción de Marvel, no es casualidad." },

{ tipo: "texto", valor: "Su papel podría ser clave dentro de la historia, precisamente porque está rodeado de misterio. No sabemos quién es, no sabemos de dónde viene y, lo más importante, no sabemos qué papel juega en el conflicto. Y cuando un personaje se introduce así, sin contexto claro, suele ser porque tiene más peso del que parece." },

{ tipo: "texto", valor: "Algunas teorías apuntan a que podría estar relacionada con poderes que encajen con ese componente más mental o psicológico que se intuye en el tráiler. Otras van más allá y empiezan a conectar con conceptos más grandes dentro del MCU, lo que abriría la puerta a que la película no solo cuente una historia cerrada, sino que plantee algo más de cara al futuro." },

{ tipo: "texto", valor: "No hay confirmaciones, pero la sensación es clara: su personaje no está ahí de adorno." },

{ tipo: "subtitulo", valor: "¿Un villano oculto… o el inicio de algo más grande?" },

{ tipo: "texto", valor: "Si juntas todas las piezas —las escenas que no encajan del todo, el tono más oscuro, la posible manipulación, el misterio alrededor de ciertos personajes— la conclusión a la que están llegando muchos análisis es bastante clara: Brand New Day podría estar escondiendo algo más grande de lo que parece a simple vista." },

{ tipo: "texto", valor: "No sería solo una película de transición para Spider-Man, sino una historia que introduce nuevas amenazas, nuevos conceptos y, posiblemente, nuevas direcciones para el personaje dentro del MCU." },

{ tipo: "texto", valor: "Y eso encaja bastante bien con el momento en el que está Marvel ahora mismo. Necesitan construir nuevas piezas, nuevos conflictos y nuevos villanos que sostengan lo que viene después." },

{ tipo: "subtitulo", valor: "Entonces… ¿qué está haciendo realmente Marvel?" },

{ tipo: "texto", valor: "Te lo digo claro: Marvel no te está enseñando la película. Te está enseñando la mitad que quiere que veas." },

{ tipo: "texto", valor: "Porque el tráiler funciona perfectamente si lo ves como una historia más pequeña, más personal, más centrada en Spider-Man. Pero en cuanto empiezas a rascar un poco, aparecen detalles que apuntan a algo mucho más ambicioso." },

{ tipo: "texto", valor: "Y ahí es donde está la gracia." },

{ tipo: "texto", valor: "Ahora mismo estamos en ese punto en el que todo son teorías, interpretaciones y piezas sueltas. Pero hay algo bastante claro: hay un villano que todavía no hemos visto… y probablemente sea el más importante de la película." },

{ tipo: "texto", valor: "Y sinceramente, esa es justo la clase de misterio que hace que quieras ir al cine a comprobar si estabas en lo cierto." },

{ tipo: "texto", valor: "Spoiler: probablemente no lo estaremos. Y mejor así." },

{
  tipo: "relacionados",
  ids: [
    "spiderman-brand-new-day-trailer"
  ]
}

  ],
  etiquetas: [
  "Spider-Man",
  "Marvel",
  "Marvel Studios",
  "Sony Pictures",
  "MCU",
  "Sadie Sink",
  "Estados Unidos",
  "Superhéroes"
]
},

/* =========================
   EL BOSQUE
   ========================= */

{
  id: "el-bosque-2004",
  seccion: "criticas",
  titulo: "El bosque",
  autor: "Álvaro Ríos",
  fecha_publicacion: "20/03/2026",
  director: "M. Night Shyamalan",
  año: 2004,
  nota: 4,
  destacada: false,
  imagen: {
    src: "el-bosque.png",
    alt: "El bosque (2004), dirigida por M. Night Shyamalan"
  },
  entradilla: "Shyamalan construye una fábula sobre el miedo como estructura social, sostenida más por la atmósfera y la idea que por el efectismo.",
  contenido: [

{ tipo: "texto", valor: "Shyamalan construye una fábula sobre el miedo como estructura social, sostenida más por la atmósfera y la idea que por el efectismo." },

{ tipo: "texto", valor: "«El miedo es el más ignorante, el más injurioso y el más cruel de los consejeros.» — Edmund Burke" },

{ tipo: "texto", valor: "Advertencia: este texto menciona elementos narrativos de la película." },

{ tipo: "texto", valor: "El bosque (2004), escrita y dirigida por M. Night Shyamalan, se enfrenta desde su concepción a un problema que no es estrictamente suyo: la expectativa. A esas alturas, el director ya había sido reducido a un mecanismo, a una especie de ilusionista al que se le exige truco antes incluso de levantar el telón. La película arrastra ese peso, aunque lo verdaderamente relevante es que decide no someterse del todo a él." },

{ tipo: "texto", valor: "La historia se sitúa en una comunidad rural situada en otro tiempo, organizada en torno a normas estrictas y a un equilibrio frágil con aquello que habita en el bosque que la rodea. Hay colores prohibidos, límites infranqueables y una amenaza constante que se mantiene fuera de campo durante buena parte del metraje. El planteamiento remite al cuento moral, a esa forma de relato que establece reglas claras para observar cómo se comportan los personajes dentro de ellas." },

{ tipo: "texto", valor: "Shyamalan construye ese mundo con una paciencia poco frecuente. La película avanza sin prisa, apoyada en una acumulación de detalles que generan una inquietud progresiva: silencios, miradas, pequeñas alteraciones en la rutina. Durante un largo tramo, El bosque funciona como una pieza de atmósfera, más interesada en sostener una sensación que en precipitar acontecimientos." },

{ tipo: "subtitulo", valor: "El miedo como estructura" },

{ tipo: "texto", valor: "El relato se sostiene sobre una idea incómoda: el miedo como estructura." },

{ tipo: "texto", valor: "A medida que la película avanza, lo que parecía una amenaza externa empieza a adquirir otra dimensión. El interés deja de estar en lo que hay en el bosque para desplazarse hacia cómo se organiza la vida dentro del poblado. Shyamalan articula así una fábula bastante directa sobre el miedo entendido como herramienta de orden, como elemento capaz de definir una comunidad entera." },

{ tipo: "texto", valor: "Ahí es donde la película se distancia de la lectura más superficial que se le ha impuesto durante años. La obsesión por el giro final —por su naturaleza, por su eficacia— ha eclipsado con frecuencia lo que ocurre antes y después de él. El bosque no se construye para sorprender, sino para sostener una lógica interna que, cuando se revela, reorganiza lo anterior sin voluntad de invalidarlo." },

{ tipo: "texto", valor: "Formalmente, Shyamalan encuentra aquí un equilibrio poco habitual en su cine. Su tendencia a la afectación queda contenida, casi disciplinada. La puesta en escena es elegante sin caer en el exhibicionismo, y el ritmo —deliberadamente pausado— permite que la película crezca sin necesidad de recurrir a artificios constantes. Hay una seguridad en la forma que rara vez se ve en el resto de su filmografía." },

{ tipo: "texto", valor: "El trabajo de los actores contribuye de manera decisiva a esa estabilidad. Bryce Dallas Howard construye un personaje sostenido en una fisicidad precisa, donde cada gesto parece medido pero nunca mecánico. Su presencia articula buena parte de la carga emocional de la película. Joaquin Phoenix, por su parte, opta por una contención casi extrema, una forma de estar en escena que encaja con la lógica de un mundo donde las emociones parecen filtradas por censuras populares. Alrededor de ellos, William Hurt y Sigourney Weaver aportan una gravedad necesaria para que la comunidad resulte verosímil." },

{ tipo: "texto", valor: "La música de James Newton Howard se integra con especial inteligencia en el conjunto. Su partitura, basada en cuerdas, introduce una dimensión emocional que nunca se impone de forma evidente. Acompaña, sugiere, sostiene." },

{ tipo: "texto", valor: "El bosque ha sido leída durante años como una película fallida, en gran medida por una relación problemática con las expectativas del público. Vista con cierta distancia, esa lectura se revela insuficiente. Shyamalan entrega aquí una obra más contenida, más honesta y, en cierto modo, más consciente de sus propias limitaciones que en otros momentos de su carrera." },

{ tipo: "texto", valor: "Puede que no alcance una perfección formal incontestable, pero aquí gana gracias a esa imperfección." },

{ tipo: "texto", valor: "Dentro de una filmografía marcada por altibajos y por una constante necesidad de demostrar algo, El bosque destaca precisamente por lo contrario: por su renuncia parcial al efectismo y por su apuesta por una idea sostenida en el tiempo. Es, tal vez con el permiso de El protegido, la mejor película de este controvertido y generalmente demasiado ambicioso director." }

  ],
  etiquetas: [
    "M. Night Shyamalan",
    "Bryce Dallas Howard",
    "Joaquin Phoenix",
    "William Hurt",
    "Sigourney Weaver",
    "Roger Deakins",
    "James Newton Howard",
    "Touchstone Pictures",
    "Blinding Edge Pictures",
    "2004",
    "Drama",
    "Thriller",
    "Estados Unidos"
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
  "Kōichi Yamadera",
  "Emi Shinohara",
  "Takeshi Aono",
  "Osamu Saka",
  "Toshiyuki Honda",
  "Kaoru Wada",
  "Madhouse",
  "Toho",
  "Japón",
  "1993",
  "Anime",
  "Acción",
  "Fantasía"
]
  },

/* =========================
   EL CUERPO
   ========================= */

{
  id: "el-cuerpo-2012",
  seccion: "criticas",
  titulo: "El cuerpo",
  autor: "Germán Juncosa",
  fecha_publicacion: "20/03/2026",
  director: "Oriol Paulo",
  año: 2012,
  nota: 2,
  destacada: false,
  imagen: {
    src: "el-cuerpo.png",
    alt: "El cuerpo (2012), dirigida por Oriol Paulo"
  },
  entradilla: "Un thriller que funciona con precisión en su planteamiento y ritmo, pero que termina mostrando demasiado pronto el artificio sobre el que se sostiene.",
  contenido: [

{ tipo: "texto", valor: "Un thriller que funciona con precisión en su planteamiento y ritmo, pero que termina mostrando demasiado pronto el artificio sobre el que se sostiene." },

{ tipo: "texto", valor: "El cuerpo es una de esas películas que funcionan con precisión durante buena parte de su metraje y que, al mismo tiempo, dejan una sensación extraña cuando se miran con un poco de distancia. La experiencia inmediata tiene algo de eficaz, incluso de absorbente, porque el planteamiento es limpio y la puesta en escena entiende muy bien el tipo de tensión que quiere construir. La desaparición de un cadáver en una morgue, el espacio cerrado, la noche como marco temporal y un puñado de personajes atrapados en una situación que no terminan de comprender. Con muy pocos elementos, la película encuentra una base sólida desde la que empezar a jugar." },

{ tipo: "texto", valor: "Ahí es donde mejor se mueve. En la gestión del espacio y en la dosificación de la información. Oriol Paulo construye la intriga apoyándose en una progresión bastante clara, en la que cada nueva pieza altera ligeramente la anterior y mantiene al espectador dentro del juego. Hay oficio en cómo se administran los tiempos, en cómo se colocan los giros intermedios y en cómo se mantiene la atención sin necesidad de grandes alardes visuales. La película avanza con ritmo y sabe sostener la tensión durante un tramo considerable, algo que no siempre es fácil en un thriller tan dependiente de su premisa." },

{ tipo: "texto", valor: "El reparto acompaña bien ese planteamiento. José Coronado aporta una presencia sólida, con esa mezcla de autoridad y desgaste que encaja con el tono del relato, mientras que Hugo Silva se mueve en un registro más nervioso que ayuda a sostener la incertidumbre. Belén Rueda, desde un lugar más contenido, funciona como pieza clave dentro del engranaje narrativo, en una película que depende mucho de cómo se dosifica la información sobre su personaje." },

{ tipo: "texto", valor: "El problema aparece cuando uno empieza a ver el mecanismo en funcionamiento con demasiada claridad. El cuerpo apuesta por una acumulación constante de giros y revelaciones que terminan pesando más que la propia historia. Cada nueva vuelta de tuerca busca reactivar la intriga, pero al hacerlo va desplazando el interés desde la situación hacia el artificio. La película deja de apoyarse en lo que está ocurriendo para apoyarse en cómo va a sorprender al espectador en el siguiente movimiento." },

{ tipo: "texto", valor: "Hay además un elemento concreto que sostiene buena parte del desarrollo y que resulta especialmente difícil de aceptar. La película introduce una pieza clave en la relación entre los personajes que exige un grado de credulidad muy alto y que termina condicionando decisiones fundamentales del relato. Sobre el papel funciona como un giro elegante, pero cuando uno se detiene a pensarlo, la construcción se resiente y deja ver un punto de partida demasiado forzado para todo lo que viene después. En una historia que depende tanto de ese movimiento, ese desequilibrio pesa más de lo que debería." },

{ tipo: "texto", valor: "Esa forma de construir el relato tiene un efecto inmediato: la tensión se mantiene, pero la implicación se resiente. Cuesta entrar de verdad en lo que les pasa a los personajes porque todo parece subordinado al siguiente giro. Las decisiones, los comportamientos y algunas resoluciones empiezan a sentirse más diseñadas que vividas. La película sigue avanzando con firmeza, pero lo hace sobre una base cada vez más inestable." },

{ tipo: "texto", valor: "El tramo final concentra buena parte de esas sensaciones. El cierre está pensado para encajar todas las piezas y ofrecer una explicación completa del recorrido. La estructura se cierra con precisión, pero esa misma precisión deja al descubierto el carácter calculado de todo el conjunto. El impacto existe, aunque llega acompañado de una cierta sensación de exceso, como si la película necesitara poner en negrita su propio ingenio." },

{ tipo: "texto", valor: "El cuerpo termina siendo un thriller eficaz en su planteamiento y en su desarrollo inmediato, capaz de atrapar mientras dura, pero más discutible cuando se observa el conjunto. Funciona por su ritmo, por su capacidad para sostener la intriga y por un uso del espacio bastante bien resuelto. Se resiente en la acumulación de recursos de guion y en una tendencia a forzar el mecanismo hasta hacerlo demasiado visible." },

{ tipo: "texto", valor: "No es una película que se venga abajo, pero sí una que pierde fuerza a medida que intenta apretar más de la cuenta. Se deja ver con interés y cumple dentro de su terreno, aunque deja la impresión de que, con un planteamiento más contenido, habría tenido un recorrido mucho más sólido." }

  ],
  etiquetas: [
    "Oriol Paulo",
    "José Coronado",
    "Hugo Silva",
    "Belén Rueda",
    "Aura Garrido",
    "Óscar Faura",
    "Sergio Moure",
    "Rodar y Rodar",
    "Antena 3 Films",
    "2012",
    "Thriller",
    "España"
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
  "C. Robert Cargill",
  "Ethan Hawke",
  "James Ransone",
  "Fred Dalton Thompson",
  "Clare Foley",
  "Chris Norr",
  "Christopher Young",
  "Blumhouse Productions",
  "Automatik Entertainment",
  "Estados Unidos",
  "2012",
  "Terror",
  "Thriller"
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
  "Pol Rodríguez",
  "Suma Content",
  "Filmin",
  "España",
  "2026",
  "Comedia"
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
  "Álvaro Medina",
  "Santiago Racaj",
  "Aránzazu Calleja",
  "Distinto Films",
  "Dos Soles Media",
  "España",
  "2026",
  "Drama"
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

   const paginaActual = window.location.pathname;
   
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

 if (
  paginaActual === "/" ||
  paginaActual.includes("index") ||
  paginaActual.includes("autor")
) {

  let tipoClase = "";
  let tipoTexto = "";

  if (
  paginaActual.includes("tag") ||
  paginaActual.includes("autor") ||
  paginaActual === "/" ||
  paginaActual.includes("index")
) {

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

} else {
  bannerHTML = "";
}

  bannerHTML = `
    <div class="miniatura-banner ${tipoClase}">
      ${tipoTexto}
    </div>
  `;

} else {
  bannerHTML = "";
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
