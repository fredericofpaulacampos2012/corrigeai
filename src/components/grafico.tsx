import React from 'react'
import {Line} from 'react-chartjs-2';
import styles from './grafico.module.css';

export default function Linechart () {
  return (
    <>
        <div className={styles.grafDiv}>
            <Line
                height={500}
                width={1100}
                options={{
                    maintainAspectRatio:false,
                }}
                type= 'Line'
                data= {{
                    labels: ['Redação1','Redação2','Redação3','Redação4'],
                    datasets: [{
                        label: 'Notas dos Últimos Envios',
                        data: [760,800,900,800],
                    }]
                }}
            />
        </div>
    </>
  )
}