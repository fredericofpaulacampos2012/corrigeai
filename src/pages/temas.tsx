import React ,{ useState,useEffect } from 'react';
import styles from '../styles/Home.module.css';
import MenuDrawer from '../components/dashboardHeader';
import Temas from '@material-ui/icons/Description';

export default function Dashboard() {
  const [title,setTitle] = useState('Temas');
  const [icon,setIcon] = useState();
  useEffect(() => {
    setTitle("Temas");
    setIcon(<Temas/>);
  }, [])

  return (
        <>
        <div className={styles.container}>
          <MenuDrawer title={title} icon={icon}>
            <div>
              Temas
            </div>
          </MenuDrawer>
        </div>
        </>
  );
}