import * as React from 'react';
import { useEffect, useState } from 'react';
import { Row, Col, Card, Table } from 'react-bootstrap';
import axios from 'axios';
import {useParams} from "react-router-dom";

const NBAMoney = () => {

    const [ports, setPorts] = useState([]);

    const options = {
        method: 'GET',
        url: 'https://bitdoodle.net/fapi/ports',
        headers: {
        }
    };

    useEffect( () => {
        async function fetchData() {        
            const response = await axios.request(options);
            console.log(response);
            var ports = response.data;
            setPorts(ports);
        }
        fetchData();
    }, []);

    return (<>
            <Row className="btn-page">
                    <Col sm={12}>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Portfolios by BitDoodle</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Table responsive>
                                    <thead>
                                        <tr>
                                            <th>Portfolio ID</th>
                                            <th>Start Date</th>
                                            <th>Name</th>
                                            <th>Current Value</th>
                                            <th>Performance To Date</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        { ports.map((port) => {
                                            var url = '/finance/portfolio/' + port.portId;
                                            return <tr key={port._id}>
                                                <th scope="row"><a href={url}>{port.portId}</a></th>
                                                <td>{port.date}</td>
                                                <td>{port.name}</td>
                                                <td>${Math.round(port.current_value)}</td>
                                                <td>{port.return_to_date}</td>
                                                <td><a href={url}>Go to Stats</a></td>
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
