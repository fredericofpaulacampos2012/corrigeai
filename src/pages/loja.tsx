import React ,{ useState,useEffect } from 'react';
import styles from '../styles/Home.module.css';
import MenuDrawer from '../components/dashboardHeader';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

export default function Dashboard() {
  const pagina =
  {
    title:"Comprar mais Envios",
    icon:<ShoppingBasketIcon/>,
  };
  return (
        <>
        <div className={styles.container}>
          <MenuDrawer title={pagina.title} icon={pagina.icon}>
            <div>
              Página Comprar mais Envios - Falta a Rahuany criar o template desta página 
            </div>
          </MenuDrawer>
        </div>
        </>
  );
}