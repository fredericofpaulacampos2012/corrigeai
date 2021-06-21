import React from 'react'
import {Bar} from 'react-chartjs-2';
import styles from './grafico.module.css';

export default function Barchart () {
  return (
    <>
        <div className={styles.grafDiv}>
            <Bar
                type= 'Bar'
                data= {{
                    labels: [
                        760,720,900,820,860,920
                    ],
                    datasets: [{
                        label: 'Nota do Aluno',
                        data: [760,720,900,820,860,920],
                        borderWidth:2,
                        borderRadius: 12,
                        fill: true,
                        backgroundColor:[
                            'rgba(75, 75, 75,0.3)',
                            'rgba(75, 75, 75,0.3)',
                            'rgba(75, 75, 75,0.3)',
                            'rgba(114, 176, 29,0.6)',
                            'rgba(75, 75, 75,0.3)',
                            'rgba(75, 75, 75,0.3)',
                        ],
                        borderColor: [
                            'rgba(75, 75, 75,0.6)',
                            'rgba(75, 75, 75,0.6)',
                            'rgba(75, 75, 75,0.6)',
                            'rgba(114, 176, 29,0.9)',
                            'rgba(75, 75, 75,0.6)',
                            'rgba(75, 75, 75,0.6)',
                        ],
                        tension: 0.9
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
                            beginAtZero: true,
                            grid:{
                                display:false,
                            }
                        },
                        x:{
                            display:true,
                            color:'rgba(114, 176, 29,0.9)',
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