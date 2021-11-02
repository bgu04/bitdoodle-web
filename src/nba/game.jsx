import * as React from 'react';
import { useEffect, useState } from 'react';
import { Row, Col, Card, Alert, Table } from 'react-bootstrap';
import axios from 'axios';
import {useParams} from "react-router-dom";

const Cards = () => {

    const [stats, setStats] = useState([]);
    const [gameInfo, setGameInfo] = useState([]);
    const [predictedWinner, setPredictedWinner] = useState();
    const [predictStatus, setPredictStatus] = useState();
    const [playerStats, setPlayerStats] = useState([]);
    const [vTeam, setVTeamInfo] = useState([]);
    const [hTeam, setHTeamInfo] = useState([]);
    const { gameId } = useParams();

    const options_game = {
        method: 'GET',
        url: 'https://bitdoodle.net/api/games/' + gameId,
        headers: {
        }
    };

    const options_team_stats = {
        method: 'GET',
        url: 'https://bitdoodle.net/api/game-stats/' + gameId,
        headers: {
        }
    };

    const options_player_stats = {
        method: 'GET',
        url: 'https://bitdoodle.net/api/player-stats/' + gameId,
        headers: {
        }
    };

    useEffect( () => {
        async function fetchStatsData() {
            const response1 = await axios.request(options_game);
            setGameInfo(response1.data);
            setVTeamInfo(response1.data.vTeam);
            setHTeamInfo(response1.data.hTeam);

            if( response1.data.elo_pred > 0.5 ) {
                setPredictedWinner(response1.data.hTeam.fullName);
            } else {
                setPredictedWinner(response1.data.vTeam.fullName);
            }

            const response2 = await axios.request(options_team_stats);
            setStats(response2.data);

            const response3 = await axios.request(options_player_stats);
            setPlayerStats(response3.data);

        }
        fetchStatsData();
    }, [ gameId ]);


    return (<>
            <Row className="btn-page">
                    <Col sm={12}>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">{vTeam.fullName} ({vTeam.teamId}) vs. {hTeam.fullName} ({hTeam.teamId})</Card.Title>
                                <Card.Text> - Game ended @ UTC {gameInfo.endTimeUTC}</Card.Text>
                                <Alert variant='warning'>ELO Score Predicted Winner: { predictedWinner}</Alert>
                            </Card.Header>
                            <Card.Body>
                                <Table responsive>
                                    <thead>
                                        <tr>
                                            <th>TeamId</th>
                                            <th>Points</th>
                                            <th>BiggestLead</th>
                                            <th>FastBreak</th>
                                            <th>LongestRun</th>
                                            <th>PointsInPaint</th>
                                            <th>PointsOffTurnovers</th>
                                            <th>SecondChancePoints</th>
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

                                            var team_url = '/nba/players/' + s.teamId;
                                            return <tr key={s.teamId}>
                                                <th scope="row"><a href={team_url}>{s.teamId}</a></th>
                                                <td>{s.points}</td>
                                                <td>{s.biggestLead}</td>
                                                <td>{s.fastBreakPoints}</td>
                                                <td>{s.longestRun}</td>
                                                <td>{s.pointsInPaint}</td>
                                                <td>{s.pointsOffTurnovers}</td>
                                                <td>{s.secondChancePoints}</td>
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
            
                <Row className="btn-page">
                    <Col sm={12}>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">{vTeam.nickName}</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Table responsive>
                                    <thead>
                                        <tr>
                                            <th>Name</th>
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
                                        { playerStats.map((s) => {

                                            if( s.teamId === vTeam.teamId ) {
                                                return <tr key={s.playerId}>
                                                    <th scope="row">
                                                        {s.playerName}
                                                    </th>
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
                                            }
                                        })}
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <Row className="btn-page">
                    <Col sm={12}>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">{hTeam.nickName}</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Table responsive>
                                    <thead>
                                        <tr>
                                            <th>Name</th>
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
                                        { playerStats.map((s) => {

                                            if( s.teamId === hTeam.teamId ) {
                                                return <tr key={s.playerId}>
                                                    <th scope="row">
                                                        {s.playerName}
                                                    </th>
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
                                            }
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
