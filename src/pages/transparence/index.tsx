import { Header } from '../../components/Header'
import './index.css'

import {futebol, queimada} from '../../../galeria.json'

export function Transparence() {
  return (
    <>
      <div className="body">
        <div className="bg">
          <Header />

          <div className="main-container">
          <main className='mainT'>
            <h1>Transparência</h1>
            <div>
              <h2>Administrativo</h2>
              <div className="cardsT">
                <a className="cardT" href="./downloads/ExtratoProposta.pdf" download="">
                  <img src="https://static.wixstatic.com/media/40d80b8089c8418a961cb75d96d491f7.png/v1/fill/w_52,h_70,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/40d80b8089c8418a961cb75d96d491f7.png" alt="" />
                  <p>Proposta</p>
                </a>
                <a className="cardT" href="./downloads/Termo de Fomento n° 941178-2023 - Desfrutare ONG - DF.pdf" download="">
                  <img src="https://static.wixstatic.com/media/40d80b8089c8418a961cb75d96d491f7.png/v1/fill/w_52,h_70,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/40d80b8089c8418a961cb75d96d491f7.png" alt="" />
                  <p>Termo de Fomento</p>
                </a>
                <a className="cardT" href="./downloads/Publicação D.O.U. - Desfrutare ONG - DF.pdf" download="">
                  <img src="https://static.wixstatic.com/media/40d80b8089c8418a961cb75d96d491f7.png/v1/fill/w_52,h_70,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/40d80b8089c8418a961cb75d96d491f7.png" alt="" />
                  <p>Extrato Termo de Fomento</p>
                </a>
              </div>
              <div className="projetos">
                <h2>Projetos:</h2>
                <h3>Queimada</h3>
                <div className="pictures">
                  
                  {queimada.map((img) => {
                    return(
                      <img src={img.src} alt={img.alt} key={img.id} height="300" width="300" />
                    )
                  })}

                </div>

                <h3>Futebol</h3>
                <div className="pictures">
                  {futebol.map((img) => {
                    return(
                      <img src={img.src} alt={img.alt} key={img.id} height="300" width="300" />
                    )
                  })}
                </div>
              </div>
            </div>
          </main>
        
          
        </div>

        </div>
      </div>

      <footer className='footerT'>
      <a href="">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
      </a>
    </footer>
    </>
  )
}
