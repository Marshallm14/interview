import React from 'react';

const DishList = ({ dishes, category})=>(<div>
	<h3 className="align-left">Items in Category:({category})</h3>
	<table>
		<thead>
		<tr><th>Name</th><th>Description</th></tr>
		</thead>
		<tbody>
		{ dishes.map((dish)=>(
				<tr key={dish.id}><td>{dish.name}</td><td>{dish.description}</td></tr>
			)) }
		</tbody>
	</table>
	</div>)

export default DishList;