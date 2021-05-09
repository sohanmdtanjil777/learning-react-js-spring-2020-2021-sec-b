import React, {useState, useEffect} from 'react';

const Home = (props) => {

	const [data, setData] = useState([])

	const apiGet = () =>{
		const apiUrl = 'http://localhost:8000/api/blogs';
		fetch(apiUrl)
		.then((response) => response.json())
		.then((json) => {
			setData(json);
		});
      
	}

	useEffect(()=>{
		apiGet()
	}, []);


	return (
		<div>

			{data.map(item => (
				
				<div key={item.blog_id} className="card p-2">
					
					<div>
						<h4>
							 
						{item.blog_name}	            	          		
						</h4>
					</div>
					<p className="small">
						posted on {item.created_at} 
					</p>
					<div>
						{item.blog_details}	            	          		
					</div>

				</div>

					))}
		</div>
)
}

export default Home;