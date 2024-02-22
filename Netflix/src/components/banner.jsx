import {
  tmdbImageURL,
  tmdbBackdropSizes,
  getPopularMovies,
  getCredits,
  convertGenre
} from "../movieWrapper";
import { useEffect, useState} from "react";
export const Banner = () => {
  const [movies, setMovies] = useState([]);
  const [currMov, setCurrentMovie] = useState(0);
  const [backdrop, setBackdrop] = useState("");
  const [director, setDirector] = useState("");
  const [crew, setCrew] = useState([]);
  useEffect(() => {
    async function gd() {
      getPopularMovies().then((movies) => {
        setMovies(movies.slice(0, 5));
      });
    }
    gd();
  }, []); //

  useEffect(() => {
    getCredits(movies[currMov]?.id).then((credits) => {
      setCrew([]);
      credits?.cast?.map((person) => {
        setCrew((cast) => [...cast, person.name]) 
      })

      credits?.crew?.map((person) => {
        if (person.job === "Director") {
          setDirector(person.name);
        }
      });
    });
  }, [movies, currMov]);

  useEffect(() => {
    const width = tmdbBackdropSizes[tmdbBackdropSizes.length - 2];
    setBackdrop(tmdbImageURL + width + movies[currMov]?.backdrop_path);

    function cycleMovies() {
      if (currMov + 1 >= movies.length) {
        setCurrentMovie(0);
        return;
      }
      setCurrentMovie((currMov) => (currMov + 1) % movies.length);
    }
    setTimeout(() => {
      cycleMovies();
    }, 15000);
  }, [movies, currMov]);

  return (
    <div className="w-screen">
      <div className="backdrop -z-10 w-full opacity-60 h-[80vh]  absolute top-0 left-0 snap-start">
        <img
          src={backdrop}
          alt="Movie Backdrop Image"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="  h-[77vh] mx-12 relative snap-start">
        <img
          src={backdrop}
          alt="Movie Backdrop Image"
          className="w-full h-full object-cover -z-[5] absolute top-0 left-0"
          loading="eager"
          autoSave="true"
        />
        <div className="flex flex-row w-24 absolute top-0 mt-4 left-[50%]">
          {[1, 2, 3, 4, 5].map((i) => {
            return (
              <div
                key={i}
                className={`w-2 h-2 rounded-full bg-white mx-1 ${i === currMov + 1 ? "bg-opacity-100" : "bg-opacity-50"
                  }`}
              ></div>
            );
          })}
        </div>
        <div className="container w-full h-full z-50  flex flex-row">

            <div className="w-[70%] ml-8 flex flex-col justify-center items-start h-full text-left border-l border-gray-400 border-opacity-30 text-white">
              <h1 className="text-5xl font-bold uppercase">
                {movies[currMov]?.title}
              </h1>
              <br />
              <p className="text-sm w-7/12">{movies[currMov]?.overview}</p>
              <br />
              <div className="flex flex-row gap-4">
                <button className="btn px-24 rounded-none text-sm bg-white text-black play-btn">
                  PLAY
                </button>
                <button className="btn bg-transparent max-w-14 w-12 items-center px-3.5 rounded-none outline-[0.5px] outline outline-gray-600">
                  <svg
                    fill="#ffffff"
                    version="1.1"
                    id="Capa_1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 471.701 471.701"
                    className="w-5 stroke-2"
                  >
                    <g>
                      <path
                        d="M433.601,67.001c-24.7-24.7-57.4-38.2-92.3-38.2s-67.7,13.6-92.4,38.3l-12.9,12.9l-13.1-13.1
        c-24.7-24.7-57.6-38.4-92.5-38.4c-34.8,0-67.6,13.6-92.2,38.2c-24.7,24.7-38.3,57.5-38.2,92.4c0,34.9,13.7,67.6,38.4,92.3
        l187.8,187.8c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-3.9l188.2-187.5c24.7-24.7,38.3-57.5,38.3-92.4
        C471.801,124.501,458.301,91.701,433.601,67.001z M414.401,232.701l-178.7,178l-178.3-178.3c-19.6-19.6-30.4-45.6-30.4-73.3
        s10.7-53.7,30.3-73.2c19.5-19.5,45.5-30.3,73.1-30.3c27.7,0,53.8,10.8,73.4,30.4l22.6,22.6c5.3,5.3,13.8,5.3,19.1,0l22.4-22.4
        c19.6-19.6,45.7-30.4,73.3-30.4c27.6,0,53.6,10.8,73.2,30.3c19.6,19.6,30.3,45.6,30.3,73.3
        C444.801,187.101,434.001,213.101,414.401,232.701z"
                      />
                    </g>
                  </svg>
                </button>
              </div>
            </div>
        

          <div className="w-[27%] border-l border-r border-gray-400 border-opacity-30 flex flex-col gap-12 justify-end mb-12">
            <div className="flex flex-row justify-between w-full">
              <span className="text-left">Director <br />{director }</span>
              <span className="text-right">Stars <br />{crew.slice(0, 3).map(
                (person) => { return <span key={person}>{person}<br /></span> }
              )}</span>
            </div>

            <span className="text-left flex flex-row gap-4 flex-wrap">{movies[currMov]?.genre_ids?.map((genre) => { return <span key={genre}>{convertGenre(genre)}  </span> })}</span>
          </div>
          <div className="w-[3%]"><span className="position">{currMov+1}/5</span></div>
        </div>
      </div>
    </div>
  );
};
