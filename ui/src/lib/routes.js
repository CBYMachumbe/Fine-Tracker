export const routeDefinitions = {
    feed: {
        name: 'feed',
        path: 'feed/:teamId',
        pathWithoutParams: 'feed'
    },
    tally : {
        name: 'tally',
        path: 'tally/:teamId',
        pathWithoutParams: 'tally'
    },
    profile : {
        name: 'profile',
        path: 'profile/:userId',
        pathWithoutParams: 'profile'

    },
    teamManagement: {
        name: 'team management',
        path: 'team/:teamId',
        pathWithoutParams: 'team'
    },
    login: {
        name: 'login',
        path: 'login'
    },
    home: {
        name: 'home',
        path: 'home'
    }
};