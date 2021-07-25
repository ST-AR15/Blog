import React from 'react';
import { BrowserRouter as useRouteMatch, Route, Switch } from 'react-router-dom';

import Header from './../Header';

import GamePoster from './game-poster/GamePoster';
import GameDisplay from './game-display/GameDisplay';
import GameDetail from './game-detail/GameDetail';

let { path, url } = useRouteMatch();

class Games extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className="Games">
                <Header />
                {/* <Switch>
                    <Route exact path={ path }>
                        <GamePoster />
                    </Route>
                    <Route path={ `${path}/all` }>
                        <GameDisplay />
                    </Route>
                    <Route path={ `${path}/detail/:gameID` }>
                        <GameDetail />
                    </Route>
                </Switch> */}
            </div>
        );
    }
}

export default Games;