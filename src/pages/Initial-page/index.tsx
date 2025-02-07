import { Header } from "../../components/Header";


import './index.css';

import judo from '../../assets/Judô.png';
import volei from '../../assets/volei.png';

import { Contact } from "../../components/Contact";
import { Localization } from "../../components/Localization";
import { Footer } from "../../components/Footer";
import { Link } from "react-router-dom";
import Slider from "../../components/Slider";
import SplitText from "../../components/React-Bits/Split-text";
import AnimatedContent from "../../components/React-Bits/Animated-content";

export function InitialPage() {

  return (
    
    <>
      <Header />
      <section className="hero">
        <div className="container">
          {/* <h1>Nós somos a Desfrutare</h1> */}
          <h1>
            <SplitText
              text="Nós somos a Desfrutare"
              delay={50}
              animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
              animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
              threshold={0.2}
              rootMargin="-50px"
            />
          </h1>
          <h2>
            <SplitText
              text="Transformando Vidas Através do Esporte e da Alimentação Saudável para um Futuro mais Forte e Pleno!"
              delay={30}
              animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
              animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
              threshold={0.2}
              rootMargin="-50px"
            />
          </h2>
        </div>
      </section>

      <main id="modalidade" className="container mainInit">
        <AnimatedContent
          distance={200}
          direction="vertical"
          config={{ tension: 50, friction: 20 }}
          initialOpacity={0.2}
          animateOpacity
          scale={0.7}
          threshold={0.2}
        >
        <h2>Modalidades</h2>
        </AnimatedContent>
        <div className="cardsInit">
          <AnimatedContent
          distance={200}
          reverse={true}
          direction="horizontal"
          config={{ tension: 50, friction: 20 }}
          initialOpacity={0.1}
          animateOpacity
          scale={0.7}
          threshold={0.2}
          >
            <div className="cardInit">
              <img src={judo} alt="" />
              <div>
                <p>Judô</p>
                <p className="left">O judô é uma arte marcial praticada como esporte de combate e fundada por Jigoro Kano em 1882. Os seus principais objetivos são fortalecer o físico, a mente e o espírito de forma integrada, além de desenvolver técnicas de defesa pessoal.
                  <br />
                  <br />
                O Judô teve uma grande aceitação em todo o mundo, pois Kano conseguiu reunir a essência dos principais estilos e escolas de jujitsu, arte marcial praticada pelos "bushi", ou cavaleiros durante o período Kamakura (1185-1333), a outras artes de luta praticadas no Oriente...</p>

                <Link to="/judo">
                  <span>Saiba mais</span>
                  </Link>
              </div>
              
            </div>
          </AnimatedContent>
          <AnimatedContent
            distance={200}
            direction="horizontal"
            config={{ tension: 50, friction: 20 }}
            initialOpacity={0.1}
            animateOpacity
            scale={0.7}
            threshold={0.2}
            >
            <div className="cardInit right">
              <div>
                <p>Vôlei</p>
                <p>O voleibol é um esporte coletivo praticado entre duas equipes de seis jogadores, que se enfrentam em uma quadra dividida por uma rede. Foi criado em 1895 por William G. Morgan, nos Estados Unidos, com o objetivo de ser uma alternativa menos violenta ao basquete, mas igualmente dinâmica.
                  <br />
                  <br />
                  O voleibol se popularizou rapidamente, espalhando-se por diversos países ao redor do mundo. Com o tempo, o esporte foi adaptado e passou a ser jogado em diferentes modalidades, como o vôlei...</p>
                  <Link to="/volei">Saiba mais</Link>
              </div>
              <img src={volei} alt="" />
            </div>
          </AnimatedContent>
        </div>

        <AnimatedContent
          distance={80}
          reverse={true}
          direction="vertical"
          config={{ tension: 50, friction: 20 }}
          initialOpacity={0.1}
          animateOpacity
          scale={0.7}
          threshold={0.2}
        >
          <h2>Galeria</h2>
        </AnimatedContent>
        <AnimatedContent
          distance={120}
          direction="vertical"
          config={{ tension: 50, friction: 20 }}
          initialOpacity={0.1}
          animateOpacity
          scale={0.7}
          threshold={0.2}
        >
          <div className="galeria">
            <Slider />
          </div>
        </AnimatedContent>

      </main>

      <Contact />

      <Localization />

      <Footer />

    </>
  )
}
