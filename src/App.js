import "./App.css";
import { useEffect } from "react";
import Home from "./Home/Home";

function App() {
  useEffect(() => {
    document.title = "Starr Ghostwriting Services";
  }, []);
  return (
    <div className="App">
      <header className="App-header"></header>
      <Home />
    </div>
  );
}

export default App;
