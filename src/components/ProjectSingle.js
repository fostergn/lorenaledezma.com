import React from 'react'
import Video from './Video'
import '../styles/project.css'

const ProjectSingle = ({ name, date, description, image, external_image_url, video }) => {

  const asset = <Video url={video} />

  return (
    <div className="project__wrapper">
      <article className="project__description">
        <p>{name}</p>
        <p>{date}</p>
      </article>
      {asset}
    </div>
  )
}

export default ProjectSingle
