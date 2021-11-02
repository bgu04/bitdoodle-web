import * as React from 'react';
import { useEffect, useState } from 'react';
import { Row, Col, Card, Table } from 'react-bootstrap';
import axios from 'axios';
import {useParams} from "react-router-dom";

const Cards = () => {

    const [stats, setStats] = useState([]);
    const { playerId } = useParams()

    console.log('----', playerId);

    const options = {
        method: 'GET',
        url: 'https://bitdoodle.net/api/stats/' + playerId,
        headers: {
        }
    };

    useEffect( () => {
        async function fetchData() {        
            const response = await axios.request(options);
            // console.log(response.data);
            setStats(response.data);
        }
        fetchData();
    }, [playerId]);



    return (<>
            <Row className="btn-page">
                    <Col sm={12}>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">NBA Player - { stats.length > 0 ? stats[0].playerName : playerId}</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Table responsive>
                                    <thead>
                                        <tr>
                                            <th>GameId</th>
                                            <th>Time</th>
                                            <th>Position</th>
                                            <th>Min</th>
                                            <th>Points</th>
                                            <th>Assits</th>
                                            <th>Blocks</th>
                                            <th>DefReb</th>
                                            <th>OffReb</th>
                                            <th>TotReb</th>
                                            <th>pFouls</th>
                                            <th>Steals</th>
                                            <th>Turnovers</th>
                                            <th>PlusMinus</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        { stats.map((s) => {
                                            var gameInfoUrl = '/nba/game/' + s.gameId;
                                            return <tr key={s.gameId}>
                                                <th scope="row">
                                                    <a href={gameInfoUrl}>{s.gameId}</a>
                                                </th>
                                                <td>{s.date}</td>
                                                <td>{s.pos}</td>
                                                <td>{s.min}</td>
                                                <td>{s.points}</td>
                                                <td>{s.assis}</td>
                                                <td>{s.blocks}</td>
                                                <td>{s.defReb}</td>
                                                <td>{s.offReb}</td>
                                                <td>{s.totReb}</td>
                                                <td>{s.pFouls}</td>
                                                <td>{s.steals}</td>
                                                <td>{s.turnovers}</td>
                                                <td>{s.plusMinus}</td>
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
export default Cards;
