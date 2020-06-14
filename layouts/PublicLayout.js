import React from 'react'

import Navbar from '../components/Navbar'

const PublicLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  )
}

export default PublicLayout
