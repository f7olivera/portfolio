import { Box, Flex, Icon } from "@chakra-ui/react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import Link from "next/link";

const Contact = () => {
  return (
    <Box px={3} fontFamily='sen' id="contact">
      <Box fontSize='4xl' fontWeight='bold' color='white'>Get in touch</Box>

      <Flex mt={4} mb={8} justifyContent='center' gap={6}>
        <Link href='https://github.com/f7olivera'>
          <a>
            <Icon boxSize='2.5rem' as={AiFillGithub}/>
          </a>
        </Link>
        <Link href='https://www.linkedin.com/in/f7olivera/'>
          <a>
            <Icon boxSize='2.5rem' as={AiFillLinkedin}/>
          </a>
        </Link>
        <Link href='mailto:f7olivera@gmail.com'>
          <a>
            <Icon boxSize='2.5rem' as={MdEmail}/>
          </a>
        </Link>
      </Flex>
    </Box>
  );
}

export default Contact;
