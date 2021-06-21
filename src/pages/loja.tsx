import React ,{ useState,useEffect } from 'react';
import styles from '../styles/Home.module.css';
import MenuDrawer from '../components/dashboardHeader';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

export default function Dashboard() {
  const [title,setTitle] = useState('Comprar mais Envios');
  const [icon,setIcon] = useState();
  useEffect(() => {
    setTitle("Comprar mais Envios");
    setIcon(<ShoppingBasketIcon/>);
  }, [])

  return (
        <>
        <div className={styles.container}>
          <MenuDrawer title={title} icon={icon}>
            <div>
              Página Comprar mais Envios - Falta a Rahuany criar o template desta página 
            </div>
          </MenuDrawer>
        </div>
        </>
  );
}