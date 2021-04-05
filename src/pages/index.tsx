import React from 'react'
import Head from 'next/head'

import Camera from '../assets/camera.svg'
import { Container } from './../styles/pages/Home'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>HomePage</title>
      </Head>

      <Camera />
      <h1>ReactJS Structure</h1>
      <p>A ReactJS + Next.js structure made by Rocketseat</p>
    </Container>
  )
}

export default Home
