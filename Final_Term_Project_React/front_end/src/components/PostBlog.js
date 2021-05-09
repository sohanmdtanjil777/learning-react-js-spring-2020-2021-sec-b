import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PostBlog = () => {

	const [input, setInput] = useState({

		blog_name: '',
		blog_details: '',		
		doctor_id: '',
		
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
			
			blog_name: input.blog_name,
			blog_details: input.blog_details,
			doctor_id: input.doctor_id,

		}
		axios.post("http://localhost:8000/api/blogs", newBlog)
		.then((res) => console.log(res.data))
		.catch((err) => console.log(err));
		setInput({
			
			blog_name: '',
			blog_details: '',
			doctor_id: '',
		});

		alert("Blog Added Successfully");

	}



	return (
		<div>
			

			<form className="my_input_form">
                    
                    <div className="form-group my_input_form-input">
                        <input value={input.blog_name} onChange={handleOnchangeBlog} autoComplete="off" name="blog_name" type="text" className="form-control" placeholder="Title" />
                    </div>
                    <div className="form-group my_input_form-input">
                        <input value={input.doctor_id} onChange={handleOnchangeBlog} autoComplete="off" name="doctor_id" type="number" className="form-control" placeholder="doctor id" />
                    </div>
                    <div className="form-group my_input_form-input">
                        <textarea value={input.blog_details} onChange={handleOnchangeBlog} autoComplete="off" name="blog_details" className="form-control" rows="3" placeholder="blog_Details"></textarea>
                    </div>
                    



                    <button onClick={handleClickSubmit} type="submit" className=" my_input_form-btn">PUBLISH BLOG</button>
                </form>



		</div>
		)
}

export default PostBlog;