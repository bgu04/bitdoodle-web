import React from 'react';
import { useEffect, useState } from 'react';
import { Row, Col, Card, Table } from 'react-bootstrap';
import * as $ from 'jquery';
import axios from 'axios';

// @ts-ignore
$.DataTable = require('datatables.net-bs');
require('datatables.net-responsive-bs');
function atable() {
    let tableZero = '#data-table-zero';
    $.fn.dataTable.ext.errMode = 'throw';
    // @ts-ignore
    $(tableZero).DataTable();
}

const NBATeams = () => {

    const [teams, setTeams] = useState([]);

    const options = {
        method: 'GET',
        url: 'http://bitdoodle.net/api/teams'
    };
 
    useEffect( () => {
        atable();
        async function fetchData() {        
            const response = await axios.request(options);
            var team_list = response.data;
            setTeams(team_list);
        }
        fetchData();
        console.log(teams);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

        return (<>
                <Row className="btn-page">
                    <Col sm={12}>
                        <Card>
                            <Card.Header>
                                <h5>NBA Teams</h5>
                            </Card.Header>
                            <Card.Body>
                                <Table striped hover responsive bordered id="data-table-zero">
                                    <thead>
                                        <tr>
                                            <th>Abbreviation</th>
                                            <th>Full Name</th>
                                            <th>Conference</th>
                                            <th>Division</th>
                                            <th>City</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        { teams.map((team) => {
                                            var team_url = '/nba/players/' + team.teamId;
                                            return <tr key={team.teamId}>
                                                <td><a href={team_url}>{team.shortName}</a></td>
                                                <td>{team.fullName}</td>
                                                <td>{team.leagues.standard.confName}</td>
                                                <td>{team.leagues.standard.divName}</td>
                                                <td>{team.city}</td>
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
