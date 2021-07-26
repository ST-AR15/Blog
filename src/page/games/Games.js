import { BrowserRouter as  Router, Route, Switch, useRouteMatch } from 'react-router-dom';

import Header from '../header/Header';

import GamePoster from './game-poster/GamePoster';
import GameDetail from './game-detail/GameDetail';

function Games() {
    let { path, url } = useRouteMatch();
    console.log(path);
    console.log(url);
    return (
        <div className="Games">
            <header>
                <Header />
            </header>
            <main>
                <Router>
                    <Switch>
                        <Route exact path={ '/games' }>
                            <GamePoster />
                        </Route>
                        <Route path={ '/games/detail' }>
                            <GameDetail />
                        </Route>
                        {/* <Route path={ '/games/detail/:gameID' }>
                            <GameDetail />
                        </Route> */}
                    </Switch>
                </Router>
            </main>
        </div>
    );
}

export default Games;