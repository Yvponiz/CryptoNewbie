import { time } from 'console';
import { FunctionComponent } from 'react';
import {Bar, Line} from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import {CategoryScale} from 'chart.js'; 
Chart.register(CategoryScale);
import { useEffect, useState } from 'react';

export const CoinChart: FunctionComponent = () => {
    const [coinHistory, setCoinHistory] = useState([]);
    let pricesArray = []

    useEffect(() => {
        const coinId = sessionStorage.getItem('coinId');
        fetch(`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?days=${'365'}&vs_currency=${'cad'}`)
            .then((response) => response.json())
            .then((data) => {
                console.log(data.prices);
                setCoinHistory(data.prices);
            })
        }, []);

    return(
        <div>
            <Line
                data={{
                    labels: coinHistory,
                    datasets:[{
                        label:"Valeur en $ CAD",
                        data: coinHistory,
                        borderColor: 'gold',
                        borderWidth: 0.9,
                        fill: false,
                        tension: 0.1
                    }]
                }}
                width={600}
                height={400}
                options={{
                    scales: {
                        x: {
                            display: false // Hide X axis labels
                        }
                    },
                    elements: {
                        point:{
                            radius: 0
                        }
                    },
                    maintainAspectRatio: false
                }}
            />
        </div>
    )
}        
