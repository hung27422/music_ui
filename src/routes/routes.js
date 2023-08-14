import Homepage from '~/pages/Homepage';
import Library from '~/pages/Library';
import Trend from '~/pages/Trend/Trend';
import SongFavorite from '~/pages/SongFavorite/SongFavorite';
import Zingchat from '~/components/NewRelease/Zingchat/Zingchat';
import RapVietPage from '~/components/NewRelease/RapVietPage/RapVietPage';

import configs from '~/Configs/config';

const publicRoutes = [
    { path: configs.router.home, component: Homepage },
    { path: configs.router.library, component: Library },
    { path: configs.router.trend, component: Trend },
    { path: configs.router.songFavorite, component: SongFavorite },
    { path: configs.router.zingchat, component: Zingchat },
    { path: configs.router.rapviet, component: RapVietPage },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
