import {
  Badge, Box, Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, Flex, IconButton, useDisclosure
} from "@chakra-ui/react";
import { ReactNode } from "react";
import Image from "next/image";
import { FiExternalLink } from "react-icons/fi";
import Link from "next/link";

const CustomBadge = ({ fontSize, children }: {fontSize: string | {base: string, md: string}, children: ReactNode}) => (
  <Badge fontSize={fontSize} variant='outline' color='gray.200'>
    {children}
  </Badge>
)

interface IProjectPreview {
  name: string,
  description: string,
  badges: string[],
}

const ProjectPreview = ({ name, description, badges }: IProjectPreview) => (
  <>
    <Box width={{ base: '100%', md: '55%' }}>
      <Image
        layout='responsive'
        width={8}
        height={5}
        style={{ borderRadius: '5px', }}
        alt={name}
        src={`/images/projects/${name.toLowerCase()}/${name.toLowerCase()}.png`}
        blurDataURL={`/images/projects/${name.toLowerCase()}/blur/${name.toLowerCase()}.png`}
        placeholder="blur"/>
    </Box>
    <Flex justifyContent='space-between' alignItems='center' fontWeight='md'
          flexDirection='column' width={{ base: '100%', md: '45%' }}>
      <Flex flexDirection='column' alignSelf='start' width='100%'>
        <Box fontSize='3xl'>{name}</Box>
        <Flex gap={2} mb='0.5rem' flexWrap='wrap'>
          {badges.map((badge) => (<CustomBadge fontSize='0.85rem' key={badge}>{badge}</CustomBadge>))}
        </Flex>
        <Box color='gray.200' fontSize='lg'>{description}</Box>
      </Flex>
      <Button
        width='min-content'
        backgroundColor='gray.700'
        _groupHover={{ bg: 'gray.600' }}
        color='white'
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
  badges: string[],
  children?: ReactNode,
}

const Project = ({ name, description, shortDescription, url, codeUrl, badges, children }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

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
            gap={{ base: '0.25rem', md: '1rem' }}
            flexDirection={{ base: 'column', md: 'row' }} onClick={onOpen} id={`project_${name}`}>
        <ProjectPreview
          name={name}
          description={description}
          badges={badges}/>
      </Flex>
      <Drawer placement='bottom' onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay/>
        <DrawerContent fontFamily='sen' height={{ base: '80%', md: '75%' }} backgroundColor='zinc.800.bluer'>
          <DrawerHeader borderBottomWidth='1px' borderColor='gray.400'>
            <Box width='100%'>
              <Flex lineHeight='initial' flexWrap='wrap' width='100%' justifyContent='space-between' alignItems='center'
                    fontSize={{ base: '3xl', md: '4xl' }} mb={2}
                    color='white'>
                {url ?
                  <Link href={url} target='_blank'>
                    <a>
                      <Flex width='fit-content' alignItems='center' minWidth='max-content'>
                        <Box>{name}</Box>
                        <Box as='span' display='flex' alignItems='center' fontSize={{ base: '1.5rem', md: '1.85rem' }}
                             mx={{ base: '0.25rem', md: '0.25rem' }}>
                          <IconButton variant='unstyled' size='1em' me={4} as={FiExternalLink} aria-label='Live demo'/>
                        </Box>
                      </Flex>
                    </a>
                  </Link> : name}
                <Button backgroundColor='gray.700' _hover={{ bg: 'gray.600' }} padding={{ base: '0.5rem', md: '1rem' }}
                        minWidth='fit-content'>
                  <Link href={codeUrl} target='_blank'>
                    <a>
                      <Box fontSize={{ base: 'md', md: 'xl' }} color='white'>
                        Source code
                      </Box>
                    </a>
                  </Link>
                </Button>
              </Flex>
            </Box>

            <Flex gap={2} mb={2} flexWrap='wrap'>
              {badges.map((badge) => (
                <CustomBadge fontSize={{ base: 'xs', md: 'sm' }} key={badge}>{badge}</CustomBadge>))}
            </Flex>
            <Box color='gray.200' fontSize={{ base: 'md', md: 'xl' }}>{shortDescription}</Box>

          </DrawerHeader>
          <DrawerBody>
            <Flex flexDirection='column' onScroll={(e) => console.log(e.target)} mb='1rem'>
              {children}
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default Project;
