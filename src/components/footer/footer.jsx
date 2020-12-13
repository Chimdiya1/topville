import React from 'react';
import { Box, Heading, Flex, Image, Text } from "@chakra-ui/react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp,faYoutube,faTwitter,faInstagram,faFacebook } from '@fortawesome/free-brands-svg-icons'
import {Link} from 'react-router-dom'
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
                        TopVille is a full-service Real estate brokerage(agency) 
                        that uses modern technology to reach out to wide range of 
                        prospective buyers, sellers and leasers. 
                        TopVille specializes in acquiring,owning,managing,selling and 
                        leasing of all kinds of Landed properties. 
                        Our foremost priority is client’s comfort and Satisfaction.
                    </Text>
                </Box>
                <Box flex=".5" d='flex' flexDir='column' alignItems='flex-start' mb={30}>
                    <Heading mb={2} as="h5" color='gray.100' size="md">
                        Navigations
                    </Heading>
                    <Box width="40%" bg='white' height={1} mb={4}/>
                    <Flex direction="row">
                        <Flex direction="column" mr={[15, null, null, null, 20]}>
                            <Link to="/">
                                <Text textAlign='left' color='gray.300' fontSize="md">Home</Text>
                            </Link>
                            <Link to="/listings">
                                <Text textAlign='left' color='gray.300' fontSize="md">Buy</Text>
                            </Link>
                            <Link to="/listings">
                                <Text textAlign='left' color='gray.300' fontSize="md">Rent</Text>
                            </Link>
                            <Link to="/listings">
                                <Text textAlign='left' color='gray.300' fontSize="md">Properties</Text>
                            </Link>
                        </Flex>
                        <Flex direction="column">
                            <Link to="/">
                                <Text textAlign='left' color='gray.300' fontSize="md">Services</Text>
                            </Link>
                            <Link to="/">
                                <Text textAlign='left' color='gray.300' fontSize="md">Contact</Text>
                            </Link>
                        </Flex>
                    </Flex>
                </Box>
                <Box d='flex' flexDir='column' w={['250px',null,null,null,'150px']} alignItems='flex-start' mb={30}>
                    <Heading mb={2} as="h5" color='gray.100' size="md">
                        Follow Us
                    </Heading>
                    <Box width="40%" bg='white' height={1} mb={4}/>
                    <Flex direction="row" w='200px' justifyContent="space-between" >
                        <a href="/"><FontAwesomeIcon color="white" icon={faWhatsapp} size='2x' /></a>
                        <a href="/"><FontAwesomeIcon color="white" icon={faYoutube} size='2x' /></a>
                        <a href="/"><FontAwesomeIcon color="white" icon={faTwitter}  size='2x'/></a>
                        <a href="/"><FontAwesomeIcon color="white" icon={faInstagram}  size='2x'/></a>
                        <a href="/"><FontAwesomeIcon color="white" icon={faFacebook}  size='2x'/></a>
                    </Flex>
                </Box>
            </Flex>
        </Box>
     );
}
 
export default Footer;