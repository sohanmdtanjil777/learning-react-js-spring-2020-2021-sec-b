import {useState} from 'react';
//import {notes} from '../userNotes';
import {useParams} from 'react-router-dom';
import {Link} from  'react-router-dom';
//import './form.css';
//import css files



const Msps_dashboard = ()=> {


    return (
        <div>
         <div align="center">
            <h1>DashBoard</h1>
            <h3>Post Advertisement:</h3><Link to='/ad_form'><h3>Click Here</h3></Link>
            <h3>Show Rent Info:</h3><Link to='/rent_info'><h3>Click Here</h3></Link>
            <h3>Front Page</h3><Link to='/'><h3>Go Back To front page</h3></Link>
            
         </div>
        </div>
    );
}

export default Msps_dashboard;