import { useState } from "react";
import "./App.css";
import logo from "./general/images/Studio_Ghibli_logo.png";
import { FaBars } from "react-icons/fa";

function App() {
  const [isOpen, setOpen] = useState(false);
  
  return (
    <div className="App">
      <header className="header-container">
        <img className="header-logo" src={logo} alt="Logo dos Studios Ghibli" />
        <div className={`header-container__menu-content ${(isOpen ? 'expanded' : '')}`}>
          <a
            className="header-link"
            href="https://meyerweb.com/eric/tools/css/reset/"
          >
            Filmes
          </a>
          <a
            className="header-link"
            href="https://meyerweb.com/eric/tools/css/reset/"
          >
            Atores
          </a>
          <a
            className="header-link"
            href="https://meyerweb.com/eric/tools/css/reset/"
          >
            Locais
          </a>
        </div>

        <button className="hamburguer-icon" onClick={() => setOpen(!isOpen)}>
          <FaBars />
        </button>
      </header>
    </div>
  );
}

export default App;
