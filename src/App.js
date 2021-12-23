import "./App.css";
import { useEffect } from "react";
import SiteHeader from "./SiteHeader/SiteHeader";
import SiteFooter from "./SiteFooter/SiteFooter";
import Provider from "./Context/Provider";
import Body from "./Body/Body";

function App() {
  useEffect(() => {
    document.title = "Starr Ghostwriting Services";
  }, []);
  return (
    <div className="App">
      <Provider>
        <SiteHeader />
        <Body />
        <SiteFooter />
      </Provider>
    </div>
  );
}

export default App;
