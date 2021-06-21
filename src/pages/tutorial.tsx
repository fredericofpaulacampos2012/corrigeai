import React ,{ useState,useEffect } from 'react';
import styles from '../styles/Home.module.css';
import MenuDrawer from '../components/dashboardHeader';
import MenuBookIcon from '@material-ui/icons/MenuBook';

export default function Dashboard() {
  const [title,setTitle] = useState('Como Enviar sua Redação');
  const [icon,setIcon] = useState();
  useEffect(() => {
    setTitle("Como Enviar sua Redação");
    setIcon(<MenuBookIcon/>);
  }, [])

  return (
        <>
        <div className={styles.container}>
          <MenuDrawer title={title} icon={icon}>
            <div>
              Página do Tutorial Como Enviar Redação - Falta a Rahuany criar o template para esta página
            </div>
          </MenuDrawer>
        </div>
        </>
  );
}