import * as React from 'react';
import { useState, useEffect } from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import axios from 'axios';

const ProfileHeader = (props) => {
    const playerId = props['playerId']
    const [player, setPlayer] = useState({});

    const options = {
        method: 'GET',
        url: 'http://localhost:5000/api/players/' + playerId,
        headers: {
        }
    };

    useEffect( () => {
        async function fetchData() {    
            const response = await axios.request(options);
            console.log(response);
            setPlayer(response.data);
        }
        fetchData();
    });


    return (<>
        <div className="user-profile user-card mb-4">
            <Card.Header className="border-0 p-0 pb-0 pt-10">
            </Card.Header>
            <Card.Body className="py-0">
                <div className="user-about-block m-0">
                    <Row>
                        <Col md={4} className="">
                            <h5 className="mb-1">{player.firstName} {player.lastName}</h5>
                            <p className="mb-2 text-muted">{player.country}</p>
                        </Col>
                        <Col md={8} className="mt-md-4">
                            <Row>
                                <Col>
                                    <div className="media">
                                        <i className="feather icon-map-pin mr-2 mt-1 f-18"/>
                                        <div className="media-body">
                                            <p className="mb-0 text-muted">Height: {player.heightInMeters}</p>
                                            <p className="mb-0 text-muted">Weight: {player.weightInKilograms}</p>
                                            <p className="mb-0 text-muted">DOB: {player.dateOfBirth}</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col>
                                    <div className="media">
                                        <i className="feather icon-map-pin mr-2 mt-1 f-18"/>
                                        <div className="media-body">
                                            <p className="mb-0 text-muted">College: {player.collegeName}</p>
                                            <p className="mb-0 text-muted">Start NBA: {player.startNba}</p>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
            </Card.Body>
        </div>
    </>);
}

export default ProfileHeader;