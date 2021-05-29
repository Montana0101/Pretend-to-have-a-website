import React from 'react'
import { Cascader, Select, Row, Col, Button, Input, Table, Tag, Space } from 'antd'
import _iframe from '/src/assets/map.html'
// import MapCpt from './map'

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
        name: '大悦城购物中心-北座停车场',
        distance: 700,
        address: '上海市静安区西藏北路166号大悦城B2 ',
        price: 1000,
        free: 30
    },
    {
        index: 2,
        name: '上海烟草集团责任有限公司停车场',
        distance: 1020,
        address: '通北路800号',
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

export default class Park extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            address: '',
            model: 0 // 0地图 2列表
        }
    }

    componentDidMount() {
        window.addEventListener("beforeunload", () => {
            console.log('页面即将刷新')
            localStorage.removeItem('address')
        })

        // let ifm = document.getElementById('ifm').contentWindow;
        // let dom = ifm.document.querySelectorAll('a')
        // console.log('的撒那就看打赏',dom)
       
    }


    componentWillUnmount() {
        console.log('准备卸载拉')
        localStorage.removeItem('address')
    }
    render() {
        const { model } = this.state
        return (
            <div className='layout-park'>
                <header> <Link to='/' style={{ color: 'black' }}>首页</Link>&nbsp;&nbsp; &gt; &nbsp; 停车地图</header>

                <main>
                    <section>
                        <svg className="icon" aria-hidden="true">
                            <use xlinkHref="#icon-dingwei"></use>
                        </svg>
                        <span>搜索条件</span>
                    </section>

                    <Row style={{ margin: '0.2rem 0' }}>
                        <Col span={12}>
                            <Row style={{}} align="middle">
                                <Col span={3}>
                                    停车地图 :
                                </Col>
                                {/* <Col span={1} /> */}
                                <Col span={6}> <Select defaultValue="上海市" style={{ width: '100%' }}></Select></Col>
                                <Col span={1} />
                                <Col span={6}><Select defaultValue="市辖区" style={{ width: '100%' }}></Select></Col>
                                <Col span={1} />
                                <Col span={6}><Select defaultValue="所有区" style={{ width: '100%' }}>
                                    {shanghai.map(item => {
                                        return <Option value={item.Id} key={item.Id}>{item.DisName}</Option>
                                    })}
                                </Select></Col>
                            </Row>
                        </Col>

                        <Col span={1} />
                        <Col span={6}>
                            地址 ：<Input placeholder="" style={{ width: '80%' }} onChange={e => {
                                this.setState({
                                    address: e.target.value
                                })
                            }} />
                        </Col>

                        <Col span={1} />
                        <Col span={4}>
                            <Button onClick={() => {
                                localStorage.setItem('address', this.state.address)
                                this.setState({
                                    model: 1
                                }, () => {
                                    this.setState({
                                        model: 0
                                    })
                                })
                            }} style={{
                                width: '100%', background: '#78CD9D', border: "none", color: 'white', fontSize: '0.16rem',
                                display: 'flex', justifyContent: 'center', alignItems: 'center'
                            }}>
                                <svg className="icon" aria-hidden="true" style={{ margin: '0.02rem 0.1rem 0 0', fontSize: '0.2rem' }}>
                                    <use xlinkHref="#icon-sousuo"></use>
                                </svg>搜索</Button>
                        </Col>
                    </Row>

                    <p>
                        <span style={{ color: '#31912D', fontSize: '0.18rem', fontWeight: 'bold' }}>停车场位置 : </span>
                        <span style={{ fontSize: '0.18rem', color: 'rgba(0,0,0,0.5)' }}> </span>
                    </p>

                    <p>
                        <span style={{ color: '#31912D', fontSize: '0.18rem', fontWeight: 'bold' }}>附近 :</span>
                    </p>

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

                    {<section>
                        {model == 0 ? <iframe id="ifm" srcDoc={_iframe} style={{ width: '100%', height: '6rem' }}></iframe>
                            :
                            <Table columns={columns} dataSource={data} rowKey={row => row.index} />}
                    </section>}

                    {/* {<section>
                        {model == 0 ? <div style={{ width: '100%', height: '6rem' }}><MapCpt/></div>
                            :
                            <Table columns={columns} dataSource={data} rowKey={row => row.index} />}
                    </section>} */}
                </main>
            </div>
        )
    }
}