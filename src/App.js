import "./App.css";
import { NavLink, Route, Switch } from "react-router-dom";
import New_Post from "./Components/New_Post";
import All_Post from "../src/Components/All_Post";
import { createContext, useState } from "react";
import { ImCross } from "react-icons/im";
import { BsSearch } from "react-icons/bs";

export const search_word = createContext();
function App() {
	const [search, setsearch] = useState("");
	return (
		<>
			<div className="home_container">
				<div className="search_container">
					<BsSearch />
					<input
						type="text"
						placeholder="search"
						value={search}
						onChange={(e) => setsearch(e.target.value)}
						className="search"
					></input>
					{search ? <ImCross onClick={() => setsearch("")} /> : null}
				</div>
				<div className="button-container">
					<NavLink to="/" activeClassName="is-active">
						<button type="button" className="all_post_btn1" id="allpost_id">
							New Post
						</button>
					</NavLink>
					<NavLink to="/allpost" activeClassName="is-active">
						<button type="button" className="all_post_btn1">
							Published
						</button>
					</NavLink>
				</div>

				<div className="container">
					<search_word.Provider value={search}>
						<Switch>
							<Route exact path="/">
								<New_Post />
							</Route>

							<Route path="/allpost">
								<All_Post />
							</Route>
						</Switch>
					</search_word.Provider>
				</div>
			</div>
		</>
	);
}

export default App;
