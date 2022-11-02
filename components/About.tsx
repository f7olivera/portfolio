import { Box, Flex, Stack } from "@chakra-ui/react";

const About = () => {
  return (
    <Flex my={8} alignItems='center' justifyContent='space-between' px={3} fontFamily='sen'>
      <Stack>
        <Box fontSize='4xl' fontWeight='bold' textColor='white'>Facundo Olivera</Box>
        <Box mt={4} textColor='gray.200' fontSize='2xl'>
          Full Stack Developer
        </Box>
        <Box mt={4} textColor='gray.300' fontSize='lg'>
          Welcome to my portfolio! I'm a Computer Science student based in Buenos Aires, Argentina.<br/>
          Here you will find some of the projects I've been working on.
        </Box>
      </Stack>
    </Flex>
  );
}

export default About;
