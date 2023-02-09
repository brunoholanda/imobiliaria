import styles from './Rodape.module.scss';

export default function Rodape() {
    return(
        <footer className={styles.rodape}>
            <p>MOBPE © Todos os direitos reservados</p>
            <p>Desenvolvido por Bruno Holanda e Jonas Nunes</p>
        </footer>
    )
}