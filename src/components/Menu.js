import React from 'react';

// 首页的内容
import Title from './title/Title'
import Poster from './poster/Poster'

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className="menu">
                <Title />
                <Poster />
            </div>
        );
    }
}

export default Menu;