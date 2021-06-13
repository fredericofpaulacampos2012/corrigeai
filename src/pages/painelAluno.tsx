import styles from '../styles/Home.module.css';
import Header from '../components/header';
import Footer from '../components/footer';

export default function Dashboard() {
  return (
        <>
        <div className={styles.container}>
          <Header/>
          <h1>Painel Aluno</h1>
          <Footer/>
        </div>
        </>
  );
}