import React from 'react';

export default class CategoryList extends React.Component{
	constructor(props){
		super(props);
		this.state = {'categories':[]}
	}
	componentDidMount(){
	    fetch("http://stream-restaurant-menu-svc.herokuapp.com/category")
	    .then(data=>data.json())
	    .then(resp=>{
	        this.setState({'categories':resp})
	    })
  	}
	render(){
		const { categories } = this.state;
		const { categoryClicked } = this.props;
		return (<div>
			<h2 className="align-left">Menu Categories</h2>
			<ul className="pull-left">
				{categories.map((category)=>(
					<li onClick={()=>{categoryClicked(category.short_name)}} 
						key={category.id}><span>{`${category.name}-(${category.short_name})`}</span></li>
					))}
			</ul>
			</div>)
	}
}