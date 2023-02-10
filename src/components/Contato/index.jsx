import styles from './Contato.module.scss';
import logo from '../../public/assets/img/logo.png';
import { Link } from 'react-router-dom';
import insta from '../../public/assets/icons/instaroxo.png';
import fb from '../../public/assets/icons/fb-roxo.png';
import wp from '../../public/assets/icons/wp-roxo.png';
import telefone from '../../public/assets/icons/telefone-roxo.png';
import email from '../../public/assets/icons/mail-roxo.png';

export default function Contato() {
    return (
        <section className={styles.contato} scroll-page id="contato">
            <div className={styles.contato__logo}>
                <Link to="./">
                    <img src={logo} alt="logo da imobiliaria" />
                </Link>
                <p>Referência no mercado imobiliário</p>
                <div className={styles.contato__social}>
                    <Link to="./">
                        <img src={insta} alt="logo do insta roxo" />
                    </Link>
                    <Link to="./">
                        <img src={fb} alt="logo do facebook roxo" />
                    </Link>
                    <Link to="./">
                        <img src={wp} alt="logo do whatsapp roxo" />
                    </Link>
                </div>
            </div>
            <div className={styles.contato__navegacao}>
                <h3>Navegação</h3>
                <nav>
                    <a href="#home">Home</a>
                    <a href="#imoveis">Imóveis</a>
                    <a href="#sobre">Sobre Nós</a>
                    <a href="#contato">Contato</a>
                </nav>
            </div>
            <div className={styles.contato__info}>
                <h3>Informações de contato </h3>
                <div className={styles.contato__mail}>
                    <div className={styles.contato__telmail}>
                        <img src={telefone} alt="icone de telefone" />
                        <p>(81) 99764-5036</p>
                    </div>
                    <div className={styles.contato__telmail}>
                        <img src={email} alt="icone de email" />
                        <p>provisorio@gmail.com</p>
                    </div>
                </div>
            </div>
            <div>
                <h2>Novidades diretamente no seu e-mail</h2>
                <div className={styles.contato__input}>
                    <input placeholder='Digite seu e-mail'></input>
                    <button>ENVIAR</button>
                </div>
            </div>
        </section>
    )
}