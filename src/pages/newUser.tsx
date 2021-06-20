import styles from '../styles/Home.module.css';
import Header from '../components/header';
import Footer from '../components/footer';

export default function newUser() {
  return (
        <>
        <div className={styles.container}>
          <Header/>
          <p className={styles.paragrafo}>Página de Cadastro de Usuário - Falta a Rahuany criar o template desta página</p>
          <Footer/>
        </div>
        </>
  );
}