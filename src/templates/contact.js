import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import '../styles/contact.css'

const Page = ({ data }) => {

  const { wordpressPage: page } = data

  const { email, phone } = page.acf

  return (
    <Layout>
      <div className="fullscreen">
        <article className="flex-center">
          <section className="contact__wrapper">
            <p>
              <span className="contact__label">e:</span>
              <span className="contact__value">{email}</span>
            </p>
            <p>
              <span className="contact__label">c:</span>
              <span className="contact__value">{phone}</span>
            </p>
          </section>
        </article>
      </div>
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
