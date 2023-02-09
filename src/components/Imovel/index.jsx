import styles from './Imovel.module.scss';
import regua from '../../public/assets/icons/regua.png';
import carrinho from '../../public/assets/icons/carrinho.png';
import cama from '../../public/assets/icons/cama.png';

export default function Imovel
    ({ imagem, tipo, endereco, metragem, vagas, quartos, corretor, telefone }) {
    return (
        <div className={styles.imovel}>
            <div className={styles.imovel__imagem}>
                <img src={imagem} alt={endereco} />
            </div>
            <div className={styles.imovel__texto}>
                <h1>{tipo}</h1>
                <p>{endereco}</p>
                <div className={styles.info}>
                    <div className={styles.info__elemento}>
                        <img src={regua} alt={metragem} />
                        <p>{metragem}m²</p>
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
                <div className={styles.imovel__contato}>
                    <h2>Coretor: {corretor}</h2>
                    <p>Contato: {telefone}</p>
                </div>
            </div>
        </div>
    )
}