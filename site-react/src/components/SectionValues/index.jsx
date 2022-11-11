import './style.css';

import imgLogo from '../../assets/img/place-company.png'
export function SectionValues(){
    return (
        <section id="values">
                    <h2>Quem é a imobiliária Unimater</h2>
                    <div className="values-container">
                        <img src={imgLogo} alt="Foto da Firma" />

                        <div className="values-content">
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque doloremque animi alias excepturi
                                architecto, iusto vitae, dolor pariatur totam iure ipsum eligendi blanditiis libero perspiciatis
                                et suscipit assumenda beatae magni?
                                </p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quas dolore velit commodi
                                tempora, eligendi unde a. Possimus unde doloremque earum, porro obcaecati illum tempore totam
                                molestiae repudiandae magni necessitatibus.</p>
                            <div className="value-detail">
                                <div className="value">
                                    <span>Alto Padrão</span>
                                    <span>Agilidade</span>
                                </div>

                                <div className="value">
                                    <span>Facilidade</span>
                                    <span>Confiabilidade</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
    )
}