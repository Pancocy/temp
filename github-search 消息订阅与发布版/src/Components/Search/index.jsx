import React, { Component } from 'react'
import './index.css'
import axios from 'axios'
import Pubsub from 'pubsub-js'
export default class Search extends Component { 
	searchUser=()=>{
		const {value} = this.myRef
		//点击搜索之后，发出请求之前要把，通知Content修改状态
		Pubsub.publish('Res',{isFirst:false,isLoading:true})
		axios.get(`https://api.github.com/search/users?q=${value}`).then((res)=>{
			//获取搜索结果后通知Content修改状态
			// this.props.getSearchResult(res.data.items)
			Pubsub.publish('searchRes',res.data.items)			
		})
	}
	render() {
		return (
			<section className="jumbotron">
				<h3 className="jumbotron-heading">搜索github用户:</h3>&nbsp;&nbsp;
				<br/>
				<div>
					<input type="text" placeholder="输入关键词点击搜索"  ref={(event)=>{this.myRef=event}}/>&nbsp;
					<button onClick={this.searchUser}>搜索</button>
				</div>
			</section>
		)
	}
}
