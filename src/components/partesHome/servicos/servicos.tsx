import { pageConfig } from "../../../pageConfig"

export default function Servicos(){
    const servicos = []
    for(let i in pageConfig.conteudo.servicos.servicos){
        servicos.push(
            <div className="">
                <span className="fa-stack fa-4x">
                    <img src={pageConfig.conteudo.servicos.servicos[i].src} alt="" className=" rounded img-fluid "/>
                </span>
                <h3 className="my-3">{pageConfig.conteudo.servicos.servicos[i].category} </h3>
                <p className="text-muted">{pageConfig.conteudo.servicos.servicos[i].content}</p>
            </div>
        )
    } 

    return (
        <section className="page-section" id="services">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Servicos</h2>
                    <h3 className="section-subheading text-muted"></h3>
                    <br/>
                    <br/>
                </div>
                <div className="row text-center">
                    {servicos.map((r,index) => { return <div className="col-md-4" key={index}> {r}</div>})}
               </div>
            </div>
        </section>
    )
}