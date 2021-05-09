import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Complaint = () => {

	const [input, setInput] = useState({

		complaint_name: '',
		complaint_details: '',		
		complaint_by: '',
		
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
			
			complaint_name: input.complaint_name,
			complaint_details: input.complaint_details,		
			complaint_by: input.complaint_by,

		}
		axios.post("http://localhost:8000/api/complaints", newBlog)
		.then((res) => console.log(res.data))
		.catch((err) => console.log(err));
		setInput({
			
			complaint_name: '',
			complaint_details: '',		
			complaint_by: '',
		});

		alert("Complaint Added Successfully");

	}



	return (
		<div>
			

			<form className="my_input_form">
                    
                    <div className="form-group my_input_form-input">
                        <input value={input.complaint_name} onChange={handleOnchangeBlog} autoComplete="off" name="complaint_name" type="text" className="form-control" placeholder="Title" />
                    </div>
                    <div className="form-group my_input_form-input">
                        <input value={input.complaint_by} onChange={handleOnchangeBlog} autoComplete="off" name="complaint_by" type="number" className="form-control" placeholder="doctor id" />
                    </div>
                    <div className="form-group my_input_form-input">
                        <textarea value={input.complaint_details} onChange={handleOnchangeBlog} autoComplete="off" name="complaint_details" className="form-control" rows="3" placeholder="complaint_details"></textarea>
                    </div>
                    



                    <button onClick={handleClickSubmit} type="submit" className=" my_input_form-btn">Complain</button>
                </form>



		</div>
		)
}

export default Complaint;