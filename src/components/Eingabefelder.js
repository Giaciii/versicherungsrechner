import { useState } from "react";

export default function Eingabefelder() {
    const [vs, setVs] = useState(''); //vs = Versicherungssumme
    const [vw, setVw] = useState(''); //vw = Versicherungswert
    const [schaden, setSchaden] = useState('');
    const [es, setEs] = useState(0); //es = Entschädigung

    const Rechnen = (event) => {
        event.preventDefault();
        setEs(vs / vw * schaden);
    };

    function Clear() {
        setVs('');
        setVw('');
        setSchaden('');
        setEs(0);
    }

    return (
        <div className='eingabe'>
            <form onSubmit={Rechnen}>
                <span className='fragezeichen'>?</span>
                <input type='number' placeholder='Versicherungssumme' value={vs} onChange={ (e) => setVs(e.target.value)}/>
                <br />
                <span className='fragezeichen'>?</span>
                <input type='number' placeholder='Versicherungswert' value={vw} onChange={ (e) => setVw(e.target.value)}/>
                <span className='fragezeichen'>?</span>
                <input type='number' placeholder='Schaden' value={schaden} onChange={ (e) => setSchaden(e.target.value) }/>
                <input type='submit' value='Berechnen' />
                <input type='button' value='Löschen' onClick={Clear}/>
                <br />
                <label className='ergebnis'>Die Versicherung übernimmt:&nbsp;
                    <p>
                        <output>{es}</output>
                        &nbsp;CHF
                    </p>
                </label>
                <br/>
            </form>
        </div>
    );
}