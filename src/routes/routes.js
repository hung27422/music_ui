import Homepage from '~/pages/Homepage';
import Library from '~/pages/Library';
import Trend from '~/pages/Trend/Trend';
import SongFavorite from '~/pages/SongFavorite';
import Top100 from '~/pages/Top100';
import TopicAndType from '~/pages/TopicAndType';
import ListeningNear from '~/pages/ListeningNear';
import Admin from '~/Admin/Admin';
import CRUDNewRelease from '~/Admin/pages/CRUDNewRelease/CRUDNewRelease';
import CRUDSong from '~/Admin/pages/CRUDSong/CRUDNewSong';
import DashBoard from '~/Admin/pages/Dashboard/Dashboard';

import configs from '~/Configs/config';

const publicRoutes = [
    { path: configs.router.home, component: Homepage },
    { path: configs.router.library, component: Library },
    { path: configs.router.trend, component: Trend },
    { path: configs.router.songFavorite, component: SongFavorite },
    { path: configs.router.top100, component: Top100 },
    { path: configs.router.topicAndType, component: TopicAndType },
    { path: configs.router.listeningNear, component: ListeningNear },
    { path: configs.router.admin, component: Admin, layout: null },
    { path: configs.router.crudsong, component: CRUDSong, layout: null },
    { path: configs.router.crudnewreleases, component: CRUDNewRelease, layout: null },
    { path: configs.router.dashboard, component: DashBoard, layout: null },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
