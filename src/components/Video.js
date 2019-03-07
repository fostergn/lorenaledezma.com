import React from 'react'
import '../styles/video.css'
import ReactPlayer from 'react-player'

const Video = ({ url }) => (
  <div className='player-wrapper'>
    <ReactPlayer
      className='react-player'
      url={url}
      width='100%'
      height='100%'
      controls={false}
    />
  </div>
)

export default Video
