import React, {useState, useEffect} from 'react';

const Request = (props) => {

	const [data, setData] = useState([])

	const apiGet = () =>{
		const apiUrl = 'http://localhost:8000/api/applications';
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
				
				<div key={item.app_id} className="card p-2">
					
					<div>
						<h4>
							 
						{item.title}	            	          		
						</h4>
					</div>
					<p className="small">
						Requested on {item.created_at} by patient {item.patient_id} 
					</p>
					<div>
						{item.details}	            	          		
					</div>

				</div>

					))}
		</div>
)
}

export default Request;