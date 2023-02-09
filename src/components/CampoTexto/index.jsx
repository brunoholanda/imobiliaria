import styles from './CampoTexto.module.scss';

const CampoTexto = (props) => {

    const placeholderModificada = `${props.placeholder}...`

    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
        
    }

    return (
        <div className={styles.campotexto}>
            <label>
                {props.label}
            </label>
            <input 
                required={props.obrigatorio} 
                placeholder={placeholderModificada}
                onChange={aoDigitado}
                value={props.valor}
            />
        </div>
    )
}

export default CampoTexto;