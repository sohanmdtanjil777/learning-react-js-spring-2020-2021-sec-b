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



const Msps_register = ()=> {


    const [input, setInput] = useState({

        full_name: '',
        user_name: '',
        email: '',        
        password: '',
        dob: '',
        gender: '',
        blood_type: '',
        nid: '',
        contact: '',
        user_type:'',
        
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





    const clickSubmit = (event) => {
        event.preventDefault();
        const newUser = {

            full_name: input.full_name,
            user_name: input.user_name,
            email: input.email,
                    
            password: input.password,
            dob: input.dob,
            gender: input.gender,
            blood_type: input.blood_type,
            nid: input.nid,
            contact: input.contact,
            user_type: 'msps',

            

        }

        console.log(newUser);


        //const url = "http://localhost:8000/api/insert_new_user";

         axios.post("http://localhost:8000/api/insert_new_user", newUser)
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err));

        //fetch('http://localhost:8000/api/insert_new_user', {


            //method : 'post' ,
            //body : newUser
        //}).then(function (response) {


            //return response.text();
        //}).then(function(text) {

            //console.log(text);
        //}).catch(function(error) {


            //console.log(error);
        //})


        setInput({
            
            full_name: '',
            user_name: '',
            email: '',
            //image: '',        
            password: '',
            dob: '',
            gender: '',
            blood_type: '',
            nid: '',
            contact: '',
            //user_type: '',
        });

    alert("Registration Successful");

    }




    return (
        <div>
         <div align="center" style={{width: "500px"}}>

  <form  onSubmit={clickSubmit}>

       
    <div className="col-md-12 col-sm-12">
        <label for="name">Name</label>
            <input value={input.full_name} onChange={handleOnchange}  type="text" className="form-control" id="fname" name="full_name"  placeholder="Full Name"/>

                                        
        </div>

        <div className="col-md-12 col-sm-12">
            <label for="User Name">User Name</label>
             <input value={input.user_name} onChange={handleOnchange}   type="text" className="form-control" id="user_name" name="user_name"  placeholder="User Name"/>
                


        </div>

        <div className="col-md-12 col-sm-12">
         <label for="email">Email</label>
            <input value={input.email} onChange={handleOnchange}  type="email" className="form-control" id="email" name="email" placeholder="Your Email"/>
                

        </div>


                <div className="col-md-12 col-sm-12">
                 <label for="date">Select Date</label>
                    <input value={input.dob} onChange={handleOnchange}  type="date" name="dob"  className="form-control"/>
                                        
                </div>

                    <div className="col-md-12 col-sm-12">

                    <label for="telephone">Phone Number</label>
                    <input value={input.contact} onChange={handleOnchange}  type="tel" className="form-control"  id="phone" name="contact"  placeholder="Phone"/>

                                        
                                        
                    </div>

                    <div className="col-md-12 col-sm-12">
                     <label for="User Name">National Id No.</label>
                     <input value={input.nid} onChange={handleOnchange}  type="text" className="form-control" id="nid" name="nid"  placeholder="Nid No:"/>
                                        
                    </div>


                    <div className="col-md-12 col-sm-12">
                    <label for="password">Password</label>
                        <input value={input.password} onChange={handleOnchange}  type="password" className="form-control" id="password" name="password" placeholder="Set Password"/>
                                        
                    </div>
                                   
                        <div className="col-md-12 col-sm-12">
                        <label for="confirm password">Confirm Your Password</label>
                        <input value={input.cpassword} onChange={handleOnchange}  type="password" className="form-control" id="cpassword" name="cpassword" placeholder="Confirm Your Password"/>
                                        
                    </div>


                                   
                <div className="col-md-12 col-sm-12">
                                         
                                        
                <label for="select">Select Gender</label>
                <select value={input.gender} onChange={handleOnchange}  name="gender" className="form-control">
                    <option value=""></option>

                    <option value="male" >Male</option>

                    <option value="female" >Female</option>

                    <option value="other" >Other</option>
                                             
                </select>

                                        
                </div>

        <div className="col-md-12 col-sm-12">

            <label  for="select">Blood Type</label>
        <select value={input.blood_type} onChange={handleOnchange}  name="blood_type" className="form-control">
         <option value=""></option>

        <option value="A+">A+</option>

        <option value="B+" >B+</option>

        <option value="AB+" >AB+</option>

        <option value="O+" >O+</option>
                                             
        </select>

                                        

        </div>
                                   

            
                                       

    <div style={{padding: "20px"}} className="form-group">

     <button  className="btn btn-primary" type="submit">Submit</button>
    </div>
  

</form>

  <div className="form-group">
   
   <h4>All Ready Have An Account??</h4><Link to='/msps_login'><h3>Login</h3></Link>
  </div>

  <div className="form-group">
   
   <h4>Go Back To Front Page</h4><Link to='/'><h4>Front Page</h4></Link>
  </div>
            
         </div>
        </div>

    );
}

export default Msps_register;