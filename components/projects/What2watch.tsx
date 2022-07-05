import { Box, Flex, ListItem, UnorderedList } from "@chakra-ui/react";
import Project from "../Project";
import ImageWithZoom from "../ImageWithZoom";
import { useScrollBoost } from "react-scrollbooster";
import React from "react";

const What2watch = () => {
  const [viewport] = useScrollBoost({
    direction: "horizontal",
    scrollMode: "transform",
  });

  return (
    <Project
      name='what2watch'
      description='The classic movie app.'
      shortDescription='The classic movie app.'
      url='https://what2watch-k.vercel.app'
      codeUrl='https://github.com/f7olivera/what2watch'
      imageSrc='/what2watch/what2watch.png'
      badges={['NEXTJS', 'TYPESCRIPT', 'CHAKRA UI', 'REACT QUERY']}>
      <Flex cursor='pointer' width='100%' overflow='hidden' mb='1rem' ref={viewport}>
        <Flex>
          <ImageWithZoom imageSrc='/images/projects/what2watch/what2watch.png'
                         blurDataURL='/images/projects/what2watch/what2watch.png'/>
          <ImageWithZoom imageSrc='/images/projects/what2watch/genre.png'
                         blurDataURL='/images/projects/what2watch/genre.png'/>
          <ImageWithZoom imageSrc='/images/projects/what2watch/movie.png'
                         blurDataURL='/images/projects/what2watch/movie.png'/>
        </Flex>
      </Flex>
      <Box fontWeight='bold' fontSize='xl'>Details</Box>
      <Flex flexDirection='column' gap={2} mb='1rem'>
        <Box>I needed a simple project to learn Next.js, so I made this.</Box>
        <Box>I used Chakra UI for the frontend and React Query to handle fetch requests to The Movie Database.</Box>
      </Flex>
      <Box fontWeight='bold' fontSize='xl'>Features</Box>
      <UnorderedList ms='2rem' mb='1rem'>
        <ListItem>Find movies and TV shows.</ListItem>
        <ListItem>Filter titles by genre and rating.</ListItem>
        <ListItem>Get titles information and trailers.</ListItem>
        <ListItem>Discover similar movies.</ListItem>
      </UnorderedList>
    </Project>
  );
}

export default What2watch;
