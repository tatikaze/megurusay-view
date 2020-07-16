import React, { useState } from "react"
import { Link } from "gatsby"
import axios from 'axios'
import { Button } from '@material-ui/core'

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"


const IndexPage = () => {

  const [comment, setComment] = useState('');
  const fetch = () => {
    axios.get('http://say.tatikaze.com/meguru').then(res => console.log(res)) 
  }

  return (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Button onClick={fetch}>fetch</Button>
    <h1>{comment}</h1>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
  )
}

export default IndexPage
