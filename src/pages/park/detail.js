import React from 'react'
import { Link, Route, withRouter } from 'react-router-dom'
import './detail.less'
import { Button, Divider } from 'antd'

export default class RentDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {}
        }
    }

    componentDidMount() {
        if (this.props.location.query) {
            this.setState({
                data: this.props.location.query.data
            })
        }
    }

    render() {
        const { data } = this.state
        return (
            <div className='layout-park-detail'>
                <header> <Link to='/' style={{ color: 'black' }}>首页</Link>&nbsp;&nbsp; &gt; &nbsp; 停车地图</header>
                <main>
                    <h1>停车场详情信息</h1>
                    <Divider dashed style={{ borderWidth: '0.02rem' }} />
                    <img src={require('/src/static/home/car.jpg')} style={{ width: "3rem" }} />
                    <ul>
                        <li>
                            <span>停车场名称：</span>
                            <span>{data && data.name}</span>
                        </li>
                        <li>
                            <span>剩余停车场：</span>
                            <span>{data && data.free}</span>
                        </li>
                        <li>
                            <span>车位容量：</span>
                            <span>{(data && data.free * 20).toString()}</span>
                        </li>
                        <li>
                            <span>开放时间：</span>
                            <span>00:00:00-24:00:00</span>
                        </li>
                        <li>
                            <span>地理位置：</span>
                            <span>{data && data.address}</span>
                        </li>
                        <li>
                            <span>经度：</span>
                            <span>121.480248</span>
                        </li>
                        <li>
                            <span>纬度：</span>
                            <span>31.236276</span>
                        </li>
                        <li>
                            <span>入口位置：</span>
                            <span></span>
                        </li>
                        <li>
                            <span>入口高度：</span>
                            <span></span>
                        </li>
                        <li>
                            <span>停车场描述：</span>
                            <span></span>
                        </li>
                        <li style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '0.2rem' }}>
                            <Button style={{
                                height: '0.44rem', width: '1.3rem', display: 'flex',
                                color: 'white', borderRadius: '0.05rem',
                                justifyContent: 'center', alignItems: 'center',
                                background: 'linear-gradient(#D8EAD7,#31912D)', border: '0.02rem solid #31912D',
                                fontSize: '0.16rem'
                            }}
                                onClick={() => { this.props.history.push('/park') }}
                            >返回</Button>
                        </li>
                    </ul>
                </main>
            </div>
        )
    }
}