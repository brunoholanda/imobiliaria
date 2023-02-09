import { Link } from 'react-router-dom';
import styles from './CabecalhoLinks.module.scss';
import wp from '../../public/assets/icons/wp.png';
import logo from '../../public/assets/img/logo.png';

export default function CabecalhoLinks() {
    return (
        <section className={styles.cabecalho}>
            <Link to="./">
                <img src={logo} alt="logo da imobiliaria" />
            </Link>
            <div className={styles.cabecalho__links}>
                <Link to="./">
                    Home
                </Link>
                <a href="#imoveis">Imóveis</a>
                <a href="#sobre">Sobre Nós</a>
                <a href="#contato">Contato</a>
            </div>
            <div className={styles.cabecalho__botao}>
                <Link to="./">
                    <img src={wp} alt="icone do whatsapp" />
                    <p>WHATSAPP</p>
                </Link>
            </div>
        </section>
    )
}