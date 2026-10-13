import { useState } from 'react'
import { semanas } from '../data/content.js'

export default function Cuaderno() {
  const [activa, setActiva] = useState(semanas[0].numero)
  const semana = semanas.find((s) => s.numero === activa)

  return (
    <section id="cuaderno" className="seccion">
      <div className="contenedor">
        <h2 className="seccion__titulo">Cuaderno</h2>
        <p className="seccion__intro">
          Una página por semana: lo que aprendí con mis palabras, los ejercicios de laboratorio y
          mi reflexión.
        </p>

        <div className="pestanas" role="tablist" aria-label="Semanas del curso">
          {semanas.map((s) => (
            <button
              key={s.numero}
              role="tab"
              id={`tab-${s.numero}`}
              aria-selected={s.numero === activa}
              aria-controls={`panel-${s.numero}`}
              className="pestana"
              onClick={() => setActiva(s.numero)}
            >
              Semana {s.numero}
            </button>
          ))}
        </div>

        <article
          key={semana.numero}
          className="hoja"
          role="tabpanel"
          id={`panel-${semana.numero}`}
          aria-labelledby={`tab-${semana.numero}`}
        >
          <h3 className="hoja__titulo">
            Semana {semana.numero}: {semana.titulo}
          </h3>

          <h4>Temas aprendidos con mis palabras</h4>
          <ul className="temas">
            {semana.temas.map((t) => (
              <li key={t.termino} className="tema">
                <p className="tema__termino">{t.termino}</p>
                <p>{t.definicion}</p>
                <p className="tema__sub">Procedimiento</p>
                <ol>
                  {t.procedimiento.map((paso) => (
                    <li key={paso}>{paso}</li>
                  ))}
                </ol>
              </li>
            ))}
          </ul>

          <h4>Ejercicios de laboratorio y resultados</h4>
          <ul className="temas">
            {semana.laboratorio.map((l) => (
              <li key={l.ejercicio} className="tema">
                <p className="tema__termino">{l.ejercicio}</p>
                <p>
                  <strong>Resultado:</strong> {l.resultado}
                </p>
              </li>
            ))}
          </ul>

          <h4>Reflexión</h4>
          <div className="preguntas">
            <div>
              <p className="tema__sub">¿Qué aprendí?</p>
              <p>{semana.reflexion.queAprendi}</p>
            </div>
            <div>
              <p className="tema__sub">¿Cómo aprendí?</p>
              <p>{semana.reflexion.comoAprendi}</p>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}
