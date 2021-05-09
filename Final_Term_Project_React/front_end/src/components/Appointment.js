import React, {useState, useEffect} from 'react';

const Appointment = (props) => {

	const [data, setData] = useState([])

	const apiGet = () =>{
		const apiUrl = 'http://localhost:8000/api/appointments';
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
				
				<div key={item.appointment_id} className="card p-2">
					
					<div>
						<h4>
							 
						{item.problem}	            	          		
						</h4>
					</div>
					<p className="small">
						Requested by patient {item.patient_id} 
					</p>
					<div>
					<div className="form-group my_input_form-input">
                        <textarea placeholder="Prescription"></textarea>
                    </div>            	          		
					</div>

					<button>submit</button>

				</div>

					))}
		</div>
)
}

export default Appointment;