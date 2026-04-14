import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./index.css";

import { useEffect, useState } from "react";
import hamb from "../../assets/icon.svg";

export function Header() {
  const [close, setClose] = useState(false);

  function handleClickOutside(event: MouseEvent) {
    const nav = document.getElementById("mynav");
    if (nav && !nav.contains(event.target as Node)) {
      setClose(false);
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  function handleCloseNav() {
    setClose(true);
  }
  function handleOpenNav() {
    setClose(false);
  }

  return (
    <header>
      <div>
        <Link to="/" className="img-container">
          <img src={logo} alt="infinity institute" />
        </Link>
        <nav>
          <Link className="link" to="/">
            Início
          </Link>
          <a className="link" href="/#modalidade">
            Modalidades
          </a>
          <Link className="link" to="/transparence">
            Transparência
          </Link>
          <a className="link" href="/#contato">
            Contato
          </a>
        </nav>

        <nav className="flex gap-3">
          <Link
            target="_blank"
            className="btn-nav"
            to="https://docs.google.com/forms/d/e/1FAIpQLSctUvaSeFAknAe-gx8_W1xZcCTsGvDzVcUwB_e2pi2jjmo8eg/closedform"
          >
            Inscrição Vôlei
          </Link>
          <Link
            target="_blank"
            className="btn-nav"
            to="https://docs.google.com/forms/d/e/1FAIpQLSfDXFpsZ7ptKdKW4LWIWpOSLuwjOITpqF9pEFhiy8VMtG20Fg/viewform"
          >
            Inscrição Judô
          </Link>
        </nav>

        <div id="mynav" className="overlay" data-close={close}>
          <a href="#" className="close-btn" onClick={handleOpenNav}>
            &times;
          </a>

          <div className="conteudo">
            <Link to="/">Início</Link>
            <a className="cls" href="/#modalidade">
              Modalidadesa
            </a>
            <Link to="/transparence">Transparência</Link>
            <a className="cls" href="/#contato">
              Contato
            </a>
            <Link
              target="_blank"
              className="conteudo"
              to="https://docs.google.com/forms/d/e/1FAIpQLSctUvaSeFAknAe-gx8_W1xZcCTsGvDzVcUwB_e2pi2jjmo8eg/closedform"
            >
              Inscrição Vôlei
            </Link>
            <Link
              target="_blank"
              className="conteudo"
              to="https://docs.google.com/forms/d/e/1FAIpQLSfDXFpsZ7ptKdKW4LWIWpOSLuwjOITpqF9pEFhiy8VMtG20Fg/viewform"
            >
              Inscrição Judô
            </Link>
          </div>
        </div>

        <button className="btn-ico" onClick={handleCloseNav}>
          <img src={hamb} alt="" />
        </button>
      </div>
    </header>
  );
}
