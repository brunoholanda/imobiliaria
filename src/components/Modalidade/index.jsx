import Imovel from "components/Imovel";
import styles from './Modalidade.module.scss';

export default function Modalidade(props) {
    return (
        props.imoveis.length > 0 && <section className={styles.modalidade} scroll-page id="imoveis">
            <div className={styles.modalidade__titulo}>
                <h3>Imoveis para {props.nome}</h3>
            </div>
            <div className={styles.modalidade__card}>
                {props.imoveis.map(imovel =>
                    <Imovel
                        key={imovel.nome}
                        imagem={imovel.imagem}
                        tipo={imovel.tipo}
                        endereco={imovel.endereco}
                        metragem={imovel.metragem}
                        vagas={imovel.vagas}
                        quartos={imovel.quartos}
                        corretor={imovel.corretor}
                        telefone={imovel.telefone}
                    />
                )}
            </div>
        </section>
    )
}