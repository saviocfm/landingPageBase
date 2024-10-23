import { InstagramEmbed } from 'react-social-media-embed';
import { pageConfig } from '../../../pageConfig';

export default function Instagram() {
    const conteudo = pageConfig.redesSociais
    return (
        <>
            <div className='container' id="instagram">
                <div className='row'>
                    <div className='col-12 col-md-2'></div>
                    <   InstagramEmbed url={conteudo.instagram.link} className='col-12 col-md-8 m-6'/>
                    <div className='col-12 col-md-2'></div>
                    <br />
                </div>
            </div>
        </>
    )

}
