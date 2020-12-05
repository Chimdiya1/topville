import React from 'react';
import {
    Box,
    Heading,
    Text,
    Button,
    
} from "@chakra-ui/react"

const WorksCard = ({heading, text, buttonText}) => {
    return ( 
        <Box margin='20px' padding='30px' justifyContent='space-between' boxShadow="2xl" height={['330px', null, null, '300px']}  width={['270px', null, null, '300px']} d='flex' flexDir='column' alignItems='flex-start'>
            <Heading as="h3" fontWeight='600' letterSpacing='wide' textAlign='center' fontSize={["xl", "null", "1xl", "2xl"]} color="brand.bold" >
                {heading}
            </Heading>
            <Text textAlign='left' color='gray.700' fontSize="md">
                {text}
            </Text>
            <Button
                backgroundColor='brand.primary'
                color='white'
                width='200px'
                height='50px'
                fontSize='20px'
                borderRadius='0'
                size='md'
                _hover={{ bg: "brand.secondary" }}
            >
                {buttonText}
            </Button>
        </Box>           
     );
}
 
export default WorksCard;