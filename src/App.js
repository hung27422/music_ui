import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from '~/routes/routes';
import DefaultLayout from '~/layouts/DefaultLayout';
import { Fragment, useState } from 'react';
import { createContext } from 'react';
// UseContext để selectMusicted
export const MusicContext = createContext(null);
function App() {
    const [selectMusic, setSelectMusic] = useState(null);
    return (
        <MusicContext.Provider value={{selectMusic, setSelectMusic}}>
            <Router>
                <div className="App">
                    <Routes>
                        {publicRoutes.map((route, index) => {
                            const Layout = route.layout === null ? Fragment : DefaultLayout;
                            const Page = route.component;
                            return (
                                <Route
                                    key={index}
                                    path={route.path}
                                    element={
                                        <Layout>
                                            <Page />
                                        </Layout>
                                    }
                                ></Route>
                            );
                        })}
                    </Routes>
                </div>
            </Router>
        </MusicContext.Provider>
    );
}

export default App;
