import Banner from "components/Banner";
import SessaoImoveis from "components/SessaoImoveis";
import styles from './Inicio.module.scss';


export default function Inicio() {
    return (
        <>
            <Banner />
            <div className={styles.imoveis} scroll-page id="imoveis">
                <h2>Imóveis em destaque</h2>
            </div>
            <SessaoImoveis />
            <div className={styles.imoveis}>
                <h2>Recomendações</h2>
            </div>
            <SessaoImoveis />
        </>
    )
}