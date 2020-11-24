import React, { useContext, useEffect, useState } from "react";
import PostCard from "./PostCard";
import "./All_Post.css";
import axios from "axios";
import { cleanup } from "@testing-library/react";
import { search_word } from "../App";
function All_Post() {
	const [posts, setallposts] = useState([]);
	const search = useContext(search_word);

	const getposts = async () => {
		await axios
			.get("http://localhost:4000/allposts")
			.then((data) => setallposts(data.data))
			.then((err) => console.log(err));
	};
	useEffect(() => {
		getposts();
	}, []);

	return (
		<div className="all_post_container">
			{search
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
