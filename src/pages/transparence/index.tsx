import { Header } from '../../components/Header'
import './index.css'

import Masonry from '../../components/React-Bits/Masonry'

const dataq = [
  { id: 1, image: 'https://i.ibb.co/Cs0Gkd7Q/foto-1.jpg', height: 400 },
  { id: 2, image: 'https://i.ibb.co/27T0c0h3/foto-2.jpg', height: 300 },
  { id: 3, image: 'https://i.ibb.co/mC81gg80/foto-3.jpg', height: 700 },
  { id: 4, image: 'https://i.ibb.co/XcfWkkG/foto-4.jpg', height: 400 },
  { id: 5, image: 'https://i.ibb.co/1hTHXjr/foto-5.jpg', height: 400 },
  { id: 6, image: 'https://i.ibb.co/7tLx14gz/foto-6.jpg', height: 300 },
  { id: 7, image: 'https://i.ibb.co/207vRY41/foto-7.jpg', height: 350 },
  { id: 8, image: 'https://i.ibb.co/zHBjQZ1K/foto-8.jpg', height: 400 },
  { id: 9, image: 'https://i.ibb.co/1JZ6NLSZ/foto-9.jpg', height: 400 },
  { id: 10, image: 'https://i.ibb.co/zhfBmJ9d/foto-10.jpg', height: 300 },
  { id: 11, image: 'https://i.ibb.co/vvRCGQPK/foto-11.jpg', height: 350 },
  { id: 12, image: 'https://i.ibb.co/svw4Y6fP/foto-12.jpg', height: 600 },
  { id: 13, image: 'https://i.ibb.co/PvCmWhn0/foto-13.jpg', height: 450 },
  { id: 14, image: 'https://i.ibb.co/zhQzKrBx/foto-15.jpg', height: 500 },
  { id: 15, image: 'https://i.ibb.co/v6FwVKp3/foto-14.jpg', height: 400 }
];

const dataf = [
  { id: 1, image: 'https://i.ibb.co/bMFTqBrP/foto-1.jpg', height: 400 },
  { id: 2, image: 'https://i.ibb.co/Y7fGZgZv/foto-2.jpg', height: 500 },
  { id: 3, image: 'https://i.ibb.co/ZjMCjJv/foto-3.jpg', height: 300 },
  { id: 4, image: 'https://i.ibb.co/hJPXGzgN/foto-4.jpg', height: 200 },
  { id: 5, image: 'https://i.ibb.co/S4rY8Tpt/foto-5.jpg', height: 400 },
  { id: 6, image: 'https://i.ibb.co/XkFF9xXH/foto-6.jpg', height: 600 },
  { id: 7, image: 'https://i.ibb.co/knBDDkK/foto-7.jpg', height: 400 },
  { id: 8, image: 'https://i.ibb.co/BbCVC0R/foto-8.jpg', height: 600 },
  { id: 9, image: 'https://i.ibb.co/Nn2WcBFy/foto-9.jpg', height: 300 },
  { id: 10, image: 'https://i.ibb.co/qYqm8qRh/foto-10.jpg', height: 300 },
  { id: 11, image: 'https://i.ibb.co/5xfqQQty/foto-11.jpg', height: 400 },
  { id: 12, image: 'https://i.ibb.co/svP8tPcR/foto-12.jpg', height: 500 },
  { id: 13, image: 'https://i.ibb.co/B2VMX4FT/foto-13.jpg', height: 700 },
];

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
                  
                  <Masonry data={dataq} />

                  {/* {queimada.map((img) => {
                    return(
                      <img src={img.src} alt={img.alt} key={img.id} height={300} width={300}/>
                    )
                  })} */}

                </div>

                <h3>Futebol</h3>

                <Masonry data={dataf} />

                {/* <div className="pictures">
                  {futebol.map((img) => {
                    return(
                      <img src={img.src} alt={img.alt} key={img.id} height={300} width={300} />
                    )
                  })}
                </div> */}
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
