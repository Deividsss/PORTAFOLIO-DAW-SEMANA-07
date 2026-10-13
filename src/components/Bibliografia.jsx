import { bibliografia } from '../data/content.js'

export default function Bibliografia() {
  return (
    <section id="bibliografia" className="seccion">
      <div className="contenedor contenedor--estrecho">
        <h2 className="seccion__titulo">Bibliografía</h2>
        <p className="seccion__intro">Libros y páginas web consultadas.</p>
        <ul className="biblio">
          {bibliografia.map((b) => (
            <li key={b.cita}>
              <span className="biblio__tipo">{b.tipo}</span>
              <span>
                {b.cita}{' '}
                {b.url && (
                  <a href={b.url} target="_blank" rel="noreferrer">{b.url}</a>
                )}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
