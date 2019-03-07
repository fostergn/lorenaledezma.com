import React from 'react'

const ProjectSingle = ({ name, date, description, image, external_image_url, video }) => (
  <div>
    <div>{name}</div>
    <div>{date}</div>
  </div>
)

export default ProjectSingle
