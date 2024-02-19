import { useMemo } from "react";
import {
  tmdbImageURL,
  tmdbPosterSizes,
  continueWatching,
  myList,
  getAiringShows,
  getLogo,
} from "../movieWrapper";
import { useEffect, useState } from "react";


export const Categories = () => {
    const airingShows = useMemo(async () => await getAiringShows(), []);
    const [Latest, setLatest] = useState(<></>);
  const ContinueWatching = useMemo(() => {
    let movie = continueWatching.items[0];
    return (
      <div>
        <img
          className=""
          src={
            tmdbImageURL +
            tmdbPosterSizes[tmdbPosterSizes.length - 1] +
            movie.poster_path
          }
          alt="Show Poster"
        />
      </div>
    );
  }, []);
    
    
  const MyList = useMemo(() => {
    let movie = myList.items[0];
    return (
      <div className=" poster-cont">
        <img
          className=" poster"
          src={
            tmdbImageURL +
            tmdbPosterSizes[tmdbPosterSizes.length - 1] +
            movie.poster_path
          }
          alt="Show Poster"
        />
      </div>
    );
  }, []);
    
    
    
  useEffect(() => {
    airingShows
      .then((shows) => shows[0])
      .then((movie) => {
        setLatest(
          <div >
            <img
              className=""
              src={
                tmdbImageURL +
                tmdbPosterSizes[tmdbPosterSizes.length - 1] +
                movie?.poster_path
              }
              alt="Show Poster"
            />
          </div>
        );
      })
      .catch((err) => console.log(err));
  }, [airingShows]);

  return (
    <div id="categories" className="w-full max-h-screen h-screen grid grid-cols-3 grid-rows-1 mt-6 text-lg" >
      <div className="category flex flex-col pr-16">
        <div className="flex justify-between border-b border-gray-300 uppercase pb-2 mb-16">
          <span>Continue Watching</span> 12
        </div>
        {ContinueWatching}
        <button className="px-24 bg-transparent mt-16  border-[0.5px] border-gray-500 hover:bg-white hover:text-black text-sm rounded-none uppercase ">
          See All
        </button>
      </div>
      <div className="category flex flex-col pr-6 pl-6">
        <div className="flex justify-between border-b border-gray-300 uppercase pb-2 mb-16">
          <span>My List</span> 7
        </div>
        {MyList}
        <button className="px-24 bg-transparent mt-16 border-[0.5px] border-gray-500 hover:bg-white hover:text-black text-sm rounded-none uppercase ">
          See All
        </button>
      </div>
      <div className="category flex flex-col pl-16">
        <div className="flex justify-between border-b border-gray-300 uppercase pb-2 mb-16">
          <span>Latest</span> 32
        </div>
        {Latest}
        <button className="px-24 bg-transparent mt-16 border-[0.5px] border-gray-500 hover:bg-white hover:text-black text-sm rounded-none uppercase  ">
          See All
        </button>
      </div>
    </div>
  );
};
