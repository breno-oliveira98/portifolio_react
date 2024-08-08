import Footer from "../../components/Footer";
import Header from "../../components/Header";
import styles from "./Contatos.module.css";

function Contatos() {
  return (
    <>
      <Header />
      <section className={styles.contatos}>
        <div className={styles.container}>
          <form>
            <h1>Contatos</h1>
            <div className="item-group">
              <div className="group-label">
                <label htmlFor="nome">Nome</label>
              </div>
              <div className="group-input">
                <input type="nome" id="nome" placeholder="Insira seu nome aqui" />
              </div>
              <div className="group-label">
                <label htmlFor="tel">Telefone</label>
              </div>
              <div className="group-input">
                <input type="tel" id="tel" placeholder="( )9999-0000"/>
              </div>
              <div className="group-label">
                <label htmlFor="email">Email</label>
              </div>
              <div className="group-input">
                <input type="email" id="email" placeholder="Insira seu email aqui"/>
              </div>
              <div className="group-label">
                <label htmlFor="textarea">Deixa sua mensagem</label>
              </div>
              <div className="group-input">
                <textarea type="text" id="textarea" />
              </div>
            </div>
          </form>

        </div>
      </section>
      <Footer />
    </>
  );
}

export default Contatos;
