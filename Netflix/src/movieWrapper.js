// Structure for all the movies and shows
/* [
    {
        name,
        bannerImage,
        thumbnailImage,
        posterImage,
        MovieNameStylized or Logo,
        trailer,
        description,
        rating,
        genres,
        Director,
        Stars
    }
]
*/
//get top 5 box office shows

//get a random amount of shows and movies fot my list
//get a random amount of shows and movies fot continue watching
//get 32 of the latest movies for the latest movies section
//convert the genre id array to a list of the correspoding genres


// import * as tmdb from 'moviedb';
// //get the api key from the .env file

// const MovieDB = tmdb(import.meta.env.VITE_TMDB_AUTH_TOKEN);


  
export async function tmdbConfig() {
    const url = 'https://api.themoviedb.org/3/configuration';
  const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_TMDB_AUTH_TOKEN}`,
      }
    };
    return fetch(url, options)
        .then(res => res.json())
        .then(json => json.images)
        .catch(err => console.error('error:' + err));
}

tmdbConfig()

export const tmdbImageURL = (await tmdbConfig()).secure_base_url;


export const tmdbBackdropSizes =  (await tmdbConfig()).backdrop_sizes;

export const tmdbPosterSizes =  (await tmdbConfig()).poster_sizes;


export const tmdbLogoSizes =(await tmdbConfig()).logo_sizes;


export const tmdbProfileSizes = (await tmdbConfig()).profile_sizes;



export async function getTopRatedMovies() {
    const url = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1&region=US';
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${import.meta.env.VITE_TMDB_AUTH_TOKEN}`,
        }
    };

    return fetch(url, options)
        .then(res => res.json())
        .then(json => { console.log(json.results); return json.results})
        .catch(err => console.error('error:' + err));
}

export async function getLogo(id, media_type) {
    let url = '';
    if (media_type === 'movie') {
         url = `https://api.themoviedb.org/3/movie/${id}/images?include_image_language=en`;

    }
    else {
        url = `https://api.themoviedb.org/3/tv/${id}/images?include_image_language=en`;
    }
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${import.meta.env.VITE_TMDB_AUTH_TOKEN}`,

        }
    }

    return fetch(url, options)
        .then(res => res.json())
        .then(json => json.logos)
        .catch(err => console.error('error:' + err));
    
}


export async function getPopularMovies() {
    const url ='https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&region=US';
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${import.meta.env.VITE_TMDB_AUTH_TOKEN}`,
        }
    };

    return fetch(url, options)
        .then(res => res.json())
        .then(json => json.results)
        .catch(err => console.error('error:' + err));
}

export async function getAiringShows() {
    const url = 'https://api.themoviedb.org/3/discover/tv?air_date.gte=2024-01-01&include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=vote_count.desc&vote_average.gte=8&vote_average.lte=10&with_original_language=en';
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${import.meta.env.VITE_TMDB_AUTH_TOKEN}`,
        }
    }

    return fetch(url, options)
        .then(res => res.json())
        .then(json => json.results)
        .catch(err => console.error('error:' + err));
}

const GenreList={
    "genres": [
      {
        "id": 28,
        "name": "Action"
      },
      {
        "id": 12,
        "name": "Adventure"
      },
      {
        "id": 16,
        "name": "Animation"
      },
      {
        "id": 35,
        "name": "Comedy"
      },
      {
        "id": 80,
        "name": "Crime"
      },
      {
        "id": 99,
        "name": "Documentary"
      },
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 10751,
        "name": "Family"
      },
      {
        "id": 14,
        "name": "Fantasy"
      },
      {
        "id": 36,
        "name": "History"
      },
      {
        "id": 27,
        "name": "Horror"
      },
      {
        "id": 10402,
        "name": "Music"
      },
      {
        "id": 9648,
        "name": "Mystery"
      },
      {
        "id": 10749,
        "name": "Romance"
      },
      {
        "id": 878,
        "name": "Science Fiction"
      },
      {
        "id": 10770,
        "name": "TV Movie"
      },
      {
        "id": 53,
        "name": "Thriller"
      },
      {
        "id": 10752,
        "name": "War"
      },
      {
        "id": 37,
        "name": "Western"
      },
      {
        "id": 10759,
        "name": "Action & Adventure"
      },
      {
        "id": 16,
        "name": "Animation"
      },
      {
        "id": 35,
        "name": "Comedy"
      },
      {
        "id": 80,
        "name": "Crime"
      },
      {
        "id": 99,
        "name": "Documentary"
      },
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 10751,
        "name": "Family"
      },
      {
        "id": 10762,
        "name": "Kids"
      },
      {
        "id": 9648,
        "name": "Mystery"
      },
      {
        "id": 10763,
        "name": "News"
      },
      {
        "id": 10764,
        "name": "Reality"
      },
      {
        "id": 10765,
        "name": "Sci-Fi & Fantasy"
      },
      {
        "id": 10766,
        "name": "Soap"
      },
      {
        "id": 10767,
        "name": "Talk"
      },
      {
        "id": 10768,
        "name": "War & Politics"
      },
      {
        "id": 37,
        "name": "Western"
      }
    ]
}

export async function constructTrailerLink(movieId, type) {
    let url = '';
    if (type === 'movie') {
        url =  `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`;
    } else {
        url =  `https://api.themoviedb.org/3/tv/${movieId}/videos?language=en-US`;
    }
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${import.meta.env.VITE_TMDB_AUTH_TOKEN}`,
        }
    }

    let result = fetch(url, options)
        .then(res => res.json())
        .then(json => json.results)
        .catch(err => console.error('error:' + err));
    
    //return the key of the first video with the type Trailer
    return result.then(videos => videos.find(video => video.type === 'Trailer').key);
}
    
export function convertGenre(genreId){
    const genre = GenreList.genres.find(genre => genre.id === genreId);
    return genre.name;
}

export const myList = {
    "created_by": "Shexfer",
    "description": "",
    "favorite_count": 0,
    "id": 8291259,
    "iso_639_1": "en",
    "item_count": 7,
  "items": [
    {
      "adult": false,
      "backdrop_path": "/lNpkvX2s8LGB0mjGODMT4o6Up7j.jpg",
      "id": 1398,
      "name": "The Sopranos",
      "original_language": "en",
      "original_name": "The Sopranos",
      "overview": "The story of New Jersey-based Italian-American mobster Tony Soprano and the difficulties he faces as he tries to balance the conflicting requirements of his home life and the criminal organization he heads. Those difficulties are often highlighted through his ongoing professional relationship with psychiatrist Jennifer Melfi. The show features Tony's family members and Mafia associates in prominent roles and story arcs, most notably his wife Carmela and his cousin and protégé Christopher Moltisanti.",
      "poster_path": "/rTc7ZXdroqjkKivFPvCPX0Ru7uw.jpg",
      "media_type": "tv",
      "runtime": null,
      "genre_ids": [
        18
      ],
      "popularity": 341.628,
      "first_air_date": "1999-01-10",
      "vote_average": 8.631,
      "vote_count": 2442,
      "origin_country": [
        "US"
      ]
    },
      {
        "adult": false,
        "backdrop_path": "/A5lVyejMsP5G7rAJBwU9ug3Wzou.jpg",
        "id": 1104,
        "name": "Mad Men",
        "original_language": "en",
        "original_name": "Mad Men",
        "overview": "Set in 1960-1970 New York, this sexy, stylized and provocative drama follows the lives of the ruthlessly competitive men and women of Madison Avenue advertising.",
        "poster_path": "/7v8iCNzKFpdlrCMcqCoJyn74Nsa.jpg",
        "media_type": "tv",
        "runtime": null,
        "genre_ids": [
          18
        ],
        "popularity": 246.356,
        "first_air_date": "2007-07-19",
        "vote_average": 8.104,
        "vote_count": 1089,
        "origin_country": [
          "US"
        ]
      },
      {
        "adult": false,
        "backdrop_path": "/zGs5tZOlvc9cprdcU6kDOVNpujf.jpg",
        "id": 567,
        "title": "Rear Window",
        "original_language": "en",
        "original_title": "Rear Window",
        "overview": "A wheelchair-bound photographer spies on his neighbors from his apartment window and becomes convinced one of them has committed murder.",
        "poster_path": "/ILVF0eJxHMddjxeQhswFtpMtqx.jpg",
        "media_type": "movie",
        "runtime": 115,
        "revenue": 37034514,
        "genre_ids": [
          53,
          9648
        ],
        "popularity": 28.799,
        "release_date": "1954-08-01",
        "video": false,
        "vote_average": 8.354,
        "vote_count": 6126
      },
      {
        "adult": false,
        "backdrop_path": "/4FqKFhF4BrNsrK3EdRpVJofVqCp.jpg",
        "id": 3452,
        "name": "Frasier",
        "original_language": "en",
        "original_name": "Frasier",
        "overview": "After many years spent at the “Cheers” bar, Frasier moves back home to Seattle to work as a radio psychiatrist after his policeman father gets shot in the hip on duty.",
        "poster_path": "/gYAb6GCVEFsU9hzMCG5rxaxoIv3.jpg",
        "media_type": "tv",
        "runtime": null,
        "genre_ids": [
          35,
          10751
        ],
        "popularity": 381.785,
        "first_air_date": "1993-09-16",
        "vote_average": 7.7,
        "vote_count": 696,
        "origin_country": [
          "US"
        ]
      },
      {
        "adult": false,
        "backdrop_path": "/uif5fUshJrXyyDzfpzp1DLw3N0S.jpg",
        "id": 539,
        "title": "Psycho",
        "original_language": "en",
        "original_title": "Psycho",
        "overview": "When larcenous real estate clerk Marion Crane goes on the lam with a wad of cash and hopes of starting a new life, she ends up at the notorious Bates Motel, where manager Norman Bates cares for his housebound mother.",
        "poster_path": "/yz4QVqPx3h1hD1DfqqQkCq3rmxW.jpg",
        "media_type": "movie",
        "runtime": 109,
        "revenue": 32000000,
        "genre_ids": [
          27,
          53,
          9648
        ],
        "popularity": 48.029,
        "release_date": "1960-06-22",
        "video": false,
        "vote_average": 8.4,
        "vote_count": 9574
      },
      {
        "adult": false,
        "backdrop_path": "/CpLAfXgSNeNRRbRzPrTuzKmIHO.jpg",
        "id": 350,
        "title": "The Devil Wears Prada",
        "original_language": "en",
        "original_title": "The Devil Wears Prada",
        "overview": "Andy moves to New York to work in the fashion industry. Her boss is extremely demanding, cruel and won't let her succeed if she doesn't fit into the high class elegant look of their magazine.",
        "poster_path": "/8912AsVuS7Sj915apArUFbv6F9L.jpg",
        "media_type": "movie",
        "runtime": 109,
        "revenue": 326706115,
        "genre_ids": [
          18,
          35
        ],
        "popularity": 78.009,
        "release_date": "2006-06-29",
        "video": false,
        "vote_average": 7.39,
        "vote_count": 11404
      },
      {
        "adult": false,
        "backdrop_path": "/9faGSFi5jam6pDWGNd0p8JcJgXQ.jpg",
        "id": 1396,
        "name": "Breaking Bad",
        "original_language": "en",
        "original_name": "Breaking Bad",
        "overview": "Walter White, a New Mexico chemistry teacher, is diagnosed with Stage III cancer and given a prognosis of only two years left to live. He becomes filled with a sense of fearlessness and an unrelenting desire to secure his family's financial future at any cost as he enters the dangerous world of drugs and crime.",
        "poster_path": "/ztkUQFLlC19CCMYHW9o1zWhJRNq.jpg",
        "media_type": "tv",
        "runtime": null,
        "genre_ids": [
          18,
          80
        ],
        "popularity": 407.996,
        "first_air_date": "2008-01-20",
        "vote_average": 8.901,
        "vote_count": 13112,
        "origin_country": [
          "US"
        ]
      },

    ],
    "name": "Clone:My List",
    "page": 1,
    "poster_path": null,
    "total_pages": 1,
    "total_results": 7
}

export const continueWatching ={
  "created_by": "Shexfer",
  "description": "",
  "favorite_count": 0,
  "id": 8291257,
  "iso_639_1": "en",
  "item_count": 12,
  "items": [
    {
      "adult": false,
      "backdrop_path": "/a906PH7CDmSOdS7kmnAgdWk5mhv.jpg",
      "id": 67744,
      "name": "MINDHUNTER",
      "original_language": "en",
      "original_name": "MINDHUNTER",
      "overview": "An agent in the FBI's Elite Serial Crime Unit develops profiling techniques as he pursues notorious serial killers and rapists.",
      "poster_path": "/fbKE87mojpIETWepSbD5Qt741fp.jpg",
      "media_type": "tv",
      "runtime": null,
      "genre_ids": [
        18,
        80
      ],
      "popularity": 163.001,
      "first_air_date": "2017-10-13",
      "vote_average": 8.073,
      "vote_count": 2230,
      "origin_country": [
        "US"
      ]
    },
    {
      "adult": false,
      "backdrop_path": "/gD830J0sf5gEeZvzkRVPdGxJmSR.jpg",
      "id": 69740,
      "name": "Ozark",
      "original_language": "en",
      "original_name": "Ozark",
      "overview": "A financial adviser drags his family from Chicago to the Missouri Ozarks, where he must launder $500 million in five years to appease a drug boss.",
      "poster_path": "/pCGyPVrI9Fzw6rE1Pvi4BIXF6ET.jpg",
      "media_type": "tv",
      "runtime": null,
      "genre_ids": [
        80,
        18
      ],
      "popularity": 102.048,
      "first_air_date": "2017-07-21",
      "vote_average": 8.224,
      "vote_count": 2087,
      "origin_country": [
        "US"
      ]
    },
    {
      "adult": false,
      "backdrop_path": "/zi40ANCqdvVqCN3q43g1hjdVCsp.jpg",
      "id": 1407,
      "name": "Homeland",
      "original_language": "en",
      "original_name": "Homeland",
      "overview": "CIA officer Carrie Mathison is tops in her field despite being bipolar, which makes her volatile and unpredictable. With the help of her long-time mentor Saul Berenson, Carrie fearlessly risks everything, including her personal well-being and even sanity, at every turn.",
      "poster_path": "/6GAvS2e6VIRsms9FpVt33PsCoEW.jpg",
      "media_type": "tv",
      "runtime": null,
      "genre_ids": [
        18,
        10768,
        80
      ],
      "popularity": 255.186,
      "first_air_date": "2011-10-02",
      "vote_average": 7.545,
      "vote_count": 2037,
      "origin_country": [
        "US"
      ]
    },
    {
      "adult": false,
      "backdrop_path": "/A5lVyejMsP5G7rAJBwU9ug3Wzou.jpg",
      "id": 1104,
      "name": "Mad Men",
      "original_language": "en",
      "original_name": "Mad Men",
      "overview": "Set in 1960-1970 New York, this sexy, stylized and provocative drama follows the lives of the ruthlessly competitive men and women of Madison Avenue advertising.",
      "poster_path": "/7v8iCNzKFpdlrCMcqCoJyn74Nsa.jpg",
      "media_type": "tv",
      "runtime": null,
      "genre_ids": [
        18
      ],
      "popularity": 246.356,
      "first_air_date": "2007-07-19",
      "vote_average": 8.104,
      "vote_count": 1089,
      "origin_country": [
        "US"
      ]
    },
    {
      "adult": false,
      "backdrop_path": "/l0qVZIpXtIo7km9u5Yqh0nKPOr5.jpg",
      "id": 1668,
      "name": "Friends",
      "original_language": "en",
      "original_name": "Friends",
      "overview": "Six young people from New York City, on their own and struggling to survive in the real world, find the companionship, comfort and support they get from each other to be the perfect antidote to the pressures of life.",
      "poster_path": "/2koX1xLkpTQM4IZebYvKysFW1Nh.jpg",
      "media_type": "tv",
      "runtime": null,
      "genre_ids": [
        35
      ],
      "popularity": 532.421,
      "first_air_date": "1994-09-22",
      "vote_average": 8.443,
      "vote_count": 7526,
      "origin_country": [
        "US"
      ]
    },
    {
      "adult": false,
      "backdrop_path": "/o36ITLqVgZZ4hY1V5aPZPqZzVRx.jpg",
      "id": 39852,
      "name": "The Sinner",
      "original_language": "en",
      "original_name": "The Sinner",
      "overview": "In a small New York town, a haunted detective hunts for answers about perplexing crimes while wrestling with his own demons.",
      "poster_path": "/rmibFGdqOe0kKKhPls0jVOdZCWw.jpg",
      "media_type": "tv",
      "runtime": null,
      "genre_ids": [
        80,
        18
      ],
      "popularity": 91.297,
      "first_air_date": "2017-08-02",
      "vote_average": 7.466,
      "vote_count": 964,
      "origin_country": [
        "US"
      ]
    },
    {
      "adult": false,
      "backdrop_path": "/hmLTIRtVyTHShJl2Wb8LHmvUgJm.jpg",
      "id": 19885,
      "name": "Sherlock",
      "original_language": "en",
      "original_name": "Sherlock",
      "overview": "A modern update finds the famous sleuth and his doctor partner solving crime in 21st century London.",
      "poster_path": "/7WTsnHkbA0FaG6R9twfFde0I9hl.jpg",
      "media_type": "tv",
      "runtime": null,
      "genre_ids": [
        80,
        18,
        9648
      ],
      "popularity": 123.458,
      "first_air_date": "2010-07-25",
      "vote_average": 8.525,
      "vote_count": 4978,
      "origin_country": [
        "GB"
      ]
    },
    {
      "adult": false,
      "backdrop_path": "/og0NmKvndLXQXCicBWd8GII1c17.jpg",
      "id": 80307,
      "name": "Bodyguard",
      "original_language": "en",
      "original_name": "Bodyguard",
      "overview": "A troubled war veteran is assigned to protect a controversial politician who may be the target of a terror plot.",
      "poster_path": "/5DUJTrHTRLHLCKWriPhdusQogAv.jpg",
      "media_type": "tv",
      "runtime": null,
      "genre_ids": [
        80,
        18,
        10768,
        99
      ],
      "popularity": 31.324,
      "first_air_date": "2018-08-26",
      "vote_average": 7.793,
      "vote_count": 775,
      "origin_country": [
        "GB"
      ]
    },
    {
      "adult": false,
      "backdrop_path": "/or0E36KfzJYZwqXeiCfm1JgepKF.jpg",
      "id": 37680,
      "name": "Suits",
      "original_language": "en",
      "original_name": "Suits",
      "overview": "While running from a drug deal gone bad, Mike Ross, a brilliant young college-dropout, slips into a job interview with one of New York City's best legal closers, Harvey Specter. Tired of cookie-cutter law school grads, Harvey takes a gamble by hiring Mike on the spot after he recognizes his raw talent and photographic memory.",
      "poster_path": "/vQiryp6LioFxQThywxbC6TuoDjy.jpg",
      "media_type": "tv",
      "runtime": null,
      "genre_ids": [
        18
      ],
      "popularity": 705.569,
      "first_air_date": "2011-06-23",
      "vote_average": 8.215,
      "vote_count": 4721,
      "origin_country": [
        "US"
      ]
    },
    {
      "adult": false,
      "backdrop_path": "/go5LNIFH9IdoSwv8j9cNyTk2uPU.jpg",
      "id": 63351,
      "name": "Narcos",
      "original_language": "en",
      "original_name": "Narcos",
      "overview": "A gritty chronicle of the war against Colombia's infamously violent and powerful drug cartels.",
      "poster_path": "/rTmal9fDbwh5F0waol2hq35U4ah.jpg",
      "media_type": "tv",
      "runtime": null,
      "genre_ids": [
        80,
        18,
        99
      ],
      "popularity": 127.559,
      "first_air_date": "2015-08-28",
      "vote_average": 8.012,
      "vote_count": 2621,
      "origin_country": [
        "US"
      ]
    },
    {
      "adult": false,
      "backdrop_path": "/s8J5PLjSiZW2Trr9nOCtTgzGiFt.jpg",
      "id": 1427,
      "name": "Broadchurch",
      "original_language": "en",
      "original_name": "Broadchurch",
      "overview": "The murder of a young boy in a small coastal town brings a media frenzy, which threatens to tear the community apart.",
      "poster_path": "/2NhBFUTg5KVBmGwafxtLwVdsqrr.jpg",
      "media_type": "tv",
      "runtime": null,
      "genre_ids": [
        80,
        18,
        9648
      ],
      "popularity": 35.951,
      "first_air_date": "2013-03-04",
      "vote_average": 7.951,
      "vote_count": 760,
      "origin_country": [
        "GB"
      ]
    },
    {
      "adult": false,
      "backdrop_path": "/78s4wDyITtvjMRHHn2Rk7IPCtcg.jpg",
      "id": 61986,
      "name": "Bloodline",
      "original_language": "en",
      "original_name": "Bloodline",
      "overview": "A dramatic thriller that explores the demons lurking beneath the surface of a contemporary American family. The Rayburns are hard-working pillars of their Florida Keys community. But when the black sheep son comes home for the 45th anniversary of his parents' hotel, he threatens to expose the Rayburns' dark secrets and shameful past, pushing his siblings to the limits of family loyalty.",
      "poster_path": "/uEaqgEjAShqrziUia4XBzvXXGXP.jpg",
      "media_type": "tv",
      "runtime": null,
      "genre_ids": [
        18
      ],
      "popularity": 34.335,
      "first_air_date": "2015-03-20",
      "vote_average": 7.2,
      "vote_count": 310,
      "origin_country": [
        "US"
      ]
    }
  ],
  "name": "Clone: Continue Watching",
  "page": 1,
  "poster_path": null,
  "total_pages": 1,
  "total_results": 12
} 

