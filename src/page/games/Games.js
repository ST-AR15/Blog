import { BrowserRouter as  Router, Route, Switch } from 'react-router-dom';

import Header from '../../components/header/Header';

import GamePoster from './game-poster/GamePoster';
import GameDetail from './game-detail/GameDetail';

function Games() {
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