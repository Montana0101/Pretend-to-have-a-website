import React from 'react'
import './style.less'
import { message, Button, Input, Checkbox } from 'antd';
import { SmileTwoTone, HeartTwoTone, CheckCircleTwoTone } from '@ant-design/icons';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            flag: false, //判断是否登陆
        }
    }

    componentDidMount() {
        let user = localStorage.getItem('user')
        if (!user) {
            console.log('没登陆')
        } else {
            console.log('已经登陆', user)
            user = JSON.parse(user)
            this.setState({
                flag: true,
                username: user.username,
                password: user.password
            })
        }
    }

    render() {
        return (
            <div className='home-layout'>
                <hgroup> 您好！ 欢迎光临，{!this.state.flag ? '会员中心' : this.state.username}
                    {this.state.flag && <a style={{ color: '#4A9E47', fontSize: '0.12rem' }} onClick={() => {
                        localStorage.setItem('user', '')
                        this.setState({
                            flag: false
                        })
                    }}>&nbsp;&nbsp;&nbsp;&nbsp;退出</a>}</hgroup>
                <header>
                    <img src={require('/src/static/home/logo.png')} />
                    <div className='header-right'>
                        <div className='area'>上海站 <a onClick={() => {
                            message.error('功能未开放')
                        }}>[切换城市]</a></div>

                        <ul>
                            <li>
                                <Link to='/park'>停车地图</Link>
                            </li>
                            <li>
                                <Link to='/month'>月租专区</Link>
                            </li>

                            <li>
                                <Link to='/rent'>出租车位</Link>
                            </li>
                            <li>
                                <Link to='/introduce'>使用介绍</Link>
                            </li>
                            <li>
                                <a onClick={() => {
                                    message.info('功能未开放')
                                }}>增值服务</a></li>
                            <li>
                                {
                                    !this.state.flag ? <Link to='' onClick={
                                        () => {
                                            if (!this.state.flag) {
                                                message.warn('请先登陆')
                                                return
                                            }
                                        }
                                    }>会员中心</Link> : <Link to='/member' onClick={
                                        () => {
                                            if (!this.state.flag) {
                                                message.warn('请先登陆')
                                                return
                                            }
                                        }
                                    }>会员中心</Link>
                                }

                            </li>
                        </ul>
                    </div>
                </header>

                <div className='banner'>
                    <img src={require('/src/static/home/banner.png')} />
                </div>

                <main>
                    <div className='main-l'>
                        {!this.state.flag && <div className='main-l-login'>
                            <p className='p-title'><b style={{ color: '#31912D' }} onClick={() => {
                            }}>会员登陆</b> <b>LOGIN</b>
                            </p>
                            <p>
                                <Input placeholder='请输入用户名' onChange={(e) => {
                                    this.setState({
                                        username: e.target.value
                                    })
                                }} />
                            </p>
                            <p>
                                <Input.Password placeholder='请输入密码' onChange={(e) => {
                                    this.setState({
                                        password: e.target.value
                                    })
                                }} />
                            </p>
                            <p className='p-login'>
                                {/* <Button type="primary">注册</Button> */}
                                <Checkbox onChange={
                                    () => {
                                        console.log('选中存储密码')
                                    }
                                }>记住密码</Checkbox>
                                <Button danger type='primary' onClick={() => {
                                    if (!this.state.username) {
                                        message.warn('请输入用户名')
                                    }
                                    if (!this.state.password) {
                                        message.warn('请输入密码')
                                    }
                                    localStorage.setItem('user', JSON.stringify(
                                        {
                                            username: this.state.username,
                                            password: this.state.password
                                        }
                                    ))
                                    this.setState({
                                        flag: true
                                    })
                                }}>登陆</Button>
                            </p>
                            <p className='p-register'>
                                <span>会员注册</span>
                                <span style={{ margin: '0 0.1rem', color: 'rgba(0,0,0,0.3)', transform: 'scale(0.7)' }}>|</span>
                                <span>忘记密码</span>
                            </p>
                        </div>}

                        <img src={require('/src/static/home/guanggao.png')} />

                        {
                            this.state.flag && <img src={require('/src/static/home/guanggao.png')} />
                        }
                        {
                            this.state.flag && <img src={require('/src/static/home/guanggao.png')} />
                        }
                        {
                            this.state.flag && <img src={require('/src/static/home/guanggao.png')} />
                        }

                        <div className='main-l-contact'>
                            <p style={{ background: 'rgba(0,0,0,0.1)' }}>
                                <SmileTwoTone style={{ marginRight: "0.1rem" }} />
                                联系我们
                            </p>
                            <p>
                                周一到周五：8:30-18:00
                            </p>
                            <p>
                                <b>电话 : </b>
                                <span>4008-88888</span>
                            </p>
                            {/* <Divider dashed></Divider> */}
                            <p>
                                <b>邮件 : </b>
                                <span>service@ruixing.com</span>
                            </p>
                        </div>
                    </div>

                    <div className='main-r'>
                        <header>
                            <span>热门搜索：徐家汇 静安寺 人民广场 淮海路</span>
                            <div>
                                <Input.Search
                                    placeholder=""
                                    allowClear
                                    enterButton="搜索"
                                    size="middle"
                                    onSearch={() => {
                                        message.error('功能未开放')
                                    }}
                                />
                            </div>
                        </header>

                        <section>
                            <article>
                                <div className='article-1'>
                                    <p>
                                        <span>商业分类</span>
                                        <span className='more'>more</span>
                                    </p>
                                    <table>
                                        <tbody>
                                            <tr>
                                                <th>曲阳公园</th>
                                                <th>和平公园</th>
                                                <th>鲁迅公园</th>
                                                <th>黄浦区银行</th>
                                                <th>陆家嘴商区</th>
                                            </tr>
                                        </tbody>

                                        <tbody>
                                            <tr>
                                                <th>闵行公园</th>
                                                <th>徐家汇</th>
                                                <th>虹桥机场</th>
                                                <th>南京路</th>
                                                <th>豫园</th>
                                            </tr>
                                        </tbody>

                                        <tbody>
                                            <tr>
                                                <th>新天地</th>
                                                <th>金茂大厦</th>
                                                <th>人民广场</th>
                                                <th>港汇广场</th>
                                                <th>正大广场</th>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className='article-2'>
                                    <p>
                                        <span>区县分类</span>
                                        <span className='more'>more</span>
                                    </p>
                                    <table>
                                        <tbody>
                                            <tr>
                                                <th>徐汇</th>
                                                <th>虹口</th>
                                                <th>黄埔</th>
                                                <th>卢湾</th>
                                                <th>南汇</th>
                                                <th>宝山</th>
                                                <th>长宁</th>
                                                <th>崇明</th>
                                            </tr>
                                        </tbody>

                                        <tbody>
                                            <tr>
                                                <th>奉贤</th>
                                                <th>嘉定</th>
                                                <th>金山</th>
                                                <th>静安</th>
                                                <th>普陀</th>
                                                <th>浦东</th>
                                                <th>南汇</th>
                                            </tr>
                                        </tbody>

                                    </table>
                                </div>

                                <div className='article-3'>
                                    <div>
                                        <span className='function'>功能分类</span>
                                        <section>
                                            <div className='more'>more</div>
                                        </section>
                                    </div>

                                    <ul>
                                        <li>
                                            <svg className="icon" aria-hidden="true">
                                                <use xlinkHref="#icon-ditiexiaotubiao"></use>
                                            </svg>
                                            <span>地铁</span>
                                        </li>
                                        <li>
                                            <svg className="icon" aria-hidden="true">
                                                <use xlinkHref="#icon-shangchang"></use>
                                            </svg>
                                            <span>商场</span>
                                        </li>
                                        <li>
                                            <svg className="icon" aria-hidden="true">
                                                <use xlinkHref="#icon-jiudian"></use>
                                            </svg>
                                            <span>酒店</span>
                                        </li>
                                        <li>
                                            <svg className="icon" aria-hidden="true">
                                                <use xlinkHref="#icon-canyin"></use>
                                            </svg>
                                            <span>餐饮</span>
                                        </li>
                                        <li>
                                            <svg className="icon" aria-hidden="true">
                                                <use xlinkHref="#icon-hongshizi"></use>
                                            </svg>
                                            <span>医院</span>
                                        </li>
                                        <li>
                                            <svg className="icon" aria-hidden="true">
                                                <use xlinkHref="#icon-gongyuan"></use>
                                            </svg>
                                            <span>公园</span>
                                        </li>
                                    </ul>
                                </div>
                            </article>
                            <img src={require('/src/static/home/map.png')} />
                        </section>
                    </div>
                </main>
            </div>
        )
    }
}