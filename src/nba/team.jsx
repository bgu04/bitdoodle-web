import * as React from 'react';
import { useEffect, useState } from 'react';
import { Row, Col, Card, Table } from 'react-bootstrap';
import axios from 'axios';
import {useParams} from "react-router-dom";

const NBAMoney = () => {

    const [players, setPlayers] = useState([]);
    const { teamId } = useParams()

    const options = {
        method: 'GET',
        url: 'https://bitdoodle.net/api/teams/' + teamId,
        headers: {
        }
    };

    useEffect( () => {
        async function fetchData() {        
            const response = await axios.request(options);
            console.log(response);
            var player_list = response.data;
            setPlayers(player_list);
        }
        fetchData();
    }, [teamId]);

    return (<>
            <Row className="btn-page">
                    <Col sm={12}>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">MBA Players</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Table responsive>
                                    <thead>
                                        <tr>
                                            <th>Position</th>
                                            <th>First Name</th>
                                            <th>Last Name</th>
                                            <th>Team</th>
                                            <th>Current Salary</th>
                                            <th>Player Stats</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        { players.map((player) => {
                                            var stat_url = '/nba/stats/' + player.playerId;
                                            return <tr key={player.playerId}>
                                                <th scope="row">{player.leagues.standard.pos}</th>
                                                <td>{player.firstName}</td>
                                                <td>{player.lastName}</td>
                                                <td>{player.teamName}</td>
                                                <td>{player.recentSalary}</td>
                                                <td><a href={stat_url}>Go to Stats</a></td>
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
