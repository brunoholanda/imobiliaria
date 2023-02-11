import { Link } from 'react-router-dom';
import styles from './VendaAluguel.module.scss';
import aluguel from '../../public/assets/img/aluguel.png';
import venda from '../../public/assets/img/venda.png';

export default function VendaAluguel() {
    return (
        <section className={styles.comercial}>
            <div className={styles.container}>
                <div className={styles.container__texto}>
                    <h2>Aluguel</h2>
                    <p>Casas, Apartamentos, Lofts...<br></br>40 Unidades</p>
                    <Link to="./">
                        <p>Ver todos</p>
                    </Link>
                </div>
                <div className={styles.container__imagem}>
                    <img src={aluguel} alt="imoveis para alugar" />
                </div>
            </div>
            <div className={styles.container}>
                <div className={styles.container__texto}>
                    <h2>Á venda</h2>
                    <p>Casas, Apartamentos, Lofts...<br></br>80 Unidades</p>
                    <Link to="./">
                        <p>Ver todos</p>
                    </Link>
                </div>
                <div className={styles.container__imagem}>
                    <img src={venda} alt="imoveis para alugar" />
                </div>
            </div>
        </section>

    )
}