// var sportingGoods = [
// 	{
// 		name: "Football",
// 		price: "$49.99",
// 		stock: true
// 	},
// 	{
// 		name: "Baseball",
// 		price: "$9.99",
// 		stock: true
// 	},
// 	{
// 		name: "Basketball",
// 		price: "$29.99",
// 		stock: false
// 	}
// ]

// var electronics = [
// 	{
// 		name: "iPod Touch",
// 		price: "$99.99",
// 		stock: true
// 	},
// 	{
// 		name: "iPhone 5",
// 		price: "$399.99",
// 		stock: false
// 	},
// 	{
// 		name: "Nexus 7",
// 		price: "$199.99",
// 		stock: true
// 	}
// ]

// function Sport(props){
// 	return(
// 		<div className="each-sport">
// 			<div className="left">{props.name}</div>
// 			<div className="right">{props.price}</div>
// 		</div>
// 	)
// }

// function Electronics(props){
// 	return(
// 		<div className="each-elec">
// 			<div className="left">{props.name}</div>
// 			<div className="right">{props.price}</div>
// 		</div>
// 	)
// }

// function Wrapper(props){
//    return(
//         <div className="wrapper">
//             <div className="searchBar">
//                <input placeholder="Search..." />
//             </div>
//             <div className="productTable>">
// 				<div className="sportHeader">
// 					<div className="left">Name</div>
// 					<div className="right">Price</div>
// 				</div>            
//             </div>
        

// 	        <div className="category">
// 	        	<div className="sporting-goods">
// 	        		{props.sport.map((sport, index) => {
// 	        			return <Sport key={index} name={sport.name} price={sport.price} />
// 	        		})}
// 	        	</div>
// 	        </div>

// 	        <div className="category">
// 	        	<div className="electronics">
// 	        		{props.elec.map((elec, index) => {
// 	        			return <Electronics key={index} name={elec.name} price={elec.price} />
// 	        		})}
// 	        	</div>
// 	        </div>
// 	    </div>

//    )
// }

// ReactDOM.render(
//    <Wrapper sport={sportingGoods} elec={electronics} />, 
//    document.getElementById('container')
// )

var products = [
	{
		category: 'Sporting Goods',
		price: '$49.99',
		name: 'Football',
		inStock: true
	},
	{
		category: 'Sporting Goods',
		price: '$9.99',
		name: 'Baseball',
		inStock: true
	},
	{
		category: 'Sporting Goods',
		price: '$29.99',
		name: 'Basketball',
		inStock: false
	},
	{
		category: 'Electronics',
		price: '$99.99',
		name: 'iPod Touch',
		inStock: true
	},
	{
		category: 'Electronics',
		price: '$399.99',
		name: 'iPhone 5',
		inStock: false
	},
	{
		category: 'Electronics',
		price: '$199.99',
		name: 'Nexus 7',
		inStock: true
	}
]

function ProductCategoryRow(props){
	return(
		<tr>
			<td>{props.category}</td>
		</tr>
	)
}

function ProductRow(props){
	if(props.product.inStock === true){
		var productClass = "text-success";
	}
	else{
		var productClass = "text-danger";
	}
	return(
		<tr>
			<td className={productClass}>{props.product.name}</td>
			<td>{props.product.price}</td>
		</tr>
	)
}

function ProductTable(props){

	// Init a local var to hold all our rows
	var rows = [];
	// Init a local var to keep track of what category we are on
	var lastCategory = "";
	var key = 0;
	products.forEach(function(product, index){
		if(product.category !== lastCategory){
			// we need to add this to our rows Array
			rows.push(<ProductCategoryRow key={key} category={product.category} />)
			lastCategory = product.category;
			key++;
		}
		rows.push(<ProductRow key={key} product={product} />)
		key++;
	});



	return(
		<table>
			<thead>
				<tr>
					<th>Name</th>
					<th>Price</th>
				</tr>
			</thead>
			<tbody>
				{rows}
			</tbody>
		</table>
	)
}

function SearchBar(props){
	return(
		<form className="search-bar">
			<input type="text" placeholder="Search..." />
			<div>
				<input type="checkbox" />&nbsp;Only show products in stock
			</div>
		</form>
	)
}

function FilterableProductTable(props){
	return(
		<div className="filterable-product-table">
			<SearchBar />
			<ProductTable />
		</div>
	)
}

function Application(props){
	return(
		<FilterableProductTable />
	)
}



ReactDOM.render(
	<Application />,
	document.getElementById('container')
)