import './App.css';
import Eingabefelder from './components/Eingabefelder';
import Mode from './components/Mode';
import Footer from './components/Footer';
import { useState } from "react";

function App() {
  const [hintergrund, setHintergrund] = useState('rgb(63, 65, 79)');

  return (
    <div className={hintergrund}>
      <Mode callback={setHintergrund}/>
      <Eingabefelder />
      <Footer />
    </div>
  );
}

export default App;
