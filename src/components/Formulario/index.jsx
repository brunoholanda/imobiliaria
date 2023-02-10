import Botao from 'components/Botao'
import CampoTexto from 'components/CampoTexto'
import ListaSuspensa from 'components/ListaSuspensa'
import { useState } from 'react'
import styles from './Formulario.module.scss'

export default function Formulario(props) {
    const [modalidade, setModalidade] = useState('')
    const [imagem, setImagem] = useState('')
    const [tipo, setTipo] = useState('')
    const [endereco, setEndereco] = useState('')
    const [metragem, setMetragem] = useState('')
    const [vagas, setVagas] = useState('')
    const [quartos, setQuartos] = useState('')
    const [corretor, setCorretor] = useState('')
    const [telefone, setTelefone] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoImovelAdicionado({
            modalidade,
            imagem,
            tipo,
            endereco,
            metragem,
            vagas,
            quartos,
            corretor,
            telefone
        })
        setModalidade('')
        setImagem('')
        setTipo('')
        setEndereco('')
        setMetragem('')
        setVagas('')
        setQuartos('')
        setCorretor('')
        setTelefone('')
    }

    return (
        <form onSubmit={aoSalvar} className={styles.adicionar}>
            <h1>Adicionar novo imóvel</h1>
            <ListaSuspensa
                obrigatorio={true}
                itens={props.modalidades}
                valor={modalidade}
                aoAlterado={valor => setModalidade(valor)}
            />
            <CampoTexto
                obrigatorio={true}
                placeholder="Url da foto do imóvel"
                valor={imagem}
                aoAlterado={valor => setImagem(valor)}
            />
            <CampoTexto
                obrigatorio={true}
                placeholder="Casa ou Apartamento"
                valor={tipo}
                aoAlterado={valor => setTipo(valor)}
            />
            <CampoTexto
                obrigatorio={true}
                placeholder="Endereço do imóvel"
                valor={endereco}
                aoAlterado={valor => setEndereco(valor)}
            />
            <CampoTexto
                obrigatorio={true}
                placeholder="Metragem do imóvel em m²"
                valor={metragem}
                aoAlterado={valor => setMetragem(valor)}
            />
            <CampoTexto
                obrigatorio={true}
                placeholder="Quantas vagas de garagem"
                valor={vagas}
                aoAlterado={valor => setVagas(valor)}
            />
            <CampoTexto
                obrigatorio={true}
                placeholder="Quantas quartos"
                valor={quartos}
                aoAlterado={valor => setQuartos(valor)}
            />
            <CampoTexto
                obrigatorio={true}
                placeholder="Corretor, qual o seu nome?"
                valor={corretor}
                aoAlterado={valor => setCorretor(valor)}
            />
            <CampoTexto
                obrigatorio={true}
                placeholder="Corretor, deixe seu telefone"
                valor={telefone}
                aoAlterado={valor => setTelefone(valor)}
            />
            <Botao>
                Adicionar Imóvel
            </Botao>

        </form>
    )
}