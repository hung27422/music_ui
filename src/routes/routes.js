import Homepage from '~/pages/Homepage';
import Library from '~/pages/Library';
import Trend from '~/pages/Trend/Trend';
import SongFavorite from '~/pages/SongFavorite';
import Top100 from '~/pages/Top100';
import TopicAndType from '~/pages/TopicAndType';
import ListeningNear from '~/pages/ListeningNear';
import Header from '~/layouts/components/Header/Header';

import configs from '~/Configs/config';

const publicRoutes = [
    { path: configs.router.home, component: Homepage },
    { path: configs.router.library, component: Library },
    { path: configs.router.trend, component: Trend },
    { path: configs.router.songFavorite, component: SongFavorite },
    { path: configs.router.top100, component: Top100 },
    { path: configs.router.topicAndType, component: TopicAndType },
    { path: configs.router.listeningNear, component: ListeningNear },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
