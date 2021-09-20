const chartData = {
    type: 'bar',
    height: 310,
    options: {
        chart: {
            zoom: {
                enabled: false
            },
            toolbar: {
                show: false
            }
        },
        dataLabels: {
            enabled: false
        },
        colors: ['#fff'],
        plotOptions: {
            bar: {
                color: '#fff',
                columnWidth: '60%'
            }
        },
        fill: {
            type: 'solid',
            opacity: 1
        },
        xaxis: {
            crosshairs: {
                width: 1
            },
            labels: {
                show: true
            },
            categories: ['ATL', 'BOS', 'BKN', 'CHA', 'CHI', 'CLE', 'DAL', 'DEN', 'DET', 'GSW', 'HOU', 
                'IND', 'LAC', 'LAL','MEM', 'MIA', 'MIL', 'MIN', 'NOP', 'NYK', 'OKC', 'ORL', 'PHI', 'PHX',
                'POR', 'SAC', 'SAS', 'TOR', 'UTA', 'WAS' ]
        },
        yaxis: {
            labels: {
                style: {
                    color: '#fff'
                }
            }
        },
        grid: {
            borderColor: '#ffffff85',
            padding: {
                bottom: 0,
                left: 10
            }
        },
        tooltip: {
            fixed: {
                enabled: false
            },
            x: {
                show: false
            },
            y: {
                title: {
                    formatter: function (seriesName) {
                        return 'NBA Team Market Values';
                    }
                }
            },
            marker: {
                show: false
            }
        }
    },
    series: [
        {
            data: [1.52, 3.2, 2.65, 1.5, 3.3, 1.56, 2.45, 1.65, 1.45, 4.7, 2.5, 
                1.55, 2.75, 4.6, 1.3, 2.0, 1.625, 1.4, 1.35, 5.0, 1.575, 1.46, 2.075, 1.7, 
                1.9, 1.825, 1.85, 2.15, 1.66, 1.8]
        }
    ]
};
export default chartData;
