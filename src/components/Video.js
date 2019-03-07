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
      config={{
        vimeo: {
          preload: true,
          playerOptions: {
            background: false
          }
        },
        youtube: {
          preload: true,
          playerVars: {
            showinfo: 0,
            controls: 0,
            modestBranding: 0
          }
        },
      }}
    />
  </div>
)

export default Video
