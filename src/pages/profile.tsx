import React ,{ useState,useEffect } from 'react';
import styles from '../styles/Home.module.css';
import MenuDrawer from '../components/dashboardHeader';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import Graph from '../components/grafico';

export default function Dashboard() {
  const [title,setTitle] = useState('Painel do Aluno');
  const [icon,setIcon] = useState();
  useEffect(() => {
    setTitle("Perfil");
    setIcon(<ContactMailIcon/>);
  }, [])

  return (
        <>
        <div className={styles.container}>
          <MenuDrawer title={title} icon={icon}>
            {/*<div>
              Página de Perfil - Falta a Rahuany criar o template desta página 
            </div>*/}
            <div className={styles.grafico}>
                <Graph/>
            </div>
          </MenuDrawer>
        </div>
        </>
  );
}