import React from 'react'
import { Play, MoreHorizontal, Clock } from 'lucide-react';
import { RecentTracks } from '../data'
import { secTominsec } from '../function'

function RecentPlay() {
    return (
        <div className="mainContainer mt-10 my-8 px-5">

{/* headline */}
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-white font-quicksand ml-3">Recently Played</h2>
                <button className="text-sm text-purple-400 hover:text-purple-300 font-medium font-poppins cursor-pointer hover:underline">
                    See History
                </button>
            </div>

{/* container */}

            <div className='space-y-2'>
                {RecentTracks.map((RecentTrack) => (

// mapping                    
                    <div key={RecentTrack.id} RecentTrack={RecentTrack}
                    className='' >

                        <div className="flex items-center p-2 hover:bg-gray-700/50 rounded-lg transition-colors group">

                            <div className="w-10 h-10 flex-shrink-0 rounded overflow-hidden mr-3 relative group">
                                <img
                                    src={RecentTrack.albumCover}
                                    alt={RecentTrack.album}
                                    className="w-full h-full object-cover"
                                />

                                <div className="absolute inset-0 z-10 flex items-center justify-center rounded-full transition-all duration-300 group-hover:bg-black/30">
                                    <Play size={16} className="text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                            </div>

                            <div className="flex-1 min-w-0">
                                <h4 className="font-medium text-white truncate">{RecentTrack.title}</h4>
                                <p className="text-sm text-gray-400 truncate">{RecentTrack.artist}</p>
                            </div>

                            <div className="flex items-center text-sm text-gray-400 space-x-4">
                                <div className="hidden lg:flex items-center w-18 mx-2 ">
                                    <Clock size={14} className="mr-1" />
                                    <span>{secTominsec(RecentTrack.duration)}</span>
                                </div>

                                <div className="hidden md:block text-gray-400 w-25">
                                    {RecentTrack.lastPlayed}
                                </div>

                                <button className="opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-gray-700 rounded-full">
                                    <MoreHorizontal size={16} />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}


export default RecentPlay