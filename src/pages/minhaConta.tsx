import React ,{ useState,useEffect } from 'react';
import styles from '../styles/Home.module.css';
import MenuDrawer from '../components/dashboardHeader';
import AccountBoxIcon from '@material-ui/icons/AccountBox';

export default function Dashboard() {
  const pagina =
  {
    title:"Minha Conta",
    icon:<AccountBoxIcon/>,
  };
  return (
        <>
        <div className={styles.container}>
          <MenuDrawer title={pagina.title} icon={pagina.icon}>
            <div>
              Página Minha Conta - Falta a Rahuany criar o template desta página 
            </div>
          </MenuDrawer>
        </div>
        </>
  );
}