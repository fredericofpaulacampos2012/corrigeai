import React ,{ useState,useEffect } from 'react';
import styles from '../styles/Home.module.css';
import MenuDrawer from '../components/dashboardHeader';
import Desempenho from '@material-ui/icons/TrendingUp';

export default function Dashboard() {
  const pagina =
  {
    title:"Desempenho",
    icon:<Desempenho/>,
  };

  return (
        <>
        <div className={styles.container}>
          <MenuDrawer title={pagina.title} icon={pagina.icon}>
            <div>
              Página de Desempenho - Falta a Rahuany criar o template para esta página
            </div>
          </MenuDrawer>
        </div>
        </>
  );
}