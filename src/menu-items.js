const chartData = {
    items: [
        {
            id: 'admin-panel',
            title: 'Data Analytics',
            type: 'group',
            icon: 'icon-monitor',
            children: [
                {
                    id: 'nba',
                    title: 'NBA Data',
                    type: 'collapse',
                    icon: 'feather icon-book',
                    children: [
                        {
                            id: 'nba-dashboard',
                            title: 'NBA Data Dashboard',
                            type: 'item',
                            url: '/nba/dashboard'
                        },
                        {
                            id: 'nba-teams',
                            title: 'Teams',
                            type: 'item',
                            url: '/nba/teams'
                        },
                        {
                            id: 'nba-players',
                            title: 'Player Yearly Summaries',
                            type: 'item',
                            url: '/nba/players/all'
                        },
                        {
                            id: 'latest-games',
                            title: 'Latest Games',
                            type: 'item',
                            url: '/nba/games'
                        },
                        {
                            id: 'nba-salary-ranking',
                            title: 'NBA Salary Ranking',
                            type: 'item',
                            url: '/nba/money'
                        }
                    ]
                },
                {
                    id: 'finance',
                    title: 'Finance',
                    type: 'collapse',
                    icon: 'feather icon-target',
                    children: [
                        {
                            id: 'finance-portfolios',
                            title: 'Portfolios by BitDoodle',
                            type: 'item',
                            url: '/finance/portfolios'
                        },
                        {
                            id: 'finance-portfolio',
                            title: 'Portfolio BI-1',
                            type: 'item',
                            url: '/finance/portfolio/BI-1'
                        }
                    ]
                }
            ]
        } 
    ]
};
export default chartData;
