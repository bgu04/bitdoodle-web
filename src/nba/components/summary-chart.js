const chartData = {
    height: 250,
    type: 'area',
    options: {
        dataLabels: {
            enabled: false
        },
        stroke: {
            width: 2,
            curve: 'smooth'
        },
        colors: ['#ff5252', '#4680ff'],
        fill: {
            type: 'solid',
            opacity: 0.2
        },
        markers: {
            size: 3,
            opacity: 0.9,
            colors: '#fff',
            strokeColor: ['#ff5252', '#4680ff'],
            strokeWidth: 2,
            hover: {
                size: 7
            }
        },
        xaxis: {
            type: 'datetime',
            categories: ['2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', 
                '2011', '2012', '2013','2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022']
        },
        tooltip: {
            x: {
                format: 'yyyy'
            }
        }
    },
    series: [
        {
            name: 'Top Salary',
            data: [17.142, 19.60, 22.40, 25.20, 28.00, 29.464, 20.00, 21.00, 23.75, 
                24.75, 23.03, 24.81, 25.24, 30.45, 30.45, 23.50, 25.00, 30.96, 37.46,
                37.46, 40.23, 43.01, 45.78]
        }
    ]
};
export default chartData;
