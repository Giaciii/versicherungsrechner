import '../App.css';
import { React, useState } from 'react';
import {useCollapse} from 'react-collapsed';

function Collapsible() {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
    const [vs, setVs] = useState(''); //vs = Versicherungssumme
    const [vw, setVw] = useState(''); //vw = Versicherungswert
    const [be, setBe] = useState(0); //be = Betrag
    const [info, setInfo] = useState('');

    const Rechnen = (event) => {
        if (vs === 'undefined' || vw === 'undefined') {
            alert("STOOPPP")
        } else {
            event.preventDefault();
            setBe(vs * vw);
        }
    };

    function Clear() {
        setVs('');
        setVw('');
        setBe(0);
        setInfo('');
    }

return (
    <div className="collapsible collaps_posi">
        <div className="header" {...getToggleProps()}>
            {isExpanded ? 'Weitere Versicherungen schliessen' : 'Weitere Versicherungen öffnen'}
        </div>
        <div {...getCollapseProps()}>
            <div className="content">
            <p className='titel'>
                Versicherungsrechner als Quadratmetermodell
            </p>
                <form onSubmit={Rechnen}>
                    <span className='fragezeichen' title='Den Betrag, den Sie mit der Versicherung abgemacht haben.'>?</span>
                    <input type='number' placeholder='Versicherungssumme' value={vs} min='0' onChange={ (e) => setVs(e.target.value)}/>
                    <br />
                    <span className='fragezeichen' title='Wie viele Quadratmeter Wohnfläche haben Sie?'>?</span>
                    <input type='number' placeholder='Quadratmeteranzahl' value={vw} min='0' onChange={ (e) => setVw(e.target.value)}/>
                    <input type='submit' value='Berechnen' className='submitHover'/>
                    <input type='button' value='Löschen' onClick={Clear}/>
                    <br />
                    <label className='ergebnis'>Die Versicherungssumme beträgt:&nbsp;
                        <p>
                            <output>{be}</output>
                            &nbsp;CHF&nbsp;
                        </p>
                    </label>
                    <label className='infos'>
                        {info}
                    </label>
                    <br/>
                </form>
            </div>
        </div>
    </div>
    );
}

export default function Quadra() {
    return (
        <Collapsible/>
    );
}