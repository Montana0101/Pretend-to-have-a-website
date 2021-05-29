import React from 'react'
import { Link, Route, withRouter } from 'react-router-dom'
import { Button, Divider, Table, Space } from 'antd'

// import './index.less'

const columns = [
    {
        title: '客户名称',
        dataIndex: 'customer',
        key: 'customer',
        align: 'center'
    },
    {
        title: '停车位',
        dataIndex: 'name',
        key: 'name',
        align: 'center'
    },
    {
        title: '出租时间',
        dataIndex: 'address',
        key: 'address',
        align: 'center'
    },
    {
        title: '出租(元/月)',
        key: 'distance',
        dataIndex: 'distance',
        align: 'center'
    },
    {
        title: '租用状态',
        key: 'price',
        align: 'center',
        dataIndex: 'price',
    },
    {
        title: '审核状态',
        key: 'status',
        align: 'center',
        dataIndex: 'status',
    },
    {
        title: '操作',
        key: 'action',
        align: 'center',
        render: (text, record) => (
            <Space size="middle" key={text.index}>
                <Link to={{ pathname: '/rent/detail', query: { data: text } }} style={{ color: '#31912D' }}>查看</Link>
            </Space>
        ),
    },
];

export default class Rent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [
                {
                    index: '1',
                    name: 'BB2132',
                    distance: 700,
                    address: '工作日 09:00 ~ 22:00',
                    price: '已租用',
                    status: '审核通过',
                    customer: '倪清水'
                },
                {
                    index: '2',
                    name: 'BC7277',
                    distance: 600,
                    address: '工作日 09:00 ~ 22:00',
                    price: '已租用',
                    status: '审核通过',
                    customer: '倪清水'
                },
                {
                    index: '3',
                    name: 'FA1452',
                    distance: 600,
                    address: '工作日 09:00 ~ 22:00',
                    price: '已锁定',
                    status: '审核通过',
                    customer: '倪清水'
                },
                {
                    index: '4',
                    name: 'FF2132',
                    distance: 600,
                    address: '工作日 09:00 ~ 22:00',
                    price: '已锁定',
                    status: '审核通过',
                    customer: '倪清水'
                },
                {
                    index: '5',
                    name: 'AA8729',
                    distance: 600,
                    address: '工作日 09:00 ~ 22:00',
                    price: '已锁定',
                    status: '待审核',
                    customer: '倪清水'
                },
                {
                    index: '6',
                    name: 'AK2802',
                    distance: 600,
                    address: '工作日 09:00 ~ 22:00',
                    price: '已锁定',
                    status: '待审核',
                    customer: '倪清水'
                },
                {
                    index: '7',
                    name: 'CA8272',
                    distance: 600,
                    address: '工作日 09:00 ~ 22:00',
                    price: '已锁定',
                    status: '待审核',
                    customer: '倪清水'
                },
                {
                    index: '8',
                    name: 'CA2122',
                    distance: 600,
                    address: '工作日 09:00 ~ 22:00',
                    price: '已锁定',
                    status: '审核通过',
                    customer: '倪清水'
                },
                {
                    index: '9',
                    name: 'CA1222',
                    distance: 600,
                    address: '工作日 09:00 ~ 22:00',
                    price: '已锁定',
                    status: '审核通过',
                    customer: '倪清水'
                },
                {
                    index: '10',
                    name: 'BF2111',
                    distance: 600,
                    address: '工作日 09:00 ~ 22:00',
                    price: '已锁定',
                    status: '审核通过',
                    customer: '倪清水'
                },
                {
                    index: '11',
                    name: 'CX1222',
                    distance: 600,
                    address: '工作日 09:00 ~ 22:00',
                    price: '已锁定',
                    status: '审核通过',
                    customer: '倪清水'
                },
            ]
        }
    }
    componentDidMount() {
        const parkinfo = JSON.parse(localStorage.getItem('parkinfo'))
        console.log('打印下',parkinfo)
        const user = JSON.parse(localStorage.getItem('user'))
        
        let _arr = JSON.parse(JSON.stringify(this.state.data))
       _arr.map(item=>{
             item.customer = user.realname
        })
        this.setState({
            data:_arr
        },()=>{
            
        if (parkinfo && parkinfo.stallname) {
            console.log('大数据', parkinfo)
            let _data = JSON.parse(JSON.stringify(this.state.data))
            _data.unshift({
                index: '12',
                name: parkinfo.stallname,
                distance: 600,
                address: '工作日 09:00 ~ 22:00',
                price: '已锁定',
                status: '审核通过',
                customer: user.realname
            })
            this.setState({
                data:_data
            })
        }
        })
        console.log('打印下',_arr)

    }
    render() {
        const { data } = this.state
        return (
            <div className='layout-month'>
                <header> <Link to='/' style={{ color: 'black' }}>首页</Link>&nbsp;&nbsp; &gt; &nbsp; 出租车位</header>
                <main>
                    <h1>出租车位信息</h1>
                    <Divider dashed style={{ borderWidth: '0.02rem' }} />
                    {/* <img src={require('/src/static/home/car.jpg')} style={{width:"3rem"}}/> */}
                    <p style={{ display: 'flex', justifyContent: 'flex-end', width: '100%' }}>
                        <Button style={{
                            height: '0.44rem', width: '1.3rem', display: 'flex',
                            color: 'white', borderRadius: '0.05rem',
                            justifyContent: 'center', alignItems: 'center',
                            background: 'linear-gradient(#D8EAD7,#31912D)', border: '0.02rem solid #31912D',
                            fontSize: '0.16rem'
                        }}
                            onClick={() => { this.props.history.push('/rent/publish') }}
                        >发布车位</Button>
                    </p>
                    <Table columns={columns} dataSource={data} rowKey={row => row.index} style={{ width: '100%' }} />
                </main>
            </div>
        )
    }
}