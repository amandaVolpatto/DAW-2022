import './style.css'

export function Header() {
    return (
        <header>
            <div class="container">
                <nav>
                    <ul>
                        <li>
                            <a href="#" class="active">Home</a>
                        </li>
                        <li>
                            <a href="#">Doramas</a>
                        </li>
                        <li>
                            <a href="#">Mensagens para dopeka</a>
                        </li>
                        <li>
                            <a href="#">Sobre nós</a>
                        </li>
                        <li>
                            <button> Login </button>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}