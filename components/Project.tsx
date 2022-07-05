import {
  Badge, Box, Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, Flex, IconButton, useDisclosure
} from "@chakra-ui/react";
import { ReactNode } from "react";
import Image from "next/image";
import { FiExternalLink } from "react-icons/fi";
import Link from "next/link";

const CustomBadge = ({ fontSize, children }: {fontSize: string, children: ReactNode}) => (
  <Badge fontSize={fontSize} variant='outline' color='gray.200'>
    {children}
  </Badge>
)

interface IProjectPreview {
  name: string,
  description: string,
  imageSrc: string,
  badges: string[],
}

const ProjectPreview = ({ name, description, imageSrc, badges }: IProjectPreview) => (
  <>
    <Box width={{ base: '100%', md: '55%' }}>
      <Image
        layout='responsive'
        width={8}
        height={5}
        style={{ borderRadius: '5px', }}
        src={`/images/projects${imageSrc}`} alt={name}/>
    </Box>
    <Flex justifyContent='space-between' alignItems='center' fontWeight='md'
          flexDirection='column' width={{ base: '100%', md: '45%' }}>
      <Flex flexDirection='column' alignSelf='start' width='100%'>
        <Box fontSize='3xl'>{name}</Box>
        <Flex gap={2} mb='0.5rem' flexWrap='wrap'>
          {badges.map((badge) => (<CustomBadge fontSize='0.85rem' key={badge}>{badge}</CustomBadge>))}
        </Flex>
        <Box fontSize='lg'>{description}</Box>
      </Flex>
      <Button
        width='min-content'
        bg='zinc.800'
        color='white'
        _groupHover={{ bg: 'gray.700' }}
        transition='150ms'
        className="cursor-pointer rounded-md px-4 py-[0.10rem] text-xl text-gray-700 bg-zinc-800 text-white duration-100 group-hover:bg-gray-700">
        View
      </Button>
    </Flex>
  </>
);

interface Props {
  name: string,
  description: string,
  shortDescription: string,
  url: string,
  codeUrl: string,
  imageSrc: string,
  badges: string[],
  children?: ReactNode,
}

const Project = ({ name, description, shortDescription, url, codeUrl, imageSrc, badges, children }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure()


  return (
    <>
      <Flex width='100%'
            minWidth='min-content'
            cursor='pointer'
            justifyContent='center'
            backgroundColor='zinc.800.bluer'
            borderRadius='lg'
            boxShadow='rgba(0, 0, 0, 0.35) 0px 5px 15px;'
            padding={3}
            color='white'
            role="group"
            gap='1rem'
            flexDirection={{ base: 'column', md: 'row' }} onClick={onOpen} id={`project_${name}`}>
        <ProjectPreview
          name={name}
          description={description}
          imageSrc={imageSrc}
          badges={badges}/>
      </Flex>
      <Drawer placement='bottom' onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay/>
        <DrawerContent fontFamily='sen' height='70%' backgroundColor='zinc.800.bluer'>
          {/*<DrawerCloseButton/>*/}
          <DrawerHeader borderBottomWidth='0.1px'>
            <Box width='100%'>
              <Flex lineHeight='initial' flexWrap='wrap' width='100%' justifyContent='space-between' alignItems='center'
                    fontSize='4xl' mb={2}
                    color='white'>
                {url ?
                  <Link href={url} target='_blank'>
                    <Box width='fit-content' minWidth='max-content'>
                      {name} <IconButton variant='unstyled' size='xs' me={4} as={FiExternalLink}
                                         aria-label='Live demo'/>
                    </Box>
                  </Link> : name}
                <Button backgroundColor='gray.600' _hover={{ backgroundColor: 'gray.500' }} minWidth='fit-content'>
                  <Link href={codeUrl} target='_blank'>
                    <Box fontSize='xl' mb={1} color='white'>
                      Source code
                    </Box>
                  </Link>
                </Button>
              </Flex>
            </Box>

            <Flex gap={2} mb={2} fontSize='20rem' flexWrap='wrap'>
              {badges.map((badge) => (<CustomBadge fontSize='sm' key={badge}>{badge}</CustomBadge>))}
            </Flex>
            <Box color='white' fontSize='xl'>{shortDescription}</Box>

          </DrawerHeader>
          <DrawerBody>
            <Flex flexDirection='column'>
              {children}
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default Project;
