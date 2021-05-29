import React , {useEffect} from 'react'
import ReactDOM from 'react-dom'
import { BaseRouter } from '/src/route/index'
import 'babel-polyfill'
import 'url-search-params-polyfill'
import '/src/utils/reset.css'
import '/src/utils/rem.js'
// import 'babel-polyfill'
import 'antd/dist/antd.css'

const Main = () => {
    return (
        <BaseRouter >
        </BaseRouter>
    )
}

const root = document.getElementById('root')
ReactDOM.render(<Main />, root)