import React from 'react'
import Header from './Header'
// import { useParams } from 'react-router-dom';
import { useState } from 'react';

const TakeAppointment = () => {

    // const {id:eid}  = useParams();
    const [problem_details, setProblem_details] = useState('');

    const createAppointment = () => {

        // const patient = JSON.parse(localStorage.getItem('userkey'));

        // const newProblem = { problem_details, patient.id, eid };
        // const result = await fetch(`http://127.0.0.1:8000/api/patient/registration/${eid}`,{
        //     method: 'POST',
        //     headers: {
        //         'Content-type': 'application/json'
        //       },
        //     body: JSON.stringify(newProblem)
        // });

        // const user = await result.json();
        // console.log(user);

        // setName('');
        // setEmail('');
        // setPassword('');
        // setConfirmPassword('');
        // setDob('');
        // setGender('');
        // setBlood_type('Select Blood Type');
        // setPhone('');

        // // localStorage.setItem('userkey', JSON.stringify(user));
        // history.push('/login');
    }
    return (
        <>
        < Header/>
        <div className='container'>
            
            <h1>Take Appointment</h1><br/><br/>
           
            <div className="form-group row">
                <label htmlFor="problem_details" className="col-sm-2 col-form-label">Problem Details:</label>
                <div className="col-sm-6">
                    <textarea className="form-control" id="problem_details" rows="4" name='problem_details' value={ problem_details } onChange={ e => setProblem_details(e.target.value) }></textarea>
                </div>
            </div>
            <button className="btn btn-primary offset-sm-2" onClick={ createAppointment }>Post Problem</button>
            
        </div>
        </>
    )
}

export default TakeAppointment
