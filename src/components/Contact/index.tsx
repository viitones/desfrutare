import './index.css'

export function Contact() {
  return (
    <section id='contato' className='contato'>
      <h2>Fale Conosco</h2>
      <div>
        <div className="dados-geral">
          <div className="dados">
            <h2>Endereço</h2>
            <p>SCS Q. 2 BL C Lote Nº 22, Sala 609 <br />
              Asa Sul, Brasília - DF
              
              CEP: 70.300-902</p>
          </div>
          <div className="dados">
            <h2>Telefone</h2>
            <p>(61) 9 8176-0032</p>
          </div>
          <div className="dados">
            <h2>Email</h2>
            <p>contato@desfrutare.org.br</p>
          </div>
          <div className="dados">
            <h2>Atendimento</h2>
            <p>Segunda à Sexta</p>
            <p>8h às 18h</p>
          </div>
        </div>

        <div className="mensagem">
          <h2>Nos mande uma mensagem!</h2>
          <form id="form" action="https://api.web3forms.com/submit" className='formC' method="POST">
            <div>
              <input className='inputC' type="text" placeholder="Nome" id="name" name="name" required />
              <input className='inputC' type="text" placeholder="Sobrenome" id="sobrenome" name="sobrenome" required />
              <input className='inputC' type="email" placeholder="Email" id="email" name="email" required />
              <input className='inputC' type="number" placeholder="Telefone" id="tel" name="tel" required />
              <textarea name="mensagem" id="mensagem" placeholder="Digte sua mensagem" />
            </div>
            <button id="finish">Enviar</button>
            <input className='inputC' type="hidden" name="access_key" value="295612df-9df5-4cfc-8c6b-f7f2ed8b8a19" />
          </form>
        </div>
      </div>
    </section>
  )
}
