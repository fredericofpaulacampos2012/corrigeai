import styles from '../styles/Home.module.css';
import Header from '../components/header';
import Footer from '../components/footer';

export default function newUser() {
  return (
        <>
        <div className={styles.container}>
          <Header/>
          <h1>New User</h1>
          <Footer/>
        </div>
        </>
  );
}