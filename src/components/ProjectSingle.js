import React from 'react'
import Video from './Video'

const ProjectSingle = ({ name, date, description, image, external_image_url, video }) => {

  return (
    <div>
      <div>{name}</div>
      <div>{date}</div>
      <Video url={video} />
    </div>
  )
}

export default ProjectSingle
