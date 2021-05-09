import Header from "./Header"
import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import Doctor from "./Doctor";

const Doctors = () => {

    const [doctors, setDoctors] = useState([]);

    useEffect( async () => {
        const result = await fetch('http://127.0.0.1:8000/api/patient/doctors');
        const data = await result.json();
        setDoctors(data);
    },[]);

    // useEffect(  () => { 
    //      fetchDoctors();
    //    }, [] );
    
    
    //   //fetch tasks
    //   const fetchDoctors = async () => {
    //     const response = await fetch('http://127.0.0.1:8000/api/patient/doctors');
    //     const data = await response.json();
        
    //     setDoctors(data);
    //     console.log(doctors);
    //   }

    return (
        <div>
            <Header /><br/><br/>
            <h1>Available Doctors</h1><br/><br/>
            <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Doctor Name</th>
                    <th>Doctor Category</th>
                    <th>Doctor Degree</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>

                {
                    doctors.map( ( doctor, index ) =>
                        // <tr key ={index}>
                        //     <td>{doctor.name}</td>
                        //     <td>{doctor.category}</td>
                        //     <td>{doctor.degree}</td>
                        //     <td><button>Take Appointment</button></td>
                        // </tr>
                        <Doctor key={ index } doctor = { doctor }/>

                     )
                }
                
            </tbody>
            </Table>
        </div>
    )
}

export default Doctors
