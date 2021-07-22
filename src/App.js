import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// 首页的内容
import Title from './components/title/Title'
import Poster from './components/poster/Poster'

// 需要用到的page
import Study from './page/study/Study'
import Novel from './page/novel/Novel'
import Games from './page/games/Games'
import Tools from './page/tools/Tools'

function App() {
    return (
        <div className="App">
            <Router>
                <Route path="/" exact component={ Title } />
                <Route path="/" exact component={ Poster } />
                <div className="stage">
                    <Route path="/study" component={ Study } />
                    <Route path="/novel" component={ Novel } />
                    <Route path="/games" component={ Games } />
                    <Route path="/tools" component={ Tools } />
                </div>
		    </Router>
        </div>
    );
}

export default App;
