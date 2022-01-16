import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Button,
  ButtonGroup,
  Flex,
  Heading,
  Spacer,
  SimpleGrid,
  Container,
  useColorMode,
  Icon,
  Spinner,
  Divider,
  BeatLoader,
  Grid,
  GridItem,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  Link,
  Image,
  VStack,
  Code,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
// import img from './keenan2.JPG';
import { ExternalLinkIcon } from '@chakra-ui/icons';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <>
        <main>
          <Box maxWidth="900px" m="auto" pr="20px" pl="20px">
            <Box
              bg="rgb(86,130,3,.7)
"
              p="25px"
              mb="20px"
            ></Box>
            <Grid
              templateColumns={[
                'repeat(1, 1fr)',
                'repeat(1, 1fr)',
                'repeat(3, 1fr)',
                'repeat(3, 1fr)',
              ]}
              gap={20}
            >
              <GridItem colSpan={2} w="100%">
                <Heading pt="0px" align="top">
                  Keenan Matrix
                </Heading>
                <Divider mb="30px" />
                <Flex alignItems="center" justify="space-between">
                  <Text mb="10px" fontWeight="bold" fontSize="2xl">
                    Summary Statement
                  </Text>
                  <Box w="50%" h="20px" bg="rgb(86,130,3,.3)"></Box>
                </Flex>

                <Text mb="10px">
                  Self taught developer with a passion for Web3 development. I
                  have a background in benefit services in health and dental for
                  the Ontario Teachers. My web3 experience is in NFT's and
                  gaming on Avalanche and Polygon. The majority of my
                  development experience is in React, NextJs and Chakra UI.
                </Text>
                <Divider mb="30px" />

                <Flex alignItems="center" justify="space-between">
                  <Text fontSize="2xl" fontWeight="bold" mb="10px">
                    Web Developments
                  </Text>
                  <Box w="50%" h="20px" bg="rgb(86,130,3,.3)"></Box>
                </Flex>
                <Link href="https://christmasflakes.nft/" isExternal>
                  <Text fontWeight="bold">
                    Christmasflakes.nft <ExternalLinkIcon mx="2px" />
                  </Text>
                </Link>

                <UnorderedList mb="10px">
                  <ListItem>
                    A Minting Dapp for a Generative art collection of
                    Snowflakes. The SnowFlakes metadata usitlizes the animation
                    URL metadata property to create a snowflake partice
                    animation using HTML5 canvas.
                  </ListItem>
                  <ListItem>
                    The Snowflakes are ERC-721 tokens on Polygon Mainnet with a
                    maximum supply of 1111 and a limit of two free Snowflakes
                    per wallet.
                  </ListItem>
                  <ListItem>
                    Verified contract -{' '}
                    <Link
                      href="https://polygonscan.com/address/0x7EC7AcAF6e53e0B8a4fB8AC319fdd80958B38e03#code"
                      isExternal
                    >
                      PolyScan
                      <ExternalLinkIcon mx="2px" />
                    </Link>
                  </ListItem>
                </UnorderedList>
                <Link href="https://LittleGreens.ca" isExternal>
                  <Text fontWeight="bold">
                    LittleGreens.ca <ExternalLinkIcon mx="2px" />
                  </Text>
                </Link>
                <UnorderedList mb="10px">
                  <ListItem>
                    Small E commerce site for local contactless delivered
                    organic microgreens.
                  </ListItem>
                  <ListItem>
                    Built with NextJs, Chakra UI and stripe payment integration.
                  </ListItem>
                  <ListItem>Currently in proof of concept stage.</ListItem>
                </UnorderedList>
                <Link href="https://Nutritive.me" isExternal>
                  <Text fontWeight="bold">
                    Nutritive.me <ExternalLinkIcon mx="2px" />
                  </Text>
                </Link>

                <UnorderedList>
                  <ListItem>
                    A UI for viewing nutritional information for food from the
                    USDA. The Intent was to make the information more accessible
                    to a user.
                  </ListItem>
                  <ListItem>
                    The front end was built with NextJs Chakra UI
                  </ListItem>
                  <ListItem>
                    USDA information stored in local file and accessed via a
                    Fuse.JS
                  </ListItem>
                </UnorderedList>
              </GridItem>
              <GridItem colSpan={1} mt="15px">
                {/* <Image src={img}></Image> */}
                <Flex alignItems="center" justify="space-between" mt="20px">
                  <Text fontSize="2xl" fontWeight="bold" mb="10px">
                    Contact
                  </Text>
                  <Box w="50%" h="20px" bg="rgb(86,130,3,.3)"></Box>
                </Flex>
                <Flex>
                  <Text fontWeight="bold" pr="5px">
                    Address:
                  </Text>
                  <Text>Ontario Canada</Text>
                </Flex>
                <Flex>
                  <Text fontWeight="bold" pr="5px">
                    Email:
                  </Text>
                  <Text>MatrixWebDev@gmail.com</Text>
                </Flex>
                <Divider mt="5px" mb="30px" />
                <Flex alignItems="center" justify="space-between" mt="20px">
                  <Text fontSize="2xl" fontWeight="bold" mb="10px">
                    Tech Used
                  </Text>
                  <Box w="50%" h="20px" bg="rgb(86,130,3,.3)"></Box>
                </Flex>
                <UnorderedList mb="10px">
                  <ListItem>Solidity</ListItem>
                  <ListItem>Openzeppelin </ListItem>
                  <ListItem>HardHat & Remix</ListItem>
                  <ListItem>Moralis SDK</ListItem>
                  <ListItem>Web3 & EtherJs</ListItem>
                  <ListItem>NextJs</ListItem>
                  <ListItem>Chakra UI</ListItem>
                </UnorderedList>
                <Flex alignItems="center" justify="space-between" mt="20px">
                  <Text fontSize="2xl" fontWeight="bold" mb="10px">
                    Education
                  </Text>
                  <Box w="50%" h="20px" bg="rgb(86,130,3,.3)"></Box>
                </Flex>
                <Text fontWeight="bold">Web Fundamentals 2017 - </Text>
                <Text>Conestoga College</Text>
                <Flex alignItems="center" justify="space-between" mt="20px">
                  <Text fontSize="2xl" fontWeight="bold" mb="10px">
                    Employment
                  </Text>
                  <Box w="40%" h="20px" bg="rgb(86,130,3,.3)"></Box>
                </Flex>

                <Text display="inline" fontWeight="bold">
                  Ontario Teachers Insurance Plan -{' '}
                </Text>
                <Text display="inline">Benefit Services Representative</Text>

                <Divider />
              </GridItem>
            </Grid>
          </Box>
        </main>
      </>
    </ChakraProvider>
  );
}

export default App;
