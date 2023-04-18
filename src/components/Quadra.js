import '../App.css';
import {Collapse} from 'react-collapse';

export default function Quadra() {
    return (
        <Collapse isOpened={true || false}>
            <div>Random content</div>
        </Collapse>
    );
}