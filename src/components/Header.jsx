import { perfil } from '../data/content.js'

const enlaces = [
  { id: 'inicio', texto: 'Inicio' },
  { id: 'sobre-mi', texto: 'Sobre mí' },
  { id: 'proyectos', texto: 'Proyectos' },
  { id: 'cuaderno', texto: 'Cuaderno' },
  { id: 'reflexion', texto: 'Reflexión final' },
  { id: 'bibliografia', texto: 'Bibliografía' },
]

export default function Header() {
  return (
    <header className="cabecera">
      <div className="cabecera__fila contenedor">
        <a className="marca" href="#inicio" aria-label={`${perfil.nombre}, ir al inicio`}>
          <span className="marca__sello">DS</span>
          <span className="marca__texto">Deivid Samaniego</span>
        </a>
        <nav aria-label="Principal">
          <ul className="menu">
            {enlaces.map((e) => (
              <li key={e.id}>
                <a href={`#${e.id}`}>{e.texto}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
