import { Box, Flex, ListItem, UnorderedList } from "@chakra-ui/react";
import Project from "../Project";
import React from "react";
import Terminal from 'react-console-emulator';


const Wea = () => {
  const AnsiColors: {[key: string]: string} = {
    ['\\x1b[93;1m']: '<span style="color: yellow">',
    ['\\x1b[90m']: '<span style="color: gray">',
    ['\\x1b[37m']: '<span>',
    ['\\x1b[0m']: '</span>',
    ['\\x1b[34m']: '<span style="color: blue">',
    ['\\x1b[94m']: '<span style="color: lightblue">',
    ['\\x1b[95m']: '<span style="color: magenta">',
    ['\\x1b[97m']: '<span style="color: lightgray">',
    ['\\x1b[92m']: '<span style="color: lightgreen">',
    ['\\x1b[31m']: '<span style="color: red">',
    ['\\x1b[32m']: '<span style="color: green">',
  }
  const commands = {
    wea: {
      description: 'Echo a passed string.',
      usage: 'wea <string>',
      fn: async (...args: string[]) => {
        try {
          const url = `https://f7olivera-portfolio.herokuapp.com/wea/${args.join('_')}`;
          const response = await (await (await fetch(url)).json()).message;

          return response.replace(/\\x1b\[\d+;?\d?m/g, (ansiCode: string) => AnsiColors[ansiCode]).replaceAll('\\\\', "\\");
        } catch {
          return 'Failed to fetch.'
        }
      }
    }
  }

  React.useEffect(() => {
    const setPromptValue = () => {
      const terminaInput: HTMLInputElement | null = document.querySelector('input[name="react-console-emulator__input"]');
      if (terminaInput) {
        terminaInput.value = 'wea';
        terminaInput.spellcheck = false;
        terminaInput.focus();
      }
    }

    const mutationObserver = new MutationObserver(setPromptValue);
    // @ts-ignore
    mutationObserver.observe(document.querySelector('#project_wea'), {
      subtree: true,
      childList: true
    });
  }, []);

  return (
    <Project
      name='wea'
      description='A command-line tool to check the weather.'
      shortDescription='A command-line tool to check the weather.'
      url=''
      codeUrl='https://github.com/f7olivera/wea'
      imageSrc='/wea/wea.png'
      badges={['PYTHON']}>
      <Box fontWeight='bold' fontSize='xl'>Try it out!</Box>
      <Terminal
        dangerMode={true}
        promptLabelStyle={{ paddingTop: '0px' }}
        inputTextStyle={{ spellCheck: false }}
        style={{ maxHeight: '20rem', marginBottom: '1rem', backgroundColor: '#101010', whiteSpace: 'pre' }}
        messageStyle={{ fontSize: '0.85rem', lineHeight: '1.15rem' }}
        commands={commands}
        promptLabel={'$'}/>
      <Box fontWeight='bold' fontSize='xl'>Details</Box>
      <Flex flexDirection='column' gap={2} mb='1rem'>
        <Box>
          wea is an ASCII-decorated command-line program to get a weather report in your terminal, for any location and in
          multiple languages.
        </Box>
      </Flex>
      <Box fontWeight='bold' fontSize='xl'>Features</Box>
      <UnorderedList ms='2rem' mb='1rem'>
        <ListItem>Current weather report.</ListItem>
        <ListItem>Forecast for the next 5 days.</ListItem>
        <ListItem>Several weather conditions:
          <UnorderedList ms='2rem'>
            <ListItem>Temperature and apparent temperature.</ListItem>
            <ListItem>Wind direction and speed.</ListItem>
            <ListItem>Atmospheric pressure.</ListItem>
            <ListItem>Rainfall rate and probability of precipitation.</ListItem>
            <ListItem>Visibility distance.</ListItem>
          </UnorderedList>
        </ListItem>
        <ListItem>Metric and imperial unit system.</ListItem>
        <ListItem>Multilingual support.</ListItem>
      </UnorderedList>
    </Project>
  );
}

export default Wea;
