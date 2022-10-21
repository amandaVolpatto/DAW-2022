import './style.css'

export function SectionReasons(){
    return(
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
    )
}