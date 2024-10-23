import { pageConfig } from "../../../pageConfig"
import capa from '../../../assets/capa.png'
export default function Inicio() {
    const conteudo = pageConfig.conteudo.inicio

    return (
        <section>
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
                <div className="container">
                    <a className="navbar-brand" href="#page-top">Hf Detailing</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        Menu
                        <i className="fas fa-bars ms-1"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
                            <li className="nav-item"><a className="nav-link" href="#services">Servicos</a></li>
                            <li className="nav-item"><a className="nav-link" href="#sobreNos">Sobre Nos</a></li>
                            <li className="nav-item"><a className="nav-link" href="#instagram">Instagram</a></li>
                            <li className="nav-item"><a className="nav-link" href="#contato">Contato</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
            <header className="masthead" style={backgroundImage: `url(${fundoImage})`}>
                <div className="container">
                    <div className="masthead-subheading">Bem vindo a Hf Detailing!</div>
                    <a
                        href={conteudo.cta1.link}
                        target={conteudo.cta1.target}
                        className="btn btn-primary btn-xl text-uppercase"
                        >
                        {conteudo.cta1.texto}
                    </a>
                </div>
            </header>
        </section>
    )
}