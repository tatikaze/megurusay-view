import React, { useState, useEffect } from "react"
import axios from 'axios'
import { Button } from '@material-ui/core'

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({data}) => {
  const [comment, setComment] = useState('');
  useEffect(() => { fetch() }, []);
	
  const fetch = () => {
    axios.get('http://say.tatikaze.com/meguru').then(res => setComment(res.data.message))
  }

  return (
  <Layout>
    <SEO title="Home" />
    <Button variant='contained' color='primary' onClick={fetch}>fetch</Button>
    <h2>{comment}</h2>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <img src="https://pbs.twimg.com/profile_images/510517617941942272/0lcG3UaN_400x400.png" alt="meguru" />
    </div>
  </Layout>
  )
}

export default IndexPage
