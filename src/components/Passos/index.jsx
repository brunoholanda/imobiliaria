import styles from './Passos.module.scss';
import pesquisa from '../../public/assets/icons/pesquisa.png';
import calendario from '../../public/assets/icons/calendario.png';
import proposta from '../../public/assets/icons/proposta.png';

export default function Passos(){
    return (
        <section className={styles.passos}>
            <div className={styles.passos__titulo}>
                <h2>A MOBPE em<br></br>3 passos</h2>
                <p>Simples, Fácil e Prático.</p>
            </div>
            <div className={styles.passos__componente}>
                <h1>1</h1>
                <div className={styles.passos__icone}>
                    <img src={pesquisa} alt="icone de pesquisa" />
                    <p>Encontre o imóvel que é<br></br>a sua cara.</p>
                </div>
            </div>
            <div className={styles.passos__componente}>
                <h1>2</h1>
                <div className={styles.passos__icone}>
                    <img src={calendario} alt="icone de pesquisa" />
                    <p>Agende dia e hora para<br></br>realizar uma visita.</p>
                </div>
            </div>
            <div className={styles.passos__componente}>
                <h1>3</h1>
                <div className={styles.passos__icone}>
                    <img src={proposta} alt="icone de pesquisa" />
                    <p>Faça sua proposta.<br></br>Digital e sem burocracia.</p>
                </div>
            </div>
        </section>
    )
}