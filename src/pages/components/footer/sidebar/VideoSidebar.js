import React, { useState } from 'react'
import './VideoSidebar.css'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatIcon from '@mui/icons-material/Chat';
import ShareIcon from '@mui/icons-material/Share';


function VideoSidebar({likes, messages, shares}) {

    const [Liked, setLiked] = useState(false)

    function handleLike() {
        setLiked(! Liked)
    }

  return (
    <div className='videoSide'>
        <div className='videoSide_options' onClick={handleLike}>
            { Liked ? <FavoriteIcon fontSize='large'/> : <FavoriteBorderIcon fontSize='large'/>}
            <p>{ Liked ? likes + 1 : likes}</p>
        </div>

        <div className='videoSide_options'>
            <ChatIcon fontSize='large'/>
            <p>{messages}</p>
        </div>

        <div className='videoSide_options'>
            <ShareIcon fontSize='large'/>
            <p>{shares}</p>
        </div>
    </div>
  )
}

export default VideoSidebar