import "./App.css";
import { NavLink, Route, Switch } from "react-router-dom";
import New_Post from "./Components/New_Post";
import ALl_Post from "../src/Components/All_Post";
import { createContext, useState } from "react";

export  const search_word = createContext()
function App() {



  const [search , setsearch] = useState('')
	return (
		<>
			<div className="home_container">
				<div className="search">
					<input type="text" placeholder="search" value={search} onChange={(e) => setsearch(e.target.value)}></input>
				</div>
				<div className="button-container">
					<NavLink to="/createpost" activeClassName='is-active'>
						<button type="button" className="all_post_btn1" id="allpost_id">
							Post
						</button>
					</NavLink>
					<NavLink to="/allpost" activeClassName='is-active'>
						<button type="button" className="all_post_btn1">
							All post
						</button>
					</NavLink>
				</div>

				<div className="container">
          <search_word.Provider  value={search}>
					<Switch>
						<Route path="/createpost">
							<New_Post />
						</Route>

						<Route path="/allpost">
							<ALl_Post />
						</Route>
					</Switch>
          </search_word.Provider>
            
				</div>
			</div>
		</>
	);
}

export default App;
