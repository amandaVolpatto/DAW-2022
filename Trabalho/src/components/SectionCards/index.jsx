import { IntlProvider, FormattedNumber } from 'react-intl';
import './style.css'

export function SectionCards() {
    return (
        <section id="cards">
            <h2>Doramas em Alta</h2>
            <div class="cards-content">
                <div class="card">
                    <img src="./assets/img/Dorama 1.webp" alt="Dorama 1">
                        <div class="card-content">
                            <h4>Love Alarme</h4>
                            <p>Kim Jojo (Kim So-Hyun) é uma jovem doce e gentil que passa a usar o aplicativo Love Alarm,
                                capaz de avisar ao
                                usuário quando uma pessoa que gosta de você está a dez metros ...</p>
                        </div>
                </div>
                <div class="card">
                    <img src="./assets/img/Dorama 2.jpg" alt="Dorama 2">
                        <div class="card-content">
                            <h4>Cinderela e os Quatro Cavaleiros</h4>
                            <p>Um homem rico contrata a determinada Ha-won, que mora com sua madrasta malvada,
                                para cuidar do mau comportamento dos seus netos.</p>
                        </div>
                </div>
                <div class="card">
                    <img src="./assets/img/Dorama 3.jpg" alt="Dorama 3">
                        <div class="card-content">
                            <h4>Mulher Forte, Do Bong-soon</h4>
                            <p>Do Bong Soon é uma jovem que nasceu com uma força sobrenatural, onde se ela não tiver
                                cuidado, ela quebra tudo em
                                que toca. Entretanto, ela tenta desesperadamente se ...</p>
                        </div>
                </div>
                <div class="card">
                    <img src="./assets/img/dorama4.jpg" alt="Dorama 4">
                        <div class="card-content">
                            <h4>Beleza Verdadeira</h4>
                            <p>Im Joo Kyung (Moon Ga Young) é uma estudante colegial super animada e positiva sobre a
                                maioria das coisas – exceto sua aparência! Ela odeia a ideia de ser vista em público
                                sem maquiagem ...</p>
                        </div>
                </div>
            </div>
        </section>
    )
}