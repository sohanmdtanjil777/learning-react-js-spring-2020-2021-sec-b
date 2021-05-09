import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Register = () => {

	const [input, setInput] = useState({

			user_name: '',
			first_name: '',
			last_name: '',
			email: '',
			password: '',
			dob: '',
			gender: '',
			blood_type: '',
			nid: '',
			contact: '',
			about: '',
			category: '',
			degree: '',
			bmdc_id:'',
			visit_fee:'',

		
	})




	const handleOnchangeBlog = (event) => {
        const { name, value } = event.target;
        setInput(prevInput => {
            return {
                ...prevInput,
                [name]: value
            }
        })

    }





	const handleClickSubmit = (event) => {
		event.preventDefault();
		const newBlog = {
			
			user_name: input.user_name,
			
			first_name: input.first_name,
			last_name: input.last_name,
			email: input.email,
			password: input.password,
			dob: input.dob,
			gender: input.gender,
			blood_type: input.blood_type,
			nid: input.nid,
			contact: input.contact,
			about: input.about,
			category: input.category,
			degree: input.degree,
			bmdc_id: input.bmdc_id,
			visit_fee: input.visit_fee,


		}
		axios.post("http://localhost:8000/api/doctors", newBlog)
		.then((res) => console.log(res.data))
		.catch((err) => console.log(err));
		setInput({
			
			user_name: '',
			first_name: '',
			last_name: '',
			email: '',
			password: '',
			dob: '',
			gender: '',
			blood_type: '',
			nid: '',
			contact: '',
			about: '',
			category: '',
			degree: '',
			bmdc_id:'',
			visit_fee:'',


		});

		alert("User Added Successfully");

	}



	return (
		<div className="container">


			<div className="d-flex justify-content-center p-5">
				<h4>
					Register
				</h4>
			</div>
			

			<form className="my_input_form">
                    
                    <div className="form-group my_input_form-input">
                        <input value={input.user_name} onChange={handleOnchangeBlog} autoComplete="off" name="user_name" type="text" className="form-control" placeholder="user name" />
                    </div>

                    <div className="form-group my_input_form-input">
                        <input value={input.first_name} onChange={handleOnchangeBlog} autoComplete="off" name="first_name" type="text" className="form-control" placeholder="first name" />
                    </div>

                    <div className="form-group my_input_form-input">
                        <input value={input.last_name} onChange={handleOnchangeBlog} autoComplete="off" name="last_name" type="text" className="form-control" placeholder="last name" />
                    </div>

                    <div className="form-group my_input_form-input">
                        <input value={input.email} onChange={handleOnchangeBlog} autoComplete="off" name="email" type="email" className="form-control" placeholder="email" />
                    </div>

                    <div className="form-group my_input_form-input">
                        <input value={input.password} onChange={handleOnchangeBlog} autoComplete="off" name="password" type="password" className="form-control" placeholder="password" />
                    </div>

                    <div className="form-group my_input_form-input">
                        <input value={input.dob} onChange={handleOnchangeBlog} autoComplete="off" name="dob" type="date" className="form-control" placeholder="dob" />
                    </div>

                    <div className="form-group my_input_form-input">
                        <input value={input.gender} onChange={handleOnchangeBlog} autoComplete="off" name="gender" type="text" className="form-control" placeholder="gender" />
                    </div>

                    <div className="form-group my_input_form-input">
                        <input value={input.blood_type} onChange={handleOnchangeBlog} autoComplete="off" name="blood_type" type="text" className="form-control" placeholder="blood type" />
                    </div>

                    <div className="form-group my_input_form-input">
                        <input value={input.nid} onChange={handleOnchangeBlog} autoComplete="off" name="nid" type="number" className="form-control" placeholder="nid" />
                    </div>

                    <div className="form-group my_input_form-input">
                        <input value={input.contact} onChange={handleOnchangeBlog} autoComplete="off" name="contact" type="number" className="form-control" placeholder="contact" />
                    </div>


                    
                    <div className="form-group my_input_form-input">
                        <textarea value={input.about} onChange={handleOnchangeBlog} autoComplete="off" name="about" className="form-control" rows="3" placeholder="about"></textarea>
                    </div>

                    <div className="form-group my_input_form-input">
                        <input value={input.category} onChange={handleOnchangeBlog} autoComplete="off" name="category" type="text" className="form-control" placeholder="category" />
                    </div>

                    <div className="form-group my_input_form-input">
                        <input value={input.degree} onChange={handleOnchangeBlog} autoComplete="off" name="degree" type="text" className="form-control" placeholder="degree" />
                    </div>

                    <div className="form-group my_input_form-input">
                        <input value={input.bmdc_id} onChange={handleOnchangeBlog} autoComplete="off" name="bmdc_id" type="number" className="form-control" placeholder="bmdc id" />
                    </div>

                    <div className="form-group my_input_form-input">
                        <input value={input.visit_fee} onChange={handleOnchangeBlog} autoComplete="off" name="visit_fee" type="number" className="form-control" placeholder="visit fee" />
                    </div>
                    



                    <button onClick={handleClickSubmit} type="submit" className=" my_input_form-btn">Register</button>
                </form>



		</div>
		)
}

export default Register;