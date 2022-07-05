import type { NextPage } from 'next'
import Head from 'next/head'
import { Box } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import React from 'react'


const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Facundo Olivera</title>
        <meta name="description" content="Generated by create next app"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <Box as='main' px={{ base: 2, sm: 8, md: 16, lg: 32, xl: 64 }}>
        <Navbar/>
        <About/>
        <Skills/>
        <Projects/>
        <Contact/>
      </Box>
    </div>
  )
}

export default Home
