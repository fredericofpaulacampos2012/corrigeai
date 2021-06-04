import styles from '../styles/Home.module.css';
import Header from '../components/header';
import Footer from '../components/footer';
import Sobre from '../components/about';

export default function About() {
    return (
          <>
          <div className={styles.container}>
            <Header/>
            <Sobre/>
            <Footer/>
          </div>
          </>
    );
  }