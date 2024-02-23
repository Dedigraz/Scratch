import {
  tmdbImageURL,
  tmdbBackdropSizes,
  getLogo,
  tmdbLogoSizes,
} from "../movieWrapper";
import { useEffect,useState } from "react";
// Accept an array of shows and render them in a grid
export const Category = ({ shows, closeBtn, group }) => {
    const [logos, setLogos] = useState([]);
    const [backdrops, setBackdrops] = useState([]);

    useEffect(() => {
        shows.map((show) => {
            getLogo(show.id, show.media_type).then((l) => {
                
                setLogos((logos) => [...logos, { id: show.id, path: (tmdbImageURL + tmdbLogoSizes[1] + l[0].file_path) }]);
            });
            setBackdrops((backdrops) => [...backdrops, {id:show.id,path: (tmdbImageURL + tmdbBackdropSizes[tmdbBackdropSizes.length - 3] + show.backdrop_path)}]);
        });
    }, [shows,setLogos,setBackdrops]);

  return (
    <>
      <button className="w-fit my-0" onClick={() => closeBtn(false)}>
        <span className="material-symbols-outlined">arrow_back</span>
      </button>
      <div className="grid grid-cols-4 gap-y-8 gap-x-2  max-h-[80vh] overflow-x-auto grid-flow-row">
        {shows.map((show) => {

          return (
            <div key={show.id} className="h-max">
              <div className="relative">
                  <img
                    className="h-full object-cover"
                    src={backdrops.find((b) => b.id === show.id)?.path}
                    alt="BackDrop"
                  />
              <img
                className="absolute bottom-4 left-2 max-w-[50%] max-h-[18%] filter invert-0 brightness-150  "
                src={logos.find((l) => l.id === show.id)?.path}
                alt="Logo"
              />
              </div>
              {group === "ContinueWatching" ? (
                <div className="w-full h-1 bg-gray-700 ">
                  <div
                    className="h-full bg-gray-200 "
                    style={{ width: `${Math.random() * 100}%` }}
                  ></div>
                </div>
              ) : (
                <></>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
};
