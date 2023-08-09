import Homepage from '~/pages/Homepage';
import Library from '~/pages/Library';
import Trend from '~/pages/Trend/Trend';
import SongFavorite from '~/pages/SongFavorite/SongFavorite';

import configs from '~/Configs/config';

const publicRoutes = [
    { path: configs.router.home, component: Homepage },
    { path: configs.router.library, component: Library },
    { path: configs.router.trend, component: Trend },
    { path: configs.router.songFavorite, component: SongFavorite },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
