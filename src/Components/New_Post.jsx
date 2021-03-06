import React, { useEffect, useState } from "react";
import "./New_Post.css";
import axios from "axios";
import {Button} from '../stories/Button'
import {FiLoader} from 'react-icons/fi'

function New_Post() {
	const [data, setalldata] = useState({
		title: "",
		content: "",
	});
	const [loading, setloading] = useState(false);
	const postdatas = (e) => {
		const { name, value } = e.target;

			setalldata({
				...data,
				[name]: value,
			});
	};

	const postdata = (e) => {
		e.preventDefault();
		setloading(true);
		fetch("http://localhost:4000/createpost", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			mode: "cors",
			body: JSON.stringify({
				title: data.title,
				content: data.content,
			}),
		})
			.then((res) => res.json())
			.then((data) => {
				setloading(false);
			   console.log(data)
			  ;
			})
			.catch((err) => {
				setloading(false);
				console.log(err);
			});

	};

	return (
		<div>
			<div className="new_post_container">
				<form className="form" onSubmit={postdata}>
					<input
						type="text"
						className="input_title"
						placeholder="title"
						value={data.title}
						onChange={postdatas}
						name="title"
					></input>
					<textarea
						className="input_content"
						placeholder="Content"
						value={data.content}
						onChange={postdatas}
						name="content"
					></textarea>
					{/* <button className="btn-submit" type="submit">
						Publish
					</button> */}
					<Button label= { loading ? <FiLoader/> :'Publish'} className= 'storybook-button--small' type='submit'  ></Button>
				</form>
			</div>
		</div>
	);
}

export default New_Post;
