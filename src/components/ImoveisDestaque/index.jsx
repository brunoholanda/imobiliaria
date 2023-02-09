import Card from 'components/Card';
import { useEffect, useState } from 'react';
import styles from './ImoveisDestaque.module.scss';

export default function ImoveisDestaque() {

    const [imoveis, setImoveis] = useState([]);

    useEffect(() => {
        fetch('https://my-json-server.typicode.com/brunoholanda/imobiliaria-api/imoveis')
            .then(resposta => resposta.json())
            .then(dados => {
                setImoveis(dados)
            })
    }, [])

    return (
        <section className={styles.destaque}>
            <div className={styles.destaque__titulo}>
                <h2>Imóveis em destaque</h2>    
            </div>
            <div className={styles.destaque__cards}>
                {imoveis.map((imoveis) => {
                    return <Card {...imoveis} key={imoveis.id} />
                })}
            </div>
        </section>
    )
}