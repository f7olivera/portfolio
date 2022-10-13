import { Box, Flex, Link } from "@chakra-ui/react";

interface Props {
  text: string;
  url: string;
}

const TextLink = ({ text, url }: Props) => {
  return (
    <Link href={url}>
      <Box cursor='pointer'
           borderRadius='md'
           px='4'
           py='0.1rem'
           fontSize='xl'
           color='gray.200'
           transitionDuration='100'
           _hover={{ backgroundColor: 'zinc.800' }}>
        {text}
      </Box>
    </Link>
  );
};

const Navbar = () => {
  return (
    <Box as='header' fontFamily='jost' py={8}>
      <Flex flexWrap='wrap'>
        <TextLink text="Skills" url="/#skills"/>
        <TextLink text="Projects" url="/#projects"/>
        <TextLink text="Contact" url="/#contact"/>
        <TextLink text="Resume" url="/resume"/>
      </Flex>
    </Box>
  );
}

export default Navbar;
