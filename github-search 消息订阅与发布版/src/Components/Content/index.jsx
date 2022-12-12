import React, { Component } from 'react'
import './index.css'
import PubSub from 'pubsub-js'
export default class List extends Component {
    state={data:[],isFirst:true,isLoading:false}
    componentDidMount(){
        PubSub.subscribe('Res',(msg,data)=>{
            this.setState(data)
        })
        PubSub.subscribe('searchRes',(msg,data)=>{
            this.setState({isLoading:false})
            this.setState({data});
        })
    }
    render() {
        const { data,isFirst,isLoading } = this.state
        
        return (
            <div className="row">
                <div className="content">
                    <ul>
                        {
                            isFirst?<h2>欢迎使用搜索,输入内容进行搜索</h2>:
                            isLoading?<h2>正在加载中......</h2>:
                            data.map(e => {
                                return <a href={e.html_url} key={e.id}>
                                    <li >
                                        <img src={e.avatar_url} alt="" />
                                        <span>{e.login}</span>
                                    </li>
                                </a>
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}
