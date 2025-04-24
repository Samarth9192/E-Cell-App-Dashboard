import { Music, Play } from 'lucide-react';
import { artists } from '../data';
import { useState } from 'react';

function FavArtists() {

  const [IsHovered, setIsHovered] = useState(false)

  return (
    <div className="my-8 px-5">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-white font-quicksand ml-3">Favourite Artists</h2>
        <button className="text-sm text-purple-400 hover:text-purple-300 font-medium font-poppins cursor-pointer hover:underline">
          View All
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {artists.map((artist) => (

          <div
            key={artist.id} artist={artist}
            onMouseEnter={() => { setIsHovered(true) }}
            onMouseLeave={() => { setIsHovered(false) }}
            className={`bg-gray-800 rounded-xl shadow-sm p-4 
            ${IsHovered ? 'hover:shadow-md transition-shadow duration-200 cursor-pointer' : ''} 
            group overflow-hidden transition-all duration-300`}
          >

            <div className="text-center">
              <div className="relative mx-auto w-24 h-24 sm:w-28 sm:h-28 mb-3">
                <div className="rounded-full overflow-hidden w-full h-full">
                  <img
                    src={artist.image}
                    alt={artist.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />

                  <div className="absolute inset-0 z-10 flex items-center justify-center rounded-full transition-all duration-300 group-hover:bg-black/30">
                    <button className="opacity-0 group-hover:opacity-100 transition-opacity bg-white rounded-full p-2 shadow-lg z-20">
                      <Play size={18} className="text-purple-600 fill-current" />
                    </button>
                  </div>


                </div>
              </div>

              <h3 className="font-semibold text-white truncate">{artist.name}</h3>

              <div className="flex items-center justify-center text-xs text-gray-400 mt-1">
                <Music size={12} className="mr-1" />
                <span>{(artist.playCount)} plays</span>
              </div>
            </div>

          </div>

        ))}
      </div>
    </div>


  );
};

export default FavArtists;





{/* 
        <div className="mt-2 flex flex-wrap justify-center gap-1">
        {artist.genres.slice(0, 2).map((genre, index) => (
            <span 
            key={index}
            className="text-xs py-0.5 px-1.5 bg-gray-100 dark:bg-gray-700 rounded-full truncate max-w-full"
            >
            {genre}
            </span>
            ))}
            </div> */}