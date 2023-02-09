import Formulario from 'components/Formulario';
import Modalidade from 'components/Modalidade';
import { useState } from 'react';

export default function AdicionarImovel() {

    const modalidades = [
        {
            nome: 'Venda',
        },
        {
            nome: 'Aluguel',
        },
    ]

    const [imoveis, setImoveis] = useState ([])

    const aoNovoImovelAdicionado = (imovel) => {
        setImoveis([...imoveis, imovel])
    }

    return (
        <div>
            <Formulario 
                modalidades={modalidades.map(modalidade => modalidade.nome)}
                aoImovelAdicionado={imovel => aoNovoImovelAdicionado(imovel)}
            />

            {modalidades.map(modalidade => <Modalidade 
                key={modalidade.nome}
                nome={modalidade.nome}
                imoveis={imoveis.filter(imovel => imovel.modalidade === modalidade.nome)}
            />)}
        </div>
    )
}