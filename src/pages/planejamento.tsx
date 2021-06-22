import React ,{ useState,useEffect } from 'react';
import styles from '../styles/Home.module.css';
import MenuDrawer from '../components/dashboardHeader';
import Plan from '@material-ui/icons/AssignmentTurnedIn';

export default function Dashboard() {
  const pagina =
  {
    title:"Planejamento",
    icon:<Plan/>,
  };
  return (
        <>
        <div className={styles.container}>
          <MenuDrawer title={pagina.title} icon={pagina.icon}>
            <div>
              Página de Planejamento - Falta a Rahuany criar o template para esta página
            </div>
          </MenuDrawer>
        </div>
        </>
  );
}