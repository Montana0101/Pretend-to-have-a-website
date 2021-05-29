// 月租专区 - 租用车位

import React from 'react'
import { Cascader, Select, Row, Col, Button, Input, Table, Tag, Space, message } from 'antd'

const { Option } = Select

import './style.less'
import { Link } from 'react-router-dom'

const shanghai = [{
    "Id": 37,
    "DisName": "黄浦区",
    "CityID": 3,
    "DisSort": null
}, {
    "Id": 38,
    "DisName": "卢湾区",
    "CityID": 3,
    "DisSort": null
}, {
    "Id": 39,
    "DisName": "徐汇区",
    "CityID": 3,
    "DisSort": null
}, {
    "Id": 40,
    "DisName": "长宁区",
    "CityID": 3,
    "DisSort": null
}, {
    "Id": 41,
    "DisName": "静安区",
    "CityID": 3,
    "DisSort": null
}, {
    "Id": 42,
    "DisName": "普陀区",
    "CityID": 3,
    "DisSort": null
}, {
    "Id": 43,
    "DisName": "闸北区",
    "CityID": 3,
    "DisSort": null
}, {
    "Id": 44,
    "DisName": "虹口区",
    "CityID": 3,
    "DisSort": null
}, {
    "Id": 45,
    "DisName": "杨浦区",
    "CityID": 3,
    "DisSort": null
}, {
    "Id": 46,
    "DisName": "闵行区",
    "CityID": 3,
    "DisSort": null
}, {
    "Id": 47,
    "DisName": "宝山区",
    "CityID": 3,
    "DisSort": null
}, {
    "Id": 48,
    "DisName": "嘉定区",
    "CityID": 3,
    "DisSort": null
}, {
    "Id": 49,
    "DisName": "浦东新区",
    "CityID": 3,
    "DisSort": null
}, {
    "Id": 50,
    "DisName": "金山区",
    "CityID": 3,
    "DisSort": null
}, {
    "Id": 51,
    "DisName": "松江区",
    "CityID": 3,
    "DisSort": null
}, {
    "Id": 52,
    "DisName": "青浦区",
    "CityID": 3,
    "DisSort": null
}, {
    "Id": 53,
    "DisName": "南汇区",
    "CityID": 3,
    "DisSort": null
}, {
    "Id": 54,
    "DisName": "奉贤区",
    "CityID": 3,
    "DisSort": null
}, {
    "Id": 55,
    "DisName": "崇明县",
    "CityID": 3,
    "DisSort": null
}]

const columns = [
    {
        title: '序号',
        dataIndex: 'index',
        key: 'index',
        align: 'center'
    },
    {
        title: '停车场名称',
        dataIndex: 'name',
        key: 'name',
        align: 'center'
    },
    {
        title: '地址',
        dataIndex: 'address',
        key: 'address',
        align: 'center'
    },
    {
        title: '距离',
        key: 'distance',
        dataIndex: 'distance',
        align: 'center'
    },
    {
        title: '价格(元)',
        key: 'price',
        align: 'center',
        dataIndex: 'price',
    },
    {
        title: '空闲车位',
        key: 'free',
        align: 'center',
        dataIndex: 'free',
    },
    {
        title: '操作',
        key: 'action',
        align: 'center',
        render: (text, record) => (
            <Space size="middle" key={text.index}>
                <Link to={{ pathname: '/park/detail', query: { data: text } }} style={{ color: '#31912D' }}>查看</Link>
                {/* <span>{JSON.stringify(text)}</span> */}
            </Space>
        ),
    },
];


const data = [
    {
        index: '1',
        name: '上海中医药大学附属岳阳中西医结合医院-停车场',
        distance: 700,
        address: '上海市虹口区甘河路110号',
        price: 1000,
        free: 30
    },
    {
        index: 2,
        name: '虹口足球场-地上停车场',
        distance: 1020,
        address: '东江湾路444号',
        price: 900,
        free: 10
    },
    {
        index: 3,
        name: '虹口区图书馆-停车场',
        distance: 700,
        address: '水电路1412号虹口图书馆',
        price: 700,
        free: 80
    },
    {
        index: 4,
        name: '虹口SOHO-地下停车场',
        distance: 1200,
        address: '吴淞路与武进路交叉口西100米',
        price: 600,
        free: 3
    },
    {
        index: 5,
        name: '上海外滩茂悦大酒店-停车场',
        distance: 800,
        address: '虹口区黄浦路99号',
        price: 1200,
        free: 20
    },
    {
        index: 6,
        name: '上海市中西医结合医院-停车场',
        distance: 500,
        address: '上海市虹口区保定路230号6楼附近',
        price: 600,
        free: 10
    },
    {
        index: 7,
        name: '上海建工医院-停车场',
        distance: 380,
        address: '中山北二路2199号',
        price: 1200,
        free: 10
    },
    {
        index: 8,
        name: '上海莫水停车场',
        distance: 720,
        address: '中山北二路2199号',
        price: 1200,
        free: 15
    },
    {
        index: 9,
        name: '上海粤海酒店-停车场',
        distance: 280,
        address: '上海市虹口区逸仙路328号',
        price: 800,
        free: 12
    },
    {
        index: 10,
        name: '柏树大厦-停车场',
        distance: 1300,
        address: '中山北二路2199号',
        price: 800,
        free: 42
    },
    {
        index: 11,
        name: '上海吴水停车场',
        distance: 380,
        address: '中山北二路2199号',
        price: 1500,
        free: 30
    },
];

export default class MonthRent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            address: '',
            model: 0 // 0地图 2列表
        }
    }
    render() {
        const { model } = this.state
        return (
            <div className='layout-park'>
                <header> <Link to='/' style={{ color: 'black' }}>首页</Link>&nbsp;&nbsp; &gt; &nbsp; <Link to='/month' style={{ color: 'black' }}>月租专区</Link>&nbsp;&nbsp; &gt; &nbsp; 搜索车位</header>

                <main>
                    <section>
                        <svg className="icon" aria-hidden="true">
                            <use xlinkHref="#icon-dingwei"></use>
                        </svg>
                        <span>搜索条件</span>
                    </section>

                    <Row style={{ margin: '0.2rem 0' }}>
                        <Col span={8}>
                            <Row style={{}} align="middle">
                                <Col span={5}>
                                    行政区域 :
                                </Col>

                                <Col span={18}><Select defaultValue="请选择" style={{ width: '100%' }}>
                                    {shanghai.map(item => {
                                        return <Option value={item.Id} key={item.Id}>{item.DisName}</Option>
                                    })}
                                </Select></Col>
                            </Row>
                        </Col>

                        <Col span={1} />
                        <Col span={8}>
                            地址 ：<Input
                                placeholder={`请输入搜索地址`}
                                style={{ width: '80%' }}
                                onChange={e => {
                                    this.setState({
                                        address: e.target.value
                                    })
                                }}
                            />
                        </Col>

                        <Col span={1} />
                        <Col span={4}>
                            <Button onClick={() => {
                                let _obj = JSON.parse(localStorage.getItem('parkinfo'))
                                if (_obj) {
                                    _obj.parkname = this.state.address
                                    localStorage.setItem('parkinfo', JSON.stringify(_obj))
                                }
                                this.setState({
                                    model: 1
                                }, () => {
                                    this.setState({
                                        model: 0
                                    })
                                })
                            }}
                                style={{
                                    width: '100%', background: '#78CD9D', border: "none", color: 'white', fontSize: '0.16rem',
                                    display: 'flex', justifyContent: 'center', alignItems: 'center'
                                }}>
                                <svg className="icon" aria-hidden="true" style={{ margin: '0.02rem 0.1rem 0 0', fontSize: '0.2rem' }}>
                                    <use xlinkHref="#icon-sousuo"></use>
                                </svg>搜索</Button>
                        </Col>
                    </Row>

                    <Row style={{ margin: '0.2rem 0' }}>
                        <Col span={8}>
                            <Row style={{}} align="middle">
                                <Col span={5}>
                                    租用费用 ：
                                </Col>

                                <Col span={18}>
                                    <Input placeholder="" style={{ width: '40%' }} />
                                      &nbsp;&nbsp;—&nbsp;&nbsp;
                                     <Input placeholder="" style={{ width: '40%' }} /> &nbsp;元
                                </Col>
                            </Row>
                        </Col>

                        <Col span={1} />
                        <Col span={8}>
                            范围小于 ：<Input placeholder="" style={{ width: '70%' }} /> &nbsp;米
                        </Col>

                        <Col span={1} />
                    </Row>

                    <p>
                        <Button style={{
                            background: model == 0 ? '#31912D' : 'rgba(0,0,0,0.3)',
                            color: 'white', height: '0.5rem', width: '1rem', borderTopRightRadius: '0.07rem',
                            borderTopLeftRadius: '0.07rem'
                        }}
                            onClick={() => {
                                this.setState({
                                    model: 0
                                })
                            }}
                        >地图模式</Button>
                        <Button style={{
                            background: model != 0 ? '#31912D' : 'rgba(0,0,0,0.3)',
                            color: 'white', height: '0.5rem', width: '1rem', borderTopRightRadius: '0.07rem',
                            borderTopLeftRadius: '0.07rem'
                        }}
                            onClick={() => {
                                this.setState({
                                    model: 1
                                })
                            }}>列表模式</Button>
                    </p>

                    <section>
                        {model == 0 ? <iframe srcDoc={require('/src/assets/search.html')} style={{ width: '100%', height: '8rem' }}></iframe>
                            :
                            <Table columns={columns} dataSource={data} rowKey={row => row.index} />}
                    </section>
                </main>
            </div>
        )
    }
}