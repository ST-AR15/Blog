import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group'

// 首页
import './app.css'

// Title
import { randomNum } from './tools'
import './components/title/title.css'
import './components/title/title.mobile.css'

// Poster
import gamesposter from './components/poster/images/poster-games.png'
import studyposter from './components/poster/images/poster-study.jpg'
import novelposter from './components/poster/images/poster-novel.jpg'
import toolsposter from './components/poster/images/poster-tools.jpg'
import './components/poster/poster.css'
import './components/poster/poster.mobile.css'

// game-poster
// TODO 这个img命名被改了
import gameposterimg from './page/games/game-poster/game-poster.png'
import './page/games/game-poster/game-poster.css'

// game-detail
// TODO 这个img命名改了
import gamedetailImage1 from './page/games/game-detail/images/DreamPlan.jpg'
import gamedetailImage2 from './page/games/game-detail/images/Jigsaw.jpg'

// 首页
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
                                    <Header />
                                    <main>
                                        <Component />
                                    </main>
                                </div>
                            </CSSTransition>
                        )}
                    </Route>
                ))}
		    </Router>
        </div>
    );
}

// 菜单
function Menu() {
    return (
        <div className="menu">
            <Title />
            <Poster />
        </div>
    );
}

function Title() {
    let state = {
        title: "LiCHao's Blog",
        text: "",
    }
    // TODO 这两个数组也许后续从服务器传过来？
    const timeText = [
        {
            time: "deep night",
            start: 0,
            end: 5,
            text: [
                "如果累了的话，不要勉强自己，早点睡吧",
                "有些东西是不惜牺牲健康也要获得的，也许这就是你还在这里的原因",
            ]
        },
        {
            time: "morning",
            start: 5,
            end: 8,
            text: [
                "新的一天开始了，今天也要好好活下去",
                "不管昨天如何，今天已经来了。重整旗鼓，大干一场！",
                "如果没有睡醒的话，接着睡吧！只要你值得原谅，世界会原谅你的",
                "一日之计不一定在于晨，但每一个早晨无疑都非常重要"
            ]
        },
        {
            time: "night",
            start: 20,
            end: 24,
            text: [
                "睡觉不是逃避现实，而是准备以更好的姿态迎接未来",
            ]
        }
    ];
    const normalText = [
        "不要让更好的你停留在过去",
        // "每一部优秀小说的主角都历经苦难。你就是主角，所以你一定能战胜困难",
    ];
    let time = new Date().getHours();
    let text = [];
    for(let i in timeText) {
        if( time < timeText[i].start ) {
            break;
        } else {
            if( time < timeText[i].end ) {
                text = text.concat(timeText[i].text);
                break;
            } else {
                continue;
            }
        }
    }
    text = text.concat(normalText);
    state.text = text[randomNum(0, text.length-1)];
    return (
        <div className="title">
            <h1 className="title-core">{ state.title }</h1>
            <p className="title-text">{ state.text }</p>
        </div>
    )
}

function Poster() {
    return (
        // TODO 这里是不是不太符合H5标准？
        <ul className="poster">
            <Link to="study" className="poster-item" style={{
                backgroundImage: `url(${ studyposter })`
            }}>
                <div className="poster-text">
                    <p>学习</p>
                    <p>Study</p>
                </div>
            </Link>
            <Link to="novel" className="poster-item" style={{
                backgroundImage: `url(${ novelposter })`
            }}>
                <div to="/novel" className="poster-text">
                    <p>小说</p>
                    <p>Novel</p>
                </div>
            </Link>
            <Link to="games" className="poster-item" style={{
                backgroundImage: `url(${ gamesposter })`
            }}>
                <div className="poster-text">
                    <p>游戏</p>
                    <p>Games</p>
                </div>
            </Link>
            <Link to="tools" className="poster-item" style={{
                backgroundImage: `url(${ toolsposter })`
            }}>
                <div className="poster-text">
                    <p>工具</p>
                    <p>Tools</p>
                </div>
            </Link>
        </ul>
    )
}

// view的header
function Header() {
    return(
        <ul className="header">
            <li>LiCHao</li>
            <li>学习</li>
            <li>小说</li>
            <li>游戏</li>
            <li>工具</li>
        </ul>
    )
}

// Study
function Study() {
    return (
        <div className="study"></div>
    )
}

// Novel
function Novel() {
    return (
        <div className="study"></div>
    )
}

// Games
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
// game-poster
function GamePoster() {
    return (
        <div className="game-poster" style={{
            backgroundImage: `url(${ gameposterimg })`
        }}>
            <GamePosterText />
            <GamePosterButton />
        </div>
    )
}

function GamePosterText() {
    return (
        <div className="game-poster-text">
            <p>无限流多结局文字游戏</p>
            <p>上一章的BE不影响下一章的进程</p>
            <p>拥有较高自由度的Galgame</p>
            <p>“只要还抱有希望，就没有什么事情无法实现”</p>
        </div>
    )
}

function GamePosterButton() {
    return(
        <div className="game-poster-button">
            <Link to="/games/detail/DreamPlan">
                <button>查看详情</button>
            </Link>
            <Link to="/games/detail">
                <button>全部游戏</button>
            </Link>
        </div>
    )
}
// game-detail
function GameDetail() {
    // let { gameID } = useParams();
    return (
        <div className="game-detail">
            <GameDetailMenu />
            <GameDetailContent />
        </div>
    )
}
function GameDetailMenu() {
    //  TODO 这个数据应该是通过接口调取
    const info = [
        { img: gamedetailImage1, title: '援梦计划', text: '只要还抱有希望，就没有什么事情无法实现' },
        { img: gamedetailImage2, title: '拼图', text: '最经典的拼图游戏' },
    ]
    return (
        <ul className="game-detail-menu">
            { info.map(({ img, title, text }) => (
                <li key={ title }>
                   <img src={ img } alt={ title } /> 
                   <div className="game-detail-menu-text">
                       <h3>{ title }</h3>
                       <p>{ text }</p>
                   </div>
                </li>
            )) }
            <p style={{
                color: '#999999',
                textAlign: 'center'
            }}>没有更多啦</p>
        </ul>
    )
}
function GameDetailContent(props) {
    return (
        <div className="game-detail-content">
            <GameNotSelect />
            { props.gameID }
        </div>
    )
}
function GameNotSelect() {
    return (
        <p>请先从左侧的菜单选择一款游戏！</p>
    )
}

// Tools
function Tools() {
    return (
        <div className="study"></div>
    )
}

export default App;
