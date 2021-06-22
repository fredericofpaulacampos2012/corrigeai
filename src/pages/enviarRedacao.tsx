import React ,{ useState,useEffect } from 'react';
import styles from '../styles/Home.module.css';
import MenuDrawer from '../components/dashboardHeader';
import TelegramIcon from '@material-ui/icons/Telegram';

export default function Dashboard() {
  const pagina =
  {
    title:"Enviar Redação",
    icon:<TelegramIcon/>,
  };
  return (
        <>
        <div className={styles.container}>
          <MenuDrawer title={pagina.title} icon={pagina.icon}>
            <div>
              Página Enviar Redação - Falta a Rahuany criar o template desta página 
            </div>
          </MenuDrawer>
        </div>
        </>
  );
}