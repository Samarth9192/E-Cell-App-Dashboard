import React from 'react'
import FavArtists from './Components/FavArtist'
import RecentPlay from './Components/RecentPlay'
import Charts from './Components/Charts'

function Dashboard() {
  return (
    <div className='bg-splblack mx-1 p-3 rounded-sm'>
<FavArtists/>
<RecentPlay/>
<Charts/>
</div>
  )
}

export default Dashboard