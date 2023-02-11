import Banner from "components/Banner";
import Passos from "components/Passos";
import SessaoImoveis from "components/SessaoImoveis";
import VendaAluguel from "components/VendaAluguel";
import styles from './Inicio.module.scss';


export default function Inicio() {
    return (
        <>
            <Banner />
            <Passos />
            <div className={styles.imoveis} scroll-page id="imoveis">
                <h2>Imóveis em destaque</h2>
            </div>
            <SessaoImoveis />
            <VendaAluguel />
            <div className={styles.imoveis}>
                <h2>Recomendações</h2>
            </div>
            <SessaoImoveis 
            />
        </>
    )
}