import Botao from 'components/Botao';
import { Link } from 'react-router-dom';
import styles from './Corretor.module.scss';

export default function Corretor() {
    return (
        <section className={styles.corretor}>
            <h1>Corretor! <br></br>Adicione aqui os seus imoveis para alugar ou vender</h1>
            <Link to="./adicionar">
            <Botao>
                ADICIONAR
            </Botao>
            </Link>
        </section>
    )
}