import React from "react" ;
import {useState} from 'react'; 
import ReactDOM from 'react-dom';
import './index.css';
import './rent_info.css';
import {All_posts} from './All_posts';
//import Navbar from './components/Navbar';
import Show_all_posts from './components/Show_all_posts';
import Show_all_rent_info from './components/Show_all_rent_info' ;
import Front_page from './components/Front_page';
import Msps_register from './components/Msps_register';
import Msps_dashboard from './components/Msps_dashboard';
import Post_ad  from  './components/Post_ad';
import Login from './components/login' ;
import {useFetch} from './components/useFetch';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


const url = "http://localhost:8000/api/get_rent_info";


function Msps(){
	
	const rental_info = useFetch(url);
	//console.log(notes);
	
	const [ad_list, setNewPost] = useState(All_posts);

    //console.log(note_list);

	
	const addAmbPost= (input)=>{
		setNewPost([...ad_list, input]);
	}

	
	const deletepost = (id)=>{

		setNewPost(ad_list.filter((ads)=>ads.id !=id));
	}

	

	return (
	
		<Router>	
				
			<Switch>
			
				<Route exact path='/'>
					<Front_page />
				</Route>




				<Route path='/msps_register'>
				<div align="center">

				<h1>Register For Free</h1>
				<Msps_register/>

				</div>
					
				</Route>


				<Route path='/msps_login'>
				<div align="center">

				<h1>Sign IN</h1>
				<Login/>

				</div>
					
				</Route>





				<Route path='/msps_dash_board'>

                <div align="center">

				<Msps_dashboard/>

				 </div>

                </Route>




                <Route path='/ad_form'>

                <div align="center">

                <h2>Post Ad for Ambulance Service</h2>

                  <Post_ad addAmbPost={addAmbPost} />

                  </div>

                </Route>





			<Route path='/ad_lists'>

				<div align="center">

				  <h2 className="display-4">All Posted ads</h2>

				    <>
						{
		                    ad_list.map((advertisement, index)=>{
		                      return <Show_all_posts key={index} {...advertisement} deletepost={deletepost} />;
		                    })
		                }
					</>


					</div>
					
				</Route>


				<Route path='/rent_info'>

				<div align="center">

				  <h2 className="display-4">All Rental Info</h2>

				    <>
						{
		                    rental_info.map((rentInfo, index)=>{
		                      return <Show_all_rent_info key={index} {...rentInfo} />;
		                    })
		                }
					</>


					</div>
					
				</Route>



				<Route path='*'> <h1>404 not found</h1></Route>
			</Switch>


			<div className="App">
      
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/patient/registration">
          <Registration />
        </Route>
        <Route path="/patient/doctors">
          <ProtectedComponent Component={ Doctors } />
        </Route>
        <Route path="/patient/appointments">
          <ProtectedComponent Component={ Appointments } />
        </Route>
        <Route path="/patient/appointment/:id">
          <ProtectedComponent Component={ TakeAppointment } />
        </Route>
      
    </div>



    <AppRouter />
			
		</Router>
	);
}

ReactDOM.render( <Msps/>, document.getElementById('root'))