import Footer from "../../components/Footer";
import Header from "../../components/Header";
import styles from "./Contatos.module.css";

function Contatos() {
  return (
    <>
      <Header />
      <section className={styles.contatos}>
        <div className="container"> 
          <h1>Contatos</h1>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Contatos;
