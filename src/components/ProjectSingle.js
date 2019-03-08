import React, { useState } from 'react';
import Video from './Video'
import Image from './Image'
import isEmpty from 'lodash.isempty'
import classNames from 'classnames'
import '../styles/project.css';

const ProjectSingle = ({ name, date, description, image, video }) => {

  const [isPlaying, setIsPlaying] = useState(false);

  const handleVideoChange = (isPlaying) => {

    setIsPlaying(isPlaying)
  };

  const hasVideo = !isEmpty(video)

  const hasImage = !isEmpty(image)

  const VideoAsset = hasVideo ? <Video handleVideoChange={handleVideoChange} url={video} /> : ``

  const ImageAsset = hasImage ? <Image isOverlay={hasVideo} image={image} /> : ``

  const wrapperClasses = classNames({
    'project__wrapper': true,
    'project__wrapper--playing': isPlaying
  })

  return (
    <div className={wrapperClasses}>
      <article className="project__description">
        <p class="title">{name}</p>
        <p class="sub-info">{date}</p>
        <p class="sub-info">{description}</p>
      </article>
      {VideoAsset}
      {ImageAsset}
    </div>
  )
}

export default ProjectSingle
