import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import '../judo/index.css'

import volei from '../../assets/volei/volei.png'

export function Volei() {
  return (
    <>
      <Header />

      <section className="container containerJ">
        <h1 className='h1J'>Vôlei</h1>
        <div className="img-cont">
          <img src={volei} alt="Vôlei" />
          <p>
            
        O voleibol é um esporte coletivo criado em 1895 por William G. Morgan, nos Estados Unidos, com o objetivo de oferecer uma alternativa de atividade física menos intensa em comparação ao basquetebol. Sua dinâmica envolve duas equipes que competem para marcar pontos ao passar a bola por cima de uma rede, buscando que ela toque o chão na quadra adversária.
        <br /><br />
        Inicialmente chamado de "mintonette", o voleibol rapidamente ganhou popularidade por sua acessibilidade e por poder ser praticado em ambientes fechados ou ao ar livre. Com o passar do tempo, as regras foram ajustadas, tornando o jogo mais ágil e competitivo, o que contribuiu para sua disseminação global.
        <br /><br />
        O esporte foi incluído no programa oficial dos Jogos Olímpicos em 1964, durante as Olimpíadas de Tóquio, consolidando-se como uma das modalidades mais praticadas no mundo. Além disso, a criação de sua variante de praia, o vôlei de praia, deu novo fôlego à modalidade, atraindo diferentes públicos e ampliando sua presença em cenários esportivos diversos
        <br /><br />
        O voleibol se destaca pela combinação de estratégia, habilidade técnica e trabalho em equipe. Movimentos como saques, passes, levantamentos, ataques, bloqueios e defesas exigem precisão e sincronismo, o que torna o jogo emocionante tanto para os jogadores quanto para os espectadores.
        Com milhões de praticantes em todos os continentes e competições de alto nível organizadas pela Federação Internacional de Voleibol (FIVB), o esporte continua a inspirar atletas de todas as idades e a promover valores como cooperação, disciplina e espírito esportivo.
          </p>
        </div>
      
        <form className='formJ' id="form" action="https://api.web3forms.com/submit" method="POST">
          <div>
            <input className='inputJ' type="text" placeholder="Nome" id="name" name="name" required />

            <input className='inputJ' type="email" placeholder="Email" id="email" name="email" required />
            <input className='inputJ' type="number" placeholder="Telefone" id="tel" name="tel" required />

            <input className='inputJ' type="text" placeholder="Bairro" id="bairro" name="bairro" required />
            <input className='inputJ' type="text" placeholder="Cidade" id="cidade" name="cidade" required />
            <input className='inputJ' type="text" placeholder="Modalidade desejada" id="modalidade" name="modalidade" required />

            <textarea name="mensagem" id="mensagem" placeholder="Digte sua mensagem" />
          </div>
          <button id="finish">Enviar</button>
          <input className='inputJ' type="hidden" name="access_key" value="295612df-9df5-4cfc-8c6b-f7f2ed8b8a19" />
        </form>
      </section>
      <Footer />
    </>
  )
}
