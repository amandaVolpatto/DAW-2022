import './style.css'
export function Footer() {
    return (
        <footer>
            <div class="container">
                <div class="footer-content">
                    <div class="footer-company">
                        <p class="footer-logo">Dorameiras</p>
                        <p>A pessoa que gosta de dorama é chamada de dorameira ou dorameiro. O nome dorama tem origem na
                            palavra “drama”. Portanto, doramas nada mais são que produções dramáticas desenvolvidas em
                            países orientais. Como todas as séries, eles são formados por uma sequência de episódios e às
                            vezes têm mais de uma temporada...</p>
                    </div>

                    <div class="footer-menu">
                        <p class="footer-menu-title">Nossa Empresa</p>
                        <ul>
                            <li><a href="#">Sobre nós</a></li>
                            <li><a href="#">Especialistas</a></li>
                            <li><a href="#">Missão e Visão</a></li>
                            <li><a href="#">Nossos Valores</a></li>
                        </ul>
                    </div>

                    <div class="footer-menu">
                        <p class="footer-menu-title">Contato</p>
                        <ul>
                            <li>+55 (46) 9 9999-9999</li>
                            <li>Rua Mato Grosso, 200</li>
                            <li>Pato Branco - PR</li>
                        </ul>
                    </div>
                    <div class="footer-menu">
                        <p class="footer-menu-title">Nossa Empresa</p>
                        <ul>
                            <li><a href="#">K-drama</a></li>
                            <li><a href="#">Viki</a></li>
                            <li><a href="#">Kocowa</a></li>
                            <li><a href="#">Dopeka</a></li>
                        </ul>
                    </div>
                </div>
                <div class="footer-social">
                    <span class="facebook"></span>
                    <span class="twitter"></span>
                    <span class="instagram"></span>
                    <span class="linkedin"></span>
                </div>
                <div class="footer-copyright">
                    &#169; 2022 - Todos os direitos reservados
                </div>
            </div>
        </footer>
    )
}