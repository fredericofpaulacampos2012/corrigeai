import styles from './footer.module.css';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
import Image from 'next/image'

export default function footer(){
    return(
        <>
            <div className={styles.footer}>
                <div className={styles.social}>
                        <a href="https://www.instagram.com/profhenriquearaujo/">
                            <span className={styles.links}>
                                <InstagramIcon className={styles.icons}/>
                                Prof. Henrique Araújo
                            </span>
                        </a>
                        <a href="https://www.youtube.com/channel/UC6JoQXG4O0tMkMk3YzRl7Dw">
                            <span className={styles.links}>
                                <YouTubeIcon className={styles.icons}/>
                                Canal Prof. Henrique Araújo
                            </span>
                        </a>
                </div>
                <div className={styles.copyright}>
                   <span>2021 &#0169; Corrige Aí: todos os direitos reservados</span>
                </div>
            </div>
        </>
    );
}