import styles from './Banner.module.css'

export default function Banner(props){

    return(
        <div className={styles[props.nomeClasse]}>
            <h1>{props.title}</h1>
        </div>
    )
}