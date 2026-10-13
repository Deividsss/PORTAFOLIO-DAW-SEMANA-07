import Header from './components/Header.jsx'
import Portada from './components/Portada.jsx'
import SobreMi from './components/SobreMi.jsx'
import Proyectos from './components/Proyectos.jsx'
import Cuaderno from './components/Cuaderno.jsx'
import ReflexionFinal from './components/ReflexionFinal.jsx'
import Bibliografia from './components/Bibliografia.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <a className="saltar" href="#contenido">Saltar al contenido</a>
      <Header />
      <main id="contenido">
        <Portada />
        <SobreMi />
        <Proyectos />
        <Cuaderno />
        <ReflexionFinal />
        <Bibliografia />
      </main>
      <Footer />
    </>
  )
}
