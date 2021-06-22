import React ,{ useState,useEffect } from 'react';
import styles from '../styles/Home.module.css';
import MenuDrawer from '../components/dashboardHeader';
import Help from '@material-ui/icons/Help';

export default function Dashboard() {
  const [title,setTitle] = useState('Alô CAED!');
  const [icon,setIcon] = useState();
    const menuItems =
      {
        title:"Alô CAED!",
        icon:<Help/>,
      };
  return (
        <>
        <div className={styles.container}>
          <MenuDrawer title={menuItems.title} icon={menuItems.icon}>
            <div>
              Página do Alô CAED - Falta a Rahuany criar o template para esta página
            </div>
          </MenuDrawer>
        </div>
        </>
  );
}