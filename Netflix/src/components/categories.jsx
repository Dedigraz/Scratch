import { useMemo, useRef } from "react";
import {
  tmdbImageURL,
  tmdbPosterSizes,
  continueWatching,
  myList,
  getAiringShows,
} from "../movieWrapper";
import { useEffect, useState } from "react";
import { Category } from "./category";

export const Categories = () => {
  const airingShows = useMemo(async () => await getAiringShows(), []);
  const [Latest, setLatest] = useState(<></>);
  const [LatestAmt, setLatestAmt] = useState(0);
  const [inCategory, setInCategory] = useState(false);
  const [shows, setShows] = useState([]);
  const [group, setGroup] = useState("");
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [intersectionRatio, setIntersectionRatio] = useState(0);
  const ref = useRef(null);
  
    useEffect(() => {
      const options = {
        root: null,
        rootMargin: "0px",
        threshold: [0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1]
  
      };
      const observer = new IntersectionObserver(([entry]) => {
        setIsIntersecting(entry.isIntersecting);
        setIntersectionRatio(entry.intersectionRatio);
      },options);
      console.log(isIntersecting);
      observer.observe(ref.current);
      return () => observer.disconnect();
    }, []);

  const ContinueWatching = useMemo(() => {
    let movie = continueWatching.items[0];
    return (
      <div className="h-[65vh] w-full">
        <img
          className="object-cover h-full w-full "
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
      <div className="h-[65vh] w-full">
        <img
          className=" object-cover h-full w-full "
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
      .then((shows) => { setLatestAmt(shows.length); return shows[0]})
      .then((movie) => {
        setLatest(
          <div className="h-[65vh] w-full">
            <img
              className="object-cover h-full w-full  "
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

  const showCategory = (category) => {
    if (category==="Latest") {
      setInCategory(true);
      airingShows.then((shows) => { setShows(shows); setGroup("Latest"); });
    }
    else if(category==="ContinueWatching"){
      setInCategory(true);
      setShows(continueWatching.items);
      setGroup("ContinueWatching");
    }
    else if(category==="MyList"){
      setInCategory(true);
      setShows(myList.items);
      setGroup("MyList");
    }
  }
  return (
    <section
      id="categories"
      className="w-full max-h-screen h-[92vh] flex flex-col  gap-6  items-stretch justify-start pt-12 text-lg snap-start place-content-start px-12 "
      
    >
      <div className="h-12 grid grid-cols-3 grid-rows-1 gap-x-56 items-start justify-items-stretch">
        <div className="flex justify-between border-b border-gray-300 uppercase pb-2">
          <span>Continue Watching</span> {continueWatching.items.length}
        </div>
        <div className="flex justify-between border-b border-gray-300 uppercase pb-2 ">
          <span>My List</span> {myList.items.length}
        </div>
        <div className="flex justify-between border-b border-gray-300 uppercase pb-2 ">
          <span>Latest</span> {LatestAmt}
        </div>
      </div>
      {inCategory ? <Category shows={shows} closeBtn={setInCategory } group={group} />
        :
      <div ref={ref} className="grid grid-cols-3 grid-rows-1 opacity-30 gap-x-56 poster-cont" style={{opacity:Math.max(0.35,intersectionRatio)}}  >
        <div>
        {ContinueWatching}
          <button className=" w-full bg-transparent mt-16 border-[0.5px] border-gray-500 hover:bg-white hover:text-black text-sm rounded-none uppercase  " onClick={() =>showCategory("ContinueWatching")}>
            See All
          </button>
        </div>
        <div className="flex flex-col justify-center items-center">
        {MyList}
          <button className="w-full bg-transparent mt-16 border-[0.5px] border-gray-500 hover:bg-white hover:text-black text-sm rounded-none uppercase  " onClick={() =>showCategory("MyList")}>
            See All
          </button>
        </div>
        <div>
          {Latest}
          <button className="w-full bg-transparent mt-16 border-[0.5px] border-gray-500 hover:bg-white hover:text-black text-sm rounded-none uppercase " onClick={() =>showCategory("Latest")}>
            See All
          </button>
        </div>
      </div>
}
    </section>
  );
};
