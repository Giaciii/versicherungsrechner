import { useState } from "react";

export default function Eingabefelder() {
    const [vs, setVs] = useState(''); //vs = Versicherungssumme
    const [vw, setVw] = useState(''); //vw = Versicherungswert
    const [schaden, setSchaden] = useState('');
    const [es, setEs] = useState(0); //es = Entschädigung
    const [info, setInfo] = useState('');

    const Rechnen = (event) => {
        if ( vs > vw ) {
            event.preventDefault();
            setInfo('Sie haben eine Überversicherung.')
            setEs(schaden);
            console.log("Überversicherung")
        } else {
            if ( vs < vw ) {
                event.preventDefault();
                setInfo('Sie haben eine Unterversicherung.')
                setEs(vs / vw * schaden);
            } else {
                console.log("Rechnung")
                event.preventDefault();
                setEs(vs / vw * schaden);
                setInfo('');
            }
        }
    };

    function Clear() {
        setVs('');
        setVw('');
        setSchaden('');
        setEs(0);
        setInfo('');
    }

    return (
        <div className='eingabe'>
            <form onSubmit={Rechnen}>
                <span className='fragezeichen' title='Den Betrag, den Sie mit der Versicherung abgemacht haben.'>?</span>
                <input type='number' placeholder='Versicherungssumme' value={vs} min='0' onChange={ (e) => setVs(e.target.value)}/>
                <br />
                <span className='fragezeichen' title='Wie teuer wäre es, wenn Sie ihr gesamten Haushalt nochmals kaufen müssten?'>?</span>
                <input type='number' placeholder='Versicherungswert' value={vw} min='0' onChange={ (e) => setVw(e.target.value)}/>
                <span className='fragezeichen' title='Wie hoch ist der Schaden?'>?</span>
                <input type='number' placeholder='Schaden' value={schaden} min='0' onChange={ (e) => setSchaden(e.target.value) }/>
                <input type='submit' value='Berechnen' />
                <input type='button' value='Löschen' onClick={Clear}/>
                <br />
                <label className='ergebnis'>Die Versicherung übernimmt:&nbsp;
                    <p>
                        <output>{es}</output>
                        &nbsp;CHF
                    </p>
                </label>
                <label className='infos'>
                    {info}
                </label>
                <br/>
            </form>
        </div>
    );
}