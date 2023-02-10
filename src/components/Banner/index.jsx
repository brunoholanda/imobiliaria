import styles from './Banner.module.scss';
import banner from '../../public/assets/img/banner.png'
import Botao from 'components/Botao';
import { Link } from 'react-router-dom';

export default function Banner() {
    return (
        <section className={styles.banner}>
            <img src={banner} alt="banner da da pagina" />
            <div className={styles.banner__info}>
                <h1>Encontre o lugar dos sonhos para você morar</h1>
                <p>Alugue, compre ou anuncie seu imóvel de maneira simples e rápida, nossa plataforma esta apta para lhe atender. </p>
                <Link to="/adicionar">
                <Botao>ANUNCIE AQUI !</Botao>
                </Link>
            </div>
        </section>
    )
}