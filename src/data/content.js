// ============================================================
//  AQUÍ EDITAS TODO TU CONTENIDO.
//  El cuaderno contiene las seis semanas del curso.
//  Los textos marcados como "ejemplo" son de muestra: reemplázalos
//  por lo que realmente aprendiste, con tus propias palabras.
// ============================================================

export const perfil = {
  nombre: 'Deivid Samaniego Quispe',
  rol: 'Estudiante de Ingeniería de Sistemas',
  universidad: 'Universidad Nacional del Centro del Perú (UNCP)',
  curso: 'Diseño de Aplicaciones Web',
  docente: 'Dr. Jaime Suasnábar Terrel',
  // Foto de portada guardada en /public.
  foto: 'foto.png',
  presentacion:
    'Estudio Ingeniería de Sistemas en la UNCP y me interesa convertir ideas en aplicaciones web que funcionen bien y se vean bien. En este curso estoy aprendiendo a construir interfaces con React y Vite, y este portafolio documenta cómo avanzo semana a semana.',
  cv: '', // Ej: 'cv-deivid-samaniego.pdf' (guárdalo en /public). Déjalo vacío para ocultar el botón.
}

export const sobreMi = {
  texto: [
    'Soy de Huancayo y curso Ingeniería de Sistemas en la UNCP. Me gusta entender cómo funcionan las cosas por dentro y explicarlas con palabras simples.',
    'Mi meta es dominar el desarrollo web moderno y publicar proyectos que resuelvan problemas reales de mi entorno.',
  ],
  estudios: [
    { titulo: 'Ingeniería de Sistemas', lugar: 'UNCP, Huancayo', periodo: '2023 – actualidad' },
  ],
  experiencia: [
    { titulo: 'Diseño de Aplicaciones Web', lugar: 'Curso universitario, UNCP', periodo: '2026' },
    // { titulo: 'Prácticas / voluntariado', lugar: 'Institución', periodo: 'Año' },
  ],
  habilidades: ['HTML', 'CSS', 'JavaScript', 'React', 'Vite', 'Git y GitHub'],
}

export const proyectos = [
  {
    titulo: 'Este portafolio electrónico',
    descripcion:
      'Sitio publicado en GitHub Pages donde documento lo que aprendo en el curso. Hecho con React y Vite.',
    tecnologias: ['React', 'Vite', 'CSS', 'GitHub Pages'],
    repo: 'https://github.com/Deividsss/PORTAFOLIO-DAW-SEMANA-07',
    repoLabel: 'Repositorio GitHub',
  },
  {
    titulo: 'Práctica DAW: Semana 06',
    descripcion: 'Proyecto de práctica del curso de Diseño de Aplicaciones Web.',
    tecnologias: ['TypeScript'],
    repo: 'https://github.com/Deividsss/DAW-PRACTICA-SEMANA-06-SAMANIEGO-QUISPE.git',
    demo: '',
  },
  {
    titulo: 'Ruleta de sorteo',
    descripcion: 'Aplicación de ruleta para realizar sorteos.',
    tecnologias: ['JavaScript'],
    repo: 'https://github.com/HXava25/ruletasorteo.git',
    demo: '',
  },
]

// ---------- CUADERNO: una entrada por semana ----------
export const semanas = [
  {
    numero: 1,
    titulo: 'Fundamentos de las tecnologías web',
    temas: [
      {
        termino: 'Sílabo y prueba de diagnóstico',
        definicion:
          'La presentación del sílabo explica los objetivos y contenidos del curso, y la prueba de diagnóstico permite reconocer los conocimientos iniciales.',
        procedimiento: [
          'Revisar los objetivos y contenidos programados para el curso.',
          'Resolver la prueba para identificar los conocimientos previos.',
        ],
      },
      {
        termino: 'Soluciones y tecnologías web',
        definicion:
          'Una solución web puede ser un sistema, una aplicación, un sitio o una página. Para construirla se combinan tecnologías, lenguajes y recursos gráficos.',
        procedimiento: [
          'Distinguir si el producto es un sistema, una aplicación, un sitio o una página web.',
          'Identificar los lenguajes y recursos gráficos que necesita.',
        ],
      },
      {
        termino: 'Funcionamiento de la web',
        definicion:
          'DNS ayuda a encontrar la dirección de un dominio y los protocolos TCP/IP y HTTP permiten que los equipos intercambien solicitudes y respuestas.',
        procedimiento: [
          'Escribir un dominio en el navegador.',
          'Resolver el dominio mediante DNS.',
          'Enviar y recibir información usando TCP/IP y HTTP.',
        ],
      },
      {
        termino: 'Roles y herramientas de desarrollo',
        definicion:
          'El desarrollo web puede estar a cargo de perfiles frontend, backend o fullstack. Visual Studio Code permite editar el código y ampliarlo con extensiones.',
        procedimiento: [
          'Reconocer qué parte de la aplicación desarrolla cada perfil.',
          'Explorar la interfaz, instalar extensiones y revisar los atajos de Visual Studio Code.',
        ],
      },
    ],
    laboratorio: [
      {
        ejercicio: 'Participar en la exposición del sílabo y resolver la prueba de diagnóstico.',
        resultado:
          'Conocí la organización del curso y reconocí mis conocimientos iniciales sobre tecnologías web.',
      },
      {
        ejercicio: 'Explorar Visual Studio Code y configurar el entorno de trabajo.',
        resultado:
          'Identifiqué los elementos de la interfaz y practiqué el uso de extensiones y atajos de teclado.',
      },
    ],
    reflexion: {
      queAprendi:
        'Aprendí cómo se organizan las soluciones web, cómo se comunican navegador y servidor y qué roles participan en su desarrollo.',
      comoAprendi:
        'Revisando los conceptos del sílabo y explorando Visual Studio Code con sus herramientas principales.',
    },
  },
  {
    numero: 2,
    titulo: 'HTML, XML y diseño con CSS',
    temas: [
      {
        termino: 'HTML, XML y estructura de una página',
        definicion:
          'HTML organiza el contenido con etiquetas. El navegador construye árboles de nodos, renderizado y DOM para representar e interpretar una página.',
        procedimiento: [
          'Escribir el contenido con etiquetas HTML bien organizadas.',
          'Identificar nodos y observar cómo el navegador construye el DOM y renderiza la página.',
          'Considerar el ciclo de vida de la página, el SEO y la compatibilidad entre navegadores.',
        ],
      },
      {
        termino: 'CSS y diseño responsivo',
        definicion:
          'CSS define la presentación con reglas y selectores, unidades absolutas o relativas, posicionamiento y sistemas de maquetación como Flexbox y Grid.',
        procedimiento: [
          'Crear reglas CSS usando sintaxis y selectores.',
          'Combinar elementos block e inline, unidades y posicionamiento según el diseño.',
          'Probar Flexbox, Grid y un diseño fluido en diferentes tamaños de pantalla.',
        ],
      },
    ],
    laboratorio: [
      {
        ejercicio: 'Diseñar una página web con HTML y CSS adaptable a distintos dispositivos.',
        resultado:
          'Construí la estructura de la página y apliqué estilos responsivos usando unidades y herramientas de maquetación.',
      },
    ],
    reflexion: {
      queAprendi:
        'Aprendí a estructurar documentos HTML y a diseñar páginas considerando el DOM, el SEO, los navegadores y distintos tamaños de pantalla.',
      comoAprendi:
        'Creando una página y probando cambios de HTML y CSS en el navegador.',
    },
  },
  {
    numero: 3,
    titulo: 'Frameworks CSS: Bootstrap y Tailwind',
    temas: [
      {
        termino: 'Bootstrap y Tailwind',
        definicion:
          'Bootstrap y Tailwind son librerías CSS que ayudan a construir interfaces frontend mediante componentes, utilidades y estilos reutilizables.',
        procedimiento: [
          'Organizar el contenido con contenedores y columnas.',
          'Aplicar tipografía, bordes, fondos, espaciado y efectos.',
          'Ajustar la presentación con utilidades de layout, Flexbox y posicionamiento.',
        ],
      },
      {
        termino: 'Componentes de interfaz',
        definicion:
          'Una interfaz puede reunir shells, encabezados, datos y listas, avatares, insignias, menús, botones, formularios, navegación, overlays y mensajes de retroalimentación.',
        procedimiento: [
          'Elegir los componentes que necesita la página.',
          'Combinar elementos de navegación, contenido, formularios y overlays.',
          'Revisar que el diseño sea coherente y adaptable.',
        ],
      },
    ],
    laboratorio: [
      {
        ejercicio: 'Desarrollar un sitio web aplicando estilos con CSS y componentes de interfaz.',
        resultado:
          'Organicé el contenido con herramientas de layout y apliqué estilos a sus elementos de interfaz.',
      },
    ],
    reflexion: {
      queAprendi:
        'Aprendí a organizar interfaces con herramientas de layout y a reconocer componentes comunes de una aplicación web.',
      comoAprendi:
        'Construyendo una página y probando diferentes estilos, componentes y distribuciones.',
    },
  },
  {
    numero: 4,
    titulo: 'JavaScript, TypeScript, DOM y Canvas',
    temas: [
      {
        termino: 'JavaScript y TypeScript',
        definicion:
          'JavaScript permite agregar lógica a la interfaz. Trabaja con números, strings, objetos, métodos, operadores, booleanos, estructuras de control y bucles; TypeScript añade tipos al código.',
        procedimiento: [
          'Declarar variables y reconocer sus tipos de datos.',
          'Usar operadores, métodos, condiciones y bucles para procesar información.',
          'Definir y ejecutar funciones declaradas, anónimas, flecha y closures.',
        ],
      },
      {
        termino: 'DOM y Canvas',
        definicion:
          'JavaScript puede consultar y modificar elementos, propiedades y estilos del DOM. Canvas permite dibujar gráficos y crear animaciones desde el código.',
        procedimiento: [
          'Seleccionar elementos del DOM y cambiar sus propiedades o estilos.',
          'Preparar un elemento canvas y dibujar en él.',
          'Actualizar los gráficos para producir una animación.',
        ],
      },
    ],
    laboratorio: [
      {
        ejercicio: 'Desarrollar una animación con JavaScript y Canvas.',
        resultado:
          'Creé una animación usando JavaScript para dibujar y actualizar gráficos en Canvas.',
      },
    ],
    reflexion: {
      queAprendi:
        'Aprendí a usar JavaScript para controlar el flujo del programa, modificar el DOM y generar gráficos y animaciones con Canvas.',
      comoAprendi:
        'Escribiendo funciones y probando los cambios directamente en la página.',
    },
  },
  {
    numero: 5,
    titulo: 'Desarrollo frontend con frameworks JavaScript',
    temas: [
      {
        termino: 'Frameworks y renderizado',
        definicion:
          'Los frameworks JavaScript facilitan la creación de aplicaciones frontend y pueden renderizar la interfaz en el cliente (Client Side Rendering).',
        procedimiento: [
          'Preparar un proyecto con las herramientas de creación y gestión de dependencias.',
          'Identificar cómo se organiza el renderizado del lado del cliente.',
        ],
      },
      {
        termino: 'Componentes, JSX, props y children',
        definicion:
          'Una aplicación basada en componentes divide la interfaz en piezas reutilizables. JSX describe su contenido, props reciben datos y children representa contenido anidado.',
        procedimiento: [
          'Crear componentes para distintas partes de la interfaz.',
          'Enviar información a través de props.',
          'Mostrar contenido hijo mediante children.',
        ],
      },
      {
        termino: 'Estilos en frameworks JavaScript',
        definicion:
          'Los estilos pueden organizarse en línea, en hojas de estilo o en módulos, y asociarse a componentes usando CSS.',
        procedimiento: [
          'Elegir entre estilos inline, hojas de estilo o módulos.',
          'Aplicar estilos a los componentes y revisar su apariencia.',
        ],
      },
    ],
    laboratorio: [
      {
        ejercicio: 'Pasar datos con props y renderizar children dentro de un componente.',
        resultado:
          'Construí un componente reutilizable que recibe información y muestra contenido hijo.',
      },
    ],
    reflexion: {
      queAprendi:
        'Aprendí a estructurar una interfaz frontend con componentes reutilizables, props, children y estilos organizados.',
      comoAprendi:
        'Creando componentes y observando cómo cambian al recibir diferentes datos y estilos.',
    },
  },
  {
    numero: 6,
    titulo: 'Eventos, formularios, rutas, Hooks y consumo de APIs',
    temas: [
      {
        termino: 'Eventos y renderizado en frameworks JavaScript',
        definicion:
          'Los eventos permiten responder a las acciones del usuario. El renderizado condicional e iterativo muestra contenido según el estado o una colección de datos.',
        procedimiento: [
          'Asociar eventos a controles de la interfaz.',
          'Mostrar u ocultar contenido según una condición.',
          'Recorrer una colección para renderizar elementos repetidos.',
        ],
      },
      {
        termino: 'Formularios, rutas y Hooks',
        definicion:
          'Los formularios capturan información y el enrutamiento permite navegar entre vistas. Los Hooks permiten reutilizar capacidades de los componentes.',
        procedimiento: [
          'Crear controles de formulario y procesar sus valores.',
          'Configurar la navegación entre vistas de la aplicación.',
          'Usar Hooks para manejar estado y comportamiento de componentes.',
        ],
      },
      {
        termino: 'Promesas y consumo de APIs',
        definicion:
          'Una API permite obtener datos externos. Las promesas, async/await y herramientas como Axios ayudan a realizar solicitudes y manejar sus respuestas.',
        procedimiento: [
          'Enviar una solicitud a una API.',
          'Esperar la respuesta usando promesas o async/await.',
          'Mostrar los datos recibidos en la interfaz.',
        ],
      },
    ],
    laboratorio: [
      {
        ejercicio: 'Renderizar contenido a partir de eventos y datos obtenidos desde una API.',
        resultado:
          'Probé el renderizado condicional e iterativo y presenté en la interfaz datos recibidos de una API.',
      },
    ],
    reflexion: {
      queAprendi:
        'Aprendí a conectar las interacciones, formularios y rutas de una aplicación con datos obtenidos de una API.',
      comoAprendi:
        'Practicando eventos y solicitudes asíncronas, y mostrando sus resultados en componentes.',
    },
  },
]

// ---------- REFLEXIÓN FINAL (texto metacognitivo) ----------
export const reflexionFinal = {
  introduccion:
    'Escribe aquí un texto metacognitivo: cómo cambió tu forma de aprender durante el curso, qué estrategias te funcionaron, en qué te trabaste y cómo lo resolviste. Lo que sigue es un ejemplo para que lo reemplaces con tus propias palabras.',
  porSemana: [
    { semana: 1, texto: 'Comprendí los fundamentos de la web, sus protocolos y los roles de desarrollo.' },
    { semana: 2, texto: 'Aprendí a estructurar páginas con HTML y a diseñarlas con CSS responsivo.' },
    { semana: 3, texto: 'Practiqué el uso de frameworks CSS y componentes de interfaz.' },
    { semana: 4, texto: 'Aprendí a combinar la lógica de JavaScript con el DOM y Canvas.' },
    { semana: 5, texto: 'Comprendí cómo organizar una interfaz frontend en componentes reutilizables.' },
    { semana: 6, texto: 'Integré interacciones y datos de APIs en una aplicación web.' },
  ],
  finDeCurso: {
    queAprendi:
      'Durante el curso aprendí a crear páginas web desde su estructura con HTML hasta su presentación con CSS y herramientas como Bootstrap y Tailwind. También practiqué JavaScript y TypeScript, la manipulación del DOM y Canvas, y el desarrollo de interfaces con componentes, props, eventos, formularios, rutas y Hooks. Comprendí cómo consumir APIs y mostrar sus datos en una aplicación. Además, aprendí que organizar el código, probarlo en distintos dispositivos y corregir errores son partes importantes del desarrollo web.',
    comoAprendi:
      'Aprendí principalmente llevando los conceptos a la práctica en ejercicios y en el desarrollo de este portafolio. Fui avanzando por etapas, consultando el material del curso y la documentación cuando necesitaba aclarar algo, probando distintas soluciones y corrigiendo los errores que encontraba. Revisar los resultados en el navegador me ayudó a entender cómo se relacionan la estructura, los estilos y la lógica de una aplicación web.',
  },
}

// ---------- BIBLIOGRAFÍA: solo libros y URLs (no videos) ----------
export const bibliografia = [
  {
    tipo: 'Libro',
    cita: 'Flanagan, D. (2020). JavaScript: The Definitive Guide (7.ª ed.). O’Reilly Media.',
  },
  {
    tipo: 'Libro',
    cita: 'Duckett, J. (2011). HTML and CSS: Design and Build Websites. Wiley.',
  },
  {
    tipo: 'URL',
    cita: 'React. Documentación oficial.',
    url: 'https://react.dev',
  },
  {
    tipo: 'URL',
    cita: 'Vite. Guía oficial.',
    url: 'https://vitejs.dev/guide/',
  },
  {
    tipo: 'URL',
    cita: 'MDN Web Docs. Mozilla.',
    url: 'https://developer.mozilla.org/es/',
  },
  {
    tipo: 'URL',
    cita: 'GitHub Pages. Documentación de GitHub.',
    url: 'https://docs.github.com/es/pages',
  },
]
