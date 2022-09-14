import React from 'react';

import CategoryList from './CategoryList'
import DishList from './DishList'

export default class ChefMenu extends React.Component{
	constructor(props){
		super(props)
		this.state = {selected:null,dishes:[]}
	}
	categoryClicked = (category)=>{
		fetch(`http://stream-restaurant-menu-svc.herokuapp.com/item?category=${category}`)
	    .then(data=>data.json())
	    .then(resp=>{
	        this.setState({dishes:resp,selected:category})
	    })
	}
	render(){
		const { selected,dishes } = this.state;
		return (
			<div>
			<CategoryList categoryClicked={this.categoryClicked}/>
			{selected &&
				<DishList dishes={dishes} category={selected}/>
			}
			</div>
			)
	}
}