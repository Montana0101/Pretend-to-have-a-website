import React from 'react'
import { Link } from 'react-router-dom'
import { Divider, Button } from 'antd'
import './index.less'

export default class Member extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            obj: {}
        }
    }

    componentDidMount() {
        let user = localStorage.getItem('user')
        if (!user) {
            console.log('没登陆')
        } else {
            user = JSON.parse(user)
            this.setState({
                flag: true,
                obj: user
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
                                <span></span>
                            </p>
                            <p>
                                <span className='name'>证件类型 :</span>
                                <span></span>
                            </p>
                            <p>
                                <span className='name'>驾照编号 :</span>
                                <span></span>
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
                                <span>021-57072136</span>
                            </p>
                            <p>
                                <span className='name'>手机号 :</span>
                                <span>15321235762</span>
                            </p>
                        </div>

                        <div className='right-area'>

                            <p>
                                <span className='name'>用户属性 :</span>
                                <span>会员</span>
                            </p>
                            <p>
                                <span className='name'>身份证 :</span>
                                <span></span>
                            </p>
                            <p>
                                <span className='name'>车牌号 :</span>
                                <span>沪E2142</span>
                            </p>
                            <p>
                                <span className='name'>E-mail :</span>
                                <span>302123@qq.com</span>
                            </p>
                            <p>
                                <span className='name'>联系地址 :</span>
                                <span></span>
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