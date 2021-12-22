import "./Home.css";
import starrGhostwritingLogo from "../Images/starrGhostwritingLogo.png";
import Obfuscate from "react-obfuscate";

export const HOME_LABEL = "Home";
const Home = () => {
  return (
    <div className={"Home"}>
      <img
        data-test={"logo"}
        src={starrGhostwritingLogo}
        className="App-logo"
        alt="logo"
      />
      <div className={"App-link"}>
        CONTACT:
        <div data-test={"email"}>
          <Obfuscate email={"robert@robertkstarr.com"} />
        </div>
      </div>
    </div>
  );
};

export default Home;
