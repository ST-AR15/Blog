import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group'

// 首页
import Menu from './components/Menu'

// 需要用到的page
import Study from './page/study/Study'
import Novel from './page/novel/Novel'
import Games from './page/games/Games'
import Tools from './page/tools/Tools'

const routes = [
    { path: '/', name: 'Menu', Component: Menu },
    { path: '/study', name: 'Study', Component: Study },
    { path: '/novel', name: 'Novel', Component: Novel },
    { path: '/games', name: 'Games', Component: Games },
    { path: '/tools', name: 'Tools', Component: Tools },
]

function App() {
    // TODO 这里会报一个有关findDOMNode的Warning
    return (
        <div className="App">
            <Router>
                { routes.map(({ path, Component }) => (
                    <Route key={ path } exact path={ path }>
                        {({ match }) => (
                            <CSSTransition
                                in={ match != null }
                                timeout={ 600 }
                                classNames="view"
                                unmountOnExit
                            >
                                <div className="view">
                                    <Component />
                                </div>
                            </CSSTransition>
                        )}
                    </Route>
                ))}
		    </Router>
        </div>
    );
}

export default App;
