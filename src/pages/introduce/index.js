import React from 'react'
import { Link } from 'react-router-dom'
import './index.less'

export default class Introduce extends React.Component {
    render() {
        return (
            <div className='layout-introduce'>
                <header> <Link to='/' style={{ color: 'black' }}>首页</Link>&nbsp;&nbsp; &gt; &nbsp; 出租车位</header>
                <div className='img-container'>
                    <img src={require('/src/static/introduce.png')} />
                    <section></section>
                </div>
            </div>
        )
    }
}