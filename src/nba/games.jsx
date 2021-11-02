import * as React from 'react';
import { useEffect, useState } from 'react';
import { Row, Col, Card, Table } from 'react-bootstrap';
import axios from 'axios';

const Games = () => {

    const [stats, setStats] = useState([]);

    const options = {
        method: 'GET',
        url: 'https://bitdoodle.net/api/games',
        headers: {
        }
    };

    useEffect(() => {
        async function fetchData() {
            const response = await axios.request(options);
            //console.log(response.data);
            setStats(response.data);
        }
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (<>
        <Row className="btn-page">
            <Col sm={12}>
                <Card>
                    <Card.Header>
                        <Card.Title as="h5">The Latest 100 Games</Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <Table responsive>
                            <thead>
                                <tr>
                                    <th>GameId</th>
                                    <th>Season</th>
                                    <th>StartTime</th>
                                    <th>Arena</th>
                                    <th>City</th>
                                    <th>VTeam</th>
                                    <th>VScore</th>
                                    <th>HTeam</th>
                                    <th>HScore</th>
                                    <th>Prediction</th>
                                </tr>
                            </thead>
                            <tbody>
                                {stats.map((s) => {
                                    var gameInfoUrl = '/nba/game/' + s.gameId;
                                    return <tr key={s.gameId}>
                                        <th scope="row">
                                            <a href={gameInfoUrl}>{s.gameId}</a>
                                        </th>
                                        <td>{s.seasonYear}</td>
                                        <td>{s.startTimeUTC}</td>
                                        <td>{s.arena}</td>
                                        <td>{s.city}</td>
                                        <td>{s.vTeam.fullName}</td>
                                        <td>{s.vTeam.score.points}</td>
                                        <td>{s.hTeam.fullName}</td>
                                        <td>{s.hTeam.score.points}</td>
                                        <td></td>
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
export default Games;
