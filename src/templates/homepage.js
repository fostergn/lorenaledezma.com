import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import ProjectSingle from '../components/ProjectSingle'

const Page = ({ data }) => {

  const { wordpressPage: page } = data

  const { projects } = page.acf

  const projectsList = projects.map(project => (
    <ProjectSingle
      key={project.name}
      name={project.name}
      date={project.date}
      description={project.description}
      image={project.image}
      external_image_url={project.external_image_url}
      video={project.video}
    />)
  )

  return (
    <Layout>
      {projectsList}
    </Layout>
  )
}

Page.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Page

export const pageQuery = graphql`
  query HomePageById($id: String!) {
    wordpressPage(id: { eq: $id }) {
      acf {
        projects {
          name,
          date,
          description,
          image,
          external_image_url,
          video
        }
      }
    }
  }
`
