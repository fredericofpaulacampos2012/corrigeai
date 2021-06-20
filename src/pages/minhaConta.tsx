import React ,{ useState,useEffect } from 'react';
import styles from '../styles/Home.module.css';
import MenuDrawer from '../components/dashboardHeader';
import AccountBoxIcon from '@material-ui/icons/AccountBox';

export default function Dashboard() {
  const [title,setTitle] = useState('Minha Conta');
  const [icon,setIcon] = useState();
  useEffect(() => {
    setTitle("Minha Conta");
    setIcon(<AccountBoxIcon/>);
  }, [])

  return (
        <>
        <div className={styles.container}>
          <MenuDrawer title={title} icon={icon}>
            <div>
              Página Minha Conta - Falta a Rahuany criar o template desta página 
            </div>
          </MenuDrawer>
        </div>
        </>
  );
}