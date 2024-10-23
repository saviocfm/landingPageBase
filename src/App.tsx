import './App.css'
import Inicio from './components/partesHome/inicio/inicio'
import Servicos from './components/partesHome/servicos/servicos'
//import Portifolio from './components/partesHome/portifolio/portifolio'
import SobreNos from './components/partesHome/sobre/sobreNos'
import Footer from './components/partesHome/footer/footer'
import Contato from './components/partesHome/contato/contato'
import Instagram from './components/partesHome/instagram/instagram'

function App() {

  return (
    <>
      <Inicio></Inicio>
      <Servicos></Servicos>
      <SobreNos></SobreNos>
      <br />
      <br />
      <br />
      <Instagram></Instagram>
      <Contato></Contato>
      <Footer></Footer>
    </>
  )
}

export default App

//<Portifolio></Portifolio>