import React ,{ useState,useEffect } from 'react';
import styles from '../styles/Home.module.css';
import MenuDrawer from '../components/dashboardHeader';
import Search from '@material-ui/icons/Search';

export default function Dashboard() {
  const [title,setTitle] = useState('Sobre');
  const [icon,setIcon] = useState();
  useEffect(() => {
    setTitle("Sobre");
    setIcon(<Search/>);
  }, [])

  return (
        <>
        <div className={styles.container}>
          <MenuDrawer title={title} icon={icon}>
            <div>
              Página do Sobre - Falta a Rahuany criar o template para esta página
            </div>
          </MenuDrawer>
        </div>
        </>
  );
}