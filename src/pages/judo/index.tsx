import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import './index.css'

import judo from '../../assets/judo/Judo.png'

export function Judo() {
  return (
    <>
      <Header />

      <section className="container containerJ">
        <h1 className='h1J'>JUDÔ</h1>
        <div className="img-cont">
          <img src={judo} alt="Judô" />
          <p>O judô é uma arte marcial que evoluiu para um esporte de combate, idealizado por Jigoro Kano em 1882. Sua essência está em promover o fortalecimento harmônico do corpo, da mente e do espírito, além de ensinar técnicas eficazes de autodefesa. 
              <br /><br />
            A grande aceitação mundial do judô deve-se à visão de Kano, que integrou elementos essenciais dos principais estilos e escolas de jujitsu — uma arte marcial praticada pelos "bushi" (samurais) durante o período Kamakura (1185-1333) — a outras tradições de combate do Oriente, criando um sistema coeso e acessível.
            <br /><br />
            No final do século XIX, o judô foi oficialmente reconhecido como esporte no Japão e adotado nos treinamentos da polícia japonesa, consolidando sua importância na cultura do país.
            <br /><br />
            Hoje, o judô é amplamente praticado em todos os continentes, com milhões de adeptos e federações organizadas globalmente. Sua popularidade deve-se, em parte, à inclusão de públicos diversos: homens e mulheres de todas as idades, crianças, idosos e pessoas com necessidades especiais. Essa acessibilidade contribuiu para o crescimento expressivo de praticantes, fortalecendo sua relevância como esporte e estilo de vida.
            
            A prática do judô utiliza princípios técnicos que canalizam a força e o equilíbrio do adversário a seu favor, promovendo eficiência e estratégia. 
            
            Jigoro Kano, seu fundador, descreveu o judô como "a arte de utilizar ao máximo a força física e espiritual". Segundo ele, cada vitória representa não apenas um triunfo físico, mas também um avanço no fortalecimento espiritual e no desenvolvimento pessoal. </p>
        </div>
      
        <form className='formJ' id="formJ" action="https://api.web3forms.com/submit" method="POST">
          <div>
            <input className='inputJ nameJ' type="text" placeholder="Nome" id="nameJ" name="name" required />

            <input className='inputJ emailJ' type="email" placeholder="Email" id="emailJ" name="email" required />
            <input className='inputJ telJ' type="number" placeholder="Telefone" id="telJ" name="tel" required />

            <input className='inputJ bairroJ' type="text" placeholder="Bairro" id="bairroJ" name="bairro" required />
            <input className='inputJ cidadeJ' type="text" placeholder="Cidade" id="cidadeJ" name="cidade" required />
            <input className='inputJ modalidadeJ' type="text" placeholder="Modalidade desejada" id="modalidadeJ" name="modalidade" required />

            <textarea className='mensagemJ' name="mensagem" id="mensagemJ" placeholder="Digte sua mensagem" />
          </div>
          <button id="finish">Enviar</button>
          <input className='inputJ' type="hidden" name="access_key" value="295612df-9df5-4cfc-8c6b-f7f2ed8b8a19" />
        </form>
      </section>
      <Footer />
    </>
  )
}
