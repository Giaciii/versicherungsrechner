import bh from '../img/bh.png';
import '../App.css';

export default function Bilder() {
    return(
        <div className="bilder">
            <img src={bh} alt='Brennendes Haus' className='bild'/>
        </div>
    )
}