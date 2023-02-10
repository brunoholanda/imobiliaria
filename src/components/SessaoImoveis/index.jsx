import Card from 'components/Card';
import { useEffect, useRef, useState } from 'react';
import styles from './SessaoImoveis.module.scss';
import direita from '../../public/assets/icons/arrow-direita.png';
import esquerda from '../../public/assets/icons/arrow-esquerda.png';

export default function SessaoImoveis() {

    const [imoveis, setImoveis] = useState([]);
    const carrossel = useRef(null);

    useEffect(() => {
        fetch('https://my-json-server.typicode.com/brunoholanda/imobiliaria-api/imoveis')
            .then(resposta => resposta.json())
            .then(dados => {
                setImoveis(dados)
            })
    }, [])
    
    const handleLftClick = (e) => {
        e.preventDefault();
        carrossel.current.scrollLeft -= carrossel.current.offsetWidth;
    }

    const handleRightClick = (e) => {
        e.preventDefault();
        carrossel.current.scrollLeft += carrossel.current.offsetWidth;
    }

    return (
        <section className={styles.destaque}>
            <div className={styles.destaque__botoes}>
                <button onClick={handleLftClick}><img src={esquerda} alt="seta para a esquerda" /></button>
                <button onClick={handleRightClick}><img src={direita} alt="seta para a direita" /></button>
            </div>
            <div className={styles.destaque__cards} ref={carrossel}>
                {imoveis.map((imoveis) => {
                    return <Card {...imoveis} key={imoveis.id} />
                })}
            </div>
        </section>
    )
}