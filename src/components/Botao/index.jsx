import styles from './Botao.module.scss';

const Botao = (props) => {
    return (
        <button className={styles.botao}>
            {props.children}
        </button>
    )
}

export default Botao;