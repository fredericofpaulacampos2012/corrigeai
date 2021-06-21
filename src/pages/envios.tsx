import React ,{ useState,useEffect } from 'react';
import styles from '../styles/envios.module.css';
import MenuDrawer from '../components/dashboardHeader';
import Envios from '@material-ui/icons/SwapVerticalCircle';
import { Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import Button from '@material-ui/core/Button';
import Link from 'next/link';
import Badge from '@material-ui/core/Badge';
import Tooltip from '@material-ui/core/Tooltip';
import { withStyles, Theme, makeStyles,createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import BarGraph from '../components/graficoBarras';

const LightTooltip = withStyles((theme: Theme) => ({
  tooltip: {
    backgroundColor: 'rgba(114, 176, 29,0.6)',
    color: '#002400',
    margin:'0px',
    boxShadow: theme.shadows[1],
    fontSize: 14,
  },
}))(Tooltip);

const personalizado = createMuiTheme({
  palette: {
    primary: {
      main: '#72B01D',
      contrastText: '#f2f2f2',
    },
  },
});

export default function Dashboard() {

  const menuItems = [
    {
      data:"04/05",
      tema:"Democratização do Acesso ao Cinema no Brasil",
      nota:"780",
      hideData:true,
      hideNota:true,
      tipData:"",
      tipNota:"",
    },
    {
      data:"11/05",
      tema:"O Estigma Associado as Doenças Mentais no Brasil",
      nota:"800",
      hideData:false,
      hideNota:true,
      tipData:"1 Mês Depois",
      tipNota:"",
    },
    {
      data:"18/05",
      tema:"Democratização do Acesso ao Cinema no Brasil",
      nota:"800",
      hideData:true,
      hideNota:true,
      tipData:"",
      tipNota:"",
    },
    {
      data:"25/05",
      tema:"Democratização do Acesso ao Cinema no Brasil",
      nota:"800",
      hideData:true,
      hideNota:false,
      tipData:"",
      tipNota:"Sua nota está igual",
    },
    {
      data:"01/06",
      tema:"O Estigma Associado as Doenças Mentais no Brasil",
      nota:"820",
      hideData:true,
      hideNota:true,
      tipData:"",
      tipNota:"",
    },
    {
      data:"08/06",
      tema:"Democratização do Acesso ao Cinema no Brasil",
      nota:"720",
      hideData:false,
      hideNota:false,
      tipData:"1 Mês Depois",
      tipNota:"Atenção! Sua Nota Caiu",
    },
  ];

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
            <div className={styles.body}>
              <div className={styles.linha1}>
                  <Card style={{ borderRadius: 10 }} elevation={3} className={styles.cardTitle}>
                    <CardContent className={styles.cardTitleContent}>
                      <div className={styles.textTitle}>
                        <EventAvailableIcon/>
                        <Typography variant='h5'>
                          Seus Envios
                        </Typography>
                      </div>
                    </CardContent>
                  </Card>
              </div>
              <div className={styles.linha2}>
                <div className={styles.enviosBlock}>
                  <div className={styles.envioLinha}>
                    <div className={styles.firstColumn}>
                      <Typography variant='h6'>Data</Typography> 
                    </div>
                    <div className={styles.secondColumn}>
                      <Typography variant='h6'>Tema</Typography>
                    </div>
                    <div className={styles.thirdColumn}>
                      <Typography variant='h6'>Nota</Typography>
                    </div>
                  </div>
                  {menuItems.map((item) => (
                  <div className={styles.envioLinha}>
                    <div className={styles.firstColumn}>
                      <LightTooltip 
                        interactive={item.hideData} 
                        title={item.tipData}
                        placement='left'
                      >
                      <Badge variant="dot" color="secondary" invisible={item.hideData}
                        anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                      }}>
                      <Typography className={styles.data} variant='body1'>{item.data}</Typography> 
                      </Badge>
                      </LightTooltip>
                    </div>
                    <div className={styles.secondColumn}>
                      <Typography className={styles.temaEnvio} variant='body1'>{item.tema}</Typography> 
                    </div>
                    <div className={styles.thirdColumn}>
                      <LightTooltip 
                        interactive={item.hideNota} 
                        title={item.tipNota}
                        placement='right'
                      >
                      <Badge variant="dot" color="secondary" invisible={item.hideNota}
                        anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                      }}>
                      <Typography className={styles.nota} variant='body1'>{item.nota}</Typography> 
                      </Badge>
                      </LightTooltip>
                    </div>
                  </div>
                  ))}
                </div>
              </div>
              <div className={styles.linha3}>
                  <div className={styles.GraphCol1}> 
                    <div className={styles.graph1}>
                      <div className={styles.grafTitle}>
                        <Typography variant='body2'>Sua Última Nota</Typography>
                      </div>
                      <div className={styles.grafbody}>
                        <BarGraph/>
                      </div>
                    </div>
                    <div className={styles.graph2}>
                      <div className={styles.grafTitle}>
                        <Typography variant='body2'>Sua Média Geral</Typography>
                      </div>
                      <div className={styles.grafbody}>
                        <BarGraph/>
                      </div>
                    </div>
                    <div className={styles.graph3}>
                      <div className={styles.grafTitle}>
                        <Typography variant='body2'>Média Corrige Aí</Typography>
                      </div>
                      <div className={styles.grafbody}>
                        <BarGraph/>  
                      </div>                     
                    </div>
                  </div>
                  <div className={styles.GraphCol2}>
                    <ThemeProvider theme={personalizado}>
                    <Link href='/desempenho'>
                      <Button variant='contained' color='primary'style={{ borderRadius: 10 }}>
                        Veja Seu Desempenho Completo
                      </Button>
                    </Link>
                    </ThemeProvider>
                  </div>
              </div>
            </div>
          </MenuDrawer>
        </div>
        </>
  );
}