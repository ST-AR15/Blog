import { Link } from 'react-router-dom';

import gameposter from './game-poster.png'
import './game-poster.css'

function GamePoster() {
    return (
        <div className="game-poster" style={{
            backgroundImage: `url(${gameposter})`
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

export default GamePoster;