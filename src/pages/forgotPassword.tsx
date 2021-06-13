import styles from '../styles/Home.module.css';
import Header from '../components/header';
import Footer from '../components/footer';
import ForgotPass from '../components/forgotPass'

export default function Forgot() {
  return (
        <>
        <div className={styles.container}>
          <Header/>
          <ForgotPass/>
          <Footer/>
        </div>
        </>
  );
}