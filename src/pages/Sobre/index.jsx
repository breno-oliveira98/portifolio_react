import { Link } from 'react-router-dom'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import styles from './Sobre.module.css'


function Sobre() {
    return (
        <>
            <Header />
            <main className={styles.sobre}>
                <div className={styles.container}>
                    <p>
                        <span>Olá a todos!</span>
                        Meu nome é <strong>Breno</strong> e sou um desenvolvedor <strong>Full Stack</strong> com uma sólida formação em <em> HTML, CSS e JavaScript</em>. 
                        Essas tecnologias são a base do meu trabalho e me permitem criar e manter sites e aplicações web com eficiência e criatividade.
                        <br /> <br />
                        Embora eu também trabalhe com <strong>React</strong> para desenvolver interfaces de usuário dinâmicas e interativas, meu maior domínio está nas fundações do desenvolvimento web: <strong>HTML</strong> para estrutura, <strong>CSS</strong> para estilo e <strong>JavaScript</strong> para funcionalidade. Além disso, utilizo <strong>Tailwind</strong> e <strong>Bootstrap</strong> para garantir que os projetos sejam responsivos e visualmente impactantes.
                        <br /> <br />
                        No lado do back-end, tenho experiência com <strong>APIs REST</strong>, o que me permite integrar e gerenciar dados de maneira eficiente, proporcionando uma experiência de usuário fluida e confiável.
                        <br /><br />
                        Estou sempre em busca de novas oportunidades para aplicar minhas habilidades e enfrentar novos desafios no desenvolvimento web. 
                        <br /><br />
                        Estou animado para colaborar e contribuir para projetos inovadores!
                        Obrigado!
                    </p>
                </div>
                <div className={styles.btn}>
                    <Link to="/projetos">Clique para ver meus projetos</Link>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Sobre
