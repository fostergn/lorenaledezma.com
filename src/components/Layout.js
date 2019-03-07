import React from 'react'
import Helmet from 'react-helmet'
import Navbar from './Navbar'
import '../styles/global.css'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Lorena Ledezma | Fashion" />
    <Navbar />
    <div>{children}</div>
  </div>
)

export default TemplateWrapper
