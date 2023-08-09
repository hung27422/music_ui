// import Content from '~/components/Content';
// import Sidebar from '~/components/Sidebar';
// import PlayMusic from '~/components/PlayMusic';
import { Sidebar } from '../components/Sidebar';
import { PlayMusic } from '../components/PlayMusic';

function DefaultLayout({ children }) {
    return (
        <div className="">
            <div>
                <Sidebar></Sidebar>
                <div>{children}</div>
            </div>
            <PlayMusic></PlayMusic>
        </div>
    );
}

export default DefaultLayout;
