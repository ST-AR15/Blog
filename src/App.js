import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group'

// 首页的内容
import Title from './components/title/Title'
import Poster from './components/poster/Poster'

// 需要用到的page
import Study from './page/study/Study'
import Novel from './page/novel/Novel'
import Games from './page/games/Games'
import Tools from './page/tools/Tools'

const routes = [
    // TODO 为了适配react-router的使用习惯，另外也是为了逻辑正常，应该把Title和Poster整合起来（他们使用了同一个path）
    { path: '/', name: 'Title', Component: Title },
    { path: '/', name: 'Poster', Component: Poster },
    { path: '/study', name: 'Study', Component: Study },
    { path: '/novel', name: 'Novel', Component: Novel },
    { path: '/games', name: 'Games', Component: Games },
    { path: '/tools', name: 'Tools', Component: Tools },
]

function App() {
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
