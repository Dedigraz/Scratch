import {
  tmdbImageURL,
  tmdbBackdropSizes,
  getPopularMovies,
  getCredits,
  convertGenre,
  constructTrailerLink,
} from "../movieWrapper";
import { useEffect, useState, useCallback,useRef } from "react";


export const Banner = () => {
  const [movies, setMovies] = useState([]);
  const [currMov, setCurrentMovie] = useState(0);
  const [backdrop, setBackdrop] = useState("");
  const [director, setDirector] = useState("");
  const [crew, setCrew] = useState([]);
  const [timer, setTimer] = useState(1);
  const [trailer, setTrailer] = useState(<></>);
  const [bannerClass, setBannerClass] = useState("enter-banner");
  const [propClass, setPropClass] = useState("enter-prop");
  const [backdropClass, setBackdropClass] = useState("enter-backdrop");
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [intersectionRatio, setIntersectionRatio] = useState(1);
  const ref = useRef(null);
  
    useEffect(() => {
      const options = {
        root: null,
        rootMargin: "0px",
        threshold: [0.6,0.7,0.8,0.9,1]
  
      };
      const observer = new IntersectionObserver(([entry]) => {
        setIsIntersecting(entry.isIntersecting);
        setIntersectionRatio(entry.intersectionRatio);
      },options);
      console.log(isIntersecting);
      observer.observe(ref.current);
      return () => observer.disconnect();
    }, []);
  
  useEffect(() => {
    if (isIntersecting) {
      console.log("Banner is visible");
    }
    else {
      console.log("Banner is not visible");
    }
  }, [isIntersecting]);

  
  const incTimer = () => { setTimer(timer + 1) };
  useEffect(() => {
          const interval = setInterval(incTimer, 1000);
          return () => { clearInterval(interval) }
      
  }, [timer])


  //render trailer for movie
  const renderTrailer = (movie) => {
    constructTrailerLink(movie?.id,"movie").then((link) => {
      setTrailer (

        <>
          <img className="object-cover h-full w-full hover:cursor-pointer" src={`https://i.ytimg.com/vi_webp/${link}/0.webp`} onClick={(e) =>{e.preventDefault();
      window.location.href=`https://www.youtube.com/watch?v=${link}`}} loading="lazy" />
          <a className="absolute top-1/2 left-[65%] w-full h-full" href={`https://www.youtube.com/watch?v=${link}`} > <span className="text-lg uppercase text-white  p-2 border-b border-white trailer-text">Watch Trailer</span> </a>
        </>

      );
    }).catch((e) => {
      console.error(e);
    });
  };


  //check if timer has elapsed 15 seconds then change the movie
  const cycleMovies = useCallback(() => {
    setDirector("");
    setCrew([]);
    setTrailer(<></>);
    if (currMov + 1 >= movies.length) {
      setCurrentMovie(0);
      return;
    }
    setCurrentMovie((currMov) => (currMov + 1) % movies.length);
  }, [currMov, movies,])
  
  useEffect(() => {
    async function gd() {
      getPopularMovies().then((movies) => {
        setMovies(movies.slice(0, 5));
      });
    }
    gd();
    setTimer(Date.now());
  }, []); //

  useEffect(() => {
    if (timer >= 10) {
      setTimer(0); // TODO move to after setTimeout call
      setBannerClass("exit-banner");
      setBackdropClass("exit-backdrop");
      setPropClass("exit-prop")
      setTimeout(() => {
        cycleMovies();
        setBannerClass("enter-banner");
        setBackdropClass("enter-backdrop");
        setPropClass("enter-prop")
    }, 3_000);
    }
    // wait for half a second

  }, [timer, cycleMovies]);

  useEffect(() => {
    if (Date.now >= timer) {
      setTimer(Date.now() + 10_000);
      cycleMovies();
    }
    setBannerClass("enter-banner");
  }, []);


  useEffect(() => {
    getCredits(movies[currMov]?.id).then((credits) => {
      setCrew([]);
      credits?.cast?.map((person) => {
        setCrew((cast) => [...cast, person.name]);
      });

      credits?.crew?.map((person) => {
        if (person.job === "Director") {
          setDirector(person.name);
        }
      });
    });
    renderTrailer(movies[currMov])
  }, [movies, currMov]);

  useEffect(() => {
    const width = tmdbBackdropSizes[tmdbBackdropSizes.length - 1];
    setBackdrop(tmdbImageURL + width + movies[currMov]?.backdrop_path);
  }, [movies, currMov]);

  return (
    <section className="max-w-screen w-full block">
      
      <div id={`${movies[currMov]?.id}-banner`} ref={ref} className="backdrop -z-10 w-full opacity-60 h-screen  absolute top-0 left-0 snap-start overflow-hidden" style={{ opacity: intersectionRatio < 0.7 ? 0 : 1}}>
        <img src={backdrop} alt="backdrop" />
        <div id="backdrop-cover" className={backdropClass} ></div>
      </div>
      <div id={movies[currMov]?.id} className=" banner  h-[77vh] mx-12 relative w-[95%] overflow-hidden" style={{opacity: intersectionRatio < 0.7 ? 0:1 }}>
        <img src={backdrop} alt="banner" />
        <div id="banner-cover" className={bannerClass} ></div>

        <div className="flex flex-row w-24 absolute top-0 mt-4 left-[50%]">
          {[1, 2, 3, 4, 5].map((i) => {
            return (
              <div
                key={i}
                className={`w-2 h-2 rounded-full bg-white mx-1 ${
                  i === currMov + 1 ? "bg-opacity-100" : "bg-opacity-50"
                }`}
              ></div>
            );
          })}
        </div>
        <div className="container w-full h-full relative z-50  flex flex-row">
          <div className="w-[70%] pl-8  h-full text-left  text-white">
            <div className="border-l border-gray-400  border-opacity-30 h-full flex flex-col justify-end items-start pb-16">
              <h1 className="text-5xl font-bold uppercase ">
                {movies[currMov]?.title}
              </h1>
              <br />
              <p className="text-sm w-7/12 ">{movies[currMov]?.overview}</p>
              <br />
              <div className="flex flex-row gap-4">
                <button className="btn w-72 rounded-none text-sm bg-white text-black play-btn hover:bg-black hover:text-white hover:border-black">
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

              <div className="w-72 h-1/4 mt-24 relative">{trailer}</div>
            </div>
          </div>

          <div id="film-prop" className={"w-[27%] h-full border-l border-r border-gray-400 border-opacity-30 flex flex-col gap-12 justify-end pb-12 "+propClass}>
            <div className="flex flex-row justify-between w-full">
              <span className="text-left">
                <em className="font-semibold">Director</em> <br /> <br />
                {director}
              </span>
              <span className="text-right">
                <em className="font-semibold">Stars</em> <br /> <br />
                {crew.slice(0, 3).map((person) => {
                  return (
                    <span key={person}>
                      {person}
                      <br />
                    </span>
                  );
                })}
              </span>
            </div>

            <span className="text-left flex flex-row gap-4 flex-wrap">
              {movies[currMov]?.genre_ids?.map((genre) => {
                return <span key={genre}>{convertGenre(genre)} </span>;
              })}
            </span>
          </div>
          <div className="w-9 h-full">
          { !currMov?
            <span className="position">{currMov + 1}/5</span>: <></>
          }
          </div>
        </div>
      </div>
    </section>
  );
};
