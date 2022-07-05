import { Box, VStack } from "@chakra-ui/react";
import Chess from "./projects/Chess";
import Wea from "./projects/Wea";
import What2watch from "./projects/What2watch";


const Projects = () => {
  return (
    <Box my={8} py={8} px={3} fontFamily='sen' id="projects">
      <Box fontSize='4xl' fontWeight='bold' color='white'>
        Some of my projects
      </Box>
      <VStack margin='auto' maxWidth='60rem' gap={4} my={4}>
        <Chess/>
        <What2watch/>
        <Wea/>
      </VStack>
    </Box>
  );
}

export default Projects;
