import styles from './ListaSuspensa.module.scss';

export default function ListaSuspensa (props) {
    return (
        <div className={styles.listasuspensa}>
            <label>{props.label}</label>
            <select 
                onChange={evento => props.aoAlterado(evento.target.value)} 
                required={props.required} 
                value={props.valor}
            >
            <option>""</option>
                {props.itens.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )
}