import React ,{ useState,useEffect } from 'react';
import styles from '../styles/temas.module.css';
import MenuDrawer from '../components/dashboardHeader';
import Temas from '@material-ui/icons/Description';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Link from 'next/link';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import { createStyles, makeStyles, useTheme, Theme, createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import { SettingsSystemDaydream } from '@material-ui/icons';

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

  const menuItems = [
    {
      tema:"Democratização do Acesso ao Cinema no Brasil",
    },
    {
      tema:"Democratização do Acesso ao Cinema no Brasil",
    },
    {
      tema:"Democratização do Acesso ao Cinema no Brasil",
    },
    {
      tema:"Democratização do Acesso ao Cinema no Brasil",
    },
    {
      tema:"Democratização do Acesso ao Cinema no Brasil",
    },
    {
      tema:"Democratização do Acesso ao Cinema no Brasil",
    },
    {
      tema:"Democratização do Acesso ao Cinema no Brasil",
    },
    {
      tema:"Democratização do Acesso ao Cinema no Brasil",
    },
    {
      tema:"Democratização do Acesso ao Cinema no Brasil",
    },
    {
      tema:"Democratização do Acesso ao Cinema no Brasil",
    },
    {
      tema:"Democratização do Acesso ao Cinema no Brasil",
    },
    {
      tema:"Democratização do Acesso ao Cinema no Brasil",
    },
    {
      tema:"Democratização do Acesso ao Cinema no Brasil",
    },
    {
      tema:"Democratização do Acesso ao Cinema no Brasil",
    },
    {
      tema:"Democratização do Acesso ao Cinema no Brasil",
    },
    {
      tema:"Democratização do Acesso ao Cinema no Brasil",
    },
    {
      tema:"Democratização do Acesso ao Cinema no Brasil",
    },
    {
      tema:"Democratização do Acesso ao Cinema no Brasil",
    },
    {
      tema:"Democratização do Acesso ao Cinema no Brasil",
    },
    {
      tema:"Democratização do Acesso ao Cinema no Brasil",
    },
  ];
  const alternate = "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.";
  const primario = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
  const [title,setTitle] = useState('Temas');
  const [icon,setIcon] = useState();
  const [tema,setTema] = useState('Democratização do Acesso ao Cinema no Brasil');
  const [explain,setExplain] = useState("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.");
  useEffect(() => {
    setTitle("Temas");
    setIcon(<Temas/>);
  }, [])

  return (
        <>
        <div className={styles.container}>
          <MenuDrawer title={title} icon={icon}>
            <div className={styles.body}>
              <div className={styles.left}>
              <ThemeProvider theme={personalizado}>
                <div className={styles.doisCards}>
                  
                  <Card style={{ borderRadius: 10 }} elevation={3} className={styles.card}>
                    <CardContent className={styles.cardContent}>
                      <div className={styles.icon}>
                        <Temas className={styles.iconCard}/>
                      </div>
                      <div className={styles.text}
                      onClick={()=> {setTema('Democratização do Acesso ao Cinema no Brasil'); setExplain(primario)}}
                      >
                      <Typography variant='h5'>
                        Temas do ENEM
                      </Typography>
                      </div>
                    </CardContent>
                  </Card>
                  <Card style={{ borderRadius: 10 }} elevation={3} className={styles.card}>
                    <CardContent className={styles.cardContent}>
                      <div className={styles.icon}>
                        <EmojiObjectsIcon className={styles.iconCard}/>
                      </div>
                      <div className={styles.text}
                      onClick={()=> {setTema('O Estigma Associado as Doenças Mentais no Brasil'); setExplain(alternate)}}
                      >
                      <Typography variant='h5'>
                        Temas do Corrige Aí
                      </Typography>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </ThemeProvider>
                <div className={styles.cardGrande}>
                    <div className={styles.cardRedacao}>
                        <div className={styles.cardScroll}>
                          <Card className={styles.cardGRedacao} style={{ borderRadius: 10 }} elevation={3}>
                            <CardContent className={styles.cardGRedacaoContent}>
                              <div className={styles.linha1}>
                                <div className={styles.cardRTema}>
                                  <Typography variant='h6' >
                                    {tema}
                                  </Typography>
                                </div>
                                </div>
                              <div className={styles.linha2}>
                                <div className={styles.cardRConteudo}>
                                  <Typography variant='body1'>
                                    {explain}
                                  </Typography>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                    </div>
                    <ThemeProvider theme={customRight}>
                    <div className={styles.cardRedacaobtn}>
                      <Link href='/enviarRedacao'>
                        <Button 
                          style={{ borderRadius: 10 }}
                          color='primary' 
                          variant='contained'
                          className={styles.btn}
                          >
                            Escolher este Tema
                        </Button>
                      </Link>
                    </div>
                    </ThemeProvider>
                </div>
              </div>
              <div className={styles.right}>
                <div className={styles.containerRight}>
                     <div onClick={()=> {setTema(tema)}}>
                     {menuItems.map((item) => (
                        <Card hoverable className={styles.cardTemaR}
                          style={{ borderRadius: 10 }}>
                          <CardContent className={styles.cardTemaRContent}>
                            <Typography variant='body2'>
                              {tema}
                            </Typography>
                          </CardContent>
                        </Card>
                     ))}
                    </div>
                </div>
              </div>
            </div>
          </MenuDrawer>
        </div>
        </>
  );
}