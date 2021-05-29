import React from 'react'
import { Link, Route, withRouter } from 'react-router-dom'
import './publish.less'
import { Button, Divider, Input, Radio, message } from 'antd'
const { TextArea } = Input;

export default class Publish extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {},
            user: {},
            address: '',
            parkname: '',
            property: "",
            stallname:"",
            isRead: false
        }
    }

    componentDidMount() {
        if (this.props.location.query) {
            this.setState({
                data: this.props.location.query.data
            })
        }
        const user = JSON.parse(localStorage.getItem('user'))
        this.setState({
            user: user
        })
    }

    render() {
        const { user, address, parkname, property, isRead,stallname } = this.state
        return (
            <div className='layout-rent-publish'>
                <header> <Link to='/' style={{ color: 'black' }}>首页</Link>&nbsp;&nbsp; &gt; &nbsp;
            <Link to='/rent' style={{ color: 'black' }}>出租车位</Link>&nbsp;&nbsp; &gt; &nbsp; 发布车位
            </header>
                <main>
                    <h1>发布车位详细信息</h1>
                    <Divider dashed style={{ borderWidth: '0.02rem' }} />
                    {/* <img src={require('/src/static/home/car.jpg')} style={{width:"3rem"}}/> */}
                    <ul>
                        <li>
                            <span>用户名 ：</span>
                            <span>{user && user.username}</span>
                        </li>
                        <li>
                            <span>姓名 ：</span>
                            <span>{user && user.realname}</span>
                        </li>
                        <li>
                            <span>手机号码 ：</span>
                            <span>15726389721</span>
                        </li>
                        <li>
                            <span>证件类型 ：</span>
                            <span>身份证</span>
                        </li>
                        <li>
                            <span>身份证 ：</span>
                            <span>320107198903223440</span>
                        </li>
                        <li>
                            <span>行政区域 ：</span>
                            <span>上海</span>
                        </li>
                        <li>
                            <span>地址 ：</span>
                            <span><Input placeholder='请输入地址' style={{ width: '3rem' }} onChange={e => {
                                this.setState({
                                    address: e.target.value
                                })
                            }} /><span className='red-dot'>*</span></span>
                        </li>
                        <li>
                            <span>停车场名称 ：</span>
                            <span><Input placeholder='请输入停车场名称' style={{ width: '3rem' }} onChange={e => {
                                this.setState({
                                    parkname: e.target.value
                                })
                            }} /><span className='red-dot'>*</span></span>
                        </li>
                        <li>
                            <span>车位编号 ：</span>
                            <span><Input placeholder='请输入车位编号' style={{ width: '3rem' }} onChange={e => {
                                this.setState({
                                    stallname: e.target.value
                                })
                            }} /><span className='red-dot'>*</span></span>
                        </li>
                        <li>
                            <span>物业名称 ：</span>
                            <span><Input placeholder='请输入物业名称' style={{ width: '3rem' }} onChange={e => {
                                this.setState({
                                    property: e.target.value
                                })
                            }} /><span className='red-dot'>*</span></span>
                        </li>
                        <li style={{ marginTop: '.5rem' }}>
                            <span>备注 ：</span>
                            <span >
                                <TextArea rows={3} style={{ width: '3rem' }} />
                            </span>
                        </li>

                        <li style={{ marginTop: '.5rem' }}>
                            <span> <Radio onChange={e => {
                                this.setState({
                                    isRead: true
                                })

                            }}>同意租用车位用户协议</Radio> <span className='red-dot' style={{ marginLeft: '-0.1rem' }}>*</span></span>
                            <span >
                                {/* <TextArea rows={3} style={{ width: '3rem' }} /> */}
                            </span>
                        </li>

                        <li style={{ display: 'flex', justifyContent: 'flex-start', height: '2rem' }}>
                            <TextArea rows={10} disabled='true' value='                                                                       停车位租赁协议书
                    　　出租方(以下简称甲方)：
                    　　承租方(以下简称乙方)：北斗导航
                    　　甲、乙双方经友好协商，本着互惠互利的原则，特制定以下租赁事项：
                    　　一、甲方车位：地下停车场内车位;
                    　　二、乙方车辆型号：
                    　　车辆型号车牌号码车主姓名车辆颜色备注
                    　　三、承租方式：
                    　　1、甲方将地下层号车位租予乙方使用。
                    　　2、双方同意租金为元/月(大写：)，甲方有权根据政府部门指导价或规定收费标准调整收费。
                    　　3、甲方提供金色家园智能卡壹张，供乙方停车与住宅智能系统出入使用，编号：，收取押金元/张(合同终止时凭证退回)，工本费元/张。
                    　　4、付费方式：乙方必须于每月25日前缴交下月租金，逾期则视作自动放弃继续租用该车位，管理处有权自动中止智能卡功能，禁止乙方车辆进入。
                    　　四、甲方权利与义务：
                    　　1、甲方有权依法循章对小区交通、车辆进行管理，并制定车场《车辆管理条例》。
                    　　2、甲方有权禁止任何高度超过2米的车辆，漏油、漏水车辆进入停车场。
                    　　3、甲方有权无需事前通知或警告，而将乙方违章车辆锁扣/拖走处理，所引致的费用及后果由乙方负责。
                    　　4、甲方应安排车场管理人员24小时值班及智能化监控管理。
                    　　5、甲方应负责停车场内消防设施、清洁卫生处于良好状态。
                    　　五、乙方权利与义务：
                    　　1、签订《租赁协议书》时，必须示金色家园智能卡及提供车主身份证明、车辆行驶证等复印件。
                    　　2、乙方必须购买车辆全部保险，同时将车辆锁好，贵重物品、车辆出入证切勿放置于车内。
                    　　否则造成车辆遗失(包括车内物品)及意外损坏，甲方不负任何赔偿责任。
                    　　3、乙方办理月租停车出入证后，该车辆享有者当月内不限次数出入停车场的权利。
                    　　4、乙方必须将车辆停放在指定的车位界线内，否则造成的一切责任与后果由乙方承担。
                    　　5、若乙方租用指定车位被其他车辆占用，乙方有权要求甲方协助撤离，甲方应尽量配合提供。
                    　　6、乙方必须遵照出入证的专车专用制度，禁止转借、交换、超期使用。
                    　　7、乙方不得利用车位作其它用途(如：装卸或堆积物件、维修车辆等)。
                    　　8、乙方应自觉爱护停车场公共设施与卫生。
                    　　9、乙方应自觉按时缴纳停车位租金。
                    　　六、本协议一式两份，双方各持一份，经签字后生效，未尽事宜，双方可另行商订。
                    　　出租方(甲方)：承租方(乙方)：
                    　　代表：住宅单元：
                    　　联系电话：联系电话：
                    　　签署日期：
                    　　车位租赁协议书
                    　　出租单位：(以下简称出租方)
                    　　承租单位：(以下简称承租方)
                    　　为了明确出租方和承租方的权力义务，并根据国家有关法律法规及双方所签定的管理公约等文件的规定，特订立本协议，以便双方共同遵照执行。
                    　　1、本协议中的车位是指商住楼停车场之车位，车位为：，本车位仅供承租方作停车使用，不得改作其它用途。
                    　　2、出租方经物业之发展商授权，向承租方提供停车场地的有偿使用服务，并实施对停车场地及配套设施、设备的统一管理。
                    　　3、承租方在相应的停车场地停放车辆的过程中，须接受上述出租方所实施的统一管理，并遵守双方所签署文件及出租方公示文件的相关规定。
                    　　4、承租方停放的车辆必须购买综合保险并做好防盗措施，如遇车辆遗失，由车主及时报案，保险公司负责理赔。
                    　　5、承租方须于每月1-5日交纳当月租金和服务费，逾期不交则被视为自动放弃，出租方保留将车位出租的权力。
                    　　6、若承租方所租之车位被业主购买时，承租方须无条件配合管理处做好调换车位的工作。
                    　　未经出租方许可，承租方不得将该车位转租或转借。
                    　　7、承租方所交纳的租金，系出租方代车位业主即发展商收取。
                    　　出租方统一收取的服务费，将用于场地和配套设施的维修保养开支。
                    　　8、不可抗力。
                    　　如遇不可抗力(经有关方面认定)而造成双方中任一方不能继续履行该协议的，该协议则自动解除。
                    　　9、在本协议规定的租赁期届满前15日内，双方如愿意延长租赁期，应重新签订协议。
                    　　10、租赁期间，协议双方的任何一方均不得擅自修改或随意废除协议。
                    　　本协议中如有未尽事宜，须经协议双方协商，作出补充规定，补充规定与本协议具有同等效力。
                    　　本协议正本一式两份，出租方和承租方各保留一份，自双方签字之日起生效。
                    　　出租方：(签章)承租方：(签章)
                    　　地址：地址：
                    　　代表人：代表人：
                    　　联系人：联系人：
                    　　电话：电话：
                    　　年月日
' style={{ width: '80%', display: 'flex', justifyContent: 'center' }}>
                            </TextArea>
                        </li>

                        <li style={{
                            display: 'flex', justifyContent: 'center',
                            alignItems: 'center', marginTop: '0.2rem', width: '80%'
                        }}>
                            <Button style={{
                                height: '0.44rem', width: '1.3rem', display: 'flex',
                                color: 'white', borderRadius: '0.05rem',
                                justifyContent: 'center', alignItems: 'center',
                                background: 'linear-gradient(#D8EAD7,#31912D)', border: '0.02rem solid #31912D',
                                fontSize: '0.16rem'
                            }}
                                onClick={() => {
                                    if (address && parkname && property) {
                                        if (isRead) {
                                            message.success('操作成功')
                                            this.props.history.push('/rent')
                                            let obj = {
                                                address:address,
                                                parkname:parkname,
                                                property:property,
                                                stallname:stallname
                                            }

                                            localStorage.setItem('parkinfo',JSON.stringify(obj))
                                        } else {
                                            message.warn('请确认协议内容')
                                        }
                                    } else {
                                        message.warn('请输入必填项')
                                    }
                                }}
                            >同意并提交</Button>
                        </li>
                    </ul>
                </main>
            </div>
        )
    }
}