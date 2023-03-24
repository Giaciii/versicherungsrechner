import { useState } from "react";

export default function Eingabefelder() {
    const [vs, setVs] = useState(0); //vs = Versicherungssumme
    const [vw, setVw] = useState(0); //vw = Versicherungswert
    const [schaden, setSchaden] = useState(0);
    const [es, setEs] = useState(0); //es = Entschädigung

    const Rechnen = (event) => {
        event.preventDefault();
        setEs(vs / vw * schaden);
    };

    function Clear() {
        setVs(0);
        setVw(0);
        setSchaden(0);
        setEs(0);
    }

    return (
        <div>
            <form onSubmit={Rechnen}>
                <input type='number' value={vs} onChange={ (e) => setVs(e.target.value)}/>
                <input type='number' value={vw} onChange={ (e) => setVw(e.target.value)}/>
                <input type='number' value={schaden} onChange={ (e) => setSchaden(e.target.value) }/>
                <input type='submit' value='Berechnen' />
                <input type='button' value='Löschen' onClick={Clear}/>
                <label>Die Versicherung übernimmt:&nbsp;
                <output>{es}</output>
                </label>
                <br/>
            </form>
        </div>
    );
}