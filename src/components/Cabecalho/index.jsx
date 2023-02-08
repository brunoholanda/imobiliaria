import styles from './Cabecalho.module.scss';
import telefone from '../../public/assets/icons/telefone.png';
import email from '../../public/assets/icons/email.png';
import { Link } from 'react-router-dom';
import insta from '../../public/assets/icons/insta.png';
import fb from '../../public/assets/icons/fb.png';

export default function Cabecalho() {
    return (
        <header className={styles.cabecalho}>
            <div className={styles.cabecalho__contato}>
                <img src={telefone} alt="icone de telefone" />
                <p>(81) 99764-5036</p>
                <img src={email} alt="icone de email" />
                <p>provisorio@gmail.com</p>
            </div>
            <div className={styles.cabecalho__social}>
                <Link to="https://www.instagram.com/boraliviver/">
                    <img src={insta} alt="icone do instagram" />
                </Link>
                <Link to="https://www.instagram.com/boraliviver/">
                    <img src={fb} alt="icone do instagram" />
                </Link>
            </div>
        </header>
    )
}
