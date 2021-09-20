import * as React from 'react';
import { useEffect, useState } from 'react';
import { Row, Col, Card, Table } from 'react-bootstrap';
import axios from 'axios';
import {useParams} from "react-router-dom";

const NBAMoney = () => {

    const [stocks, setStocks] = useState([]);
    const [portInfo, setPortInfo] = useState({});
    const { portId } = useParams()

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
        }
        fetchData();
    }, [portId]);

    return (<>
            <Row className="btn-page">
                    <Col sm={12}>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Portfolios by BitDoodle: {portInfo.name}, ${portInfo.currentValue}</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Table responsive>
                                    <thead>
                                        <tr>
                                            <th>Stock</th>
                                            <th>date</th>
                                            <th>prevClose</th>
                                            <th>volume</th>
                                            <th>EPS</th>
                                            <th>MarketCap</th>
                                            <th>Ratio</th>
                                            <th>Share</th>
                                            <th>Beta</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        { stocks.map((stock) => {
                                            return <tr key={stock._id}>
                                                <th scope="row">{stock.symbol}</th>
                                                <td>{stock.date}</td>
                                                <td>{stock.prevClose}</td>
                                                <td>{stock.volume}</td>
                                                <td>{stock.eps}</td>
                                                <td>{stock.marketCap}</td>
                                                <td>{stock.ratio}</td>
                                                <td>{stock.share}</td>
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
export default NBAMoney;
