import { useState } from "react";
import "../App.css";

export default function Mode({callback}) {
    const [text, setText] = useState('Light');
    const [hintergrund, setHintergrund] = useState('rgb(63, 65, 79)')
    
    function Dtol() { //Dark to Light und Text
        //Text
        if (text == 'Dark') {
            setText('Light');
            //Farbe
            setHintergrund('dark');
            callback(hintergrund);
        } else {
            setText('Dark');
           //Farbe
            setHintergrund('light');
            callback(hintergrund); 
        }
    }

    return (
        <button className='dark_light' onClick={Dtol}>{text}</button>
    );
}