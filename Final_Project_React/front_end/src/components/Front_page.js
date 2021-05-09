import {useState} from 'react';
//import {notes} from '../userNotes';
import {useParams} from 'react-router-dom';
import {Link} from  'react-router-dom';
//import './form.css';
//import css files



const Front_page = ()=> {


    return (
        <div>
         <div align="center">
            <h1>Welcome To E-Health Care System!</h1>
            <h3>Doctor Subscription:</h3><Link to=''><h3>Click Here</h3></Link>
            <h3>Medical Service Provider Subscription:</h3><Link to='/msps_register'><h3>Click Here</h3></Link>
            <h3>DashBoard</h3><Link to='/msps_dash_board'><h3>Dash Board</h3></Link>
            <h2>All Ready Have An Account??</h2><Link to='/msps_login'><h3>Login</h3></Link>
         </div>
        </div>
    );
}

export default Front_page;