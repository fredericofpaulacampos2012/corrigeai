import React ,{ useState,useEffect } from 'react';
import styles from '../styles/Home.module.css';
import MenuDrawer from '../components/dashboardHeader';
import TelegramIcon from '@material-ui/icons/Telegram';

export default function Dashboard() {
  const [title,setTitle] = useState('Enviar Redação');
  const [icon,setIcon] = useState();
  useEffect(() => {
    setTitle("Enviar Redação");
    setIcon(<TelegramIcon/>);
  }, [])

  return (
        <>
        <div className={styles.container}>
          <MenuDrawer title={title} icon={icon}>
            <div>
              Página Enviar Redação - Falta a Rahuany criar o template desta página 
            </div>
          </MenuDrawer>
        </div>
        </>
  );
}