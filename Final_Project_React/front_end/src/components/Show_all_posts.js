import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';


export default function Show_all_posts({id, inner_air, ambulance_type, rate, contact, features, deletepost}){
	return (
		 <div align="center" className="usermain" style={{width: "500px"}}> 
			<h3 className="display-6">Ambulance Type: {ambulance_type}</h3>
			<p className="lead">
				Air System: {inner_air} <br/>
				Rate Per KIlometer: {rate} <br/>
				Driver Contact: {contact} <br/>
				Extra Features: {features} <br/>
			</p>			
			<button className="btn btn-primary" onClick={()=>deletepost(id)}>Delete This Ad</button>
		</div>
	)
};