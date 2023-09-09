import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const Movie = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    axios
      .get("https://seleksi-sea-2023.vercel.app/api/movies")
      .then((res) => {
        setData([...res.data]);
      })
      .catch((err) => {});
  }, []);
  return (
    <div className="bg-white">
      <div className="grid grid-cols-5 gap-4 text-white">
        {data !== null &&
          data.map((res) => (
            <div
              key={res.id}
              className="flex flex-col text-center items-center p-5"
            >
              <a
                href={`/${res.title}`}
                className="rounded bg-black flex flex-col items-center p-4 border border-red-700"
              >
                <div className="flex 1">
                  <img
                    className="rounded object-contain"
                    src={res.poster_url}
                    alt="imagemovie"
                  />
                </div>
                <div className="flex 1">
                  <h1 className="text-md">{res.title}</h1>
                </div>
              </a>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Movie;
