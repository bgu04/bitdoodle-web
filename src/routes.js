import * as React from 'react';

const DashboardDefault = React.lazy(() => import('./Demo/Dashboard/Default'));
const NBATeams = React.lazy(() => import('./nba/teams'));
const NBATeam = React.lazy(() => import('./nba/team'));
const NBAPlayers = React.lazy(() => import('./nba/players'));
const PlayerGameStats = React.lazy(() => import('./nba/player-stats'));
const GameStats = React.lazy(() => import('./nba/game'));
const NBAProfile = React.lazy(() => import('./nba/profile'));
const NBAMoney = React.lazy(() => import('./nba/money'));
const RecentGames = React.lazy(() => import('./nba/games'));
const NBADashboard = React.lazy(() => import('./nba/dashboard'));
const Portfolios = React.lazy(() => import('./finance/portfolios'));
const Portfolio = React.lazy(() => import('./finance/portfolio'));

const routes = [
    { path: '/nba/dashboard/default', exact: true, name: 'NBA Data Dashboard', component: NBADashboard },
    { path: '/nba/teams', exact: true, name: 'NBA Teams', component: NBATeams },
    { path: '/nba/players/all', exact: true, name: 'All NBA Players', component: NBAPlayers },
    { path: '/nba/players/:teamId', exact: true, name: 'NBA Players', component: NBATeam },
    { path: '/nba/stats/:playerId', exact: true, name: 'NBA Players', component: PlayerGameStats },
    { path: '/nba/game/:gameId', exact: true, name: 'NBA Players', component: GameStats },
    { path: '/nba/games', exact: true, name: 'NBA Latest Games', component: RecentGames },
    { path: '/nba/profile', exact: true, name: 'NBA Profile', component: NBAProfile },
    { path: '/nba/money', exact: true, name: 'NBA Salary Ranking', component: NBAMoney },
    { path: '/nba/dashboard', exact: true, name: 'NBA Data Dashboard', component: NBADashboard },
    { path: '/finance/portfolios', exact: true, name: 'BitDoodle Portfolios', component: Portfolios },
    { path: '/finance/portfolio/:portId', exact: true, name: 'BitDoodle Portfolio', component: Portfolio }
];
export default routes;
