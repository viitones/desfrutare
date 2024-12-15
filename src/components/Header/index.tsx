import './index.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'

export function Header() {
  function closeNav() {
  }
  function openNav() {
  }

    return (
    <header>
      <div>
        <div className="img-container">
          <img src={logo} alt="infinity institute" />
        </div>
        <nav>
          <a href="/index.html">Início</a>
          <div>
            <a href="#modalidade">Modalidades</a>
          </div>
          <Link to="./transparencia.html">Transparência</Link>
          <a href="#contato">Contato</a>
        </nav>

        <div id="mynav" className="overlay">
          <a href="javascript:void(0)" className="close-btn" onClick={closeNav}>
            &times;
          </a>

          <div className="conteudo">
            <a href="/index.html">Início</a>
            <a className="cls" href="#modalidade">Modalidades</a>
            <a href="./transparencia.html">Transparência</a>
            <a className="cls" href="#contato">Contato</a>
          </div>
        </div>

        <button className="btn-ico" onClick={openNav}>
          <img src="./assets/icon.svg" alt="" />
        </button>
      </div>
    </header>
  )
}
