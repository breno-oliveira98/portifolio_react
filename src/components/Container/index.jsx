import styles from './Container.module.css'

function Container() {
    return (
        <section className={styles.container}>
        <div className='apresentacao'>
          <p>
            Olá, sou <br />
            <span>Breno Oliveira</span> <br />
            Dev Full Stack
          </p>
          <button>
            Saiba mais sobre mim
          </button>
        </div>
        <figure>
            <img className='img-home' src="/dev-img.svg" alt="Imagem da Home" />
        </figure>

      </section>
    )
}

export default Container
