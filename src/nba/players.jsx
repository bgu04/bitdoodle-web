import React from 'react';
import { useEffect, useState } from 'react';
import { Row, Col, Card, Table, Button, Pagination } from 'react-bootstrap';
import axios from 'axios';

const NBATeams = () => {

    const [players, setPlayers] = useState([]);
    const [year, setYear] = useState('2021');

    const url_base = 'http://bitdoodle.net/api/players/summary/';

    async function handleClick(yearStr) {
        setYear(yearStr);
        var url = url_base + yearStr;
        async function fetchData() {    
            const response = await axios.get(url);
            setPlayers(response.data);
            console.log(players);
        }
        await fetchData();
    }

    useEffect( () => {
        async function fetchData() {    
            const response = await axios.get(url_base + year);
            setPlayers(response.data);
            console.log(players);
        }
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [year]);

        return (<>
                <Row className="btn-page">
                    <Col sm={12}>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">NBA Year { year } </Card.Title>
                                    
                                    <Button key='1' className="btn-rounded" variant='outline-primary' onClick={ () => handleClick('2021') }>2021
                                    </Button>
                                    <Button key='2' className="btn-rounded" variant='outline-primary' onClick={ () => handleClick('2020')}>2020
                                    </Button>
                                    <Button key='3' className="btn-rounded" variant='outline-primary' onClick={ () => handleClick('2019') }>2019
                                    </Button>
                                    <Button key='4' className="btn-rounded" variant='outline-primary' onClick={ () => handleClick('2018')}>2018
                                    </Button>
                                    <Button key='5' className="btn-rounded" variant='outline-primary' onClick={ () => handleClick('2017') }>2017
                                    </Button>
                                    <Button key='6' className="btn-rounded" variant='outline-primary' onClick={ () => handleClick('2016')}>2016
                                    </Button>
                                    <Button key='7' className="btn-rounded" variant='outline-primary' onClick={ () => handleClick('2015') }>2015
                                    </Button>
                                    <Button key='8' className="btn-rounded" variant='outline-primary' onClick={ () => handleClick('2014')}>2014
                                    </Button>     
                                    <Button key='9' className="btn-rounded" variant='outline-primary' onClick={ () => handleClick('2013') }>2013
                                    </Button>
                                    <Button key='10' className="btn-rounded" variant='outline-primary' onClick={ () => handleClick('2012')}>2012
                                    </Button>
                                    <Button key='11' className="btn-rounded" variant='outline-primary' onClick={ () => handleClick('2011') }>2011
                                    </Button>
                                    <Button key='12' className="btn-rounded" variant='outline-primary' onClick={ () => handleClick('2010')}>2010
                                    </Button>                              
                            </Card.Header>
                            <Card.Body>
                                <Table responsive>
                                    <thead>
                                        <tr>
                                            <th>Position</th>
                                            <th>First Name</th>
                                            <th>Last Name</th>
                                            <th>PTS</th>
                                            <th>MIN</th>
                                            <th>FGM</th>
                                            <th>FGA</th>
                                            <th>FG%</th>
                                            <th>3PM</th>
                                            <th>3PA</th>
                                            <th>3P%</th>
                                            <th>FTM</th>
                                            <th>FTA</th>
                                            <th>FT%</th>
                                            <th>REB</th>
                                            <th>AST</th>
                                            <th>BLK</th>
                                            <th>TO</th>
                                            <th>DD2</th>
                                            <th>TD3</th>
                                            <th>PER</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        { players.map((player) => {
                                            return <tr key={player.firstName + player.lastName}>
                                                <th scope="row">{player.position}</th>
                                                <td>{player.firstName}</td>
                                                <td>{player.lastName}</td>
                                                <td>{player.PTS}</td>
                                                <td>{player.MIN}</td>
                                                <td>{player.FGM}</td>
                                                <td>{player.FGA}</td>
                                                <td>{ player['FG%'] }</td>
                                                <td>{player['3PM']}</td>
                                                <td>{player['3PA']}</td>
                                                <td>{player['3P%']}</td>
                                                <td>{player['FTM']}</td>
                                                <td>{player['FTA']}</td>
                                                <td>{player['FT%']}</td>
                                                <td>{player['REB']}</td>
                                                <td>{player['AST']}</td>
                                                <td>{player['BLK']}</td>
                                                <td>{player['TO']}</td>
                                                <td>{player['DD2']}</td>
                                                <td>{player['TD3']}</td>
                                                <td>{player['PER']}</td>
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
export default NBATeams;
