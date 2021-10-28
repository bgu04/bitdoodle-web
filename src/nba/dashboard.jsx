import * as React from 'react';
import Chart from 'react-apexcharts';
import { Row, Col, Card } from 'react-bootstrap';
import summaryChart from './components/summary-chart';
import revenueChart from './components/nba-revenue';
import absentChart from './components/absent-chart';


const Dashboard = () => {
    const event = [
        {
            title: 'Brooklyn Nets @ Milwaukee Bucks',
            start: '2021-10-19',
            borderColor: '#04a9f5',
            backgroundColor: '#04a9f5',
            textColor: '#fff'
        },
        {
            title: 'Golden State Warrior @Los Angeles Lakers',
            start: '2021-10-19',
            borderColor: '#04a9f5',
            backgroundColor: '#04a9f5',
            textColor: '#fff'
        },
        {
            title: 'Indiana Pacers @ Charlotte Hornets',
            start: '2021-10-20',
            borderColor: '#04a9f5',
            backgroundColor: '#04a9f5',
            textColor: '#fff'
        },
        {
            title: 'Chicago Bulls @ Detroit Pistons',
            start: '2021-10-20',
            borderColor: '#04a9f5',
            backgroundColor: '#04a9f5',
            textColor: '#fff'
        },
        {
            title: 'Boston Celtics @ New York Knicks',
            start: '2021-10-20',
            borderColor: '#04a9f5',
            backgroundColor: '#04a9f5',
            textColor: '#fff'
        },
        {
            title: 'Washington Wizards @Toronto Raptors',
            start: '2021-10-20',
            borderColor: '#04a9f5',
            backgroundColor: '#04a9f5',
            textColor: '#fff'
        },
        {
            title: 'Dallas Mavericks @ Atlanta Hawks',
            start: '2021-10-21',
            borderColor: '#04a9f5',
            backgroundColor: '#04a9f5',
            textColor: '#fff'
        },
        {
            title: 'Milwaukee Bucks @Miami Heat',
            start: '2021-10-21',
            borderColor: '#04a9f5',
            backgroundColor: '#04a9f5',
            textColor: '#fff'
        }
    ];
    return (<>
            <Row>
                <Col xl={3} md={6}>
                    <Card>
                        <Card.Body>
                            <Row className="align-items-center m-l-0">
                                <Col sm="auto">
                                    <i className="fas fa-user-graduate f-36 text-c-purple"/>
                                </Col>
                                <Col sm="auto">
                                    <h6 className="m-b-10">Most Expensive Team 2021</h6>
                                    <h2 className="m-b-0">Golden State Warrior</h2>
                                    <h6 className="text-muted m-b-10">Although Warrior didn't make playoff last season, they ranked #2 most valuable team in NBA.</h6>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={3} md={6}>
                    <Card>
                        <Card.Body>
                            <Row className="align-items-center m-l-0">
                                <Col sm="auto">                                    
                                    <i className="fas fa-user-tie f-36 text-c-green"/>
                                </Col>
                                <Col sm="auto">
                                    <h6 className="m-b-10">Highest Paid in 2022</h6>
                                    <h2 className="m-b-0">Stephen Curry</h2>
                                    <h6 className="text-muted m-b-10">Curry has been the top paid player for last 5 years and he is making almost double than Kobe Bryant a decade ago.</h6>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={3} md={6}>
                    <Card>
                        <Card.Body>
                            <Row className="align-items-center m-l-0">
                                <Col sm="auto">
                                    <i className="fas fa-users f-36 text-c-red"/>
                                </Col>
                                <Col sm="auto">
                                    <h6 className="m-b-10">Higest Market Value Team 2021</h6>
                                    <h2 className="m-b-0">NY Knicks</h2>
                                    <h6 className="text-muted m-b-10">NBA is a business. Remember! Even in years Knick was among the teams with lowest winning percentage, Knick has always had highest value.</h6>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={3} md={6}>
                    <Card>
                        <Card.Body>
                            <Row className="align-items-center m-l-0">
                                <Col sm="auto">
                                    <i className="fas fa-book-open f-36 text-c-blue"/>
                                </Col>
                                <Col sm="auto">
                                    <h6 className="m-b-0">ELO Score Prediction for 2020-2021 Games</h6>
                                    <h2 className="m-b-0">68%</h2>
                                    <h6 className="text-muted m-b-10">We have tested all other complicated AI models beat this simple model.</h6>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>

                <Col sm={12}>
                    <Card>
                        <Card.Header>
                            <h5><a href='/nba/money'>NBA Top Salary 2000-2022 (in Million US Dollars)</a></h5>
                        </Card.Header>
                        <Card.Body>
                            <Chart {...summaryChart}/>
                        </Card.Body>
                    </Card>
                </Col>

                <Col sm={12}>
                    <Card>
                        <Card.Header>
                            <h5><a href=''>NBA Total Revenue 2002-2020 (in Billion US Dollars)</a></h5>
                        </Card.Header>
                        <Card.Body>
                            <Chart {...revenueChart}/>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xl={5} md={12}>
                    <Card className="task-card">
                        <Card.Header>
                            <h5>NBA Events</h5>
                        </Card.Header>
                        <Card.Body>
                            <ul className="list-unstyled task-list">
                                <li>
                                    <i className="feather icon-check f-w-600 task-icon bg-c-green"/>
                                    <p className="m-b-5">Tue, 26 Oct</p>
                                    <h6 className="text-muted">
                                        New season started and I have decided not to continue with NBA game prediction work with statistical modeling. 
                                        This effort, no matter how hard I tried with all different models, turned out to be not rewarding. 
                                        Basically, NBA game prediction, has been very random and the best result I have achieved so far has been ELO score with accuracy rate 66% for games in 2020. 
                                        I have published all game predictions together with game detail data of 2020-2021 seasons.
                                        I believe NBA games are for gamblers not worth scientific attention. I am investing my time into finance data analysis from now on. 
                                    </h6>
                                </li>
                                <li>
                                    <i className="feather icon-check f-w-600 task-icon bg-c-green"/>
                                    <p className="m-b-5">Tue, 24 Aug</p>
                                    <h6 className="text-muted">
                                        New season NBA schedule posted: <a href="https://www.nba.com/schedule">https://www.nba.com</a>
                                    </h6>
                                </li>
                                <li>
                                    <i className="task-icon bg-c-blue"/>
                                    <p className="m-b-5">Mon, 23 Aug</p>
                                    <h6 className="text-muted">
                                        NBA data analysis site launched.
                                    </h6>
                                </li>
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={7} md={12}>
                    <Card className="overflow-hidden">
                        <Card.Body className="bg-c-blue">
                            <Chart {...absentChart}/>
                        </Card.Body>
                        <Card.Footer>
                            <h6 className="text-muted m-b-30 m-t-15">Team Market Values 2021 (In $billions)</h6>
                        </Card.Footer>
                    </Card>
                </Col>
                
            </Row>
        </>);
};
export default Dashboard;
