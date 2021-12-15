import starrGhostwritingLogo from "./Images/starrGhostwritingLogo.png";
import "./App.css";
import { useEffect } from "react";
import Obfuscate from "react-obfuscate";

function App() {
  useEffect(() => {
    document.title = "Starr Ghostwriting Services";
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={starrGhostwritingLogo} className="App-logo" alt="logo" />
        <div className={"App-link"}>
          CONTACT:
          <div>
            <Obfuscate email={"robert@robertkstarr.com"} />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
