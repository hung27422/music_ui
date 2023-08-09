import Homepage from '~/pages/Homepage';
import Library from '~/pages/Library';
import Trend from '~/pages/Trend/Trend';
import Upload from '~/pages/Upload/Upload';

const publicRoutes = [
    { path: '/', component: Homepage },
    { path: '/library', component: Library },
    { path: '/trend', component: Trend },
    { path: '/upload', component: Upload ,layout:null},
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
