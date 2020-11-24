import React, { useContext, useEffect, useState, useReducer } from "react";
import PostCard from "./PostCard";
import "./All_Post.css";
import axios from "axios";
import { cleanup } from "@testing-library/react";
import { search_word } from "../App";

function All_Post() {
	const [posts, setallposts] = useState([]);
	const search = useContext(search_word);

	// const reducer =  (state, action) => {
	// 	switch (action.type) {
	// 		case "GET_POST":
	// 			     return ([
	// 					 ...state,
	// 					 action.payload
	// 				 ],
	// 				 console.log('state',state))
	// 			break;

	// 		default: return state
	// 			break;
	// 	}
	// };
	const getposts = async () => {
		await axios
			.get("http://localhost:4000/allposts")
			.then((data) => setallposts(data.data))
			.then((err) => console.log(err));
	};
	// const get_posts = () => async (dispatch) => {
	// 	try {
	// 	  const res = await axios.get(`http://localhost:4000/allposts`);
	// 	  dispatch({
	// 		type: "GET_POST",
	// 		payload: res.data,
	// 	  });
	// 	} catch (error) {
	// 	  dispatch({
	// 		type: "ERROR",
	// 		payload: error,
	// 	  });
	// 	}
	//   };

	useEffect(() => {
		// dispatch(get_posts())
		getposts()
	}, []);

	const initialState = [];
	// const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<div className="all_post_container">
			{posts
				? posts
						.filter(
							(data) =>
								data.title.includes(search) || data.content.includes(search)
						)
						.map((data, index) =>
							data ? (
								<>
									<PostCard
										title={data.title}
										content={data.content}
										id={data._id}
									/>
								</>
							) : null
						)
				: posts.map((data, index) => (
						<>
							<PostCard
								title={data.title}
								content={data.content}
								id={data._id}
							/>
						</>
				  ))}
		</div>
	);
}

export default All_Post;
