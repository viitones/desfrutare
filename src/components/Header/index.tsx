import './index.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'

import hamb from '../../assets/icon.svg'
import { useEffect, useState } from 'react'

export function Header() {
  const [close, setClose] = useState(false)

  function handleClickOutside(event: MouseEvent) {
    const nav = document.getElementById('mynav')
    if (nav && !nav.contains(event.target as Node)) {
      setClose(false)      
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [handleClickOutside])

  function handleCloseNav() {
    setClose(true)
  }
  function handleOpenNav() {
    setClose(false)
  }

    return (
    <header>
      <div>
        <Link to="/" className="img-container">
          <img src={logo} alt="infinity institute" />
        </Link>
        <nav>
          <Link className='link' to="/">Início</Link>
          <a className='link' href="/#modalidade">Modalidades</a>
          <Link className='link' to="/transparence">Transparência</Link>
          <a className='link' href="/#contato">Contato</a>
        </nav>

        <div id="mynav" className="overlay" data-close={close}>
          <a href="javascript:void(0)" className="close-btn" onClick={handleOpenNav}>
            &times;
          </a>

          <div className="conteudo">
            <Link to="/">Início</Link>
            <a className="cls" href="/#modalidade">Modalidades</a>
            <Link to="/transparence">Transparência</Link>
            <a className="cls" href="/#contato">Contato</a>
          </div>
        </div>

        <button className="btn-ico" onClick={handleCloseNav}>
          <img src={hamb} alt="" />
        </button>
      </div>
    </header>
  )
}
