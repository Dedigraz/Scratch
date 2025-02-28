import Avatar from "./assets/avatar.jpg";
import { useEffect, useRef, useState } from "react";
import "./App.css";
import { Banner } from "./components/banner";
import { Categories } from "./components/categories";
import useScrollSnap from "react-use-scroll-snap";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import searchSvg from "./assets/search.svg";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollToPlugin from "gsap/ScrollToPlugin";

import { getPopularMovies, convertGenre, getCredits } from "./movieWrapper";

export const Layout = ({ children }) => {
  const [movies, setMovies] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getPopularMovies()
      .then((movies) => {
        // console.log(movies.slice(0, 1))

        //id
        //backdrop_path
        //title
        //genre_ids
        //overview
        let backdrops = movies.slice(0, 5).map((movie) => movie.backdrop_path);
        cacheImages(backdrops);
        return movies.slice(0, 5).map((movie) => {
          return {
            id: movie.id,
            backdrop_path: movie.backdrop_path,
            title: movie.title,
            genre_ids: movie.genre_ids,
            overview: movie.overview,
          };
        });
      })
      .then((pros_movies) => {
        pros_movies = pros_movies.map((movie) => {
          getCredits(movie?.id).then((credits) => {
            movie.cast = [];
            credits?.cast?.map((person) => {
              movie.cast = [...movie.cast, person.name];
            });
            credits?.crew?.map((person) => {
              if (person.job === "Director") {
                movie.director = person.name;
              }
            });
          });
          movie.genres = movie.genre_ids.map((genre) => {
            return convertGenre(genre);
          });
        });
        setMovies(pros_movies);
      });
  }, []);
  const cacheImages = async (srcArray) => {
    const promises = await srcArray.map((src) => {
      return new Promise(function (resolve, reject) {
        const img = new Image();
        img.src = src;
        img.setAttribute("fetchpriority", "high");
        img.onload = resolve();
        img.onerror = reject();
      });
    });
    await Promise.all(promises);
    setIsLoading(false);
  };
  const scrollRef = useRef(null);
  // useScrollSnap({ ref: scrollRef, duration: 50, delay: 20 });
  // useGSAP(() => {
  //     gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
  //     const main = document.querySelector("main");
  //     gsap.to(main, { duration: 2, scrollTo: "#categories" });
  // },{scope: scrollRef})
  return (
    <div className="  layout">
      <nav className=" h-[8vh] w-screen bg-transparent sticky top-0 left-0 flex flex-row px-12 justify-between items-center ">
        <div className="h-full flex flex-row items-center gap-8 w-80">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-1/3  netflix-logo"
            viewBox="0 0 1024 276.742"
          >
            <path
              d="M140.803 258.904c-15.404 2.705-31.079 3.516-47.294 5.676l-49.458-144.856v151.073c-15.404 1.621-29.457 3.783-44.051 5.945v-276.742h41.08l56.212 157.021v-157.021h43.511v258.904zm85.131-157.558c16.757 0 42.431-.811 57.835-.811v43.24c-19.189 0-41.619 0-57.835.811v64.322c25.405-1.621 50.809-3.785 76.482-4.596v41.617l-119.724 9.461v-255.39h119.724v43.241h-76.482v58.105zm237.284-58.104h-44.862v198.908c-14.594 0-29.188 0-43.239.539v-199.447h-44.862v-43.242h132.965l-.002 43.242zm70.266 55.132h59.187v43.24h-59.187v98.104h-42.433v-239.718h120.808v43.241h-78.375v55.133zm148.641 103.507c24.594.539 49.456 2.434 73.51 3.783v42.701c-38.646-2.434-77.293-4.863-116.75-5.676v-242.689h43.24v201.881zm109.994 49.457c13.783.812 28.377 1.623 42.43 3.242v-254.58h-42.43v251.338zm231.881-251.338l-54.863 131.615 54.863 145.127c-16.217-2.162-32.432-5.135-48.648-7.838l-31.078-79.994-31.617 73.51c-15.678-2.705-30.812-3.516-46.484-5.678l55.672-126.75-50.269-129.992h46.482l28.377 72.699 30.27-72.699h47.295z"
              fill="#d81f26"
            />
          </svg>
          <search className="max-w-32 w-32 flex flex-row gap-4">
            <div className="w-10 ">
              <img
                alt="svgImg"
                src={searchSvg}
                className="h-full object-cover"
              />
            </div>
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent text-white placeholder-slate-200"
            />
          </search>
        </div>

        <div className="flex gap-8 mid-nav -ml-16">
          <span className="nav-links active">
            <h4>HOME</h4>
          </span>
          <span className="nav-links">
            <h4>TV SHOWS</h4>
          </span>
          <span className="nav-links">
            <h4>MOVIES</h4>
          </span>
        </div>

        <div className="flex flex-row items-center gap-4">
          <span className="nav-links text-white">
            <h5>PROFILE</h5>
          </span>
          <div className="max-h-2/3 h-5/6 w-10 aspect-square">
            <img src={Avatar} className="h-full object-cover" alt="Avatar" />
          </div>
        </div>
      </nav>

      {isLoading ? (
        <div className="w-screen h-screen flex justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16  netflix-loading "
            viewBox="0 0 1024 276.742"
          >
            <path
              className="fill-white"
              d="M140.803 258.904c-15.404 2.705-31.079 3.516-47.294 5.676l-49.458-144.856v151.073c-15.404 1.621-29.457 3.783-44.051 5.945v-276.742h41.08l56.212 157.021v-157.021h43.511v258.904zm85.131-157.558c16.757 0 42.431-.811 57.835-.811v43.24c-19.189 0-41.619 0-57.835.811v64.322c25.405-1.621 50.809-3.785 76.482-4.596v41.617l-119.724 9.461v-255.39h119.724v43.241h-76.482v58.105zm237.284-58.104h-44.862v198.908c-14.594 0-29.188 0-43.239.539v-199.447h-44.862v-43.242h132.965l-.002 43.242zm70.266 55.132h59.187v43.24h-59.187v98.104h-42.433v-239.718h120.808v43.241h-78.375v55.133zm148.641 103.507c24.594.539 49.456 2.434 73.51 3.783v42.701c-38.646-2.434-77.293-4.863-116.75-5.676v-242.689h43.24v201.881zm109.994 49.457c13.783.812 28.377 1.623 42.43 3.242v-254.58h-42.43v251.338zm231.881-251.338l-54.863 131.615 54.863 145.127c-16.217-2.162-32.432-5.135-48.648-7.838l-31.078-79.994-31.617 73.51c-15.678-2.705-30.812-3.516-46.484-5.678l55.672-126.75-50.269-129.992h46.482l28.377 72.699 30.27-72.699h47.295z"
              fill="#d81f26"
            />
          </svg>
        </div>
      ) : (
        <main
          ref={scrollRef}
          className="w-screen h-fit snap-mandatory snap-y snap overflow-x-clip"
        >
          <Banner />
          <Categories />
        </main>
      )}
    </div>
  );
};
