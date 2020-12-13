import React from 'react';
import {
    Box,
    Heading,
    Text,
    Button,
    
} from "@chakra-ui/react"
import {Link} from 'react-router-dom'

const WorksCard = ({heading, text, buttonText,address}) => {
    let height = buttonText ? ['300px', null, null, '270px'] : ['270px', null, null, '240px']
    let JC = buttonText ? 'space-between' : 'space-around'
    return ( 
        <Box margin='20px' padding='30px' justifyContent={JC} boxShadow="2xl" height={height}  width={['270px', null, null, '300px']} d='flex' flexDir='column' alignItems='flex-start'>
            <Heading as="h3" fontWeight='600' letterSpacing='wide' textAlign='center' fontSize={["xl", "null", "1xl", "2xl"]} color="brand.bold" >
                {heading}
            </Heading>
            <Text textAlign='left' color='gray.700' fontSize="md">
                {text}
            </Text>
            {buttonText && <Button
                as={Link}
                to={address}
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
            </Button>}
        </Box>           
     );
}
 
export default WorksCard;