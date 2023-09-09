import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { title } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    axios
      .get("https://seleksi-sea-2023.vercel.app/api/movies")
      .then((res) => {
        const selectedMovie = res.data.find((movie) => movie.title === title);
        setMovie(selectedMovie);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [title]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="flex flex-col md:flex-row text-center items-center my-10">
        <div className="flex-1">
          <img
            className="rounded-lg object-contain h-92 w-96 mx-auto"
            src={movie.poster_url}
            alt="company_img"
          />
        </div>
        <div className="flex-1 text-left mx-3">
          <h5 className="mb-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-black">
            {movie.title}
          </h5>

          <div class="relative overflow-x-auto sm:rounded-lg">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <tbody>
                <tr>
                  <th
                    scope="row"
                    class="px-2 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white "
                  >
                    Description
                  </th>
                  <td class="px-6 py-4 text-justify">{movie.description}</td>
                </tr>
                <tr>
                  <th
                    scope="row"
                    class="px-2 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white "
                  >
                    Release Date
                  </th>
                  <td class="px-6 py-4">{movie.release_date}</td>
                </tr>
                <tr>
                  <th
                    scope="row"
                    class="px-2 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white "
                  >
                    Age Rating
                  </th>
                  <td class="px-6 py-4">{movie.age_rating}</td>
                </tr>
                <tr>
                  <th
                    scope="row"
                    class="px-2 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white "
                  >
                    Price
                  </th>
                  <td class="px-6 py-4">Rp. {movie.ticket_price}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <button
            type="button"
            class=" mx-auto w-96 focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:focus:ring-yellow-900"
          >
            Buy Ticket
          </button>
        </div>
      </div>
    </>
  );
};

export default Detail;
