import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Divider, Button, Input, message } from 'antd'


const { TextArea } = Input;

import './stop.less'

const MonthStop = (props) => {
    const [data, setData] = useState({
        index: 10,
        name: '柏树大厦-停车场',
        distance: 1300,
        address: '中山北二路2199号',
        price: 800,
        free: 42
    })

    const [date,setDate] = useState('')
    const [start,setStart] = useState('')

    useEffect(()=>{
        console.log('props.location.query',props.location.state)
        if(props.location.state){
            setDate(props.location.state.date)
            setStart(props.location.state.start)
        }
    },[])

    const [inputVal, setInputVal] = useState('')
    const [textVal, setTextVal] = useState('')

    return (
        <div className='layout-month-stop'>
            <header> <Link to='/' style={{ color: 'black' }}>首页</Link>&nbsp;&nbsp; &gt; &nbsp; <Link to='/month' style={{ color: 'black' }}>月租专区</Link>&nbsp;&nbsp; &gt; &nbsp; 租用信息详情</header>
            <main>
                <h1>申请终止租用</h1>
                <Divider dashed style={{ borderWidth: '0.02rem' }} />

                <section>
                    <div className='left-area'>
                        <p>
                            <span className='name'>停车场名称 :</span>
                            <span>{data.name}</span>
                        </p>
                        <p>
                            <span className='name'>出租时间 :</span>
                            <span>9:00 - 22:00</span>
                        </p>
                        <p>
                            <span className='name'>租用停车车辆号牌 :</span>
                            <span>沪L3218</span>
                        </p>
                        <p>
                            <span className='name'>本次租用截止时间 :</span>
                            <span>{date}</span>
                        </p>
                    </div>

                    <div className='right-area'>

                        <p>
                            <span className='name'>停车位 :</span>
                            <span>CA3212</span>
                        </p>
                        <p>
                            <span className='name'>价格 :</span>
                            <span>700</span>
                        </p>
                        <p>
                            <span className='name'>起租时间 :</span>
                            <span>{start}</span>
                        </p>
                        <p>
                            <span className='name'>支付状态 :</span>
                            <span>已支付</span>
                        </p>
                    </div>
                </section>
                <p style={{
                    height: '0.6rem', display: 'flex',
                    alignItems: 'center',
                    width: '100%',
                    justifyContent: 'flex-start',
                    fontSize: "0.14rem",
                    paddingLeft: "0.3rem"
                }}>

                    <span>   <span style={{ color: 'red' }}>* </span> 必填项</span>
                </p>

                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    width: '100%',
                    justifyContent: 'flex-start',
                    fontSize: "0.14rem",
                    paddingLeft: "0.3rem"
                }}>
                    <span style={{
                        display: 'inline-block',
                        width: '2rem'
                    }}>   <span style={{ color: 'red' }}>*</span> 终止原因 :</span>
                    <TextArea autoSize={{ minRows: 5 }} style={{ flex: 4 }} showCount maxLength={100}
                        onChange={(e) => { setTextVal(e, e.target.value) }} />
                </div>

                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    width: '100%',
                    justifyContent: 'flex-start',
                    fontSize: "0.14rem",
                    paddingLeft: "0.3rem"
                }}>
                    <span style={{
                        display: 'inline-block',
                        width: '2rem'
                    }}>   <span style={{ color: 'red' }}>*</span> 申请停租日期 :</span>
                    <Input style={{ width: '2rem' }} onChange={e => setInputVal(e.target.value)} />
                </div>

                <div style={{ display: 'flex', justifyContent: 'center', width: '100%', marginTop: '0.3rem' }}>
                    <Button style={{
                        height: '0.44rem', width: '1.3rem', display: 'flex',
                        color: 'white', borderRadius: '0.05rem',
                        justifyContent: 'center', alignItems: 'center',
                        background: 'linear-gradient(#D8EAD7,#31912D)', border: '0.02rem solid #31912D',
                        fontSize: '0.16rem', marginRight: '0.3rem'
                    }}
                        onClick={() => {
                            if (textVal && inputVal) {
                                message.success('已提交待审核')
                            } else {
                                message.error('请输入必填项')
                            }
                        }}
                    >递交申请</Button>

                    <Button style={{
                        height: '0.44rem', width: '1.3rem', display: 'flex',
                        color: 'white', borderRadius: '0.05rem',
                        justifyContent: 'center', alignItems: 'center',
                        background: 'linear-gradient(#D8EAD7,#31912D)', border: '0.02rem solid #31912D',
                        fontSize: '0.16rem'
                    }}
                        onClick={() => { props.history.push('/month') }}
                    >返回</Button>
                </div>
            </main>
        </div>
    )
}

export default MonthStop