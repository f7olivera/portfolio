import { Box, Flex, ListItem, UnorderedList } from "@chakra-ui/react";
import Project from "../Project";
import ImageWithZoom from "../ImageWithZoom";
import { useScrollBoost } from "react-scrollbooster";

const Chess = () => {
  const [viewport] = useScrollBoost({
    direction: "horizontal",
    scrollMode: "transform",
  });

  return (
    <Project
      name='Chess'
      shortDescription='A website to play chess online.'
      description='A website to play chess online, edit and analyze board positions with a chess engine.'
      url='https://drj-chess.herokuapp.com'
      codeUrl='https://github.com/f7olivera/chess'
      imageSrc='/chess/chess.png'
      badges={['DJANGO', 'REACTJS', 'REDUX', 'BOOTSTRAP', 'DJANGO-CHANNELS', 'SQLITE']}>
      <Flex cursor='pointer' width='100%' overflow='hidden' mb='1rem' ref={viewport}>
        <Flex>
          <ImageWithZoom imageSrc='/images/projects/chess/chess.png'
                         blurDataURL='/images/projects/chess/chess.png'/>
          <ImageWithZoom imageSrc='/images/projects/chess/analysis.png'
                         blurDataURL='/images/projects/chess/analysis.png'/>
          <ImageWithZoom imageSrc='/images/projects/chess/create.png'
                         blurDataURL='/images/projects/chess/create.png'/>
          <ImageWithZoom imageSrc='/images/projects/chess/games.png'
                         blurDataURL='/images/projects/chess/games.png'/>
        </Flex>
      </Flex>
      <Box fontWeight='bold' fontSize='xl'>Details</Box>
      <Flex flexDirection='column' gap={2} mb='1rem'>
        <Box>
          A website to play chess online, edit and analyze board positions with a chess
          engine.
        </Box>
        <Box>
          I used Django for the backend and ReactJS + Redux for the frontend.<br/>
          A WebSocket connection built with Django Channels is used to handle real time chess matches.
        </Box>
        <Box>
          It includes a login/register system, games history and a chat room for each match.
        </Box>
      </Flex>
      <Box fontWeight='bold' fontSize='xl'>Features</Box>
      <UnorderedList ms='2rem'>
        <ListItem>Online real-time chess matches.</ListItem>
        <ListItem>Play against Stockfish on multiple difficulty levels.</ListItem>
        <ListItem>Edit, analyze and play from any position.</ListItem>
        <ListItem>Login/Register system.</ListItem>
        <ListItem>In-game text chat.</ListItem>
      </UnorderedList>
    </Project>
  );
}

export default Chess;
