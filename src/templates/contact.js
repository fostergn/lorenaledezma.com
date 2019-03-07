import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

const Page = ({ data }) => {

  const { wordpressPage: page } = data

  const { email, phone } = page.acf

  return (
    <Layout>
      email: {email}
      phone: {phone}
    </Layout>
  )
}

Page.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Page

export const pageQuery = graphql`
  query ContactPageById($id: String!) {
    wordpressPage(id: { eq: $id }) {
      title
      content,
      acf {
        email,
        phone
      }
    }
  }
`
