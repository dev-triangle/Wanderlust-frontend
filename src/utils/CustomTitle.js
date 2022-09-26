import React from 'react'
import { Helmet } from "react-helmet";

function CustomTitle({ title }) {
  return (
    <Helmet>
        <title>Wanderlust | {title}</title>
    </Helmet>
  )
}

export default CustomTitle