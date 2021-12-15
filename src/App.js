import ghostwritingStationeryLogo from './Images/ghostwritingStationeryLogo.png'
import './App.css';
import {useEffect} from "react";

function App() {
    useEffect(() => {
        document.title = "Starr Ghostwriting Services"
    }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={ghostwritingStationeryLogo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
