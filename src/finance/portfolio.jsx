import * as React from 'react';
import { useEffect, useState } from 'react';
import { Row, Col, Card, Table } from 'react-bootstrap';
import axios from 'axios';
import {useParams} from "react-router-dom";
import Chart from 'react-apexcharts';

const Portfolio = () => {

    var c_options = {
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
            xaxis: { type: 'datetime' }
        };

    const [stocks, setStocks] = useState([]);
    const [portInfo, setPortInfo] = useState({});
    const [chartOptions, setChartOptions] = useState(c_options);
    const [chartSeries, setChartSeries] = useState([]);
    const { portId } = useParams();


    const options = {
        method: 'GET',
        url: 'http://bitdoodle.net/fapi/port/' + portId,
        headers: {
        }
    };

    useEffect( () => {
        async function fetchData() {        
            const response = await axios.request(options);
            console.log(response);
            var sData = response.data;
            var sInfo = {};
            sInfo['name'] = sData.name;
            sInfo['currentValue'] = sData.current_value;
            setPortInfo(sInfo);
            setStocks(sData.portfolio);

            var perfData = sData.performance;
            perfData.forEach(v => { v.x = new Date(v.x) });
            var series = [];
            series.push( {
                name: 'Performance',
                type: 'line',
                data: perfData
            });
            var benchData = sData.benchmark;
            benchData.forEach(v => { v.x = new Date(v.x) });
            series.push( {
                name: 'Benchmark - SPY',
                type: 'line',
                data: benchData
            });

            console.log(series);
            setChartSeries(series);
        }
        fetchData();
    }, [portId]);
    
    return (<>
            <Row className="btn-page">
                    <Col sm={12}>
                        <Card>
                            <Card.Header>
                            <Card.Title as="h5">{ (portInfo.name) }, base value $ 100 </Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Chart type='line' height='250' options={chartOptions} series={chartSeries} />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={12}>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Stock Picks (Each stock has same weight in the portofolio) </Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Table responsive>
                                    <thead>
                                        <tr>
                                            <th>Stock</th>
                                            <th>Established date</th>
                                            <th>Shares</th>
                                            <th>prevClose</th>
                                            <th>volume</th>
                                            <th>EPS</th>
                                            <th>MarketCap</th>
                                            <th>Ratio</th>
                                            <th>Beta</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        { stocks.map((stock) => {

                                            var stockShareNumber = stock.share;
                                            var shares = stockShareNumber.toFixed(2);

                                            var marketCap = (stock.marketCap).toLocaleString(undefined, { maximumFractionDigits: 0 });
                                            var volume = (stock.volume).toLocaleString(undefined, { maximumFractionDigits: 0 });

                                            return <tr key={stock._id}>
                                                <th scope="row">{stock.symbol}</th>
                                                <td>{stock.date}</td>
                                                <td>{shares}</td>
                                                <td>{stock.prevClose}</td>
                                                <td>{volume}</td>
                                                <td>{stock.eps}</td>
                                                <td>{marketCap}</td>
                                                <td>{stock.ratio}</td>
                                                <td>{stock.beta}</td>
                                            </tr>;
                                        })}
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

        </>);
};
export default Portfolio;
