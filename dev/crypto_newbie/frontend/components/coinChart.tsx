import { FunctionComponent } from 'react';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import { CategoryScale } from 'chart.js';
Chart.register(CategoryScale);
import { useEffect, useState } from 'react';

export const CoinChart: FunctionComponent = () => {
    const [coinHistory, setCoinHistory] = useState([]);

    useEffect(() => {
        const coinId = sessionStorage.getItem('coinId');
        fetch(`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?days=${'365'}&vs_currency=${'cad'}`)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setCoinHistory(data.prices);
            })
    }, []);

    if (coinHistory) {
        return (
            <div>
                <Line
                    data={{
                        labels: coinHistory,
                        datasets: [{
                            label: "Valeur en $ CAD",
                            data: coinHistory,
                            borderColor: 'gold',
                            borderWidth: 0.9,
                        }]
                    }}
                    width={750}
                    height={600}
                    options={{
                        scales: {
                            x: {
                                display: false
                            }
                        },
                        elements: {
                            point: {
                                radius: 0
                            }
                        },
                        maintainAspectRatio: false
                    }}
                />
            </div>
        )
    }

    return (
        null
    )
}