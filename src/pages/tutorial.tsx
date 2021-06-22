import React ,{ useState,useEffect } from 'react';
import styles from '../styles/Home.module.css';
import MenuDrawer from '../components/dashboardHeader';
import MenuBookIcon from '@material-ui/icons/MenuBook';

export default function Dashboard() {
  const pagina =
  {
    title:"Como Enviar sua Redação",
    icon:<MenuBookIcon/>,
  };
  return (
        <>
        <div className={styles.container}>
          <MenuDrawer title={pagina.title} icon={pagina.icon}>
            <div>
              Página do Tutorial Como Enviar Redação - Falta a Rahuany criar o template para esta página
            </div>
          </MenuDrawer>
        </div>
        </>
  );
}