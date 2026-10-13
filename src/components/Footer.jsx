import { perfil } from '../data/content.js'

export default function Footer() {
  return (
    <footer className="pie">
      <div className="contenedor">
        <p>
          {perfil.nombre} · {perfil.curso} · {perfil.universidad}
        </p>
        <p>Docente: {perfil.docente}</p>
      </div>
    </footer>
  )
}
