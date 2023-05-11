import { useState, useEffect } from "react";
import "../App.css";

export default function Mode({callback}) {
    const [text, setText] = useState('Light');
    const [hintergrund, setHintergrund] = useState('');
    
    function Dtol() { //Dark to Light und Text
        //Text
        if (text == 'Light') {
            setText('Dark');
            //Farbe
            setHintergrund('light');
            callback(hintergrund);
        } else {
            setText('Light');
           //Farbe
            setHintergrund('dark');
            callback(hintergrund);
        }      
    }

    // Damit die Farbe beim ersten Mal gändert wird
    useEffect(() => {
        callback(hintergrund);
    }, [hintergrund, callback]);

    return (
        <button className='dark_light' onClick={Dtol}>{text}</button>
    );
}