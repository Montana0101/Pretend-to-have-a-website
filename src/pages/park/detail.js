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
        console.log('停车场详情获取参数',this.props.location)
        if (this.props.location.query) {
            console.log('停车场详情获取参数',this.props.location)
            this.setState({
                data: this.props.location.query.data
            })
        }else{
            if(JSON.parse(localStorage.getItem('nav'))){
                // let params = this.props.location.search 
                // params = params.slice(5)
    
                this.setState({
                    data:JSON.parse(localStorage.getItem('nav'))
                })
                localStorage.removeItem('nav')
                // console.log('第三阿娇肯定是',JSON.parse(decodeURI(params)))
            }
        }   
    }

    _randomNums = (a,b) => {
        return Math.round(Math.random() * (b - a))+a
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
                            <span>{data && data.name || data.title}</span>
                        </li>
                        <li>
                            <span>剩余停车位：</span>
                            <span>{(data && data.free || this._randomNums(20,60))}</span>
                        </li>
                        <li>
                            <span>车位容量：</span>
                            <span>{this._randomNums(100, 300).toString()}</span>                        </li>
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
                            <span>{data && data.point && data.point.lng}</span>
                        </li>
                        <li>
                            <span>纬度：</span>
                            <span>{data && data.point && data.point.lat}</span>
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