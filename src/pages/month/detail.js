import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Divider, Button } from 'antd'

import './detail.less'

const MonthDetail = (props) => {
    const [data, setData] = useState({
        index: 10,
        name: '柏树大厦-停车场',
        distance: 1300,
        address: '中山北二路2199号',
        price: 800,
        free: 42
    })
    // useEffect(() => {
    //     if(!props.location.query){
    //         props.history.push('month')
    //     }
    // }, [])


    return (
        <div className='layout-month-detail'>
            <header> <Link to='/' style={{ color: 'black' }}>首页</Link>&nbsp;&nbsp; &gt; &nbsp; <Link to='/month' style={{ color: 'black' }}>月租专区</Link>&nbsp;&nbsp; &gt; &nbsp; 租用信息详情</header>
            <main>
                <h1>租用信息详情</h1>
                <Divider dashed style={{ borderWidth: '0.02rem' }} />

                <section>
                    <div className='left-area'>
                        <p>
                            <span className='name'>停车场名称 :</span>
                            <span>{data.name}</span>
                        </p>
                        <p>
                            <span className='name'>物业名称 :</span>
                            <span>天虹物业有限公司</span>
                        </p>
                        <p>
                            <span className='name'>出租时间 :</span>
                            <span>9:00 - 22:00</span>
                        </p>
                    </div>

                    <div className='right-area'>

                        <p>
                            <span className='name'>地址 :</span>
                            <span>{data.address}</span>
                        </p>
                        <p>
                            <span className='name'>当前租期截止时间 :</span>
                            <span>2014/07/01</span>
                        </p>
                        <p>
                            <span className='name'>租用状态 :</span>
                            <span>已租用</span>
                        </p>

                    </div>
                </section>
                <p style={{ display: 'flex', justifyContent: 'center', width: '100%' ,marginTop:'0.3rem'}}>
                    <Button style={{
                        height: '0.44rem', width: '1.3rem', display: 'flex',
                        color: 'white', borderRadius: '0.05rem',
                        justifyContent: 'center', alignItems: 'center',
                        background: 'linear-gradient(#D8EAD7,#31912D)', border: '0.02rem solid #31912D',
                        fontSize: '0.16rem', marginRight: '0.3rem'
                    }}
                        onClick={() => { props.history.push('/month/stop') }}
                    >申请终止租用</Button>

                    <Button style={{
                        height: '0.44rem', width: '1.3rem', display: 'flex',
                        color: 'white', borderRadius: '0.05rem',
                        justifyContent: 'center', alignItems: 'center',
                        background: 'linear-gradient(#D8EAD7,#31912D)', border: '0.02rem solid #31912D',
                        fontSize: '0.16rem'
                    }}
                        onClick={() => { props.history.push('/month') }}
                    >返回</Button>
                </p>
            </main>
        </div>
    )
}

export default MonthDetail