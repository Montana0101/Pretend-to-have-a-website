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
        const info = JSON.parse(localStorage.getItem('parkinfo'))

        const { data } = this.state
        return (
            <div className='layout-park-detail'>
                <header> <Link to='/' style={{ color: 'black' }}>首页</Link>&nbsp;&nbsp; &gt; &nbsp; 
                <Link to='/rent' style={{ color: 'black' }}>出租车位</Link>&nbsp;&nbsp; &gt; &nbsp; 提供车辆详细信息
                </header>
                <main>
                    <h1>停车场详情信息</h1>
                    <Divider dashed style={{ borderWidth: '0.02rem' }} />
                    {/* <img src={require('/src/static/home/car.jpg')} style={{width:"3rem"}}/> */}
                    <ul>
                        <li>
                            <span>停车场名称 ：</span>
                            <span>{info && info.parkname}</span>
                        </li>
                        <li>
                            <span>地址 ：</span>
                            <span>{info && info.address}</span>
                        </li>
                        <li>
                            <span>物业名称 ：</span>
                            <span>{info && info.property}</span>
                        </li>
                        <li>
                            <span>可租时段 ：</span>
                            <span>00:00:00-24:00:00</span>
                        </li>
                        <li>
                            <span>价格 ：</span>
                            <span>{data && data.distance}</span>
                        </li>
                        <li>
                            <span>备注说明 ：</span>
                            <span></span>
                        </li>
                        <li>
                            <span>审核结果 ：</span>
                            <span>{data && data.status}</span>
                        </li>
                        <li>
                            <span>审核意见 ：</span>
                            <span></span>
                        </li>
                        <li>
                            <span>车辆状态 ：</span>
                            <span>{data && data.price}</span>
                        </li>
                        <li>
                            <span>入口高度 ：</span>
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
                                onClick={() => { this.props.history.push('/rent') }}
                            >返回</Button>
                        </li>
                    </ul>
                </main>
            </div>
        )
    }
}