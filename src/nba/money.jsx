import React from 'react';
import { useEffect, useState } from 'react';
import { Row, Col, Card, Table, Button, Pagination } from 'react-bootstrap';
import axios from 'axios';

const NBASalaries = () => {

    const [players, setPlayers] = useState([]);
    const [year, setYear] = useState('2021');

    const url_base = 'http://bitdoodle.net/api/salaries/';

    let items = [];
    for (let number = 1; number >= 10; number--) {
        items.push(<Pagination.Item key={number}>{2022 - number}</Pagination.Item>);
    }
 
    async function fetchData(url) {    
        const response = await axios.get(url);
        setPlayers(response.data);
        console.log(players);
    }

    async function handleClick(yearStr) {
        console.log('-- clicked --- ')
        setYear(yearStr);
        var url = url_base + yearStr;
        await fetchData(url);
    }

    useEffect( () => {
        console.log('--- useEffect called');
        fetchData(url_base + year);
    }, [year]);

    return (<>
            <Row className="btn-page">
                    <Col sm={12}>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">NBA Year { year } </Card.Title>
                                    <Button key='0' className="btn-rounded" variant='outline-primary' onClick={ () => handleClick('2022') }>2022
                                    </Button>
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
                                            <th>Rank</th>
                                            <th>First Name</th>
                                            <th>Last Name</th>
                                            <th>Position</th>
                                            <th>Salary</th>
                                            <th>Season</th>
                                            <th>Team</th>
                                            <th>Model Score</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        { players.map((player) => {
                                            return <tr key={player._id}>
                                                <th scope="row">{player.rank}</th>
                                                <td>{player.firstName}</td>
                                                <td>{player.lastName}</td>
                                                <td>{player.pos}</td>
                                                <td>{player.salary}</td>
                                                <td>{player.season}</td>
                                                <td>{player.team}</td>
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
export default NBASalaries;
