import React from 'react'
import '../styles/image.css'
import Img from 'gatsby-image'
import classNames from 'classnames'

const Image = ({ isOverlay, image }) => {

  const wrapperClasses = classNames({
    'image__wrapper': true,
    'image__wrapper--overlay': isOverlay
  })

  return (
    <div className={wrapperClasses}>
      <Img className="image__content" fluid={image.localFile.childImageSharp.fluid} />
    </div>
  )
}

export default Image
