import styles from './body.module.css';
import Image from 'next/image'

export default function body(){
    return(
        <>
            <section className={styles.main}>
                    <div className={styles.Left}>
                        <p className={styles.FirstRow}>REDAÇÃO</p>
                        <p className={styles.SecondRow}>ENEM 2021</p>
                        <p className={styles.ThirdRow}>Com o professor mais sincero do Brasil!</p>
                    </div>
                    <div className={styles.Right}>
                        <Image src="/HENRIQUE_Main.png" alt="Professor Henrique Araújo" width="375px" height="500px"/>
                    </div>                
            </section>
        </>
    );
}