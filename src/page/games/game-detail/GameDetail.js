import { BrowserRouter as useParams } from 'react-router-dom';

import image1 from './images/DreamPlan.jpg'
import image2 from './images/Jigsaw.jpg'

import './game-detail.css'

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
        { img: image1, title: '援梦计划', text: '只要还抱有希望，就没有什么事情无法实现' },
        { img: image2, title: '拼图', text: '最经典的拼图游戏' },
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

// 下面是所有游戏的详情内容
function GameNotSelect() {
    return (
        <p>请先从左侧的菜单选择一款游戏！</p>
    )
}

function DreamPlan() {
    return(
        <div className="game-DreamPlan">
            <p>游戏共八关（除去教程关），你将扮演一个在主线中没有性格——也就是说，性格完全取决于你的男主角，为了达成“援梦计划”的目标而帮助他人实现梦想。</p>
            <p>主要人物介绍：</p>
            <p>如隔：玩家操纵的主角，如同傀儡般活到了十八岁，不知道自己未来应该做什么也从来不去思考这件事的男生。</p>
            <p>花开：“援梦计划”的队长，轻微大学学生会会长。性格冷酷，能不多说话就不会多说话。但她实际上一直很为每一个“援梦计划”的目标，以及“援梦计划”的成员着想。</p>
            <p>未眠：花开的妹妹，有着与姐姐完全相反的开朗性格，但十分怕生。</p>
            <p>帝门：不爱与人交流，脾气火爆且容易烦躁的男生，生活也丝毫不检点。</p>
            <p>空流：性格和善的美男子，光用微笑和温柔的声音就能征服大部分颜控女生，但他似乎从来没有去恋爱的想法。</p>
            <p>章节介绍：</p>
            <p>~回忆~过去的故事~</p>
            <p>教程关，介绍玩法操作以及主角曾经经历的事</p>
            <p>~第一个梦~愿你与七色花共同绽放~</p>
            <p>初次加入“援梦计划”的任务，目标是帮助一个高中女生……这种描述模糊</p>
        </div>
    )
}

export default GameDetail;