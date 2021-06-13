import React, { useState } from 'react';
import clsx from 'clsx';
import styles from './forgotPass.module.css';
import Image from 'next/image';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from 'next/link';

export default function forgot(){
    const [user, setUser] = useState('');
    return(
        <>
        <div className={styles.container}>
            <Box className={styles.cardBox}>
                <div className={styles.conteudo}>
                    <h2>Recuperação de Senha</h2>
                </div>
                <div className={styles.paragraph}>
                    <p>
                        Por favor digite o seu e-mail cadastrado no Corrige Aí no campo abaixo, uma nova senha provisória será enviada para o seu e-mail em instantes.
                    </p>
                </div>
                <div className={styles.inputs}>
                    <TextField onChange= {(event) => setUser(event.target.value)} id="outlined-basic" label="Digite seu E-mail" className={styles.Text} variant="outlined" />
                </div>
                <div className={styles.buttons}>
                    <div className={styles.buttonCancel}>
                        <Link href='/'>
                            <Button variant="contained" color="secondary" >
                                Cancelar
                            </Button>
                        </Link>
                    </div>      
                    <div className={styles.buttonSend}>        
                        <Button variant="contained" color="primary">
                            Solicitar Nova Senha
                        </Button>
                    </div>
                </div>
            </Box>
        </div>
        </>
    );
}