import React from 'react';
import './poster.css'
import './poster.mobile.css'
import { Link } from 'react-router-dom';

class Poster extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            // TODO 这里是不是不太符合H5标准？
            <ul className="poster">
                <Link to="study" className="poster-item">
                    <div className="poster-text">
                        <p>学习</p>
                        <p>Study</p>
                    </div>
                </Link>
                <Link to="novel" className="poster-item">
                    <div to="/novel" className="poster-text">
                        <p>小说</p>
                        <p>Novel</p>
                    </div>
                </Link>
                <Link to="games" className="poster-item">
                    <div className="poster-text">
                        <p>游戏</p>
                        <p>Games</p>
                    </div>
                </Link>
                <Link to="tools" className="poster-item">
                    <div className="poster-text">
                        <p>工具</p>
                        <p>Tools</p>
                    </div>
                </Link>
            </ul>
        );
    }
}

export default Poster;