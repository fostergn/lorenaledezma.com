import React from 'react'
import '../styles/video.css'
import ReactPlayer from 'react-player'

const videoConfig = {
  controls: false,
  vimeo: {
    preload: true,
    playerOptions: {
      sidedock: false,
      controls: false,
      title: false,
      byline: false
    }
  },
  youtube: {
    preload: true,
    embedOptions: {
      controls: 0,
      modestBranding: 0
    }
  }
};

const Video = ({ url, handleVideoChange }) => (
  <div className='player-wrapper'>
    <ReactPlayer
      className='react-player'
      url={url}
      width='100%'
      height='100%'
      controls={false}
      config={videoConfig}
      onStart={() => handleVideoChange(true)}
      onPlay={() => handleVideoChange(true)}
      onPause={() => handleVideoChange(false)}
      onError={() => handleVideoChange(false)}
      onEnded={() => handleVideoChange(false)}
    />
  </div>
)

export default Video
