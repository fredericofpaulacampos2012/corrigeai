import React from 'react'
import {Line} from 'react-chartjs-2';
import styles from './grafico.module.css';

export default function Linechart () {
  return (
    <>
        <div className={styles.grafDiv}>
            <Line
                type= 'Line'
                data= {{
                    labels: [
                        'Democratização do Acesso ao Cinema no Brasil',
                        'O Estigma associado as Doenças Mentais',
                        'Democratização do Acesso ao Cinema no Brasil',
                        'O Estigma associado as Doenças Mentais',
                    ],
                    datasets: [{
                        label: 'Nota do Aluno',
                        data: [760,800,900,800],
                        borderWidth:3,
                        fill: true,
                        backgroundColor:'rgba(114, 176, 29,0.3)',
                        borderColor: 'rgba(114, 176, 29,0.9)',
                        tension: 0.4
                    }]
                }}
                options={{
                    legend: {
                        title:{
                            display: false,
                        },                        
                    },
                    maintainAspectRatio:false,
                    scales: {
                        y: {
                            display:false,
                            beginAtZero: false,
                            grid:{
                                display:false,
                            }
                        },
                        x:{
                            display:false,
                            grid:{
                                display:false,

                            }
                        },
                    }
                }}

            />
        </div>
    </>
  )
}