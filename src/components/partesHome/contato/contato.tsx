import { pageConfig } from "../../../pageConfig"
import { useState } from "react"

export default function Contato() {
    const conteudo = pageConfig.conteudo.contato;
    const [nome, setNome] = useState("");
    const [veiculo, setVeiculo] = useState("");
    const [servico, setServico] = useState("");

    const handleNomeChange = (event: any) => {
        setNome(event.target.value);
    };

    const handleVeiculoChange = (event: any) => {
        setVeiculo(event.target.value);
    };

    const handleServicoChange = (event: any) => {
        setServico(event.target.value);
    };

    const entrarEmContato = () => {
        // Verificar se os campos estão preenchidos
        if (!nome || !veiculo || !servico) {
            alert("Por favor, preencha todos os campos.");
            return;
        }

        // Construir o link para o WhatsApp
        const link = `${pageConfig.redesSociais.whatsapp.link}Olá%20meu%20nome%20é%20${encodeURIComponent(nome)}%20e%20gostaria%20de%20um%20orçamento%20para%20${encodeURIComponent(servico)}%20em%20um%20veículo%20do%20modelo%20${encodeURIComponent(veiculo)}`;

        // Abrir o link no WhatsApp
        window.open(link);
    }

    return (
        <>
            <section id="contato" className="container">
                <div className="row align-items-center">

                    <div className="col-12 col-md-6 p-5">
                        <h2>Entre em Contato</h2>
                        
                        <div className="">
                            <label className="form-label">Seu nome:</label>
                            <input 
                                type="text" 
                                onChange={handleNomeChange} 
                                className="form-control"
                                placeholder="Digite seu nome"
                            />
                        </div>
                        
                        <div className="">
                            <label className="form-label">Modelo do veículo:</label>
                            <input 
                                type="text" 
                                onChange={handleVeiculoChange} 
                                className="form-control"
                                placeholder="Digite o modelo do veículo"
                            />
                        </div>
                        
                        <div className="">
                            <label className="form-label">Serviço que deseja:</label>
                            <input 
                                type="text" 
                                onChange={handleServicoChange} 
                                className="form-control"
                                placeholder="Descreva o serviço desejado"
                            />
                        </div>
                        <br/>
                        <button 
                            onClick={entrarEmContato} 
                            className="btn btn-primary"
                            type="submit"
                        >
                            Enviar
                        </button>
                    </div>

                    {/* Iframe do Google Maps */}
                    <div className="col-12 col-md-6 p-2">
                        <iframe
                            src={conteudo.localizacao}
                            allowFullScreen
                            loading="lazy"
                            height="400"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="col-12 "
                        />
                    </div>
                </div>
            </section>
        </>
    );
}
