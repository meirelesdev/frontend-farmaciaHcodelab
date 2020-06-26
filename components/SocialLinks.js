import styles from './SocialLinks.module.css'

export default function Social(){
    return(
        <div className={styles.socialMidia}>                
            <a href="https://pt-br.facebook.com/" >
                <img srcSet="/assets/icons/face.svg" title="Facebook" alt="Facebook" />
            </a>                   
            <a href="https://br.linkedin.com/" >
                <img srcSet="/assets/icons/linkedin.svg"  title="LinkedIn" alt="LinkedIn"/>
            </a>
            <a href="https://www.youtube.com/" >
                <img srcSet="/assets/icons/youtube.svg" title="YoutTube" alt="YoutTube" />
            </a>
            <a href="https://www.instagram.com/" >
                <img srcSet="/assets/icons/insta.svg" title="Instagran" alt="Instagran"/>
            </a>
        </div>
    )
}