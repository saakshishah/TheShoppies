import React, { useState } from "react";
import { useFetch } from "./hooks";
import "./App.css";

const App = () => {
  const initialList = [];
  const buttonsList = {};
  const [query, setQuery] = useState("");
  const [list, setList] = useState(initialList);
  const [button] = useState(buttonsList);

  const url = query && `https://www.omdbapi.com/?s=${query}&apikey=${process.env.REACT_APP_API_KEY}`;

  const { status, data, error } = useFetch(url);

  const handleSubmit = (e) => {
    e.preventDefault();

    const query = e.target.search.value;
    if (query) {
      setQuery(query);
      e.target.search.value = "";
    }
  };

  const movies = data.Search;

  const addNomination = (imdbID, name, index) => {
    const newList = list.concat({ name, imdbID });
    setList(newList);
    button[imdbID] = true;
  };

  const removeNomination = (imdbID, name, index) => {
    const newList = list.filter((item) => item.imdbID !== imdbID);
    setList(newList);
    button[imdbID] = false;
  };

  return (
    <div class="bg-gray-50 bg-cover h-screen">
      <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <header>
          <h1 class="text-4xl font-bold leading-tight text-green-500">
            The Shoppies
          </h1>
        </header>

        <form onSubmit={handleSubmit}>
          <input
            class="border-2 border-gray-300 mt-10 bg-white h-10 px-5 pr-16 rounded-lg text-l focus:outline-none"
            type="text"
            autoFocus
            autoComplete="off"
            name="search"
            placeholder="Enter Movie Title"
          ></input>
          <button class="py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-green-500 hover:bg-green-700 ml-5">
            {" "}
            Search{" "}
          </button>
        </form>
        <div class="grid grid-cols-2 gap-4">
          <div>
            {status === "idle" && (
              <div class="mt-5">
                {" "}
                Let's get started by searching for a movie!{" "}
              </div>
            )}
            {status === "error" && <div>{error}</div>}
            {status === "fetching" && (
              <div class="round animate-spin w-5 h-5 border-2 border-black mt-5">
                {" "}
              </div>
            )}
            {status === "fetched" && (
              
              <>
                <div class="mt-5 font-bold text-lg mb-5 text-green-500">
                  {" "}
                  Search Results For "{query}"{" "}
                </div>
                {data.Error === "Movie not found!" && (
                  <div> {data.Error} Try Again! </div>
                )}
                
                {data.Error === "Too many results." && (
                  <div> {data.Error} Try Again! </div>
                )}

                {data.Response === "True" && movies.map((movie, index) => (
                  <div
                    class="bg-green-50 flex justify-between items-center mb-4 font-medium pl-3 "
                    key={index}
                  >
                    {movie.Title} ({movie.Year})
                    <button
                      class="disabled:opacity-50 py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-green-500 active:bg-green-700"
                      onClick={() => {
                        list.length <= 4
                          ? addNomination(movie.imdbID, movie.Title)
                          : alert("5 Nominations Reached");
                      }}
                      disabled={button[movie.imdbID]}
                    >
                      Add{" "}
                    </button>
                  </div>
                ))}
              </>
            )}
          </div>
          <div>
            <div class="mt-5 font-bold text-green-500 text-lg mb-5">
              {" "}
              Nominations:{" "}
            </div>
            {list.map((item, index) => (
              <div
                class="bg-green-50 flex justify-between items-center mb-4"
                key={index}
              >
                {item.name}
                <button
                  class=" py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-red-500 active:bg-red-700"
                  onClick={() => removeNomination(item.imdbID, item.Title)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
