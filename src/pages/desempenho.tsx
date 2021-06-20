import React ,{ useState,useEffect } from 'react';
import styles from '../styles/Home.module.css';
import MenuDrawer from '../components/dashboardHeader';
import Desempenho from '@material-ui/icons/TrendingUp';

export default function Dashboard() {
  const [title,setTitle] = useState('Desempenho');
  const [icon,setIcon] = useState();
  useEffect(() => {
    setTitle("Desempenho");
    setIcon(<Desempenho/>);
  }, [])

  return (
        <>
        <div className={styles.container}>
          <MenuDrawer title={title} icon={icon}>
            <div>
              Página de Desempenho - Falta a Rahuany criar o template para esta página
            </div>
          </MenuDrawer>
        </div>
        </>
  );
}