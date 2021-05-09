import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Header from './Header';

const Registration = () => {

    

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [dob, setDob] = useState('');
    const [gender, setGender] = useState('');
    const [blood_type, setBlood_type] = useState('');
    const [phone, setPhone] = useState('');

    const history = useHistory();


    useEffect(
        () => {
            if(localStorage.getItem('userkey'))
            {
                history.push('/patient/doctors');
            }
        },[history]);

    const createUser = async () => {

        if(name === '' || email === '' || password === '' || confirmPassword === '' || dob === '' || gender === '' || blood_type === '' || phone ==='')
        {
            alert('Fields cannot be empty');
            return false;
        }
            
        if( password !== confirmPassword)
        {
            alert('Passwords do not match');
            return false;
        }
    
        const newUser = {name, email, password, confirmPassword, dob, gender, blood_type, phone};
        const result = await fetch('http://127.0.0.1:8000/api/patient/registration',{
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
              },
            body: JSON.stringify(newUser)
        });

        const user = await result.json();
        console.log(user);

        setName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setDob('');
        setGender('');
        setBlood_type('Select Blood Type');
        setPhone('');

        // localStorage.setItem('userkey', JSON.stringify(user));
        history.push('/login');

    }

    return (
        <>
            <Header />
            <div className="container">
                
                <h1>Patient Registration</h1>
                <div className='offset-sm-3'>
                    <br/><br/>
                    <div className="form-group row">
                        <label htmlFor="name" className="col-sm-2 col-form-label">Name</label>
                        <div className="col-sm-6">
                            <input type="text" className='form-control' id='name' name='name' value={ name } onChange={ e => setName(e.target.value) }/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-6">
                            <input type="text" className='form-control' id='email' name='email' value={ email } onChange={ e => setEmail(e.target.value) }/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="password" className="col-sm-2 col-form-label">Password</label>
                        <div className="col-sm-6">
                            <input type="password" className='form-control' id='password' name='password' value={ password } onChange={ e => setPassword(e.target.value) }/> 
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="confirmPassword" className="col-sm-2 col-form-label">Confirm Password</label>
                        <div className="col-sm-6">
                            <input type="password" className='form-control' id='confirmPassword' name='confirmPassword' value={ confirmPassword } onChange={ e => setConfirmPassword(e.target.value) }/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="dob" className="col-sm-2 col-form-label">Date of Birth</label>
                        <div className="col-sm-6">
                            <input type="date" className='form-control' id='dob' name='dob' value={ dob } onChange={ e => setDob(e.target.value) }/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Gender</label>
                        <div className="col-sm-6">
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="gender" id="inlineRadio1" value="Male" onChange={ e => setGender(e.target.value) }/>
                                <label className="form-check-label" htmlFor="inlineRadio1">Male</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="gender" id="inlineRadio2" value="Female" onChange={ e => setGender(e.target.value) } />
                                <label className="form-check-label" htmlFor="inlineRadio2">Female</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="gender" id="inlineRadio3" value="Other" onChange={ e => setGender(e.target.value) } />
                                <label className="form-check-label" htmlFor="inlineRadio3">Other</label>
                            </div>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Blood Type:</label>
                        <div className="col-sm-6">
                            <select className="custom-select" name="blood_type" onChange={ e => setBlood_type(e.target.value) }>
                                <option value='' >Select Blood Type</option>
                                <option value="A+" >A+</option>
                                <option value="A-" >A-</option>
                                <option value="B+" >B+</option>
                                <option value="B-" >B-</option>
                                <option value="AB+" >AB+</option>
                                <option value="AB-" >AB-</option>
                                <option value="O+">O+</option>
                                <option value="O-">O-</option>
                            </select> 
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="phone" className="col-sm-2 col-form-label">Phone</label>
                        <div className="col-sm-6">
                            <input type="text" className='form-control' id='phone' name='phone' value={ phone } onChange={ e => setPhone(e.target.value) }/> <br/>
                        </div>
                    </div>

                    <button className="btn btn-primary offset-sm-2" onClick={ createUser }>Register</button>

                </div>
            </div>
        </>
    )
}

export default Registration
