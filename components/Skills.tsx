import { Box, Flex } from "@chakra-ui/react";
import { BsArrowRightShort } from "react-icons/bs";

interface SkillProps {
  name: string,
  skillType: string
}

const Skill = ({ name, skillType }: SkillProps) => (
  <Flex alignItems='center' textColor='slate.300' borderBottom='1px' mb={1} borderColor='gray.500' py={1}>
    <BsArrowRightShort size="30"/>
    <Box color='white'>{name}</Box>
    <Box textAlign='end'>&nbsp;as my {skillType}</Box>
  </Flex>
);

const Skills = () => {
  return (
    <Box py={16} px={3} fontFamily='sen' color='white' id="skills">
      <Box fontSize='4xl' fontWeight='bold' color='white'>
        Skills
      </Box>

      <Flex flexDirection='column' fontSize='1.125rem' fontWeight='medium' my={8}
            className="md:text-xl custom:text-lg">
        <Skill name='TypeScript' skillType='Frontend Language'/>
        <Skill name='Next.js' skillType='Frontend Framework'/>
        <Skill name='Chakra UI' skillType='Component Library'/>
        <Skill name='Python' skillType='Backend Language'/>
        <Skill name='Django' skillType='Backend Framework'/>
      </Flex>

      <Flex flexWrap='wrap' fontSize='lg' fontWeight='medium' color='slate.300'>
        ...more skills include&nbsp;
        <Box color='white'>JavaScript</Box>,&nbsp;
        <Box color='white'>React</Box>,&nbsp;
        <Box color='white'>React</Box>,&nbsp;
        <Box color='white'>FastAPI</Box>,&nbsp;
        <Box color='white'>Cypress</Box>&nbsp;
      </Flex>
    </Box>
  );
}

export default Skills;
