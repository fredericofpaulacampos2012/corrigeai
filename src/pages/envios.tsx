import React ,{ useState,useEffect } from 'react';
import styles from '../styles/Home.module.css';
import MenuDrawer from '../components/dashboardHeader';
import Envios from '@material-ui/icons/SwapVerticalCircle';

export default function Dashboard() {
  const [title,setTitle] = useState('Envios');
  const [icon,setIcon] = useState();
  useEffect(() => {
    setTitle("Envios");
    setIcon(<Envios/>);
  }, [])

  return (
        <>
        <div className={styles.container}>
          <MenuDrawer title={title} icon={icon}>
            <div>
              Envios
            </div>
          </MenuDrawer>
        </div>
        </>
  );
}