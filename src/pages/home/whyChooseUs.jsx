import React from 'react';
import { Box, Heading, Flex, Image,Text} from "@chakra-ui/react"
import Dollar from '../../assets/dollar.png'
import shake from '../../assets/shake.png'
import shield from '../../assets/shield.png'
const Why = () => {
    return ( 
        <Box my={10}>
            <Heading as="h3" letterSpacing='wide' textAlign='center' fontSize={["2xl", "null", "3xl", "4xl"]} my={7}>
                Why Choose Us
            </Heading>
            <Flex maxW="1200px" mx='auto' direction={["column", "null", "row", "row"]} px={[5,null,null,null,15]} align='center' justifyContent='space-between'>
                <Box d='flex' flexDir='column' alignItems='center' w='315px' mb={30}>
                    <Image src={Dollar} alt='dollar' />
                    {/* <Heading my={2} as="h2" color='brand.bold' size="lg">
                    Affordable
                    </Heading> */}
                    <Text textAlign='center' color='GrayText' fontSize="md">
                        We deliver high quality and affordable properties and
                        also educate prospective clients about current market
                        trends using our blog so as to make better purchasing
                        decisions.
                    </Text>
                </Box>
                {/* <Box d='flex' flexDir='column' alignItems='center' w='315px' mb={30}>
                    <Image src={shake} alt='dollar' />
                    <Heading my={2} as="h2" color='brand.bold' size="lg">
                    Affordable
                    </Heading>
                    <Text textAlign='center' color='GrayText' fontSize="md">Some vague text about how using our service helps people and some other stuff. TBH this is just to fill up space, content would come much later</Text>
                </Box>
                <Box d='flex' flexDir='column' alignItems='center' w='315px' mb={30}>
                    <Image src={shield} alt='dollar' />
                    <Heading my={2} as="h2" color='brand.bold' size="lg">
                    Affordable
                    </Heading>
                    <Text textAlign='center' color='GrayText' fontSize="md">Some vague text about how using our service helps people and some other stuff. TBH this is just to fill up space, content would come much later</Text>
                </Box> */}
            </Flex>
        </Box>
     );
}
 
export default Why;