import styles from '../styles/Home.module.css';
import Header from '../components/header';
import Footer from '../components/footer';
import Login from '../components/login';

export default function Home() {
  return (
        <>
        <div className={styles.container}>
          <Header/>
          <Login/>
          <Footer/>
        </div>
        </>
  );
}