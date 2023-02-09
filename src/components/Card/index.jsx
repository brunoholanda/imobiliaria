import styles from './Card.module.scss';
import { Link } from 'react-router-dom';
import regua from '../../public/assets/icons/regua.png';
import carrinho from '../../public/assets/icons/carrinho.png';
import cama from '../../public/assets/icons/cama.png';

function Card({ id, tipo, imagem, rua, cidade, metragem, vagas, quartos }) {

    return (
        <div className={styles.card}>
            <Link className={styles.link} to={`/${id}`}>
                <img src={imagem} alt={cidade} className={styles.capa} />
                <div className={styles.link__fundo}>
                    <h2>{tipo}</h2>
                    <p>{rua}</p>
                    <p>{cidade}</p>
                    <div className={styles.info}>
                        <div className={styles.info__elemento}>
                            <img src={regua} alt={metragem} />
                            <p>{metragem}</p>
                        </div>
                        <div className={styles.info__elemento}>
                            <img src={carrinho} alt={vagas} />
                            <p>{vagas} Vagas</p>
                        </div>
                        <div className={styles.info__elemento}>
                            <img src={cama} alt={quartos} />
                            <p>{quartos} Quartos</p>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Card;