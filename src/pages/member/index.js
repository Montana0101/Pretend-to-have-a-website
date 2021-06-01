import React from 'react'
import { Link } from 'react-router-dom'
import { Divider, Button } from 'antd'
import './index.less'

export default class Member extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            obj: {},
            fak: [
                {
                    name: '赵海涛',
                    number: '310102298112',
                    tel: '021-57072136',
                    phone: '15321235762',
                    card: '310102198202020981',
                    car: '沪EK172E',
                    email: '31231529@qq.com',
                    address: '上海市浦东新区城丰路70弄-130弄'
                },
                {
                    name: '袁寒',
                    number: '310107259112',
                    tel: '021-67072135',
                    phone: '1568279121',
                    card: '310102198604020981',
                    car: '沪A329T',
                    email: '2761529@qq.com',
                    address: '上海市闵行区华翔路2009号'
                }
            ]
        }
    }

    componentDidMount() {
        let user = localStorage.getItem('user')
        if (!user) {
            console.log('没登陆')
        } else {
            user = JSON.parse(user)
            let obj = {}
            if (user.username == 'test') {
                const _fak = JSON.parse(JSON.stringify(this.state.fak[0]))
                for (let key in _fak) {
                    obj[key] = _fak[key]
                }
                obj.username = 'test'
            } else if (user.username == 'yh2020') {
                const _fak = JSON.parse(JSON.stringify(this.state.fak[1]))
                for (let key in _fak) {
                    obj[key] = _fak[key]
                }
                obj.username = 'yh2020'
            } else {
                console.log('没有数据')
            }
            this.setState({
                obj
            })

        }
    }

    render() {
        const { obj } = this.state
        return (
            <div className='layout-member'>
                <header> <Link to='/' style={{ color: 'black' }}>首页</Link>&nbsp;&nbsp; &gt; &nbsp; 会员中心</header>
                <main>
                    <h1>个人资料</h1>
                    <Divider dashed style={{ borderWidth: '0.02rem' }} />
                    <section>
                        <div className='left-area'>
                            <p>
                                <span className='name'>用户名 :</span>
                                <span>{obj && obj.username}</span>
                            </p>
                            <p>
                                <span className='name'>姓名 :</span>
                                <span>{obj && obj.name}</span>
                            </p>
                            <p>
                                <span className='name'>证件类型 :</span>
                                <span>驾驶证</span>
                            </p>
                            <p>
                                <span className='name'>驾照编号 :</span>
                                <span>{obj && obj.number}</span>
                            </p>
                            <p>
                                <span className='name'>邮编 :</span>
                                <span>200000</span>
                            </p>
                            <p>
                                <span className='name'>所在城市 :</span>
                                <span>上海</span>
                            </p>
                            <p>
                                <span className='name'>固定电话 :</span>
                                <span>{obj && obj.tel}</span>
                            </p>
                            <p>
                                <span className='name'>手机号 :</span>
                                <span>{obj && obj.phone}</span>
                            </p>
                        </div>

                        <div className='right-area'>

                            <p>
                                <span className='name'>用户属性 :</span>
                                <span>会员</span>
                            </p>
                            <p>
                                <span className='name'>身份证 :</span>
                                <span>{obj && obj.card}</span>
                            </p>
                            <p>
                                <span className='name'>车牌号 :</span>
                                <span>{obj && obj.car}</span>
                            </p>
                            <p>
                                <span className='name'>E-mail :</span>
                                <span>{obj && obj.email}</span>
                            </p>
                            <p>
                                <span className='name'>联系地址 :</span>
                                <span>{obj && obj.address}</span>
                            </p>
                        </div>
                    </section>

                </main>

                <div style={{ display: 'flex', justifyContent: 'center', adivgnItems: 'center', marginTop: '0.2rem' }}>
                    <Button style={{
                        height: '0.44rem', width: '1.3rem', display: 'flex',
                        color: 'white', borderRadius: '0.05rem',
                        justifyContent: 'center', alignItems: 'center',
                        background: 'linear-gradient(#D8EAD7,#31912D)', border: '0.02rem solid #31912D',
                        fontSize: '0.16rem'
                    }}
                        onClick={() => { this.props.history.push('/') }}
                    >关闭</Button>
                </div>
            </div>
        )
    }
}