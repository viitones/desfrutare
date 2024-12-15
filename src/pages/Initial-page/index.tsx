import { Header } from "../../components/Header";


import './index.css';

import judo from '../../assets/Judô.png';
import volei from '../../assets/volei.png';
import { Contact } from "../../components/Contact";
import { Localization } from "../../components/Localization";
import { Footer } from "../../components/Footer";

export function InitialPage() {

  return (
    
    <>
      <Header />
      <section className="hero">
        <div className="container">
          <h1>Nós somos a Desfrutare</h1>
          <h2>Transformando Vidas Através do Esporte e da Alimentação Saudável para um Futuro mais Forte e Pleno!</h2>
        </div>
      </section>

      <main id="modalidade" className="container mainInit">
        <h2>Modalidades</h2>
        <div className="cardsInit">
          <div className="cardInit">
            <img src={judo} alt="" />
            <div>
              <p>Judô</p>
              <p className="left">O judô é uma arte marcial praticada como esporte de combate e fundada por Jigoro Kano em 1882. Os seus principais objetivos são fortalecer o físico, a mente e o espírito de forma integrada, além de desenvolver técnicas de defesa pessoal.
                <br />
                <br />
              O Judô teve uma grande aceitação em todo o mundo, pois Kano conseguiu reunir a essência dos principais estilos e escolas de jujitsu, arte marcial praticada pelos "bushi", ou cavaleiros durante o período Kamakura (1185-1333), a outras artes de luta praticadas no Oriente...</p>

              <a href="./judo.html">
                <span>Saiba mais</span>
                </a>
            </div>
            
          </div>
          <div className="cardInit right">
            <div>
              <p>Vôlei</p>
              <p>O voleibol é um esporte coletivo praticado entre duas equipes de seis jogadores, que se enfrentam em uma quadra dividida por uma rede. Foi criado em 1895 por William G. Morgan, nos Estados Unidos, com o objetivo de ser uma alternativa menos violenta ao basquete, mas igualmente dinâmica.
                <br />
                <br />
                O voleibol se popularizou rapidamente, espalhando-se por diversos países ao redor do mundo. Com o tempo, o esporte foi adaptado e passou a ser jogado em diferentes modalidades, como o vôlei...</p>
                <a href="./volei.html">Saiba mais</a>
            </div>
            <img src={volei} alt="" />
          </div>
        </div>
      </main>

      <Contact />

      <Localization />

      <Footer />

    </>
  )
}
