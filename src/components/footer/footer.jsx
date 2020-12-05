import React from 'react';
import { Box, Heading, Flex, Image, Text } from "@chakra-ui/react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp,faYoutube,faTwitter,faInstagram } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return ( 
        <Box background='gray.800' p={5} pt={20}>
            <Flex maxW="1200px" mx='auto' direction={["column", "null", "row", "row"]} px={[5,null,null,null,15]} align='flex-start' justifyContent='space-between'>
                <Box d='flex' flexDir='column' alignItems='flex-start' w={['250px',null,'300',null,'350px']} mb={30}>
                    <Heading mb={2} as="h5" color='gray.100' size="md">
                        About TopVille  Homes
                    </Heading>
                    <Box width="40%" bg='white' height={1} mb={4}/>
                    <Text textAlign='left' color='gray.300' fontSize={["sm","md"]}>
                        Each PR should be specific and isolated to the issue you're trying to fix.
                        Please do not stack features/chores/refactors/enhancements in one PR. Describe your feature/implementation in the PR.
                        If you're unsure its useful or if it is a major change, please open an issue first and get feedback.
                    </Text>
                </Box>
                <Box flex=".5" d='flex' flexDir='column' alignItems='flex-start' mb={30}>
                    <Heading mb={2} as="h5" color='gray.100' size="md">
                        Navigations
                    </Heading>
                    <Box width="40%" bg='white' height={1} mb={4}/>
                    <Flex direction="row">
                        <Flex direction="column" mr={[15, null, null, null, 20]}>
                            <a href="/">
                                <Text textAlign='left' color='gray.300' fontSize="md">Home</Text>
                            </a>
                            <a href="/">
                                <Text textAlign='left' color='gray.300' fontSize="md">Buy</Text>
                            </a>
                            <a href="/">
                                <Text textAlign='left' color='gray.300' fontSize="md">Rent</Text>
                            </a>
                            <a href="/">
                                <Text textAlign='left' color='gray.300' fontSize="md">Properties</Text>
                            </a>
                        </Flex>
                        <Flex direction="column">
                            <a href="/">
                                <Text textAlign='left' color='gray.300' fontSize="md">Services</Text>
                            </a>
                            <a href="/">
                                <Text textAlign='left' color='gray.300' fontSize="md">Contact</Text>
                            </a>
                        </Flex>
                    </Flex>
                </Box>
                <Box d='flex' flexDir='column' w={['250px',null,null,null,'150px']} alignItems='flex-start' mb={30}>
                    <Heading mb={2} as="h5" color='gray.100' size="md">
                        Follow Us
                    </Heading>
                    <Box width="40%" bg='white' height={1} mb={4}/>
                    <Flex direction="row" w={['150px',null,null,null,'100px']} justifyContent="space-between" >
                        <a href="/"><FontAwesomeIcon color="white" icon={faWhatsapp} size='2x' /></a>
                        <a href="/"><FontAwesomeIcon color="white" icon={faYoutube} size='2x' /></a>
                        <a href="/"><FontAwesomeIcon color="white" icon={faTwitter}  size='2x'/></a>
                    </Flex>
                </Box>
            </Flex>
        </Box>
     );
}
 
export default Footer;