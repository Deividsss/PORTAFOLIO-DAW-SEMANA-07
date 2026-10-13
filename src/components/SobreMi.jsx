import { sobreMi } from '../data/content.js'

function Linea({ titulo, lugar, periodo }) {
  return (
    <li className="linea">
      <p className="linea__titulo">{titulo}</p>
      <p className="linea__lugar">{lugar}</p>
      <p className="linea__periodo">{periodo}</p>
    </li>
  )
}

export default function SobreMi() {
  return (
    <section id="sobre-mi" className="seccion">
      <div className="contenedor">
        <h2 className="seccion__titulo">Sobre mí</h2>
        <div className="sobre">
          <div className="sobre__texto">
            {sobreMi.texto.map((p) => (
              <p key={p}>{p}</p>
            ))}
            <h3>Con qué trabajo</h3>
            <ul className="etiquetas">
              {sobreMi.habilidades.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </div>
          <div className="sobre__datos">
            <h3>Estudios</h3>
            <ul className="lineas">
              {sobreMi.estudios.map((e) => (
                <Linea key={e.titulo} {...e} />
              ))}
            </ul>
            <h3>Experiencia</h3>
            <ul className="lineas">
              {sobreMi.experiencia.map((e) => (
                <Linea key={e.titulo} {...e} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
