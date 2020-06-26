import styles from './Footer.module.css'
import SocialLiks from './SocialLinks'
import Logo from './Logo'

export default function Footer(props){
    return(
        <footer className={styles.mainFooter}>
            <div className={styles.divsFooter}>
                <div>
                   {props.children}
                </div>
                <div className={styles.infoSite}>
                     <p>As informações contidas neste site não devem ser usadas para automedicação e não substituem, em hipótese alguma, as orientações dadas pelo profissional da área médica. Somente o médico está apto a diagnosticar qualquer problema de saúde e prescrever o tratamento adequado. Todos os pedidos efetuados estão sujeitos à confirmação da disponibilidade de produto em nosso estoque. O processo de separação dos produtos pode levar até dois dias úteis dependendo da disponibilidade do estoque em loja.</p>
                     <Logo />
                </div>
                <div className={styles.socialLogo}>
                    
                    <SocialLiks />
                </div>
            </div>
            <div className={styles.rodape}>
                <p>Desenvolvido por Daniel Meireles</p>
                <p> &copy; Todos os direitos Reservador</p>
            </div>
        </footer>
    )
}