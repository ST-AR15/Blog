import React from 'react';
import { randomNum } from './tools'

class Title extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            title: "LiCHao's Blog",
            text: "",
        };
    }

    // 获取text的内容
    handleText() {
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
            "每一部优秀小说的主角都历经苦难。你就是主角，所以你一定能战胜困难",
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
        this.setState({
            text: text[randomNum(0, text.length-1)]
        })
    }

    componentDidMount() {
        this.handleText();
    }

    render() {
        return (
            <div className="title">
                <h1 className="title-core">{ this.state.title }</h1>
                <p className="title-text">{ this.state.text }</p>
            </div>
            
        );
    }
}

export default Title;