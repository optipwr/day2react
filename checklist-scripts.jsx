var sportingGoods = [
	{
		name: "Football",
		price: "$49.99",
		stock: true
	},
	{
		name: "Baseball",
		price: "$9.99",
		stock: true
	},
	{
		name: "Basketball",
		price: "$29.99",
		stock: false
	}
]

var electronics = [
	{
		name: "iPod Touch",
		price: "$99.99",
		stock: true
	},
	{
		name: "iPhone 5",
		price: "$399.99",
		stock: false
	},
	{
		name: "Nexus 7",
		price: "$199.99",
		stock: true
	}
]

function Sport(props){
	return(
		<div className="each-sport">
			<div className="left">{props.name}</div>
			<div className="right">{props.price}</div>
		</div>
	)
}

function Electronics(props){
	return(
		<div className="each-elec">
			<div className="left">{props.name}</div>
			<div className="right">{props.price}</div>
		</div>
	)
}

function Wrapper(props){
   return(
        <div className="wrapper">
            <div className="searchBar">
               <input placeholder="Search..." />
            </div>
            <div className="productTable>">
				<div className="sportHeader">
					<div className="left">Name</div>
					<div className="right">Price</div>
				</div>            
            </div>
        

	        <div className="category">
	        	<div className="sporting-goods">
	        		{props.sport.map((sport, index) => {
	        			return <Sport key={index} name={sport.name} price={sport.price} />
	        		})}
	        	</div>
	        </div>

	        <div className="category">
	        	<div className="electronics">
	        		{props.elec.map((elec, index) => {
	        			return <Electronics key={index} name={elec.name} price={elec.price} />
	        		})}
	        	</div>
	        </div>
	    </div>

   )
}

ReactDOM.render(
   <Wrapper sport={sportingGoods} elec={electronics} />, 
   document.getElementById('container')
)