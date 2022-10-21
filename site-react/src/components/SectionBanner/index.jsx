import './style.css'

export function SectionBanner() {
    return(
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
    )
}