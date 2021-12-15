import ghostwritingStationeryLogo from './Images/ghostwritingStationeryLogo.png'
import './App.css';
import {useEffect} from "react";
import Obfuscate from 'react-obfuscate';

function App() {
    useEffect(() => {
        document.title = "Starr Ghostwriting Services"
    }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={ghostwritingStationeryLogo} className="App-logo" alt="logo" />
          <div className={'App-link'}>
          Contact: <Obfuscate email={"robert@robertkstarr.com"} />
          </div>
      </header>
    </div>
  );
}

export default App;
