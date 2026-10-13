import { reflexionFinal as r } from '../data/content.js'

export default function ReflexionFinal() {
  return (
    <section id="reflexion" className="seccion seccion--alt">
      <div className="contenedor contenedor--estrecho">
        <h2 className="seccion__titulo">Reflexión final</h2>
        <p className="reflexion__intro">{r.introduccion}</p>

        <h3>Por semana</h3>
        <ul className="resumen">
          {r.porSemana.map((s) => (
            <li key={s.semana}>
              <strong>Semana {s.semana}.</strong> {s.texto}
            </li>
          ))}
        </ul>

        <h3>Fin de curso</h3>
        <div className="preguntas">
          <div>
            <p className="tema__sub">¿Qué aprendí?</p>
            <p>{r.finDeCurso.queAprendi}</p>
          </div>
          <div>
            <p className="tema__sub">¿Cómo aprendí?</p>
            <p>{r.finDeCurso.comoAprendi}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
