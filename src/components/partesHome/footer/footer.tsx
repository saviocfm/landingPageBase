import { pageConfig } from "../../../pageConfig"

export default function Footer(){
    return(
        <footer className="bg-dark text-light">
            <div className="row p-4">
                <div className="col-12 text-center">
                    <div className="col-6">
                        <h3 className="col-12 text-center">Contatos</h3>
                        <p>Telefone: 
                        <a href={`tel:${pageConfig.conteudo.contato.telefone}`} className="">
                            {pageConfig.conteudo.contato.telefone}
                        </a>
                        </p>
                    </div>
                </div>
                
                {/* Créditos */}
                <div className="row align-items-center">
                    <div className="col-12 text-center">
                        <p className="">
                            Desenvolvido por 
                            <span className="">
                            <a href="" className="">
                                 Savio Fernandes
                            </a>
                            </span>. 
                            Todos os direitos reservados © 2024.
                        </p>
                    </div>
                </div>
            </div>
        </footer>   
    ) 
}

/*
                        <p>Email: 
                        <a href={`mailto:${pageConfig.conteudo.contato.email}`} className="">
                            {pageConfig.conteudo.contato.email}
                        </a>
                        </p>

                        */