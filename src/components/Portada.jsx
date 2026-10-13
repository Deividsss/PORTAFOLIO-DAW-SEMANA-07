import { useState } from 'react'
import { perfil } from '../data/content.js'

function Foto() {
  const [falla, setFalla] = useState(false)
  const iniciales = perfil.nombre
    .split(' ')
    .filter((_, i, a) => i === 0 || i === a.length - 2)
    .map((p) => p[0])
    .join('')

  return (
    <div className="foto">
      {falla ? (
        <span className="foto__iniciales" aria-hidden="true">{iniciales}</span>
      ) : (
        <img
          src={perfil.foto}
          alt={`Foto de ${perfil.nombre}`}
          onError={() => setFalla(true)}
        />
      )}
    </div>
  )
}

export default function Portada() {
  return (
    <section id="inicio" className="portada">
      <div className="contenedor portada__rejilla">
        <div className="portada__texto">
          <p className="portada__curso">Portafolio electrónico · {perfil.curso}</p>
          <h1 className="portada__nombre">
            <span className="resaltado">{perfil.nombre}</span>
          </h1>
          <p className="portada__rol">
            {perfil.rol}, {perfil.universidad}
          </p>
          <p className="portada__bienvenida">{perfil.presentacion}</p>
          <div className="botones">
            <a className="boton boton--principal" href="#proyectos">Ver proyectos</a>
            <a className="boton" href="#cuaderno">Leer mi cuaderno</a>
            {perfil.cv && (
              <a className="boton" href={perfil.cv} download>Descargar CV</a>
            )}
          </div>
          <ul className="redes" aria-label="Mis enlaces">
            {perfil.enlaces.map((e) => (
              <li key={e.nombre}>
                <a href={e.url} target="_blank" rel="noreferrer">{e.nombre}</a>
              </li>
            ))}
          </ul>
        </div>
        <Foto />
      </div>
    </section>
  )
}
