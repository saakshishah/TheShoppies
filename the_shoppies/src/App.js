import React, { useState } from 'react';
import { useFetch } from './hooks';
import './App.css';

const App = () => {
	const [query, setQuery] = useState('');

  const url = query && `http://www.omdbapi.com/?s=${query}&apikey=3da302e6`;


	const { status, data, error } = useFetch(url);

	const handleSubmit = (e) => {
		e.preventDefault();

		const query = e.target.search.value;
		if (query) {
			setQuery(query);
			e.target.search.value = '';
		}
	};

	const movies = data.Search;

	return (
		<div className="App">
			<header> OMDB Search </header>
			<form className="Form" onSubmit={handleSubmit}>
				<input
					type="text"
					autoFocus
					autoComplete="off"
					name="search"
					placeholder="Movie Title"
				/>
				<button> Search </button>
			</form>
			<main>
				{status === 'idle' && (
					<div> Let's get started by searching for a movie! </div>
				)}
				{status === 'error' && <div>{error}</div>}
				{status === 'fetching' && <div className="loading"></div>}
				{status === 'fetched' && (
					<>
						<div className="query"> Search results for {query} </div>
						{movies.length === 0 && <div> No articles found! :( </div>}
						{movies.map((movie) => (
							<div className="movie" key={movie.imdbID}>
								<a target="_blank" href={movie.Poster} rel="noopener noreferrer">
									{movie.Title}
								</a>{' '}
								year: {movie.Year}
                <button> Add </button>
							</div>
						))}
					</>
				)}
			</main>
		</div>
	);
};

export default App;
