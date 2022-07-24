import "./App.css";
import Playlist from "../Playlist/Playlist";
import SearchBar from "../SearchBar/Searchbar";
import SearchResults from "../SearchResults/SearchResults";
import React, { useEffect, useState } from "react";
const App=(props)=> {
	const [searchResults, setSearchResults] = useState([
		{
			name: "Warukuchi",
			artist: "Da-iCe",
			album: "Tokyo Merry Go Round",
			id: 1,
		},
		{ name: "Warukuchi", artist: "Da-iCe", album: "Tokyo Go Round", id: 2 },
		{ name: "Warukuchi", artist: "Da-iCe", album: "Tokyo Merry  Round", id: 3 },
		{ name: "Warukuchi", artist: "Da-iCe", album: "Tokyo Merry Go", id: 4 }
	]);
	return (
		<div>
			<h1>
				Ja<span className="highlight">mmm</span>ing
			</h1>
			<div className="App">
				{/* <!-- Add a SearchBar component --> */}
				<SearchBar />
				<div className="App-playlist">
					{/* <!-- Add a SearchResults component -->
      <!-- Add a Playlist component --> */}
					<SearchResults searchResults={searchResults} />
					<Playlist />
				</div>
			</div>
		</div>
	);
}

export default App;
