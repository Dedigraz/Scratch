import { tmdbImageURL, tmdbBackdropSizes, getLogo } from "../movieWrapper";
// Accept an array of shows and render them in a grid
export const Categories = ({ shows }) => {
    return (
        <div className="grid grid-cols-4 grid-flow-row">
            {shows.map((show) => {
                return (
                    <div key={show.id}>
                        <img
                            className=""
                            src={
                                tmdbImageURL +
                                tmdbBackdropSizes[tmdbBackdropSizes.length - 1] +
                                show.poster_path
                            }
                            alt="Show Poster"
                        />
                    </div>
                );
            })}
        </div>
    );
}