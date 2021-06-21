import React ,{ useState } from 'react';
import clsx from 'clsx';
import { createStyles, makeStyles, useTheme, Theme, createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Desempenho from '@material-ui/icons/TrendingUp';
import UserPanel from '@material-ui/icons/AccountCircle';
import Envios from '@material-ui/icons/SwapVerticalCircle';
import Temas from '@material-ui/icons/Description';
import Help from '@material-ui/icons/Help';
import Search from '@material-ui/icons/Search';
import Plan from '@material-ui/icons/AssignmentTurnedIn';
import styles from './dashboardHeader.module.css';
import Image from 'next/image';
import Avatar from '@material-ui/core/Avatar';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {useRouter} from 'next/router';
import Icon from '@material-ui/core/Icon';
const drawerWidth = 240;
const drawerHeight = 430;

const personalizado = createMuiTheme({
    palette: {
      primary: {
        main: '#72B01D',
        contrastText: '#f2f2f2',
      },
    },
  });

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(99% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: 36,
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      height:drawerHeight,
      margin:'5px',
      flexShrink: 0,
      whiteSpace: 'nowrap',
    },
    drawerOpen: {
      width: drawerWidth,
      height: drawerHeight,
      padding:'5px',
      margin:'5px',
      borderRadius:'15px',
      background:'#002400',
      color:'#72B01D',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerClose: {
      height: drawerHeight,
      padding:'5px',
      margin:'5px',
      borderRadius:'15px',
      background:'#002400',
      color:'#72B01D',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: 'hidden',
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9) + 1,
      },
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      justifyContent:'flex-end',
    },
    icons:{
        color:'#72B01D',
    },
    title:{
      flexGrow:1,
      color:'#f2f2f2',
      marginLeft:'5px',
    },
    iconHeader:{
      marginRight:'5px',
      color:'#f2f2f2',
    },
    avatar:{
      marginLeft:'5px',
      boxShadow:'2px 2px 5px #999999 ',
    },
    active:{
      background:'#253A2B',
      borderRadius:'10px',
    }
  }),
);

export default function MiniDrawer({children,title,icon}) {
  const classes = useStyles();
  const theme = useTheme();
  const history = useRouter(); 

  const [open, setOpen] = React.useState(false);
  const menuItems = [
      {
        text:"Painel do Aluno",
        icon:<UserPanel/>,
        path:"/painelAluno",
      },
      {
        text:"Desempenho",
        icon:<Desempenho/>,
        path:"/desempenho",
      },
      {
        text:"Envios",
        icon:<Envios/>,
        path:"/envios",
      },
      {
        text:"Temas",
        icon:<Temas/>,
        path:"/temas",
      },
      {
        text:"Alô CAED!",
        icon:<Help/>,
        path:"/aloCaed",
      },
      {
        text:"Sobre",
        icon:<Search/>,
        path:"/sobre",
      },
      {
        text:'Planejamento',
        icon:<Plan/>,
        path:'/planejamento',
      }
    ];
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
    <ThemeProvider theme={personalizado}>
      <CssBaseline />
      <AppBar
        position="fixed"
        color = "primary"
        elevation={3}
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
          <MenuIcon />
          </IconButton>
            {icon}
          <Typography className={classes.title} >
            {title}
          </Typography>
          <Typography>
            Olá, Administrador!
          </Typography>
          <Avatar className={classes.avatar} src='/avatar.jpg'/>
          <IconButton
            onClick={handleClick}
            className={classes.iconHeader}
          >
            <ArrowDropDownIcon />
          </IconButton>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={()=>history.push('/profile')}>Perfil</MenuItem>
            <MenuItem onClick={()=>history.push('/minhaConta')}>Minha Conta</MenuItem>
            <MenuItem onClick={()=>history.push('/')}>Logout</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>  
    </ThemeProvider>    
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >

        <div className={classes.toolbar}>
          <div>
            <Image src="/Logo2.png" alt="LOGO" width={24} height={36}/>
            <Image src="/Logo1.png" alt="LOGO" width={110} height={24}/>
          </div>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon className={classes.icons}/> : <ChevronLeftIcon className={classes.icons}/>}
          </IconButton>
        </div>
        <Divider  variant="middle" style={{ background: '#72B01D' }}/>
        <List>
          {menuItems.map((item) => (
            <ListItem 
                button 
                key={item.text} 
                onClick={()=> history.push(item.path)}
                className={history.pathname==item.path ? classes.active : ""}>
              <ListItemIcon className={classes.icons}>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
            {children}
           <div className={styles.copyright}>
                <span>2021 &#0169; Corrige Aí: todos os direitos reservados</span>
            </div>
      </main>
    </div>
  );
}