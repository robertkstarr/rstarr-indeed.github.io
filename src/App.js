import "./App.css";
import { useEffect } from "react";
import Home from "./Home/Home";
import SiteHeader from "./SiteHeader/SiteHeader";
import SiteFooter from "./SiteFooter/SiteFooter";

function App() {
  useEffect(() => {
    document.title = "Starr Ghostwriting Services";
  }, []);
  return (
    <div className="App">
      <SiteHeader />
      <Home />
      <SiteFooter />
    </div>
  );
}

export default App;
