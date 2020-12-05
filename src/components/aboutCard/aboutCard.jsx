import React from 'react';
import {
    Flex,
    Image,
    Text,
    Heading
    
} from "@chakra-ui/react"


const AboutCard = ({img,heading,text}) => {
    return ( 
        <Flex flexDir='column' alignItems='center' p='20px' justifyContent='space-between'  bg="white" m='auto' w={['280px','300px']} height="270px" >
            <Image width='100px' src={img} alt='sign' />
            <Heading my={1} as="h4" color='brand.bold' size="md">
                {heading}
            </Heading>
            <Text fontSize='14px' textAlign='center' color='gray.700'>{ text }</Text>
        </Flex>
               
     );
}
 
export default AboutCard;