import React from 'react';
import clsx from 'clsx';
import styles from './login.module.css';
import Image from 'next/image';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Lock from '@material-ui/icons/LockOpen';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import TextField from '@material-ui/core/TextField';


const theme = createMuiTheme({
    palette: {
      primary: {
        light: '#72B01D',
        main: '#72B01D',
        dark: '#3DCE6C',
        contrastText: '#f2f2f2',
      },
    },
  });

  const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    margin: {
      marginTop:'10px',
    },
    withoutLabel: {
      marginTop: '10px',
    },
    textField: {
      width: '27ch',
    },
  }),
);

interface State {
    amount: string;
    password: string;
    weight: string;
    weightRange: string;
    showPassword: boolean;
}

export default function login(){
    const classes = useStyles();
    const [values, setValues] = React.useState<State>({
      amount: '',
      password: '',
      weight: '',
      weightRange: '',
      showPassword: false,
    });
    const handleChange = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    return(
        <>
        <div className={styles.container}>
            <Box className={styles.cardBox}>
                <div className={styles.logo}>
                    <Image src="/Logo2.png" alt="LOGO" width={28} height={44}/>
                    <Image src="/Logo1.png" alt="LOGO" width={130} height={28}/>
                </div>
                <div className={styles.conteudo}>
                    Efetue o Login
                </div>
                <div className={styles.inputs}>
                    <TextField className={clsx(classes.margin, classes.textField)}id="outlined-basic" label="Digite seu Usuário" variant="outlined" />
                    <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">Digite sua Senha</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type={values.showPassword ? 'text' : 'password'}
                        value={values.password}
                        onChange={handleChange('password')}
                        endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                            >
                            {values.showPassword ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                        </InputAdornment>
                        }
                        labelWidth={125}
                    />
                    </FormControl>
                </div>
                <div className={styles.forgot}>
                    <a >Esqueci minha Senha</a>
                </div>
                <div className={styles.buttons}>
                    <div className={styles.buttonAdd}>
                    <MuiThemeProvider theme={theme}>
                        <Button variant="contained" color="primary">
                            <GroupAddIcon></GroupAddIcon>
                            Cadastrar
                        </Button>
                    </MuiThemeProvider>
                    </div>      
                    <div className={styles.buttonEnter}>
                    <MuiThemeProvider theme={theme}>          
                        <Button variant="contained" color="primary">
                            <Lock></Lock>
                            Entrar
                        </Button>
                    </MuiThemeProvider>
                    </div>
            </div>
            </Box>
        </div>
        </>
    );
}