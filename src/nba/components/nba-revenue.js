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
        colors: ['#638631', '#638631'],
        fill: {
            type: 'solid',
            opacity: 0.2
        },
        markers: {
            size: 3,
            opacity: 0.9,
            colors: '#fff',
            strokeColor: ['#638631', '#638631'],
            strokeWidth: 2,
            hover: {
                size: 7
            }
        },
        xaxis: {
            type: 'datetime',
            categories: ['2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', 
                '2011', '2012', '2013','2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021']
        },
        tooltip: {
            x: {
                format: 'yyyy'
            }
        }
    },
    series: [
        {
            name: 'NBA Total Revenue by Year in Billion US Dollars',
            data: [2.66, 2.72, 2.93, 3.19, 3.37, 3.57, 3.77, 3.79, 3.81, 3.96, 3.68, 4.56, 4.79, 5.18, 5.87, 7.37, 8.01, 8.76, 7.92]
        }
    ]
};
export default chartData;
