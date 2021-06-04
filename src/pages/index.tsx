import styles from '../styles/Home.module.css';
import Header from '../components/header';
import Body from '../components/body';
import Footer from '../components/footer';

export default function Home() {
  return (
        <>
        <div className={styles.container}>
          <Header/>
          <Body/>
          <Footer/>
        </div>
        </>
  );
}