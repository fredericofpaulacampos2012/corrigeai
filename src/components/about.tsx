import styles from './about.module.css';
import Image from 'next/image';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Box from '@material-ui/core/Box';
import { shadows } from '@material-ui/system';
import { borders } from '@material-ui/system';

export default function about(){
    return(
        <>
            <section className={styles.main}>
                    <div className={styles.Left}>
                        <Box boxShadow={3} borderRadius="30px"className={styles.card} >
                            <h1>Quem somos?</h1>
                            <p>
                                What is Lorem Ipsum?
                                Lorem Ipsum is simply dummy text of the printing and typesetting 
                                industry. Lorem Ipsum has been the industry's standard dummy text 
                                ever since the 1500s, when an unknown printer took a galley of 
                                type and scrambled it to make a type specimen book. It has survived 
                                not only five centuries, but also the leap into electronic typesetting, 
                                remaining essentially unchanged. It was popularised in the 1960s with 
                                the release of Letraset sheets containing Lorem Ipsum passages, and 
                                more recently with desktop publishing software like Aldus PageMaker 
                                including versions of Lorem Ipsum.
                            </p>
                        </Box>
                        
                    </div>
                    <div className={styles.Right}>
                        <Image className={styles.Image} src="/About.jpg" alt="Professor Henrique Araújo" width="400px" height="400px"/>
                    </div>                
            </section>
        </>
    );
}