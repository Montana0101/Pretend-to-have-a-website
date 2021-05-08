import React from 'react'
import './style.less'
import { message, Button } from 'antd';

export default class Home extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='home-layout'>
                <hgroup> 您好！ 欢迎光临，会员中心 </hgroup>
                <header>
                    <img src={require('/src/static/logo.png')}/>
                    <div className='header-right'>
                        <div className='area'>上海站 <a onClick={()=>{
                            message.error('其他城市未开放')
                        }}>[切换城市]</a></div>

                        <ul>
                            <li>停车地图</li>
                            <li>月租专区</li>
                            <li>出租车位</li>
                            <li>使用介绍</li><li>增值服务</li>
                            <li>会员专区</li>
                        </ul>
                    </div>
                </header>

                <div className='banner'>
                    <img src={require('/src/static/banner.png')}/>
                </div>
                <main>

                </main>
            </div>
        )
    }
}