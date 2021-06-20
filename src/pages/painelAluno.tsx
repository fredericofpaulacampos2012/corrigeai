import React ,{ useState,useEffect } from 'react';
import styles from '../styles/painelAluno.module.css';
import MenuDrawer from '../components/dashboardHeader';
import Graph from '../components/grafico';
import UserPanel from '@material-ui/icons/AccountCircle';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Typography } from '@material-ui/core';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import LinearProgress from '@material-ui/core/LinearProgress';
import { createStyles, makeStyles, useTheme, Theme, createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ErrorIcon from '@material-ui/icons/Error';
import HistoryIcon from '@material-ui/icons/History';

const personalizado = createMuiTheme({
  palette: {
    primary: {
      main: '#72B01D',
      contrastText: '#f2f2f2',
    },
  },
});

export default function Dashboard() {
  const [title,setTitle] = useState('Painel do Aluno');
  const [icon,setIcon] = useState();
  useEffect(() => {
    setTitle("Painel do Aluno");
    setIcon(<UserPanel/>);
  }, [])

  return (
        <>
        <div className={styles.container}>
          <MenuDrawer title={title} icon={icon}>
            <div className={styles.body}>
              <div className={styles.left}>
                <ThemeProvider theme={personalizado}>
                <div className={styles.doisCards}>
                  <Card elevation={3} className={styles.card}>
                    <CardContent className={styles.cardContent}>
                      <div className={styles.icon}>
                        <ThumbUpAltIcon color="primary"/>
                      </div>
                      <Typography variant="h6" align="center">
                          Você já enviou 6 Redações
                      </Typography>
                      <Typography variant="subtitle2" align="center">
                          Bom Trabalho!
                      </Typography>
                      <LinearProgress color="primary" className={styles.progress}/>
                    </CardContent>
                  </Card>

                  <Card elevation={3} className={styles.card}>
                    <CardContent className={styles.cardContent}>
                      <div className={styles.icon}>
                        <ErrorIcon color="primary"/>
                      </div>
                      <Typography variant="h6" align="center" >
                          Você possui mais 2 envios
                      </Typography>
                      <Typography variant="subtitle2" align="center">
                          <Button variant="contained" color="secondary" className={styles.btn}>
                            Comprar Mais
                          </Button>
                      </Typography>
                      <LinearProgress color="secondary" className={styles.progress2}/>
                    </CardContent>
                  </Card>

                </div>
                </ThemeProvider>
                <div className={styles.cardGrande}>
                  <Card elevation={3} className={styles.cardG}>
                      <CardContent className={styles.cardContentG}>
                        <div className={styles.iconG}>
                          <HistoryIcon color="primary"/>
                          <Typography variant="subtitle1" className={styles.titulo}>Seus Últimos Envios</Typography>
                        </div>
                            <Graph/>
                      </CardContent>
                    </Card>
                </div>
              </div>
              <div className={styles.right}>
                Outro Painel do Aluno 
              </div>
            </div>
          </MenuDrawer>
        </div>
        </>
  );
}