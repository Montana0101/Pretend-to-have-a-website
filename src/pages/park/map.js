
import React from 'react'
import { Map, Marker, NavigationControl, InfoWindow } from 'react-bmap'

class MapCpt extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            lng: 0,
            lat: 0,
            points: []
        }
    }

    componentDidMount() {
        const url = 'http://api.map.baidu.com/place/v2/search?query=%E5%81%9C%E8%BD%A6%E5%9C%BA&tag=%E5%81%9C%E8%BD%A6%E5%9C%BA&region=%E4%B8%8A%E6%B5%B7&output=json&page_size=50&ak=zUGHiwO7ZFzU56xkNfsQmEt5njbvSTU9'
        // fetch('http://api.map.baidu.com/place/v2/search?query=%E5%81%9C%E8%BD%A6%E5%9C%BA&tag=%E5%81%9C%E8%BD%A6%E5%9C%BA&region=%E4%B8%8A%E6%B5%B7&output=json&page_size=20&ak=zUGHiwO7ZFzU56xkNfsQmEt5njbvSTU9',{
        //     method:'GET',
        //     mode:'cors'
        // })
        // .then(res=>res.json()).then(res=>{
        //     console.log('大三角的撒',res)
        // }).catch(err=>{
        //     console.log(err)
        // })
        const _this = this
        $.ajax({
            type: "get",
            async: false,
            url: url,
            dataType: "jsonp",
            jsonp: "callback",//传递给请求处理程序或页面的，用以获得jsonp回调函数名的参数名(一般默认为:callback)
            jsonpCallback: "flightHandler",//自定义的jsonp回调函数名称，默认为jQuery自动生成的随机函数名，也可以写"?"，jQuery会自动为你处理数据
            success: function (json) {
                console.log('的撒悲剧啊', json.results)
                _this.setState({
                    points: json.results
                })
            },
            error: function () {
                alert('fail');
            }
        });

        this.setState({
            lng: 121.480248, lat: 31.236276
        })
    }

    toFixedNum(num, s) {
        var times = Math.pow(10, s)
        var des = num * times + 0.5
        des = parseInt(des, 10) / times
        return des + ''
    }

    render() {
        const { lng, lat, points } = this.state
        return (
            <div style={{ height: '100%', width: '100%' }}>
                <Map center={{ lng, lat }} zoom="11" style={{ height: '100%' }}>
                    {
                        points.map((item, index) => {
                            const { lng, lat } = item.location
                            return <Marker position={{ lng, lat }} key={index}/>
                        })
                    }
                    {
                        points.map((item, index) => {
                            const { lng, lat } = item.location
                            return <InfoWindow position={{ lng, lat }} text="内容" title="标题" key={index}/>
                        })
                    }

                    {/* {points.map((item, index) => {
                        var icon = "red" + (index + 1);
                        return <Marker key={icon} icon={icon} position={{ lng: item.location.lng, lat: item.location.lat }} {...marker} />
                    })} */}

                </Map>
            </div>
        )
    }
}


export default MapCpt