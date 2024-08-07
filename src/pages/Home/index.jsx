import Header from '../../components/Header'
import Footer from '../../components/Footer'
import styles from './Home.module.css'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <>
        <Header />
        <section className={styles.home}>
        <div className='apresentacao'>
          <p>
            Olá, sou <br />
            <span>Breno Oliveira</span> <br />
            Dev Full Stack
          </p>
          <Link to="/sobre" className='btn'>
            Saiba mais sobre mim
          </Link>
        </div>
        <figure>
            <img className='img-home' src="/dev-img.svg" alt="Imagem da Home" />
        </figure>

      </section>
        <Footer/>
      </>
    )
}

export default Home
