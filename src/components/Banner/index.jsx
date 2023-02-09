import styles from './Banner.module.scss';
import banner from '../../public/assets/img/banner.png'
import Botao from 'components/Botao';

export default function Banner() {
    return (
        <section className={styles.banner}>
            <img src={banner} alt="banner da da pagina" />
            <div className={styles.banner__info}>
                <h1>Encontre o lugar dos sonhos para você morar</h1>
                <p>Alugue ou compre seu imóvel de maneira simples e rápida com valores acessivéis, possuímos um grande acervo para suprir sua necessidade. </p>
                <Botao>SAIBA MAIS</Botao>
            </div>
        </section>
    )
}