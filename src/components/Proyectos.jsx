import { proyectos } from '../data/content.js'

export default function Proyectos() {
  return (
    <section id="proyectos" className="seccion seccion--alt">
      <div className="contenedor">
        <h2 className="seccion__titulo">Proyectos concluidos</h2>
        <ul className="proyectos">
          {proyectos.map((p) => (
            <li key={p.titulo} className="proyecto">
              <h3>{p.titulo}</h3>
              <p>{p.descripcion}</p>
              <ul className="etiquetas">
                {p.tecnologias.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
              {(p.repo || p.demo) && (
                <p className="proyecto__enlaces">
                  {p.demo && (
                    <a href={p.demo} target="_blank" rel="noreferrer">Ver sitio</a>
                  )}
                  {p.repo && (
                    <a href={p.repo} target="_blank" rel="noreferrer">
                      {p.repoLabel || 'Ver código'}
                    </a>
                  )}
                </p>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
