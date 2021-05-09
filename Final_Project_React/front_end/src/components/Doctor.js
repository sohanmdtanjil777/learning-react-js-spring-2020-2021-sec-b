import React from 'react'
import { Link } from 'react-router-dom';

const Doctor = ({ doctor }) => {
    return (
  
        <tr>
            <td>{doctor.name}</td>
            <td>{doctor.category}</td>
            <td>{doctor.degree}</td>
            <td> <Link to={`/patient/appointment/${doctor.id}`}> <button> Take Appointment</button></Link></td>
        </tr>
      
    )
}

export default Doctor
