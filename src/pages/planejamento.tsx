import React ,{ useState,useEffect } from 'react';
import styles from '../styles/Home.module.css';
import MenuDrawer from '../components/dashboardHeader';
import Plan from '@material-ui/icons/AssignmentTurnedIn';

export default function Dashboard() {
  const [title,setTitle] = useState('Planejamento');
  const [icon,setIcon] = useState();
  useEffect(() => {
    setTitle("Planejamento");
    setIcon(<Plan/>);
  }, [])

  return (
        <>
        <div className={styles.container}>
          <MenuDrawer title={title} icon={icon}>
            <div>
              Página de Planejamento - Falta a Rahuany criar o template para esta página
            </div>
          </MenuDrawer>
        </div>
        </>
  );
}