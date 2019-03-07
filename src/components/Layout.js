import React from 'react'
import Helmet from 'react-helmet'
import Navbar from './Navbar'
import '../styles/global.css'

const TemplateWrapper = ({ children }) => (
  <main>
    <Helmet title="Lorena Ledezma | Fashion" />
    <Navbar />
    <div className="body">{children}</div>
  </main>
)

export default TemplateWrapper
