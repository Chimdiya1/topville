import React from 'react';
import { Link } from 'react-router-dom'
import {
    Flex,
    Heading,
    Box,
    Button,
    
} from "@chakra-ui/react"
function page404() {
    return (
        <Flex flexDir='column' className="notfound-container">
            <Box height='80px' w='100%' backgroundColor='black'/>
            <Flex mt="24px" h="40vh" textAlign='center' flexDir='column'  alignItems="center" className="content">
                <Heading fontSize="7rem" as='h1' color="#f70415">404</Heading>
                <Heading as="h3" fontSize="1.4rem">something's missing</Heading>
                <Heading color="#f52020ab" >The link or page you are looking for cannot be found!</Heading>
                <Link to="/"> <p><span id="arrow">&#8592;</span> Back to the Homepage</p> </Link>
            </Flex>
        </Flex>
    )
}

export default page404
