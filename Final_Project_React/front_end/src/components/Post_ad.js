import React from "react" ;
//import {useState} from 'react';
import { useEffect, useState } from 'react';
//import {notes} from '../userNotes';
import {useParams} from 'react-router-dom';
import {Link} from  'react-router-dom';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
//import './form.css';
//import css files



const Post_ad = ({addAmbPost})=> {


    const [input, setInput] = useState({

        id: '',

        inner_air: '',
        ambulance_type: '',
        rate: '',        
        contact: '',
        features: '',
        
    })


    //const handleOnchange = (e)=>{
        //onst attar = e.target.name;
        //const value = e.target.value;
        //const nUser = {...input, [attar] : value}; 
        //setInput(nUser);
    //}




    const handleOnchange = (event) => {
        const { name, value } = event.target;
        setInput(prevInput => {
            return {
                ...prevInput,
                [name]: value
            }
        })

    }



    const clickSubmit=(e)=>{
        e.preventDefault();

        addAmbPost(input);

        setInput({

              id: '',
              inner_air: '',
              ambulance_type: '',
              rate: '',        
              contact: '',
              features: '',

        })
    }






    return (
        <div>
         <div align="center" style={{width: "500px"}}>

  <form onSubmit={clickSubmit}>

     <div className="col-md-12 col-sm-12">
        <label for="Id">Id </label>
        <input value={input.id} onChange={handleOnchange} type="text" className="form-control" id="contact" name="id"  placeholder="Contact No"/>
                
      </div>



                                   <div className="col-md-12 col-sm-12">
                                         
                                        
                                        <label for="select">Select Inner Air System:AC/Non AC</label>
                                <select value={input.inner_air} onChange={handleOnchange} name="inner_air" class="form-control">
                                             <option value=""></option>

                                             <option value="Ac">AC</option>

                                             <option value="Non Ac">Non AC</option>

                                             
                                        </select>

                                   </div>

                           <div className="col-md-12 col-sm-12">
                                         
                                        
                                        <label for="select">Select Ambulance Type</label>
                    <select value={input.ambulance_type} onChange={handleOnchange} name="ambulance_type" class="form-control">
                                   <option value=""></option>

                                  <option value="Collective Ambulance" >Collective Ambulance</option>

                                  <option value="Individual Ambulance" >Individual Ambulance</option>

                                  <option value="Icu Ambulance" >ICU Ambulance</option>

                                  <option value="Life Support Ambulance" >Life Support Ambulance</option>

                                   <option value="Mortuary Ambulance" >Mortuary Ambulance</option>

                                   <option value="Neonatal Ambulance" >Neonatal Ambulance</option>


                                   <option value="Air Ambulance" >Air Ambulance</option>
                                             
                                        </select>

                                
                        </div>





       
    <div className="col-md-12 col-sm-12">
        <label for="name">Rate Per Kilometer</label>
            <input value={input.rate} onChange={handleOnchange}  type="text" className="form-control" id="rate" name="rate"  placeholder="Rate Per Kilometer"/>

                                        
    </div>

    <div className="col-md-12 col-sm-12">
            <label for="Phone">Contact </label>
             <input value={input.contact} onChange={handleOnchange}   type="text" className="form-control" id="contact" name="contact"  placeholder="Contact No"/>
                


      </div>


    <div class="col-md-12 col-sm-12">
                                        
    <label for="Features">Ambulance Features</label>
      <textarea value={input.features} onChange={handleOnchange} className="form-control" rows="8" id="features" name="features" placeholder="Write All Features Of The Ambulance"></textarea>

    </div>

        

                                   
            
    <div style={{padding: "20px"}} className="form-group">

     <button  className="btn btn-primary" type="submit">Submit</button>
    </div>
  

</form>

   <div className="form-group">
   
   <h4>Show All Ads</h4><Link to='/ad_lists'><h3>Show Ads</h3></Link>
  </div>

  <div className="form-group">
   
   <h4>Go Back To DashBoard</h4><Link to='/msps_dash_board'><h3>DashBoard</h3></Link>
  </div>

  <div className="form-group">
   
   <h4>Go Back To Front Page</h4><Link to='/'><h4>Front Page</h4></Link>
  </div>
            
         </div>
        </div>

    );
}

export default Post_ad;