import './style.css'
export function HomePage() {
    return (
        <div> id="home-page"
            <div className="container">
                <section id="banner">
                    <div className="banner-content">
                        <h1>Lugar exato para você realizar os seus sonhos</h1>
                        <h3>Nós oferecemos um serviço completo de venda, compra e locação</h3>
                    </div>
                    <div className="banner-filter">
                        <div className="filter-fields">

                            <form>
                                <select>
                                    <option value="venda">Venda</option>
                                    <option value="locacao">Locação</option>
                                </select>
                                <select>
                                    <option >Tipo Imóvel</option>
                                    <option value="apartarmento">Apartarmento</option>
                                    <option value="Casa">Casa</option>
                                    <option value="Sobrado">Sobrado</option>
                                    <option value="Terreno">Terreno</option>
                                </select>
                                <select>
                                    <option >Cidade</option>
                                    <option value="coronel">Coronel Vivida</option>
                                    <option value="beltrao">Francisco Beltrão</option>
                                    <option value="pato">Pato Branco</option>
                                    <option value="saudade">Saudade de Iguaçu</option>
                                </select>
                                <select>
                                    <option >Bairro</option>
                                    <option value="Brasilia">Brasilia</option>
                                    <option value="Centro">Centro</option>
                                    <option value="La salle">La salle</option>
                                    <option value="pinheiros">Pinheiros</option>
                                </select>
                            </form>

                        </div>
                        <div className="filter-result">
                            <p className="result-value">26</p>
                            <p className="result-label">Imóveis</p>
                            <button>filtrar</button>
                        </div>
                    </div>
                </section>

                <section id="cards">
                    <h2>Imóveis disponíveis</h2>
                    <div className="cards-content">
                        <div className="card">
                            <img src="./assets/img/thumb1.png" alt="Casa 1" />
                            <div className="card-content">
                                <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h4>
                                <p>Impedit debitis expedita illo nemo, perspiciatis dignissimos placeat quae tenetur
                                    accusamus ipsum veritatis
                                    mollitia nihil voluptas, eius culpa itaque ad. Natus, quia?</p>
                                <div className="card-price">
                                    <p >R$ 900.000,00</p>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <img src="./assets/img/thumb2.png" alt="Casa 2" />
                            <div className="card-content">
                                <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h4>
                                <p>Impedit debitis expedita illo nemo, perspiciatis dignissimos placeat quae tenetur
                                    accusamus ipsum veritatis
                                    mollitia nihil voluptas, eius culpa itaque ad. Natus, quia?</p>
                                <div className="card-price">
                                    <p >R$ 900.000,00</p>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <img src="./assets/img/thumb3.png" alt="Casa 3" />
                            <div className="card-content">
                                <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h4>
                                <p>Impedit debitis expedita illo nemo, perspiciatis dignissimos placeat quae tenetur
                                    accusamus ipsum veritatis
                                    mollitia nihil voluptas, eius culpa itaque ad. Natus, quia?</p>
                                <div className="card-price">
                                    <p >R$ 900.000,00</p>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <img src="./assets/img/thumb4.png" alt="Casa 4" />
                            <div className="card-content">
                                <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h4>
                                <p>Impedit debitis expedita illo nemo, perspiciatis dignissimos placeat quae tenetur
                                    accusamus ipsum veritatis
                                    mollitia nihil voluptas, eius culpa itaque ad. Natus, quia?</p>
                                <div className="card-price">
                                    <p >R$ 900.000,00</p>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <img src="./assets/img/thumb5.png" alt="Casa 5" />
                            <div className="card-content">
                                <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h4>
                                <p>Impedit debitis expedita illo nemo, perspiciatis dignissimos placeat quae tenetur
                                    accusamus ipsum veritatis
                                    mollitia nihil voluptas, eius culpa itaque ad. Natus, quia?</p>
                                <div className="card-price">
                                    <p >R$ 900.000,00</p>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <img src="./assets/img/thumb6.png" alt="Casa 6" />
                            <div className="card-content">
                                <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h4>
                                <p>Impedit debitis expedita illo nemo, perspiciatis dignissimos placeat quae tenetur
                                    accusamus ipsum veritatis
                                    mollitia nihil voluptas, eius culpa itaque ad. Natus, quia?</p>
                                <div className="card-price">
                                    <p >R$ 900.000,00</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="reasons">
                    <h2>Por que nos escolher?</h2>
                    <div className="reasons-content">

                        <div className="reason">
                            <p className="reasons-values">+1000</p>
                            <p className="reasons-label">Imóveis</p>
                        </div>
                        <div className="reason">
                            <p className="reasons-values">+500</p>
                            <p className="reasons-label">Clientes Felizes</p>
                        </div>
                        <div className="reason">
                            <p className="reasons-values">+50</p>
                            <p className="reasons-label">Premiações</p>
                        </div>
                        <div className="reason">
                            <p className="reasons-values">+100</p>
                            <p className="reasons-label">Especialistas</p>
                        </div>

                    </div>
                </section>

                <section id="specialists">
                    <h2>Converse com um Especialista</h2>
                    <div className="specialists-content">
                        <div className="specialist">
                            <h5>Tutu Williams</h5>
                            <p>Lodon</p>
                            <p className="specialist-detail">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti
                                omnis
                                asperiores, eius nostrum itaque architecto, error minima exercitationem quas, dolorum ipsum
                                magnam
                                voluptatem ex dicta magni numquam debitis quis deserunt.</p>
                        </div>
                        <div className="specialist">
                            <h5>Mark Zion</h5>
                            <p>New Word City</p>
                            <p className="specialist-detail">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti
                                omnis
                                asperiores, eius nostrum itaque architecto, error minima exercitationem quas, dolorum ipsum
                                magnam
                                voluptatem ex dicta magni numquam debitis quis deserunt.</p>
                        </div>
                        <div className="specialist">
                            <h5>Essien Crest</h5>
                            <p>Berlin</p>
                            <p className="specialist-detail">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti
                                omnis
                                asperiores, eius nostrum itaque architecto, error minima exercitationem quas, dolorum ipsum
                                magnam
                                voluptatem ex dicta magni numquam debitis quis deserunt.</p>
                        </div>
                    </div>
                </section>
                <section id="values">
                    <h2>Quem é a imobiliária Unimater</h2>
                    <div className="values-container">
                        <img src="./assets/img/place-company.png" alt="Foto da Firma" />

                        <div className="values-content">
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque doloremque animi alias excepturi
                                architecto, iusto vitae, dolor pariatur totam iure ipsum eligendi blanditiis libero perspiciatis
                                et suscipit assumenda beatae magni?</p>
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
            </div>
        </div>
    )
}