import { Header } from '../../components/Header';
import './index.css';

import iconExcel from '../../assets/excel.png';
import iconPdf from '../../assets/pdf.png';

import fut1 from '../../assets/fut/foto1.avif';
import fut10 from '../../assets/fut/foto10.avif';
import fut11 from '../../assets/fut/foto11.avif';
import fut12 from '../../assets/fut/foto12.avif';
import fut13 from '../../assets/fut/foto13.avif';
import fut2 from '../../assets/fut/foto2.avif';
import fut3 from '../../assets/fut/foto3.avif';
import fut4 from '../../assets/fut/foto4.avif';
import fut5 from '../../assets/fut/foto5.avif';
import fut6 from '../../assets/fut/foto6.avif';
import fut7 from '../../assets/fut/foto7.avif';
import fut8 from '../../assets/fut/foto8.avif';
import fut9 from '../../assets/fut/foto9.avif';
import Masonry from '../../components/React-Bits/Masonry';

import queimada1 from '../../assets/queimada/foto1.avif';
import queimada10 from '../../assets/queimada/foto10.avif';
import queimada11 from '../../assets/queimada/foto11.avif';
import queimada12 from '../../assets/queimada/foto12.avif';
import queimada13 from '../../assets/queimada/foto13.avif';
import queimada2 from '../../assets/queimada/foto2.avif';
import queimada3 from '../../assets/queimada/foto3.avif';
import queimada4 from '../../assets/queimada/foto4.avif';
import queimada5 from '../../assets/queimada/foto5.avif';
import queimada6 from '../../assets/queimada/foto6.avif';
import queimada7 from '../../assets/queimada/foto7.avif';
import queimada8 from '../../assets/queimada/foto8.avif';
import queimada9 from '../../assets/queimada/foto9.avif';

const dataq = [
  { id: 1, image: queimada1, height: 400 },
  { id: 2, image: queimada2, height: 300 },
  { id: 3, image: queimada3, height: 700 },
  { id: 4, image: queimada4, height: 400 },
  { id: 5, image: queimada5, height: 400 },
  { id: 6, image: queimada6, height: 300 },
  { id: 7, image: queimada7, height: 350 },
  { id: 8, image: queimada8, height: 400 },
  { id: 9, image: queimada9, height: 400 },
  { id: 10, image: queimada10, height: 300 },
  { id: 11, image: queimada11, height: 350 },
  { id: 12, image: queimada12, height: 600 },
  { id: 13, image: queimada13, height: 450 }
];

const dataf = [
  { id: 1, image: fut1, height: 400 },
  { id: 2, image: fut2, height: 500 },
  { id: 3, image: fut3, height: 300 },
  { id: 4, image: fut4, height: 200 },
  { id: 5, image: fut5, height: 400 },
  { id: 6, image: fut6, height: 600 },
  { id: 7, image: fut7, height: 400 },
  { id: 8, image: fut8, height: 600 },
  { id: 9, image: fut9, height: 300 },
  { id: 10, image: fut10, height: 300 },
  { id: 11, image: fut11, height: 400 },
  { id: 12, image: fut12, height: 500 },
  { id: 13, image: fut13, height: 700 },
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
                  <img src={iconPdf} alt="" />
                  <p>Proposta</p>
                </a>
                <a className="cardT" href="./downloads/Termo de Fomento n° 941178-2023 - Desfrutare ONG - DF.pdf" download="">
                  <img src={iconPdf} alt="" />
                  <p>Termo de Fomento</p>
                </a>
                <a className="cardT" href="./downloads/Publicação D.O.U. - Desfrutare ONG - DF.pdf" download="">
                  <img src={iconPdf} alt="" />
                  <p>Extrato Termo de Fomento</p>
                </a>
                <a className="cardT" href="./downloads/Painel Discricionárias.pdf" download="">
                  <img src={iconPdf} alt="" />
                  <p>Painel Discricionárias</p>
                </a>
                <a className="cardT" href="./downloads/Planilha - Painel Discricionárias.xlsx" download="">
                  <img src={iconExcel} alt="" />
                  <p>Planilha - Painel Discricionárias</p>
                </a>
              </div>
              <div className="projetos">
                <h2>Projetos:</h2>
                <h3>Queimada</h3>

                <div className="pictures">

                  <Masonry data={dataq} />

                </div>

                <h3>Futebol</h3>

                <div className="pictures">
                  <Masonry data={dataf} />
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
