// ============================================================
//  AQUÍ EDITAS TODO TU CONTENIDO.
//  Conforme avance el curso, agrega semanas, proyectos y fuentes.
//  Los textos marcados como "ejemplo" son de muestra: reemplázalos
//  por lo que realmente aprendiste, con tus propias palabras.
// ============================================================

export const perfil = {
  nombre: 'Deivid Samaniego Quispe',
  rol: 'Estudiante de Ingeniería de Sistemas',
  universidad: 'Universidad Nacional del Centro del Perú (UNCP)',
  curso: 'Diseño de Aplicaciones Web',
  docente: 'Dr. Jaime Suasnábar Terrel',
  // Pon tu foto en la carpeta /public con el nombre foto.jpg
  foto: 'foto.jpg',
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
    { titulo: 'Educación secundaria', lugar: 'Escribe tu colegio', periodo: 'Escribe el periodo' },
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
    titulo: 'Fundamentos: HTML, CSS y Git',
    temas: [
      {
        termino: 'HTML semántico',
        definicion:
          'Es escribir la estructura de una página usando etiquetas que dicen qué es cada parte (header, nav, main, section, footer) y no solo cómo se ve.',
        procedimiento: [
          'Identificar las partes de la página.',
          'Elegir la etiqueta que describe cada parte.',
          'Revisar que los títulos sigan el orden h1, h2, h3.',
        ],
      },
      {
        termino: 'Repositorio y commits en Git',
        definicion:
          'Un repositorio guarda la historia de mi proyecto. Cada commit es una foto del estado del código con un mensaje que explica qué cambié.',
        procedimiento: [
          'git init para crear el repositorio.',
          'git add . para preparar los cambios.',
          'git commit -m "mensaje" para guardarlos.',
          'git push para subirlos a GitHub.',
        ],
      },
    ],
    laboratorio: [
      {
        ejercicio: 'Crear el repositorio del portafolio y subir la primera versión.',
        resultado:
          'Repositorio creado en GitHub con un index.html básico y mi primer commit.',
      },
    ],
    reflexion: {
      queAprendi:
        'Aprendí que una buena estructura HTML hace más fácil dar estilos después, y que Git me permite volver atrás si me equivoco.',
      comoAprendi:
        'Probando cada comando en mi computadora, equivocándome y leyendo el mensaje de error hasta entender qué pasó.',
    },
  },
  {
    numero: 2,
    titulo: 'JavaScript y diseño responsivo',
    temas: [
      {
        termino: 'Flexbox y Grid',
        definicion:
          'Son dos formas de CSS para ordenar elementos. Flexbox acomoda en una dirección (fila o columna) y Grid en filas y columnas a la vez.',
        procedimiento: [
          'Definir el contenedor con display: flex o display: grid.',
          'Indicar dirección, espacios y alineación.',
          'Probar el resultado en pantalla de celular y de computadora.',
        ],
      },
    ],
    laboratorio: [
      {
        ejercicio: 'Maquetar la portada del portafolio para que se adapte a celular.',
        resultado: 'La portada se reorganiza en una columna en pantallas pequeñas.',
      },
    ],
    reflexion: {
      queAprendi:
        'Aprendí a pensar primero en el celular y luego ampliar el diseño para pantallas grandes.',
      comoAprendi:
        'Cambiando el tamaño de la ventana mientras escribía el CSS y viendo al instante qué se rompía.',
    },
  },
  {
    numero: 3,
    titulo: 'React con Vite',
    temas: [
      {
        termino: 'Componente',
        definicion:
          'Es una función de JavaScript que devuelve un pedazo de interfaz. Puedo reutilizarlo cuantas veces quiera, como una pieza de lego.',
        procedimiento: [
          'Crear un archivo .jsx con una función que devuelva JSX.',
          'Exportarla con export default.',
          'Importarla y usarla como una etiqueta, por ejemplo <Proyectos />.',
        ],
      },
      {
        termino: 'Estado (useState)',
        definicion:
          'Es la memoria de un componente. Cuando el estado cambia, React vuelve a dibujar la parte de la pantalla que depende de él.',
        procedimiento: [
          'Importar useState desde react.',
          'Declarar const [valor, setValor] = useState(inicial).',
          'Llamar a setValor cuando ocurra un evento, como un clic.',
        ],
      },
    ],
    laboratorio: [
      {
        ejercicio: 'Pasar el portafolio a React con Vite y publicarlo en GitHub Pages.',
        resultado:
          'Proyecto creado con npm create vite, dividido en componentes y publicado con GitHub Actions.',
      },
    ],
    reflexion: {
      queAprendi:
        'Aprendí a dividir una página en componentes pequeños y a separar el contenido (datos) de la presentación.',
      comoAprendi:
        'Reescribiendo mi página HTML pieza por pieza como componentes y comparando con la documentación oficial.',
    },
  },
]

// ---------- REFLEXIÓN FINAL (texto metacognitivo) ----------
export const reflexionFinal = {
  introduccion:
    'Escribe aquí un texto metacognitivo: cómo cambió tu forma de aprender durante el curso, qué estrategias te funcionaron, en qué te trabaste y cómo lo resolviste. Lo que sigue es un ejemplo para que lo reemplaces con tus propias palabras.',
  porSemana: [
    { semana: 1, texto: 'Entendí que ordenar bien la base (HTML y Git) me ahorra problemas después.' },
    { semana: 2, texto: 'Aprendí a revisar mi diseño en distintos tamaños de pantalla desde el inicio.' },
    { semana: 3, texto: 'Descubrí que pensar en componentes me ayuda a reutilizar y a mantener el código.' },
  ],
  finDeCurso: {
    queAprendi:
      'Escribe aquí lo más importante que aprendiste en todo el curso, tanto técnico como personal.',
    comoAprendi:
      'Escribe aquí cómo aprendiste: practicando, preguntando, leyendo documentación, trabajando en equipo, equivocándote y corrigiendo.',
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
