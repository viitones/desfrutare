import './index.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'

import hamb from '../../assets/icon.svg'
import { useState } from 'react'

export function Header() {
  const [close, setClose] = useState(false)

  function handleCloseNav() {
    setClose(true)
  }
  function handleOpenNav() {
    setClose(false)
  }

    return (
    <header>
      <div>
        <div className="img-container">
          <img src={logo} alt="infinity institute" />
        </div>
        <nav>
          <Link to="/">Início</Link>
          <div>
            <a href="/#modalidade">Modalidades</a>
          </div>
          <Link to="/transparence">Transparência</Link>
          <a href="/#contato">Contato</a>
        </nav>

        <div id="mynav" className="overlay" data-close={close}>
          <a href="javascript:void(0)" className="close-btn" onClick={handleOpenNav}>
            &times;
          </a>

          <div className="conteudo">
            <Link to="/">Início</Link>
            <a className="cls" href="#modalidade">Modalidades</a>
            <Link to="/transparence">Transparência</Link>
            <a className="cls" href="#contato">Contato</a>
          </div>
        </div>

        <button className="btn-ico" onClick={handleCloseNav}>
          <img src={hamb} alt="" />
        </button>
      </div>
    </header>
  )
}
