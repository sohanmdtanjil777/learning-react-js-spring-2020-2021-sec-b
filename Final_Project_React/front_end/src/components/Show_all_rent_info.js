import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';


export default function Show_all_rent_info({rent_no, region, city, area, full_address, ambulance_no, driver_contact, payment_method, rent_order_status, total_paid_amount, created_at, updated_at}){
	return (
		 <div align="center" className="rinfo" style={{width: "500px"}}> 
			<h3 className="display-6">Ambulance NO: {ambulance_no}</h3>
			<p className="lead">
				Rent Number: {rent_no} <br/>
				Region: {region} <br/>
				City: {city} <br/>
				Area: {area} <br/>
				Address Details: {full_address} <br/>
				Ambulance No: {ambulance_no} <br/>
				Driver Contact No: {driver_contact} <br/>
				Payment_method: {payment_method} <br/>
				Order Status: {rent_order_status} <br/>
				Total Paid Amount: {total_paid_amount} <br/>
			</p>			
			<button className="btn btn-dark">Release</button>
		</div>
	)
};