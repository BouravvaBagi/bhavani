import React, { useEffect, useState } from "react";
import FilmDetails from "./FilmDetails";

export const Films = () => {
  const [data, setdata] = useState([]);
  const [filmid, setFilmid] = useState("");
  useEffect(() => {
    const object = {
      method: "GET",
      headers: {
        Authorization: "Bearer Wookie2019",
        "content-type": "application/json",
      },
      body: JSON.stringify(),
    };
    fetch("https://wookie.codesubmit.io/movies", object)
      .then((req) => req.json())
      .then((res) => setdata(res.movies));
  }, []);
  console.log(data);

  return (
    <>
      <div>
        {filmid === "" ? (
          <div className="main-container1 main-counter">
            <div className="grid main-container1">
              {data.map((movies, id) => {
                return (
                  <div className="grid-item" key={id}>
                    <div className="card">
                      <img
                        className="card-img"
                        src={movies.poster}
                        alt="Rome"
                      />
                      <div className="card-content">
                        <h1 className="card-header">{movies.title}</h1>
                        <div className="movie-card">
                          <h3>Director:{movies.director}</h3>
                          <h3>Duration:{movies.length}</h3>
                        </div>

                        <p className="card-text">{movies.overview}</p>
                        <button
                          className="card-btn"
                          onClick={() => setFilmid(movies.id)}
                        >
                          Visit <span>&rarr;</span>
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <div className="movie-details">
            <FilmDetails data={data} filmid={filmid} />
          </div>
        )}
      </div>
    </>
  );
};
