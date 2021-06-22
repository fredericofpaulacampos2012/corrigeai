import React ,{ useState,useEffect } from 'react';
import styles from '../styles/Home.module.css';
import MenuDrawer from '../components/dashboardHeader';
import Search from '@material-ui/icons/Search';

export default function Dashboard() {
  const pagina =
  {
    title:"Sobre",
    icon:<Search/>,
  };
  return (
        <>
        <div className={styles.container}>
          <MenuDrawer title={pagina.title} icon={pagina.icon}>
            <div>
              Página do Sobre - Falta a Rahuany criar o template para esta página
            </div>
          </MenuDrawer>
        </div>
        </>
  );
}