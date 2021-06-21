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
import Link from 'next/link';
import TelegramIcon from '@material-ui/icons/Telegram';

const personalizado = createMuiTheme({
  palette: {
    primary: {
      main: '#72B01D',
      contrastText: '#f2f2f2',
    },
  },
});
const customRight = createMuiTheme({
  typography: {
      "fontFamily": `"Roboto", "Helvetica", "Arial", sans-serif`,
      "fontSize": 13,
      "fontWeightLight": 300,
      "fontWeightRegular": 400,
      "fontWeightMedium": 500,
      subtitle1:{
        "fontWeight":800,
      }
    },
  palette: {
    primary: {
      main: '#002400',
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
                        <ThumbUpAltIcon className={styles.iconCard}/>
                      </div>
                      <Typography variant="h6" align="center">
                          Você já enviou 6 Redações
                      </Typography>
                      <Typography variant="subtitle2" align="center">
                          Bom Trabalho!
                      </Typography>
                      <LinearProgress className={styles.progress}/>
                    </CardContent>
                  </Card>
                  <Card elevation={3} className={styles.card}>
                    <CardContent className={styles.cardContent}>
                      <div className={styles.icon}>
                        <ErrorIcon className={styles.iconCard}/>
                      </div>
                      <Typography variant="h6" align="center" >
                          Você possui mais 2 envios
                      </Typography>
                      <Typography variant="subtitle2" align="center">
                          <Link href='/loja'>
                            <Button variant="contained" color="secondary" className={styles.btn}>
                              Comprar Mais
                            </Button>
                          </Link>
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
                          <HistoryIcon className={styles.iconCard}/>
                          <Typography variant="h6" className={styles.titulo}>Seus Últimos Envios</Typography>
                        </div>
                         <Graph/>
                      </CardContent>
                    </Card>
                </div>
              </div>
              <ThemeProvider theme={customRight}>
              <div className={styles.right}>
                <div className={styles.medias}>
                    <Card style={{ borderRadius: 10 }} className={styles.cardMedia}>
                      <CardContent className={styles.cardMediaContent}>
                        <Typography variant='subtitle1'>
                          Sua última nota: 920
                        </Typography>
                      </CardContent>
                    </Card>
                    <Card style={{ borderRadius: 10 }} className={styles.cardMedia}>
                      <CardContent className={styles.cardMediaContent}>
                        <Typography variant='subtitle1'>
                          Sua Média Geral: 780
                        </Typography>
                      </CardContent>
                    </Card>
                    <Card style={{ borderRadius: 10 }} className={styles.cardMedia}>
                      <CardContent className={styles.cardMediaContent}>
                        <Typography variant='subtitle1'>
                          Média Corrige Aí: 800
                        </Typography>
                      </CardContent>
                    </Card>
                    <div className={styles.espaco}>
                      <Link href="/desempenho">
                      <Button variant='contained' style={{borderRadius:10}}color='primary' className={styles.btnR}>
                        Ver Desempenho Completo
                      </Button>
                      </Link>
                    </div>
                    < div className={styles.espaco}>
                      <Link href="/enviarRedacao">
                      <Button variant='contained' style={{borderRadius:10}} color='primary' className={styles.btnEnviar}>
                            <TelegramIcon spacing={3}/>
                            Enviar Redação
                      </Button>
                      </Link>
                    </div>
                    <div className={styles.espaco}>
                      <Card style={{ borderRadius: 10 }}>
                        <CardContent>
                          <div className={styles.espaco}>
                            <Link href="/temas">
                            <Button variant='contained' style={{borderRadius:10}}color='default' className={styles.btnB}>
                              Ver Todos os Temas
                            </Button>
                            </Link>
                          </div>
                          <div className={styles.espaco2}>
                            <Link href="/tutorial">
                            <Button variant='contained' style={{borderRadius:10}}color='default' className={styles.btnB}>
                              Como enviar Sua Redação
                            </Button>
                            </Link>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                </div>
              </div>
              </ThemeProvider>
            </div>
          </MenuDrawer>
        </div>
        </>
  );
}